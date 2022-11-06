import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form, Avatar } from "./styles";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

import { Link } from "react-router-dom";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";

import { api } from "../../services/api.js";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  async function handleUpdate() {
    const newUser = {
      name,
      email,
      oldPassword,
      password: newPassword,
    };

    const updatedUser = Object.assign(user, newUser);

    await updateProfile({ updatedUser, avatarFile });
    navigate("/");
  }

  function handleAvatarChange(e) {
    const file = e.target.files[0];
    setAvatarFile(file);
    const imgPreview = URL.createObjectURL(file);
    setAvatar(imgPreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="User Picture" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleAvatarChange} />
          </label>
        </Avatar>

        <Input
          placeholder="Login"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Old Password"
          type="password"
          icon={FiLock}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          placeholder="New Password"
          type="password"
          icon={FiLock}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}

import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api.js";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder;
  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />
        <div>
          <span>Bem Vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}

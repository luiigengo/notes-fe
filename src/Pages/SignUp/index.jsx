import { Container, Form, ImageDiv } from "./styles";

import { FiUser, FiMail, FiLock } from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

import { useState } from "react";

import { api } from "../../services/api.js";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }

    api
      .post("/users/createUser", { name, email, password })

      .then(() => {
        alert("Usuário cadastrado com sucesso");
        navigate("/");
      })

      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container>
      <ImageDiv />

      <Form>
        <h1>Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links</p>

        <h2>Criar Conta</h2>

        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
          onChange={(ev) => setName(ev.target.value)}
        />

        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          onChange={(ev) => setEmail(ev.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={(ev) => setPassword(ev.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp}></Button>

        <Link to="/">Voltar para o Login</Link>
      </Form>
    </Container>
  );
}

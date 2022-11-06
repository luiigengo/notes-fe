import { Container, Form, ImageDiv } from "./styles";

import { Link } from "react-router-dom";

import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

import { useAuth } from "../../hooks/auth.jsx";

import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={handleSignIn}></Button>

        <Link to="/register">Criar Conta</Link>
      </Form>
      <ImageDiv />
    </Container>
  );
}

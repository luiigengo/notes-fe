import { useState } from "react";

import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { TextArea } from "../../Components/TextArea";
import { NoteItem } from "../../Components/NoteItem";
import { Section } from "../../Components/Section";
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Container, Form } from "./styles";

import { api } from "../../services/api";

export function New() {
  const { user } = useAuth();
  const user_id = user.id;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleLinkAddition() {
    setLinks((prev) => [...prev, newLink]);
    setNewLink("");
  }

  function handleLinkRemoval(deletedItem) {
    setLinks((prev) => prev.filter((link) => link !== deletedItem));
  }

  function handleTagAddition() {
    setTags((prev) => [...prev, newTag]);
    setNewTag("");
  }

  function handleTagRemoval(deletedTag) {
    setTags((prev) => prev.filter((tag) => tag !== deletedTag));
  }

  async function handleFormSubmission() {
    if (!title) {
      return alert("Digite o título da nota");
    }

    if (newLink) {
      return alert(
        "Você digitou o link, porém, não o adicionou,favor apagar o campo ou adicionar o link."
      );
    }

    if (newTag) {
      return alert(
        "Você digitou a tag, porém, não a adicionou,favor apagar o campo ou adicionar a tag"
      );
    }

    await api.post(`/notes/createNote/${user_id}`, {
      title,
      description,
      tags,
      links,
    });
    alert("Nota criada com sucesso");
    navigate("/");
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input
            placeholder="Titulo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Observações"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {links.map((eachLink, index) => {
              return (
                <NoteItem
                  key={String(index)}
                  value={eachLink}
                  // onChange={(e) => setNewLink(e.target.value)}
                  onClick={() => {
                    handleLinkRemoval(eachLink);
                  }}
                />
              );
            })}
            <NoteItem
              isNew
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleLinkAddition}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((eachTag, index) => {
                return (
                  <NoteItem
                    key={String(index)}
                    value={eachTag}
                    onClick={() => {
                      handleTagRemoval(eachTag);
                    }}
                  />
                );
              })}
              <NoteItem
                isNew
                placeholder="Nova Tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleTagAddition}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleFormSubmission}></Button>
        </Form>
      </main>
    </Container>
  );
}

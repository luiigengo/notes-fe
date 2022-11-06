import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Section } from "../../Components/Section";
import { Note } from "../../Components/Note";
import { ButtonText } from "../../Components/ButtonText";

import { FiPlus, FiSearch } from "react-icons/fi";

export function Home() {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [notes, setNotes] = useState([]);

  const { user } = useAuth();
  const user_id = user.id;

  const navigate = useNavigate();

  function handleTagSelection(tagName) {
    if (tagName === "all") {
      return setSelectedTags([]);
    }

    const tagAlreadySelected = selectedTags.includes(tagName);
    if (tagAlreadySelected) {
      const filteredTags = selectedTags.filter((tags) => tags !== tagName);
      setSelectedTags(filteredTags);
    } else {
      setSelectedTags((preV) => [...preV, tagName]);
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTag() {
      const response = await api.get(`/tags/getTags/${user_id}`);
      setTags(response.data);
    }
    fetchTag();
  }, []);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get(
        `/notes/getUserNotes?user_id=${user_id}&title=${search}&tags=${selectedTags}`
      );
      setNotes(response.data);
    }
    fetchTags();
  }, [selectedTags, search]);

  return (
    <Container>
      <Brand>
        <h1>Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            onClick={() => handleTagSelection("all")}
            title="Todos"
            isActive={selectedTags.length === 0}
          />
        </li>

        {tags &&
          tags.map((tag) => {
            return (
              <li key={String(tag.id)}>
                <ButtonText
                  onClick={() => {
                    handleTagSelection(tag.name);
                  }}
                  title={tag.name}
                  isActive={selectedTags.includes(tag.name)}
                />
              </li>
            );
          })}
      </Menu>
      <Search>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
        />
      </Search>
      <Content>
        <Section title="My Notes">
          {notes.map((eachNote) => {
            return (
              <Note
                key={String(eachNote.id)}
                data={eachNote}
                onClick={() => {
                  handleDetails(eachNote.id);
                }}
              ></Note>
            );
          })}
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}

import { Container, Links, Content } from "./styles";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { Header } from "../../Components/Header";
import { Section } from "../../Components/Section";
import { Tags } from "../../Components/Tags";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  const handleRemoval = async () => {
    const confirmation = window.confirm(
      "Você realmente deseja deletar essa nota ?"
    );
    if (confirmation) {
      await api.delete(`/notes/deleteNote/${params.id}`);
      navigate("/");
    }
  };

  useEffect(() => {
    const fetchNote = async () => {
      const response = await api.get(`/notes/getNote/${params.id}`);
      setData(response.data);
    };
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText
              onClick={handleRemoval}
              title="Excluir nota"
            ></ButtonText>

            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tags key={tag.id} title={tag.name} />
                ))}
              </Section>
            )}
            <Button title="Voltar" onClick={handleReturn} />
          </Content>
        </main>
      )}
    </Container>
  );
}

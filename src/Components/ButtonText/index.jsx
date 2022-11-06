import { Container } from "./styles";

export function ButtonText({ title, isActive, ...rest }) {
  return (
    <Container isActive={isActive} type="button" {...rest}>
      {title}
    </Container>
  );
}

import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 5.5rem;
  border: 0;
  padding: 0 2rem;
  margin-top: 3rem;
  border-radius: 1rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;

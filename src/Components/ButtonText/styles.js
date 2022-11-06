import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.ORANGE : theme.COLORS.WHITE};
`;

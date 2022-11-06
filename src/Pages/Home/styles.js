import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-style: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Menu = styled.ul`
  grid-area: menu;

  > li {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 1rem;
  }

  > li a {
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    margin: 3rem auto 0;

    &:disabled {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;

export const Search = styled.div`
  grid-area: search;
  padding: 6.4rem 6.4rem 0;
`;

export const Content = styled.div`
  grid-area: content;
  padding: 6.4rem 6.4rem 0;
  overflow-y: auto;
`;

export const NewNote = styled(Link)`
  grid-area: newnote;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    margin-right: 0.8rem;
  }
`;

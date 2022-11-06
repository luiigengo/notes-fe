import styled from "styled-components";

export const Container = styled.section`
  margin: 5.5rem 0 2.5rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 1rem;
    font-size: 2rem;
    font-weight: 400;
  }
`;

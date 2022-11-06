import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "content";

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  max-width: 55rem;
  margin: 4rem auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.6rem;

    > a {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;

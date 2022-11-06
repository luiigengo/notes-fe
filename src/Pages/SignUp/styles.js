import styled from "styled-components";
import bgImage from "../../assets/BGRS9.png";

export const Container = styled.div`
  /* width: 100%; */
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 2.4rem;
    margin: 5rem 0;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 10rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const ImageDiv = styled.div`
  flex: 1;
  background: url(${bgImage}) no-repeat center;
  background-size: cover;
`;

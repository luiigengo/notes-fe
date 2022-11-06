import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 14rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 12.4rem;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2.4rem;
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: -15rem auto 0;
  text-align: center;

  > div:nth-child(4) {
    margin-top: 2rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
    margin-bottom: 2rem;
  }

  > label {
    width: 4rem;
    height: 4rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    > svg {
      width: 2rem;
      height: 2rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`;

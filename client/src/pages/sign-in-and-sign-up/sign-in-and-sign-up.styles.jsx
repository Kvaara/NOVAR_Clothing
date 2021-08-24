import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  // width: 950px;
  display: flex;
  justify-content: space-evenly;
  margin: 40px auto;
  gap: 20px;

  button {
    white-space: nowrap;
  }

  @media screen and (max-width: 800px) {
    position: relative;
    top: -75px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    transform: scale(0.8);
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: fit-content;
  transform: scale(0.9);
  transition: 200ms ease-in-out;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
    transform: scale(0.5);
    position: relative;
    top: -20px;

    $:hover {
      transform: unset;
    }
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 175%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;

  div:not(:last-child),
  a {
    border-bottom: 1px solid #000;
    padding: 0;
    margin: 0 15px;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
    font-size: 15px;
    div,
    a {
      padding: 0;
      margin: 0 5px !important;
    }
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
`;

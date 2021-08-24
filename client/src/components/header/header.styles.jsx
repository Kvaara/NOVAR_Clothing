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

  &:hover {
    transform: scale(1);
  }

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
    transform: scale(0.6);
    position: relative;
    top: -20px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 175%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: fit-content;
  transform: scale(0.9);
  transition: 200ms ease-in-out;

  &:hover {
    transform: scale(1);
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 175%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
`;

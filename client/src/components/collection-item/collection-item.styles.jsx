import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component.jsx";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  .image {
    border-radius: 15px;
    border: 1px solid black;
    transition: border 100ms ease-in-out;
  }

  &:hover {
    box-shadow: inset 0px -6px 0px black;

    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 240px;
  display: none;
  font-size: 18px;
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  transition: 40ms ease-in-out;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 22px;
`;

export const NameSpan = styled.span`
  width: 90%;
  font-size: 23px;
`;

export const PriceSpan = styled.span`
  width: 10%;
  font-size: 23px;
`;

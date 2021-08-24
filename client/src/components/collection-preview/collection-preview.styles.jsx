import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;

    h1 {
      margin-right: auto;
      margin-left: 10px;
    }
  }
`;

export const TitleH1 = styled.h1`
  font-size: 28px;
  margin-bottom: 18px;
  width: 22vw;
  cursor: pointer;
  padding: 5px;
  border-left: 5px solid black;

  transition: 150ms ease-in-out;

  &:hover {
    border-left: 5px solid grey;
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;

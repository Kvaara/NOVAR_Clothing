import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 60%;
    height: 100%;
  }
`;

export const Span = styled.span`
  width: 23%;
  font-size: 23px;
  font-weight: bold;
`;

export const QuantitySpanContainer = styled.span`
  width: 23%;
  font-size: 23px;
  display: flex;
`;

export const ArrowContainer = styled.div`
  user-select: none;
  cursor: pointer;
  transition: 100ms ease-in-out;
  transform: scale(0.8);

  &:hover {
    transform: scale(1.2);
  }
`;

export const ValueSpan = styled.span`
  margin: 0 10px;
  font-weight: bolder;
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
  user-select: none;
  transform: scale(1.2);
  transition: 100ms ease-in-out;

  &:hover {
    transform: scale(1.5);
  }
`;

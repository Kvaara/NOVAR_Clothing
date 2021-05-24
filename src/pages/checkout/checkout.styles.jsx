import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 83vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 30px;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  font-size: 25px;
`;

export const CheckoutHeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  font-size: 28px;

  &:last-child {
    width: 8%;
  }
`;

export const CheckoutTotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const TestWarningContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  border-left: 6px solid red;
  background-color: rgba(255, 0, 0, 0.212);
  border-top-right-radius: 25px;
  width: 63vh;

  span {
    font-size: 31px;
    color: red;
  }
`;

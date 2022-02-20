import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  background-color: hsl(216, 50%, 16%);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  height: fit-content;
`;

export const Screen = styled.div`
  background: hsl(217, 54%, 11%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  padding: 20px;
  font-family: 'Outfit', sans-serif;
`;

export const Image = styled.img`
  width: 250px;
  border-radius: 10px;
`;

export const Details = styled.div`
  width: 250px;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 20px;
  color: hsl(178, 100%, 50%);
`;

export const Text = styled.p`
  color: hsl(215, 51%, 70%);
  font-weight: 300;
  font-size: 14px;
`;
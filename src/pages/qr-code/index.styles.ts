import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  background-color: #FFF;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  height: fit-content;
`;

export const Screen = styled.div`
  background: hsl(212, 45%, 89%);
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
  padding: 10px;
`;

export const TextWrapper = styled.div`
  max-width: 200px;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`;

export const Title = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: hsl(218, 44%, 22%);
  text-align: center;
`;

export const Description = styled.p`
  font-family: 'Outfit', sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: hsl(220, 15%, 55%);
  text-align: center;
`;
import styled from "styled-components";
import { ReactComponent as IconETH } from "../../../assets/images/nft-card/icon-ethereum.svg"
import { ReactComponent as IconClock } from "../../../assets/images/nft-card/icon-clock.svg"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
`;

export const Price = styled.div`
  color: hsl(178, 100%, 50%);
  font-weight: 600;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
`;

export const StyledETH = styled(IconETH)`
  margin-right: 5px;
`;

export const Time = styled.div`
  color: hsl(215, 51%, 70%);
  font-weight: 400;
  display: flex;
  align-items: center;
`;

export const StyledClock = styled(IconClock)`
  margin-right: 5px;
`;
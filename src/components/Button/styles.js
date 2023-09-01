import { styled } from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  padding-block: 1.2rem;
  border-radius: .3rem;

  width: 100%;

  border: none;
  background: ${({ theme, isclear }) => isclear ? theme.COLORS.TOMATO_400 : theme.COLORS.TOMATO_100};
 
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > svg {
    font-size: 2rem;
  }

  > p {
    font-size: ${({ isbiggerfont }) => (isbiggerfont ? "1.4rem" : ".94rem")};
    font-weight: 500;
  }

  &.dark {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
`;
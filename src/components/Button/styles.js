import { styled } from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  padding: 1rem 4.3rem;
  border-radius: .3rem;

  width: 100%;

  border: none;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > svg {
    font-size: 2rem;
  }
  > p {
    font-size: ${({ isBiggerFont }) => (isBiggerFont ? "1.4rem" : ".94rem")};
    font-weight: 500;
  }
`;
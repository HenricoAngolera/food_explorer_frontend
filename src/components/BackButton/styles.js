import { styled } from "styled-components";

export const Container = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  font-size: 2.4rem;
  font-weight: 500;
`;
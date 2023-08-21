import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  > label {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  padding: 1.2rem 1.4rem;
  border-radius: .5rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  
  > svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > input {
    width: 100%;
    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.6rem;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
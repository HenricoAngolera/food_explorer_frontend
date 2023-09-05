import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  > .admin {
    color: ${({ theme }) => theme.COLORS.CAKE_GREEN};
    font-weight: normal;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.2rem;
  }

  > img {
    ${({ isbiggersize }) => isbiggersize ? "width: 4.4rem;" : ""}
  }

  > p {
    ${({ isbiggersize }) => isbiggersize ? "font-size: 3.7rem; font-weight: 700;" : ""}
    font-family: ${({ theme, isbiggersize }) => isbiggersize ? theme.FONTS.ROBOTO : ""}
  }
`;

import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: ${({ admin }) => admin ? "start" : "center"};
  justify-content: center;
  gap: .8rem;

  width: 100%;

  .admin {
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
    font-family: ${({ theme, isbiggersize }) => isbiggersize ? theme.FONTS.ROBOTO : ""};
  }

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    /* flex-direction: column; */
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`

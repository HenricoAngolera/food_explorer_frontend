import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: ${({ admin }) => admin ? "start" : "center"};
  justify-content: center;
  gap: .8rem;

  font-weight: 700;

  width: 100%;

  font-family: ${({ theme }) => theme.FONTS.ROBOTO};

  cursor: pointer;

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
    ${({ isbiggersize }) => isbiggersize ? "font-size: 3.7rem;" : ""}
    font-family: ${({ theme, isbiggersize }) => isbiggersize ? theme.FONTS.ROBOTO : ""};
  }

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    ${({ isbiggersize }) => isbiggersize ? "font-size: 4.2rem;" : ""}
    gap: 1rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`

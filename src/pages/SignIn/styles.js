import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 15.8rem;

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    margin-block: auto;

    display: flex;
    justify-content: space-around;
    align-items: center;

  }
`;

export const ContentBox = styled.div`
  display: grid;
  row-gap: 3.2rem;

  padding-inline: 5.3rem;
  margin-top: 7.3rem;

  > h2 {
    display: none;

    font-size: 3.2rem;
    font-weight: 500;
  }

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    width: 47.6rem;
    padding: 6.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.6rem;

    > h2 {
      display: flex;
      justify-content: center;
    }
  }
`;
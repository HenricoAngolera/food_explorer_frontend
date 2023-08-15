import { styled } from "styled-components";

export const Container = styled.div`
  grid-area: footer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: ${({ theme }) => theme.FONTS.ROBOTO};

  padding-inline: 2.7rem;

  background: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const DarkLogo = styled.div`
  display: flex;
  gap: .6rem;

  > img {
    width: 2rem;
  }
`;

export const Copyright = styled.p`
  font-family: ${({ theme }) => theme.FONTS.DM_SANS};
  font-size: 1.2rem;
  text-align: right;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.LIGHT_700};
`;



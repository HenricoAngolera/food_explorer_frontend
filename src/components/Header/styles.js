import { styled } from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 11.4rem;

  display: flex;
  justify-content: ${({ isopened }) => (isopened ? "" : "space-between")};
  align-items: center;
  ${({ isopened }) => (isopened ? "gap: 1.6rem;" : "")}  

  padding: 5.6rem 2.8rem 2.4rem;

  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  font-weight: bold;
  font-size: 2.1rem;

  background: ${({ theme }) => theme.COLORS.DARK_700};

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: ${({ theme }) => theme.FONTS.ROBOT};
    font-size: 2.1rem;
    font-weight: 400;
  }
`;

export const Menu = styled.button`
  border: none;
  background: none;

  
  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: ${({ isopened }) => (isopened ? "1.8rem" : "3.0rem")};

    ${({ isopened }) => (isopened ? "height: 1.8rem;" : "")}
  }
`;

export const Requests = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.0rem;
  }
`;


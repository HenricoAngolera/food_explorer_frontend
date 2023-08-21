import { styled } from "styled-components";

export const Container = styled.div`
  width: 21rem;
  height: 29.2rem;
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 0.8rem;

  position: relative;
`;

export const IconButton = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  > svg {
    font-size: 2.4rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  width: 100%;
  height: 100%;

  text-align: center;

  > img {
    width: 8.8rem;
    height: 8.8rem;
  }

  > h3 {
    width: 100%;
    font-size: 1.4rem;
    font-weight: 500;
  }

  > span {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};

    color: ${({ theme }) => theme.COLORS.CAKE_GREEN};
  }
`;

export const Buttons = styled.div`
  width: 18.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

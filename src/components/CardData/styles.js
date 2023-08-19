import { styled } from "styled-components";

export const Container = styled.div`
  width: 21rem;
  height: 29.2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 0.8rem;

  position: relative;
`;

export const Buttons = styled.div`
  width: 18.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

export const IconButton = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  text-align: center;

  > img {
    width: 8.8rem;
    height: 8.8rem;
    margin-top: 2.4rem;

  }

  > h3 {
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
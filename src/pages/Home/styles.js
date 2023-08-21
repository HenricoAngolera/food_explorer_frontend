import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;

  grid-template-areas: 
    "header"
    "content"
    "footer"
  ;
`;

export const Content = styled.div`
  grid-area: content;
`;

export const HomeMessage = styled.section`
  margin: 1.5rem 1.6rem 0 .6rem;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    width: 37.6rem;
    height: 10rem;

    margin: 2.3rem 0 0 3rem;

    border-radius: .2rem;
    background: ${({ theme }) => theme.COLORS.GRADIENT_200};

    position: absolute;
    z-index: -1;
  }

  img {
    width: 19.1rem;
  }
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  transform: translateX(-1rem);
  margin-top: 3.6rem;
  
  h1 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.68rem;
  }
`;

export const Sections = styled.div`
  margin-top: 6.2rem;
  margin-left: 2.4rem;
`;

export const Cards = styled.div`
  display: flex;
  gap: 1.6rem;

  width: 40.4rem;
  overflow-x: auto;
`;
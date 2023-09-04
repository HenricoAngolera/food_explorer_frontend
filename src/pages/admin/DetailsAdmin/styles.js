import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto;

  grid-template-areas: 
    "header"
    "content"
  ;
`;

export const Content = styled.div`
  grid-area: content;

  padding: 1.6rem 5.6rem 3.3rem;

`;

export const Tags = styled.div`
  padding-inline: 2.4rem;

  margin-bottom: 4.8rem;

  display: flex;
  gap: 2.4rem;
  flex-wrap: wrap;
`;

export const Main = styled.div`
  text-align: center;

  > img {
    width: 26rem;
    margin-block: 1.6rem;
  }

  > h1 {
    font-size: 2.7rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > p {
    font-size: 1.6rem;
    margin-block: 2.4rem;
  }
`;

export const Scroll = styled.div`
  overflow-y: auto;
`
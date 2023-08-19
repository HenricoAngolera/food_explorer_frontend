import { styled } from "styled-components";

export const Container = styled.section`
  margin-bottom: 2.4rem;
  > h2 {
    margin-bottom: 2.4rem;

    font-size: 1.8rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;
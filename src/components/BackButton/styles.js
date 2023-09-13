import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  border: none;
  background: none;

  display: flex;
  align-items: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: ${({ issmall }) => (issmall ? "2.2rem" : "3.2rem")};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-size: ${({ issmall }) => (issmall ? "1.6rem" : "2.4rem")};
    font-weight: 500;
  }

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    > svg {
      font-size: 3.2rem;
    }
    
    > p {
      font-weight: 700;
      font-size: 2.4rem;
    }
  }
`;

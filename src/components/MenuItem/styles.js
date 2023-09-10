import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 100%;
  padding: 1rem;
  border: none;

  text-align: left;
  
  background: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

  > h2 {
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

`;
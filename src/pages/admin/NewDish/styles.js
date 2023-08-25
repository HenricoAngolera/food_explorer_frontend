import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;

  grid-template-areas: 
    "header"
    "form"
    "footer"
  ;

  label {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const SelectImage = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > input {
    display: none;
  }

  > label:last-child {
    padding: 1.2rem 3.2rem;
    border-radius: .5rem;

    display: flex;
    align-items: center;
    gap: .8rem;

    font-weight: 500;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    > svg {
      font-size: 2.4rem;
    }
  }
`;

export const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const IngredientsList = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;

  padding: .8rem;
  border-radius: .8rem;

  background: ${({ theme }) => theme.COLORS.DARK_800};
`
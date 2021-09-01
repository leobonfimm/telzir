import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
`;

export const Header = styled.div`
  text-align: center;
  max-width: 543px;
  margin: 0 auto;

  > p {
    margin-top: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 2rem;
  align-items: stretch;
  justify-content: center;
  padding: 0 2rem;
  gap: 1rem;
`;

export const ContainerPlan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;

  border: 1px solid #e5e5e5;

  > h2 {
    margin: 1.3rem 0;
  }

  > h4 {
    margin: 1rem 0;
    text-align: center;
    font-weight: 400;
  }

  > strong {
    margin-bottom: 0.5rem;
  }

  strong.customPlanDescription {
    height: 40px;
    max-width: 138px;
    text-align: center;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #666666;

    > svg {
      color: #27a807;
    }
  }

  span + span {
    margin-top: 0.5rem;
  }

  > a {
    margin-top: 1rem;
    border: 1px solid #ab49ce;
    border-radius: 10px;
    color: #ab49ce;
    font-weight: 900;
    height: 40px;
    width: 143px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      text-decoration: underline;
    }
  }
`;

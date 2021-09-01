import styled from "styled-components";

export const Container = styled.div`
  background: #ffe8d3;
  padding: 4rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const ContentText = styled.div`
  max-width: 300px;

  > h1 {
    font-weight: 500;
    font-size: 40px;
  }

  > p {
    margin-top: 1rem;
    color: #666666;
    font-size: 18px;
  }
`;

export const CalculationContainer = styled.section`
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  margin: 0 auto;

  display: grid;
  grid-template:
    "from to time"
    "plan plan plan"
    "total total total"
    "button button button";

  .from {
    grid-area: from;
  }

  .to {
    grid-area: to;
  }

  .time {
    grid-area: time;
  }

  .containerButton {
    grid-area: button;
  }

  .from,
  .to,
  .time {
    min-width: 176px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid #e5e5e5;

    > span {
      text-transform: uppercase;
    }

    > select {
      flex: 1;
      border: none;
      background-color: transparent;
    }
  }

  .plan {
    grid-area: plan;
    padding: 1rem;
    border-bottom: 1px solid #e5e5e5;

    > span {
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
  }

  .total {
    grid-area: total;
    max-width: 466px;
    width: 100%;
    margin: 0 auto;

    font-weight: 700;
    font-size: 14px;
    padding: 1.5rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:last-child) {
      border-bottom: 1px solid #e5e5e5;
    }
  }

  .containerButton {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    > button {
      width: 302px;
      background: #9c49ce;
      height: 48px;
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      border: none;
      border-radius: 8px;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  border-bottom: 1px solid #e5e5ee;

  > img {
    margin: 0 auto;
  }
`;

export const ContainerLink = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #ab49ce;

  > a {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-weight: 400;
    font-size: 32px;
  }

  > button {
    width: 302px;
    height: 56px;
    background: #9c49ce;
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    margin: 4rem 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const ContainerPersonalData = styled.div`
  margin-top: 3rem;
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  border-bottom: 1px solid #e5e5ee;

  .containerInputs {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      > input {
        height: 40px;
        width: 24.625rem;
        border-radius: 8px;
        padding: 0 1rem;
        border: 1px solid #e5e5e5;

        &:focus {
          outline: 0;
        }
      }
    }
  }
`;

export const BillingAddressData = styled.div`
  margin-top: 3rem;
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  .containerInputs {
    max-width: 900px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    > a {
      color: #ab49ce;
      margin-top: 1rem;

      &:hover {
        text-decoration: underline;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .cep {
        width: 202px;
      }

      .address {
        width: 394px;
      }

      .number {
        width: 137px;
      }

      .complement {
        width: 182px;
      }

      .city {
        width: 308px;
      }

      .state {
        width: 57px;
      }

      > input {
        height: 40px;
        border-radius: 8px;
        padding: 0 1rem;
        border: 1px solid #e5e5e5;

        &:focus {
          outline: 0;
        }
      }
    }
  }
`;

export const HiringDetails = styled.div`
  width: 100%;
  padding: 3rem;
  background: #ffe8d3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  > h2 {
    font-weight: 400;
    color: #000000;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    span {
      color: #666666;
    }

    strong {
      > span {
        font-weight: 400;
      }
    }
  }
`;

export const ContainerPayment = styled.div`
  width: 100%;

  > h2 {
    text-align: center;
    margin: 2rem 0;
  }

  div.nameCard {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > input {
      width: 100%;
      height: 40px;
      border-radius: 8px;
      padding: 0 1rem;
      border: 1px solid #e5e5e5;

      &:focus {
        outline: 0;
      }
    }
  }
`;

export const CreditData = styled.div`
  margin-top: 2rem;
  width: 100%;

  display: flex;
  flex-direction: column;

  div.numberCard {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #e5e5e5;
    border-radius: 8px 8px 0 0;
    padding: 0 1rem;

    > input {
      width: 100%;
      height: 40px;
      border: none;

      &:focus {
        outline: 0;
      }
    }

    > img {
      width: 120px;
      height: 30px;
    }
  }
`;

export const DidataSecurityExpirationv = styled.div`
  display: flex;

  .expirationDate {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #e5e5e5;
    border-radius: 0 0 0 8px;
    padding: 0 1rem;

    > input {
      height: 40px;
      border: none;

      &:focus {
        outline: 0;
      }
    }
  }

  .securityCode {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e5e5e5;
    border-radius: 0 0 8px 0;
    padding: 0 1rem;

    > input {
      height: 40px;
      border: none;

      &:focus {
        outline: 0;
      }
    }

    > img {
      width: 24px;
      height: 17px;
    }
  }
`;

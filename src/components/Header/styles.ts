import styled from "styled-components";

export const Container = styled.header`
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
`;

export const ContainerNav = styled.nav`
  list-style: none;
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 40px;

  li {
    a {
      &:hover {
        text-decoration: underline;
      }
    }

    > button {
      border-radius: 10px;
      border: none;
      color: #fff;
      background-color: #ab49ce;
      width: 143px;
      height: 40px;
      font-weight: 900;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;

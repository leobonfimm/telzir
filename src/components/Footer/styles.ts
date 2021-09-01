import styled from "styled-components";

export const Container = styled.div`
  background: #ffe8d3;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1278px;
  width: 100%;
`;

export const FooterData = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  gap: 6rem;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h2 {
    font-weight: 900;
    font-size: 18px;
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  background-color: #cbb7a5;
  height: 1px;

  margin: 2.2rem 0 2rem 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

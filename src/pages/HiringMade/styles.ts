import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 750px;
  gap: 2rem;
  height: calc(100vh - 7rem);

  > h1 {
    font-weight: 400;
    font-size: 32px;
  }

  > p {
    text-align: center;
    font-size: 18px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 9rem;
  justify-content: space-between;

  > h2 {
    font-weight: 700;
    font-size: 40px;
    padding: 2rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;

  div + div {
    border-top: 1px solid #d0d0d0;
  }
`;

export const ContainerPhone = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  > img {
    margin: 0 auto;
  }
`;

export const ContentText = styled.div`
  max-width: 370px;
  padding: 2rem 0;

  > h3 {
    font-size: 40px;
  }

  > p {
    font-size: 18px;
    color: #666666;
    margin-top: 0.5rem;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
`;

export const ContentIcons = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-around;
  height: 60px;
  border-top: 0px !important;
  margin: 0 auto;
  max-width: 700px;
`;

export const ContainerIconPosition = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: #666666;

  > svg {
    width: 36px;
    height: 36px;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > svg {
    width: 36px;
    height: 36px;
  }

  > span {
    margin-top: 2rem;
  }
`;

export const ContainerTable = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  padding: 2rem 0;
`;

export const ContentTable = styled.section`
  border: 1px solid #e5e5e5;
  margin: 0 auto;
  border-radius: 8px;
`;

export const Table = styled.table`
  width: 470px;
  border-collapse: collapse;
  overflow: hidden;

  thead {
    border-bottom: 1px solid #d0d0d0;

    th {
      padding: 1rem;
      color: #ab49ce;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #d0d0d0;

      td {
        text-align: center;
        padding: 1rem 0;
      }

      &:last-child {
        border: none;
      }
    }
  }
`;

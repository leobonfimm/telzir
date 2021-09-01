import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  height: 36.6rem;
  background-image: url("https://s3-alpha-sig.figma.com/img/a6ff/f6da/1cb5e2e73b34973cfdd22fe48d316fc5?Expires=1631491200&Signature=fCzx0HY40Y-YCsQkYAUTH6QORzcCvI3j1LAD3XgAKNjO1sRi6JOuWlfkqP~fvpXbyEmOLP9NGuUP9q4-~TTSNp3zQz40f0UaBObxw3vS3MGlhEHp~KC5mHXYqoGcoTiXyiZezIqzWLWuL6-3iwURkmzE3p1TflxBbr3cozv-pOdXC8Mlbs5LBT0zqfr6vl9GD-DyimsMv-ZTTstRLgB6M4v14IPJr28RzDT08l1C-yfTH~iwYZdZldgvzCaEyZa-WAhIxWaTOiZafXs4vCxLcuD8z3emmtLI697T0mIAFJ3KLDQowOcAWsNs~f3g48ehPcDM8iIOcZobs4Thnor4sw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 35% 25%;

  @media (max-width: 1368px) {
    background-position: 35% 5%;
  }
`;

export const PositionContent = styled.div`
  max-width: 1440px;
  margin: auto;

  @media (max-width: 1368px) {
    max-width: 1000px;
  }
`;

export const Content = styled.div`
  max-width: 442px;
  padding-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  > h1 {
    font-weight: 400;
    font-size: 70px;
  }

  > p {
    font-size: 18px;
  }

  > a {
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

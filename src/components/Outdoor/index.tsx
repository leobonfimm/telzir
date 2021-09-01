import { Header } from "../Header";
import { Container, PositionContent, Content } from "./styles";

export function Outdoor(): JSX.Element {
  return (
    <Container>
      <Header />

      <PositionContent>
        <Content>
          <h1>
            Pague menos, <br /> <strong>Fale Mais</strong>
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <a href="#">Saiba mais</a>
        </Content>
      </PositionContent>
    </Container>
  );
}

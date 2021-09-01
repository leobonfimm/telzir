import { FiChevronLeft } from "react-icons/fi";
import { Container, Header, ContainerLink, Content } from "./styles";

import logo from "../../assets/logo.svg";

export function HiringMade(): JSX.Element {
  return (
    <Container>
      <Header>
        <ContainerLink>
          <FiChevronLeft size={20} />
          <a href="/">Voltar para página inicial</a>
        </ContainerLink>

        <img src={logo} alt="telzir" />
      </Header>

      <Content>
        <h1>Contratação feita com sucesso! 🤩</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </Content>
    </Container>
  );
}

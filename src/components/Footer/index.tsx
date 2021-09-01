import {
  Container,
  Content,
  FooterData,
  ContainerInfo,
  Divider,
  LogoContainer,
} from "./styles";

import logo from "../../assets/logo.svg";

export function Footer(): JSX.Element {
  return (
    <Container>
      <Content>
        <FooterData>
          <ContainerInfo>
            <h2>Combo</h2>
            <a href="#">Planos</a>
            <a href="#">Atendimentos</a>
            <a href="#">Serviços adicionais</a>
          </ContainerInfo>

          <ContainerInfo>
            <h2>Celular</h2>
            <a href="#">Planos</a>
            <a href="#">Atendimentos</a>
            <a href="#">Serviços adicionais</a>
          </ContainerInfo>

          <ContainerInfo>
            <h2>Fixo</h2>
            <a href="#">Planos</a>
            <a href="#">Atendimentos</a>
            <a href="#">Serviços adicionais</a>
          </ContainerInfo>

          <ContainerInfo>
            <h2>Sobre</h2>
            <a href="#">A empresa</a>
            <a href="#">Franquia</a>
            <a href="#">Sobre nós</a>
          </ContainerInfo>

          <ContainerInfo>
            <h2>Comunidade</h2>
            <a href="#">Acessibilidade</a>
            <a href="#">Diversidade e pertencimento</a>
            <a href="#">telzir.org</a>
          </ContainerInfo>
        </FooterData>

        <Divider />

        <LogoContainer>
          <img src={logo} alt="telzir" />
          <span>2021</span>
        </LogoContainer>
      </Content>
    </Container>
  );
}

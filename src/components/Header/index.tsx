import { useHistory } from "react-router-dom";
import { Container, ContainerNav } from "./styles";

import logo from "../../assets/logo.svg";

export function Header(): JSX.Element {
  const history = useHistory();

  function handleNavigateToContractForm() {
    history.push("/contract-form");
  }

  return (
    <Container>
      <img src={logo} alt="telzir" />

      <ContainerNav>
        <li>
          <a href="#benefits">Vantagens</a>
        </li>
        <li>
          <a href="#calculation">Cálculo</a>
        </li>

        <li>
          <button type="button" onClick={handleNavigateToContractForm}>
            Contratar
          </button>
        </li>
      </ContainerNav>
    </Container>
  );
}

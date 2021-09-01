import { FiChevronLeft } from "react-icons/fi";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Header,
  ContainerLink,
  Content,
  ContainerPersonalData,
  BillingAddressData,
  HiringDetails,
  ContainerPayment,
  CreditData,
  DidataSecurityExpirationv,
} from "./styles";

import logo from "../../assets/logo.svg";
import cards from "../../assets/cards.svg";
import cvcCard from "../../assets/cvcCard.svg";

interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  localidade: string;
  uf: string;
}

export function ContractForm(): JSX.Element {
  const history = useHistory();

  const [address, setAddress] = useState<Address>({} as Address);

  async function handleOnBlurCep() {
    const response = await axios.get(`https://viacep.com.br/ws/62040831/json/`);

    setAddress(response.data);
  }

  function handleNavigateToHiringMade() {
    history.push("/hiring-made");
  }

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
        <h1>Finalizar contratação</h1>

        <ContainerPersonalData>
          <h2>Dados Pessoais</h2>

          <div className="containerInputs">
            <div>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" />
            </div>

            <div>
              <label htmlFor="surname">Sobrenome</label>
              <input type="text" id="surname" name="surname" />
            </div>

            <div>
              <label htmlFor="phone">Telefone</label>
              <input type="text" id="phone" name="phone" />
            </div>

            <div>
              <label htmlFor="name">E-mail</label>
              <input type="email" id="email" name="email" />
            </div>
          </div>
        </ContainerPersonalData>

        <BillingAddressData>
          <h2>Endereço de cobrança</h2>

          <div className="containerInputs">
            <div>
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                id="cep"
                name="cep"
                className="cep"
                onBlur={handleOnBlurCep}
              />
            </div>

            <a
              href="https://buscacepinter.correios.com.br/app/endereco/index.php"
              target="_blank"
              rel="noreferrer"
            >
              Não sei meu cep
            </a>

            <div>
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                name="address"
                className="address"
                value={address.logradouro}
                readOnly
              />
            </div>

            <div>
              <label htmlFor="number">Número</label>
              <input type="text" id="number" name="number" className="number" />
            </div>

            <div>
              <label htmlFor="complement">Complemento</label>
              <input
                type="text"
                id="complement"
                name="complement"
                className="complement"
                value={address.complemento}
                placeholder="Medium Input"
              />
            </div>

            <div>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                className="city"
                value={address.localidade}
              />
            </div>

            <div>
              <label htmlFor="state">Estado</label>
              <input
                type="text"
                id="state"
                name="state"
                className="state"
                value={address.uf}
              />
            </div>
          </div>
        </BillingAddressData>

        <HiringDetails>
          <h2>Detalhes da contratação</h2>

          <div>
            <span>Plano 120 - lorem ipsum sit amet</span>

            <strong>
              R$ 00,00 / <span>mês</span>
            </strong>
          </div>
        </HiringDetails>

        <ContainerPayment>
          <h2>Pagamento</h2>

          <div className="nameCard">
            <label htmlFor="nameCard">Nome no cartão</label>
            <input type="text" id="nameCard" name="nameCard" />
          </div>

          <CreditData>
            <span>Número do cartão</span>

            <div className="numberCard">
              <input
                type="text"
                id="nameCard"
                name="nameCard"
                placeholder="1234 1234 1234 1234"
              />
              <img src={cards} alt="cards" />
            </div>

            <DidataSecurityExpirationv>
              <div className="expirationDate">
                <input
                  type="text"
                  id="nameCard"
                  name="nameCard"
                  placeholder="MM / YY"
                />
              </div>

              <div className="securityCode">
                <input
                  type="text"
                  id="nameCard"
                  name="nameCard"
                  placeholder="CVC"
                />

                <img src={cvcCard} alt="Security code" />
              </div>
            </DidataSecurityExpirationv>
          </CreditData>
        </ContainerPayment>

        <button type="button" onClick={handleNavigateToHiringMade}>
          Finalizar e contratar
        </button>
      </Content>
    </Container>
  );
}

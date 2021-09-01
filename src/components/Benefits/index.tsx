import { FiMapPin, FiPlus, FiPhone } from "react-icons/fi";

import {
  Container,
  Content,
  ContainerPhone,
  ContentText,
  ContainerIcons,
  ContainerIconPosition,
  ContentIcons,
  ContainerIcon,
  ContainerTable,
  ContentTable,
  Table,
} from "./styles";

import devices from "../../assets/devices.svg";
import valueMonth from "../../assets/valueMonth.svg";

export function Benefits(): JSX.Element {
  return (
    <Container id="benefits">
      <h2>
        Vantagens <br /> do FaleMais
      </h2>

      <Content>
        <ContainerPhone>
          <ContentText>
            <h3>Lorem ipsum dolor sit amet</h3>

            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </ContentText>

          <img src={devices} alt="devices" />
        </ContainerPhone>

        <ContainerIcons>
          <ContentText>
            <h3>Duis aute irure dolor in reprehenderit</h3>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </ContentText>

          <ContentIcons>
            <ContainerIconPosition>
              <ContainerIcon>
                <FiMapPin />
                <span>Lorem</span>
              </ContainerIcon>

              <FiPlus />

              <ContainerIcon>
                <FiPhone />
                <span>Ipsum</span>
              </ContainerIcon>
            </ContainerIconPosition>

            <img src={valueMonth} alt="value month" />
          </ContentIcons>
        </ContainerIcons>

        <ContainerTable>
          <ContentText>
            <h3>Excepteur sint occa ecat cupidatat </h3>

            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </ContentText>

          <ContentTable>
            <Table>
              <thead>
                <tr>
                  <th>Origem</th>
                  <th>Destino</th>
                  <th>$/min</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>011</td>
                  <td>016</td>
                  <td>1.90</td>
                </tr>
                <tr>
                  <td>016</td>
                  <td>011</td>
                  <td>2.90</td>
                </tr>
                <tr>
                  <td>011</td>
                  <td>017</td>
                  <td>1.70</td>
                </tr>
                <tr>
                  <td>017</td>
                  <td>011</td>
                  <td>2.70</td>
                </tr>
              </tbody>
            </Table>
          </ContentTable>
        </ContainerTable>
      </Content>
    </Container>
  );
}

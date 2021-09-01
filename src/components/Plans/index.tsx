import { FiCheck } from "react-icons/fi";

import { Container, Header, Content, ContainerPlan } from "./styles";

import plan30 from "../../assets/plan30.svg";
import plan60 from "../../assets/plan60.svg";
import plan120 from "../../assets/plan120.svg";
import planPersonaLizado from "../../assets/planPersonaLizado.svg";
import valuePlan from "../../assets/valuePlan.svg";

export function Plans(): JSX.Element {
  return (
    <Container>
      <Header>
        <h1>Planos</h1>
        <p>
          Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </Header>

      <Content>
        <ContainerPlan>
          <img src={plan30} alt="plan30" />

          <h2>FaleMais 30</h2>

          <img src={valuePlan} alt="plan value" />

          <h4>For organizing every corner of your life.</h4>

          <strong>Everything in Personal, plus</strong>

          <span>
            <FiCheck /> Unlimited file uploads
          </span>

          <span>
            <FiCheck /> Unlimited file uploads
          </span>

          <span>
            <FiCheck /> Unlimited file uploads
          </span>

          <a href="#">Contratar</a>
        </ContainerPlan>

        <ContainerPlan>
          <img src={plan60} alt="plan60" />

          <h2>FaleMais 60</h2>

          <img src={valuePlan} alt="plan value" />

          <h4>For organizing every corner of your life.</h4>

          <strong>Everything in Personal, plus</strong>

          <span>
            <FiCheck /> Unlimited file uploads
          </span>

          <span>
            <FiCheck /> Unlimited file uploads
          </span>

          <span>
            <FiCheck /> Unlimited file uploads
          </span>

          <a href="#">Contratar</a>
        </ContainerPlan>

        <ContainerPlan>
          <img src={plan120} alt="plan120" />

          <h2>FaleMais 120</h2>

          <img src={valuePlan} alt="plan value" />

          <h4>For organizing every corner of your life.</h4>

          <strong>Everything in Personal, plus</strong>

          <span>
            <FiCheck /> Unlimited file uploads
          </span>

          <span>
            <FiCheck /> Unlimited file uploads
          </span>

          <span>
            <FiCheck /> Unlimited file uploads
          </span>

          <a href="#">Contratar</a>
        </ContainerPlan>

        <ContainerPlan>
          <img src={planPersonaLizado} alt="planPersonaLizado" />

          <h2>Personalizado</h2>

          <strong className="customPlanDescription">
            Customize o plano do seu jeito!
          </strong>

          <h4>For organizing every corner of your life.</h4>

          <strong>Everything in Personal, plus</strong>

          <span>
            <FiCheck /> Unlimited file uploads
          </span>

          <span>
            <FiCheck /> Unlimited file uploads
          </span>

          <span>
            <FiCheck /> Unlimited file uploads
          </span>

          <a href="#">Customizar</a>
        </ContainerPlan>
      </Content>
    </Container>
  );
}

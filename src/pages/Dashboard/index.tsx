import { Benefits } from "../../components/Benefits";
import { Calculation } from "../../components/Calculation";
import { Footer } from "../../components/Footer";
import { Outdoor } from "../../components/Outdoor";
import { Plans } from "../../components/Plans";

import { Container } from "./styles";

export function Dashboard(): JSX.Element {
  return (
    <Container>
      <Outdoor />
      <Benefits />
      <Calculation />
      <Plans />
      <Footer />
    </Container>
  );
}

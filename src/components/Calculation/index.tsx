import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Select, { OptionsType } from "react-select";

import { api } from "../../service/api";

import { Container, ContentText, CalculationContainer } from "./styles";

interface Local {
  code: string;
  label: string;
}

interface Plan {
  value: number;
  label: string;
}

export function Calculation(): JSX.Element {
  const history = useHistory();

  const [listFrom, setListFrom] = useState<Local[]>([]);
  const [listTo, setListTo] = useState<Local[]>([]);
  const [listPlans, setListPlans] = useState<Plan[]>([]);
  const [times, setTimes] = useState<number[]>([]);
  const [total, setTotal] = useState("");

  useEffect(() => {
    api.get("locals").then((response) => {
      setListFrom(response.data);
      setListTo(response.data);
    });

    api.get("plans").then((response) => setListPlans(response.data));
    api.get("times").then((response) => setTimes(response.data));
  }, []);

  const handleChangePlan = (selectedOption: OptionsType<Plan>) => {
    const sumValue = selectedOption.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual.value;
    }, 0);

    const totalFormatted =
      sumValue > 0
        ? new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sumValue)
        : "";

    setTotal(totalFormatted);
  };

  function handleNavigateToContractForm() {
    history.push("/contract-form");
  }

  return (
    <Container id="calculation">
      <ContentText>
        <h1>Faça o cálculo do FaleMais</h1>

        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </ContentText>

      <CalculationContainer>
        <div className="from">
          <span>Origem</span>
          <select name="from" id="from" placeholder="Escolher origem">
            {listFrom.map((local) => (
              <option key={local.code} value={local.code}>
                {local.code} - {local.label}
              </option>
            ))}
          </select>
        </div>

        <div className="to">
          <span>Destino</span>
          <select name="to" id="to" placeholder="Escolher destino">
            {listTo.map((local) => (
              <option key={local.code} value={local.code}>
                {local.code} - {local.label}
              </option>
            ))}
          </select>
        </div>

        <div className="time">
          <span>Tempo</span>
          <select name="from" id="from" placeholder="Escolher tempo">
            {times.map((time) => (
              <option key={time} value={time}>
                {time} min
              </option>
            ))}
          </select>
        </div>

        <div className="plan">
          <span>Planos</span>
          <Select
            isMulti
            options={listPlans}
            name="colors"
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(event) => handleChangePlan(event)}
          />
        </div>

        <div className="total">
          <span>Total</span>

          <p>{total || "R$ 0,00"}</p>
        </div>

        {total && (
          <div className="containerButton">
            <button type="button" onClick={handleNavigateToContractForm}>
              Contratar
            </button>
          </div>
        )}
      </CalculationContainer>
    </Container>
  );
}

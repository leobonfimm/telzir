import { Switch, Route } from "react-router-dom";

import { ContractForm } from "../pages/ContractForm";
import { Dashboard } from "../pages/Dashboard";
import { HiringMade } from "../pages/HiringMade";

export const Routes = (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/contract-form" component={ContractForm} />
    <Route path="/hiring-made" component={HiringMade} />
  </Switch>
);

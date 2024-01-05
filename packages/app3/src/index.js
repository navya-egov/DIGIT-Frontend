import React from "react";
import ReactDOM from "react-dom";
import { QueryClient } from "react-query";
import HRMSWrapper from "./ModuleWrapper";

const c = new QueryClient();
const stateCode = "pg";
const userType = "employee";
const tenants = "";

ReactDOM.render(
  <HRMSWrapper
    stateCode={stateCode}
    userType={userType}
    tenants={tenants}
    queryClient={c}
  />,
  document.getElementById("app")
);

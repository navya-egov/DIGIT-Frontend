import React from "react";
import ReactDOM from "react-dom";
import { QueryClient } from "react-query";

import { HRMSModule } from "./Module";

const c = new QueryClient();

ReactDOM.render(<HRMSModule queryClient={c} />, document.getElementById("app"));

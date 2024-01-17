import React from "react";
import { HRMSModule } from "./Module";
import { initHRMSComponents } from "./Module";

const App = ({ title = "", stateCode, userType, tenants, queryClient }) => {
  //init lib
  // initHRMSComponents();
  console.log("Props:", { stateCode, userType, tenants, queryClient });
  return (
    <div>
      <h2>{title}</h2>
      <HRMSModule
        stateCode="pg"
        userType="employee"
        tenants={[]}
        queryClient={queryClient}
      />
    </div>
  );
};

export default App;

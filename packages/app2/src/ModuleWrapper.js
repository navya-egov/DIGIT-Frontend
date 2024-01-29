import React from "react";
import { HRMSModule } from "./Module";
import { initHRMSComponents } from "./Module";
import { initLibraries } from "@egovernments/digit-ui-libraries";
import Create from "./pages/CreateInd.js";
import { QueryClientProvider } from "react-query";

const App = ({ title = "", stateCode, userType, tenants, queryClient }) => {
  initLibraries();
  //init lib
  // initHRMSComponents();
  // console.log("Props:", { stateCode, userType, tenants, queryClient });
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <h2>{title}</h2>
        {/* <HRMSModule
        stateCode="pg"
        userType="employee"
        tenants={[]}
        queryClient={queryClient}
      /> */}
        <Create />
      </QueryClientProvider>
    </div>
  );
};

export default App;

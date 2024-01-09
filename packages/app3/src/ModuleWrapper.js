import React from "react";
import { HRMSModule } from "./Module";
import { initHRMSComponents } from "./Module";

const HRMSWrapper = ({ stateCode, userType, tenants, queryClient }) => {
  // initHRMSComponents();
  console.log("Props:", { stateCode, userType, tenants, queryClient });
  return (
    <div>
      <HRMSModule
        stateCode="pg"
        userType="employee"
        tenants={[]}
        queryClient={queryClient}
      />
    </div>
  );
};

export default HRMSWrapper;

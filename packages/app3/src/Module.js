import React from "react";
import { useRouteMatch } from "react-router-dom";
import HRMSCard from "./components/hrmscard";
import InboxFilter from "./components/InboxFilter";
import ActionModal from "./components/Modal";
import Assignments from "./components/pageComponents/assignment";
import HRBanner from "./components/pageComponents/Banner";
import SelectDateofBirthEmployment from "./components/pageComponents/EmployeeDOB";
import SelectEmployeePhoneNumber from "./components/pageComponents/EmployeePhoneNumber";
import Jurisdictions from "./components/pageComponents/jurisdiction";
import SelectDateofEmployment from "./components/pageComponents/SelectDateofEmployment";
import SelectEmployeeEmailId from "./components/pageComponents/SelectEmailId";
import SelectEmployeeCorrespondenceAddress from "./components/pageComponents/SelectEmployeeCorrespondenceAddress";
import SelectEmployeeGender from "./components/pageComponents/SelectEmployeeGender";
import SelectEmployeeId from "./components/pageComponents/SelectEmployeeId";
import SelectEmployeeName from "./components/pageComponents/SelectEmployeeName";
import SelectEmployeeType from "./components/pageComponents/SelectEmployeeType";
import EmployeeApp from "./pages";
import CreateEmployee from "./pages/createEmployee";
import EditEmployee from "./pages/EditEmployee/index";
import Details from "./pages/EmployeeDetails";
import Inbox from "./pages/Inbox";
import Response from "./pages/Response";
import { Example } from "@demo/shared";
import { QueryClientProvider } from "react-query";
// import { initLibraries } from "@egovernments/digit-ui-libraries";

{
  /* <hrmsmodule props></hrmsmodule>; */
}
const HRMSModule = ({ stateCode, userType, tenants, queryClient }) => {
  const moduleCode = "HR";
  const language = Digit.StoreData.getCurrentLanguage();
  const { isLoading, data: store } = Digit.Services.useStore({
    stateCode,
    moduleCode,
    language,
  });
  // initLibraries().then(() => {
  //   initDigitUI();
  //   initHRMSComponents();
  // });
  Digit.SessionStorage.set("HRMS_TENANTS", tenants);
  const { path, url } = useRouteMatch();
  if (!Digit.Utils.hrmsAccess()) {
    return null;
  }
  if (userType === "employee") {
    return (
      <QueryClientProvider client={queryClient}>
        <EmployeeApp path={path} url={url} />
        {/* <Example /> */}
      </QueryClientProvider>
    );
  } else return null;
};

const componentsToRegister = {
  HRMSCard,
  HRMSDetails: Details,
  SelectEmployeeEmailId,
  SelectEmployeeName,
  SelectEmployeeId,
  Jurisdictions,
  Assignments,
  ActionModal,
  HRBanner,
  SelectEmployeePhoneNumber,
  SelectDateofEmployment,
  SelectEmployeeType,
  SelectEmployeeCorrespondenceAddress,
  SelectEmployeeGender,
  SelectDateofBirthEmployment,
  HRMSModule,
  HRMSResponse: Response,
  HREditEmpolyee: EditEmployee,
  HRCreateEmployee: CreateEmployee,
  HRInbox: Inbox,
  HRMS_INBOX_FILTER: (props) => <InboxFilter {...props} />,
};

export const initHRMSComponents = () => {
  Object.entries(componentsToRegister).forEach(([key, value]) => {
    Digit.ComponentRegistryService.setComponent(key, value);
  });
};
// const initDigitUI = () => {
//   window.contextPath =
//     window?.globalConfigs?.getConfig("CONTEXT_PATH") || "digit-ui";
//   window.Digit.Customizations = {};
//   window?.Digit.ComponentRegistryService.setupRegistry({
//     // PaymentModule,
//     // ...paymentConfigs,
//     // PaymentLinks,
//   });

//   // initHRMSComponents();
//   const enabledModules = ["PT"];

//   const moduleReducers = (initData) => initData;

//   const stateCode =
//     window?.globalConfigs?.getConfig("STATE_LEVEL_TENANT_ID") || "pb";
//   // initTokens(stateCode);

//   // return (<DigitUI stateCode={stateCode} enabledModules={enabledModules}       defaultLanding="employee"  moduleReducers={moduleReducers} />);
// };

// add a default export
// wrppre comp

export default HRMSModule;

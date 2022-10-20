import not_allowed_alert from "./not_allowed_alert";
import infoAlert from "./info_alert";
import tickAlert from "./tick_alert";
import report_alert from "./report_alert";

const alertCollections = [
  {componentName: "Info Alert", component: infoAlert},
  {componentName: "Tick Alert", component: tickAlert},
  {componentName: "Report Alert", component: report_alert},
  {componentName: "Not-Allowed Alert", component: not_allowed_alert},
];
export default alertCollections;

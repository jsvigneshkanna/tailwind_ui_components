import infoAlert from "./info_alert";
import tickAlert from "./tick_alert";
import report_alert from "./report_alert";

const alertCollections = [
  {componentName: "Info Alert", component: infoAlert},
  {componentName: "Tick Alert", component: tickAlert},
  {componentName: "Report Alert", component: report_alert},
]

export default alertCollections;

import sliderInputForm from "./slider_input_form";
import Checkbox from "./checkbox";
import searchInput from "./search_input_form";
import inputForm from "./simple_input_form";
import fileInput from "./choose_file_input";


const formCollections = [
  {componentName: "Range Slider", component: sliderInputForm},
  {componentName: "Check Box", component: Checkbox},
  {componentName: "Search Input", component: searchInput},
  {componentName: "Input Form", component: inputForm},
  {componentName : "Choose File Input", component: fileInput},
];

export default formCollections;

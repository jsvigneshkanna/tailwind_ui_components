import sliderInputForm from "./slider_input_form";
import Checkbox from "./checkbox";
import searchInput from "./search_input_form";
import inputForm from "./simple_input_form";
import fileInput from "./choose_file_input";
import Radio_button from "./radio_button";
import ToggleSwitch from "./toggle_switch";
import HorizontalProgress from './multi_form_horizontal_progress'

const formCollections = [
  {componentName: "Range Slider", component: sliderInputForm},
  {componentName: "Check Box", component: Checkbox},
  {componentName: "Search Input", component: searchInput},
  {componentName: "Input Form", component: inputForm},
  {componentName: "Choose File Input", component: fileInput},
  {componentName: "Radio Button", component: Radio_button},
  {componentName: "Toggle Switch", component: ToggleSwitch},
  {componentName: "Multi Step Horizontal Progress", component: HorizontalProgress},
];

export default formCollections;

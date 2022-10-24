import VerticalContactForm from "./vertical_contact_form";
import contactForm from "./standard_contact_form";
import SubsriptionContactForm from "./subscription_contact_form";
import ImageContactForm from "./large_image_contact_form";

const contactFormsCollection = [
  {componentName: "Vertical contact form", component: VerticalContactForm},
  {componentName: "Sample Contact form", component: contactForm},
  {
    componentName: "Subscription Contact form",
    component: SubsriptionContactForm,
  },
  {
    componentName: "Image Contact form",
    component: ImageContactForm,
  },
];

export default contactFormsCollection;

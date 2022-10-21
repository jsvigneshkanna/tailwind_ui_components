import standardPricingCard from "./standard_pricing.jsx";
import verticalPricing from "./vertical_pricing.jsx";
import smallPricingCard from "./small_pricing_card.jsx";

const pricingCardsCollections = [
  {componentName: "Standard Pricing Card", component: standardPricingCard},
  {componentName: "Vertical Pricing Card", component: verticalPricing},
  {componentName: "Small Pricing Card", component: smallPricingCard},
];

export default pricingCardsCollections;

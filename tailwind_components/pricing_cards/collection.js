import standardPricingCard from "./standard_pricing.jsx";
import verticalPricing from "./vertical_pricing.jsx";
import smallPricingCard from "./small_pricing_card.jsx";
import pricingCardRibbon from "./pricing_card_ribbon.jsx";

const pricingCardsCollections = [
  {componentName: "Standard Pricing Card", component: standardPricingCard},
  {componentName: "Vertical Pricing Card", component: verticalPricing},
  {componentName: "Small Pricing Card", component: smallPricingCard},
  {componentName: "Pricing Card with Ribbon", component: pricingCardRibbon},
];

export default pricingCardsCollections;

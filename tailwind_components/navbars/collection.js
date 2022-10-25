import animated_navbar from "./animated_navbar";
import mobile_nav_icons from "./mobile_nav_icons";
import mobile_nav_dropdown from "./mobile_nav_dropdown";
import standard_mobile_navbar from "./standard_mobile_navbar";
import searchNav from "./search_navbar";
import standardLogoNav from "./standard_logo_navbar";
import centerDropdownNav from "./center_dropdown_navbar";
import navbarSocialIcon from "./navbar_social_icons";

const navbarCollections = [
  {componentName: "Standard Logo Navbar", component: standardLogoNav},
  {componentName: "Animated Navbar", component: animated_navbar},
  {componentName: "Mobile NavBar Icons", component: mobile_nav_icons},
  {componentName: "Standard Mobile Navbar", component: standard_mobile_navbar},
  {componentName: "Search Navbar", component: searchNav},
  {componentName: "Center Dropdown Navbar", component: centerDropdownNav},
  {componentName: "Navbar Social Icons", component: navbarSocialIcon},
];

export default navbarCollections;

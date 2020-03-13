import withRoot from "./modules/withRoot";

import React, { useReducer } from "react";
import ProductCategories from "./modules/views/ProductCategories";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import ProductCTA from "./modules/views/ProductCTA";
import ProductTasks from "./modules/views/ProductTasks";
import MeetTasker from "./modules/views/MeetTasker";

function Index() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductCategories />
      <ProductValues />
      <ProductTasks />
      <ProductHowItWorks />
      <MeetTasker />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);

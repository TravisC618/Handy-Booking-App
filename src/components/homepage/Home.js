import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, { Component, useReducer } from "react";
import {
  HomeContext,
  homeReducer,
  initialState
} from "../../hooks/homeReducer";

import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import ProductTasks from './modules/views/ProductTasks';
import MeetTasker from './modules/views/MeetTasker';

function Index() {
  const [home, dispatch] = useReducer(homeReducer, initialState);

  return (

    <React.Fragment>
      <HomeContext.Provider
        value={{ homeState: home, homeDispatch: dispatch }}
      >
        <ProductHero />
        <ProductTasks />
        <ProductValues />
        <ProductCategories />
        <ProductHowItWorks />
        <MeetTasker />
        <ProductCTA />
        <ProductSmokingHero />
        <AppFooter />

      </HomeContext.Provider>
    </React.Fragment>

  );
}

export default withRoot(Index);

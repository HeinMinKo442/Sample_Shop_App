import React from "react";
import Hero from "../components/hero/Hero";
import Popular from "../components/popular/Popular";
import Offer from "../components/offer/Offer";
import NewCollections from "../components/newCollections/NewCollections";
import NewLetter from "../components/newLetter/NewLetter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <NewLetter />
    </div>
  );
};

export default Shop;

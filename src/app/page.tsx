import Faqs from "@/components/home/faqs";
import Hero from "@/components/home/hero";
import Promote from "@/components/home/promotes";
import Services from "@/components/home/services";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Promote />
      <Faqs />
    </>
  );
};

export default Home;

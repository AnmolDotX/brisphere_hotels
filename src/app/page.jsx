'use client'
import { Discover, HeroSection, Services } from "@/components";
import { useEffect } from "react";

const HomePage = () => {

  return (
    <div className="">
      <HeroSection />
      <Discover/>
      <Services/>
    </div>
  );
}

export default HomePage;
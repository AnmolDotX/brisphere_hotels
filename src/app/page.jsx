'use client'
import { Discover, HeroSection, Services } from "@/components";
import { useData } from "@/context/HotelDataContext";
import { useEffect } from "react";

const HomePage = () => {

// const {hotelData, fetchData} = useData();

//   useEffect(()=>{
//     fetchData();
//   },[])

  // console.log(hotelData);

  return (
    <div className="">
      <HeroSection />
      <Discover/>
      <Services/>
    </div>
  );
}

export default HomePage;
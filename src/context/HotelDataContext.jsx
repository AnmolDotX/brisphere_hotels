"use client"
import { createContext, useContext, useState } from "react";
import axios from "axios";

const hotelContext = createContext({
    hotelData : {},
    fetchData : () => {},
});
const HotelDataContext = ({ children }) => {

    const options = {
        method: 'GET',
        url: `https://${process.env.NEXT_PUBLIC_HOTEL_API_HOST}/languages`,
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_HOTEL_API_KEY,
          'X-RapidAPI-Host': process.env.NEXT_PUBLIC_HOTEL_API_HOST
        }
      };

    const [hotelData, setHotelData] = useState({});

    const fetchData = async () => {
        try {
          const response = await axios.request(options);
          setHotelData(response.data.data);
        } catch (error) {
          console.error(error);
        }
    };


  return <hotelContext.Provider value={{hotelData, fetchData}}>{children}</hotelContext.Provider>;
};

export const useData = () => {
    const hotelData = useContext(hotelContext);
    if(!hotelData) {
        throw new Error("useData must be used writihin a hotelDataContext")
    }
    return hotelData;
}

export default HotelDataContext;

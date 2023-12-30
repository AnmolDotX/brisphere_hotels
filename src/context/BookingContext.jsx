'use client'
import { createContext, useContext, useState } from "react";

const bookingContext = createContext();

const BookingProvider = ({children}) => {

    const [heroFormData, setHeroFormData] = useState({
        "check-in" : "",
        "check-out" : "",
        "rooms" : ""
    });

    const [mainFormData, setMainFormData] = useState({
        'check-in' : '',
        'check-out' : '',
        'rooms' : '',
        'tourist-name' : '',
        'tourist-email' : '',
        'tourist-phone' : '',
        'no-of-adults' : '',
        'no-of-children' : '',
    })

    return (
        <bookingContext.Provider value={{heroFormData, setHeroFormData, mainFormData, setMainFormData}}>
            {children}
        </bookingContext.Provider>
    );
}

export const useForm = () => {
    const formData = useContext(bookingContext);
    if(!formData) {
        throw new Error("useForm must be used withing BookingProvider");
    }
    return formData;
};

export default BookingProvider;
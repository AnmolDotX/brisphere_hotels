import React from "react";
import {IoIosWifi, IoIosBicycle,} from 'react-icons/io'
import {IoMapSharp} from 'react-icons/io5'
import {MdShoppingCart, MdCarRental, MdFlag} from 'react-icons/md'
import {FaCar} from 'react-icons/fa6'
import {GoHome} from 'react-icons/go'
import {GiMeal} from 'react-icons/gi'


const ServiceCard = ({icon, title, detail}) => {

    const iconComponents = {
        IoIosWifi,
        IoIosBicycle,
        IoMapSharp,
        MdShoppingCart,
        MdCarRental,
        MdFlag,
        FaCar,
        GoHome,
        GiMeal,
      };

    const IconComponent = iconComponents[icon];
    return (
        <div className="flex flex-col items-center gap-3 rounded-lg shadow-md shadow-slate-400/50 p-5 max-w-[20vw] bg-slate-50/50">
            <div className="text-7xl p-3 rounded-full opacity-60">
                {
                    IconComponent && <IconComponent/>
                }
            </div>
            <h4 className="text-lg font-semibold tracking-wide">{title}</h4>
            <p className="text-xs text-clip">
                {
                    detail
                }
            </p>
        </div>
    );
}

export default ServiceCard;
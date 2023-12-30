'use client'
import { useState } from "react";
import { Button } from ".";
import { useForm } from "@/context/BookingContext";
import { useRouter } from "next/navigation";

const BookingComp = ({className}) => {
  const {setHeroFormData} = useForm();
  const router = useRouter();
  const [formData, setFormData] = useState({
    "check-in" : '2023-12-10',
    "check-out" : '2023-12-21',
    "rooms" : "1",

  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setHeroFormData({
      "check-in" : formData && formData["check-in"],
      "check-out" : formData && formData["check-out"],
      "rooms" : formData?.rooms
    });
    router.push("/booking-page");
  };

  return (
    <form onSubmit={submitHandler} className={`${className} flex flex-col md:flex-row items-center justify-between md:bg-white bg-white/85 shadow-slate-400/60 shadow-xl md:h-44 min-h-[50vh] md:min-h-0 min-w-[70vw] rounded-xl px-5 py-5 md:py-0 md:px-10 overflow-auto`}>
      <div className="flex flex-col items-center gap-1 md:gap-5">
        <label className="text-sm md:text-lg tracking-wider" htmlFor='check-in'>CHECK-IN</label>
        <input id='check-in' name="check-in" onChange={handleChange} className="text-center cursor-pointer hover:text-sky-400 transition-all px-3 md:py-1 md:bg-transparent md:text-black md:rounded-none text-sm font-bold bg-slate-800 min-w-[60vw] md:min-w-0 rounded-full py-2 text-white " value={formData["check-in"]} type='date' />
      </div>
      <div className="flex flex-col items-center gap-1 md:gap-5">
        <label className="text-sm md:text-lg tracking-wider" htmlFor='check-out'>CHECK-OUT</label>
        <input id='check-out' name="check-out" onChange={handleChange} className="text-center cursor-pointer hover:text-sky-400 transition-all px-3 md:py-1 md:bg-transparent md:text-black md:rounded-none text-sm font-bold bg-slate-800 min-w-[60vw] md:min-w-0 rounded-full py-2 text-white " value={formData["check-out"]} type='date' />
      </div>
      <div className="flex flex-col items-center gap-1 md:gap-5">
        <label className="text-sm md:text-lg tracking-wider" htmlFor='rooms'>ROOMS</label>
        <input id='rooms' name="rooms" value={formData.rooms} onChange={handleChange} className="text-center cursor-pointer hover:text-sky-400 transition-all px-2 md:text-black md:rounded-none md:bg-transparent md:py-1 focus:border focus:border-sky-600 focus:outline-sky-500 focus:rounded-md text-sm font-bold bg-slate-800 min-w-[60vw] md:min-w-0 rounded-full py-2 text-white " placeholder="no. of rooms" type='text' />
      </div>
      <div>
      <Button type={"submit"} text={"Book"}/>
      </div>
    </form>
  );
};

export default BookingComp;

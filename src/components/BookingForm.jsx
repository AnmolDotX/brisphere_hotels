"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from ".";
import { useForm } from "@/context/BookingContext";

const BookingForm = ({
  className,
  checkIn = "2023-12-29",
  checkOut = "2023-12-31",
  rooms = "1",
  price,
  isEverythingComplete
}) => {
  const { setMainFormData, mainFormData } = useForm();

  useEffect(() => {
    setMainFormData({
      ...mainFormData,
      "check-in": checkIn,
      "check-out": checkOut,
      rooms: rooms,
    });
  }, [checkIn, checkOut, rooms]);

  const handleChange = (e) => {
    setMainFormData({
      ...mainFormData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`${className} flex flex-col md:flex-row items-center justify-between md:bg-white bg-white/85 shadow-slate-400/60 shadow-xl md:h-44 min-h-[50vh] md:min-h-0 min-w-[70vw] px-5 py-5 rounded-xl md:px-10 md:py-0 transition-all duration-300`}
    >
      <div className='flex flex-col items-center gap-1 md:gap-3 duration-200'>
        <label className='md:text-lg duration-200 text-sm tracking-wider' htmlFor='check-in'>
          CHECK-IN
        </label>
        <input
          id='check-in'
          readOnly={isEverythingComplete ? true : false}
          name='check-in'
          onChange={handleChange}
          className='text-center cursor-pointer hover:text-sky-400 transition-all px-3 md:py-1 py-2 md:bg-transparent bg-slate-800 min-w-[60vw] md:min-w-0 text-white md:text-black rounded-full md:rounded-none text-sm font-bold duration-200'
          value={mainFormData["check-in"]}
          type='date'
        />
      </div>
      <div className='flex flex-col items-center gap-3 duration-200'>
        <label className='md:text-lg tracking-wider text-sm' htmlFor='check-out'>
          CHECK-OUT
        </label>
        <input
          id='check-out'
          readOnly={isEverythingComplete ? true : false}
          name='check-out'
          onChange={handleChange}
          className='text-center cursor-pointer hover:text-sky-400 transition-all px-3 md:py-1 py-2 md:bg-transparent bg-slate-800 min-w-[60vw] md:min-w-0 text-white md:text-black rounded-full md:rounded-none text-sm font-bold duration-200'
          value={mainFormData["check-out"]}
          type='date'
        />
      </div>
      <div className='flex flex-col items-center gap-3 duration-200'>
        <label className='text-sm md:text-lg tracking-wider' htmlFor='rooms'>
          ROOMS
        </label>
        <input
          id='rooms'
          readOnly={isEverythingComplete ? true : false}
          name='rooms'
          value={mainFormData["rooms"]}
          onChange={handleChange}
          className='text-center cursor-pointer hover:text-sky-400 transition-all px-2 md:py-1 rounded-full md:rounded-none text-white md:text-black focus:border focus:border-sky-600 focus:outline-sky-500 focus:rounded-md text-sm font-bold duration-200 bg-slate-800 md:bg-transparent min-w-[60vw] md:min-w-0 py-2'
          placeholder='no. of rooms'
          type='text'
        />
      </div>
      <div>
        <Button type={"submit"} text={`$${price}`} isMainForm={true} isEverythingComplete={isEverythingComplete} />
      </div>
    </div>
  );
};

export default BookingForm;

"use client";

import { BookingForm } from "@/components";
import { useForm } from "@/context/BookingContext";
import { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const BookingPage = () => {
  const { heroFormData, setMainFormData, mainFormData } = useForm();
  const [price, setPrice] = useState("000");
  const [isEverythingComplete, setIsEverythingComplete] = useState(false);

  const handleMainFormChange = (e) => {
    setMainFormData({
      ...mainFormData,
      [e.target.name]: [e.target.value],
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsEverythingComplete(true);
    console.log(mainFormData);
  };

  let dep = "";
  if (mainFormData) {
    dep = mainFormData && mainFormData["rooms"];
  }

  useEffect(() => {
    setPrice(mainFormData["rooms"] * 100);
  }, [dep]);

  return (
    <section className='min-h-[calc(100vh-95px)]'>
      {isEverythingComplete ? (
        <form
          onSubmit={submitHandler}
          className='min-h-[70vh] relative bg-slate-200 flex flex-col md:flex-row justify-between items-start transition-all duration-200'
        >
          <div className='flex flex-col md:flex-row items-center md:gap-20 gap-10 mx-auto mt-5 min-w-full md:min-w-0 md:mt-32 transition-all duration-200'>
            <div className='flex flex-col items-start gap-1 w-[36vw] transition-all duration-200'>
              <h4 className='text-4xl font-bold tracking-wider transition-all duration-200'>
                {mainFormData["tourist-name"]}
              </h4>
              <h4 className='text-sm transition-all duration-200'>
                +91 - {mainFormData["tourist-phone"]}
              </h4>
              <h4 className='text-sm transition-all duration-200'>
                {mainFormData["tourist-email"]}
              </h4>
              <h4 className='md:text-sm text-xs transition-all duration-200'>
                {mainFormData["no-of-adults"]} adults and{" "}
                {mainFormData["no-of-children"]} children
              </h4>
            </div>
            <div className='flex gap-5 items-center justify-center md:justify-end w-full mx-auto pl-5 md:pl-0 md:w-[36vw] transition-all duration-200'>
              <div>
                <FaCircleCheck className='text-7xl fill-green-700 transition-all duration-300' />
              </div>
              <div className='flex flex-col gap-1 transition-all duration-200'>
                <h4 className='text-4xl font-bold tracking-wider transition-all duration-200'>
                  Order complete
                </h4>
                <div>
                  <p className='text-sm transition-all duration-200'>
                    have questions ?
                  </p>
                  <p className='text-sm text-sky-700 transition-all duration-200'>
                    contact us
                  </p>
                </div>
              </div>
            </div>
          </div>
          <BookingForm
            isEverythingComplete={isEverythingComplete}
            price={price}
            className='absolute -bottom-56 md:-bottom-16 inset-x-8 md:inset-x-24'
          />
        </form>
      ) : (
        <form
          onSubmit={submitHandler}
          className='min-h-[70vh] relative bg-slate-200 flex flex-col md:flex-row justify-between items-start'
        >
          <div className='flex flex-col md:flex-row items-center gap-3 md:gap-20 mx-auto mt-10 md:mt-32'>
            <div className='flex flex-col items-center gap-3 md:gap-16 w-[70vw] md:w-[36vw]'>
              <input
                onChange={handleMainFormChange}
                value={mainFormData["tourist-name"]}
                type='text'
                name='tourist-name'
                className='w-full py-3 md:py-6 rounded-md px-5'
                placeholder='Enter your name'
              />
              <input
                onChange={handleMainFormChange}
                value={mainFormData["tourist-phone"]}
                type='text'
                name='tourist-phone'
                className='w-full py-3 md:py-6 rounded-md px-5'
                placeholder='Enter your mobile number'
              />
            </div>
            <div className='flex flex-col gap-3 md:gap-16 items-center w-[70vw] md:w-[36vw]'>
              <input
                onChange={handleMainFormChange}
                value={mainFormData["tourist-email"]}
                type='text'
                name='tourist-email'
                className='w-full py-3 md:py-6 rounded-md px-5'
                placeholder='enter your email'
              />
              <div className='w-full rounded-md flex items-center gap-2 md:gap-5 justify-between '>
                <input
                  onChange={handleMainFormChange}
                  value={mainFormData["no-of-adults"]}
                  name='no-of-adults'
                  className='w-[50%] py-3 md:py-6 placeholder:text-xs md:placeholder:text-base px-5 rounded-md'
                  type='text'
                  placeholder='no. of Adults'
                />
                <input
                  onChange={handleMainFormChange}
                  value={mainFormData["no-of-children"]}
                  name='no-of-children'
                  className='w-[50%] py-3 placeholder:text-xs md:placeholder:text-base md:py-6 px-5 rounded-md'
                  type='text'
                  placeholder='no. of children'
                />
              </div>
            </div>
          </div>
          <BookingForm
            checkIn={heroFormData && heroFormData["check-in"]}
            checkOut={heroFormData && heroFormData["check-out"]}
            rooms={heroFormData && heroFormData["rooms"]}
            price={price}
            className='absolute -bottom-40 md:-bottom-16 inset-x-8 md:inset-x-24'
          />
        </form>
      )}
    </section>
  );
};

export default BookingPage;

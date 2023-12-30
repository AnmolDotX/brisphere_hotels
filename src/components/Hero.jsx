import Image from "next/image";
import Ladakh from "../assets/ladakh.jpg";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BookingComp } from ".";

const HeroSection = () => {
  return (
    <section className='min-h-[calc(100vh-95px)]'>
      <div className='md:min-h-[70vh] relative bg-slate-200 flex flex-col md:flex-row justify-between items-start rounded-md'>
        <div className='md:w-1/2 w-full flex flex-col gap-2 md:gap-8  md:min-h-[70vh]  py-10 pl-10'>
          <h3 className='flex flex-col gap-2 md:gap-5 text-2xl md:text-7xl font-medium text-gray-900/90'>
            <span>Work from </span>
            <span>ladakh</span>
          </h3>
          <p className='text-base font-light text-black/70 tracking-wider'>
            India's first true digital tourism ecosystem
          </p>
          <div className='flex items-center text-2xl gap-2 md:text-4xl md:gap-5'>
            <FaFacebook className='opacity-70' />
            <RiInstagramFill className='text-3xl md:text-5xl opacity-70' />
          </div>
        </div>
        <div className='md:w-1/2 w-full md:relative min-h-[50vh] md:min-h-[70vh]'>
          <div className='h-full w-full'>
            <Image
              src={Ladakh}
              alt='ladakh road image'
              className=' min-h-[50vh] rounded-md md:min-h-[70vh] object-cover w-full z-10'
              loading='eager'
            />
          </div>
        </div>
        <BookingComp className='absolute -bottom-64 md:-bottom-16 inset-x-8 md:inset-x-24' />
      </div>
    </section>
  );
};

export default HeroSection;

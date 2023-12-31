import { IoStar } from "react-icons/io5";
import ProfilePic from "../assets/dummyFace.png";
import Ladakh from "../assets/ladakh.jpg";
import Image from "next/image";
const Discover = () => {
  return (
    <section
      id='discover'
      className='min-h-screen flex flex-col items-center gap-5 md:gap-16'
    >
      <div className='text-gray-900/90 text-3xl md:text-5xl'>
        <h3>Discover</h3>
      </div>
      <div className='flex flex-col md:grid md:grid-cols-3 gap-10 min-w-full md:min-w-0  overflow-scroll h-[70vh] shadow-black/50 shadow-sm px-2 rounded-md md:rounded-none md:shadow-none md:h-full py-5 md:overflow-hidden'>
        <div className='min-h-[30vh] md:h-[20vh] min-w-72 p-3 rounded-md bg-slate-100 shadow-lg shadow-slate-400/70 overflow-hidden flex flex-col items-start justify-around'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center justify-center rounded-full bg-slate-200'>
              <Image
              alt="profile pic"
                src={ProfilePic}
                className='rounded-full'
                width={50}
                height={50}
              />
            </div>
            <div>
              <h4 className='font-bold text-sm tracking-wide'>Arjun Raghav</h4>
              <span className='flex items-center gap-1 text-xs text-yellow-500'>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
            </div>
          </div>
          <p className='text-xs font-light text-gray-900/90'>
            I am writing this after reflecting on my one month stay with
            Bricabin in Ladakh. Right month stay with Bricabin in Ladakh. Right
            from picking us up at the airport to dropping us back there after a
            month, Urgan was very responsible and took good care of my friends
            responsible and took good care of my friends and me.{" "}
            <span className='text-sky-600'>read more.</span>
          </p>
        </div>
        <div className='min-h-[50vh] md:h-full min-w-72 rounded-md bg-slate-100 row-span-3 shadow-lg shadow-slate-400/70 flex flex-col items-center justify-between'>
          <div className='h-[50%] md:h-[70%]'>
            <Image alt="ladakh" src={Ladakh} className='h-full object-cover rounded-t-md' />
          </div>
          <div className='overflow-hidden flex flex-col items-start justify-around h-[50%] md:h-[30%] p-3'>
            <div className='flex items-center gap-2'>
              <div className='flex items-center justify-center rounded-full bg-slate-200'>
                <Image
                  alt='profile pic'
                  src={ProfilePic}
                  className='rounded-full'
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h4 className='font-bold text-sm tracking-wide'>
                  Arjun Raghav
                </h4>
                <span className='flex items-center gap-1 text-xs text-yellow-500'>
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </span>
              </div>
            </div>
            <p className='text-xs font-light text-gray-900/90'>
              I am writing this after reflecting on my one month stay with
              Bricabin in Ladakh. Right month stay with Bricabin in Ladakh.
              Right from picking us up at the airport to dropping us back there
              after a month, Urgan was very responsible and took good care of my
              friends responsible and took good care of my friends and me.{" "}
              <span className='text-sky-600'>read more.</span>
            </p>
          </div>
        </div>
        <div className=' min-h-[30vh] md:h-[20vh] min-w-72 p-3 rounded-md bg-slate-100 shadow-lg shadow-slate-400/70 overflow-hidden flex flex-col items-start justify-around'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center justify-center rounded-full bg-slate-200'>
              <Image
                alt='profile pic'
                src={ProfilePic}
                className='rounded-full'
                width={50}
                height={50}
              />
            </div>
            <div>
              <h4 className='font-bold text-sm tracking-wide'>Arjun Raghav</h4>
              <span className='flex items-center gap-1 text-xs text-yellow-500'>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
            </div>
          </div>
          <p className='text-xs font-light text-gray-900/90'>
            I am writing this after reflecting on my one month stay with
            Bricabin in Ladakh. Right month stay with Bricabin in Ladakh. Right
            from picking us up at the airport to dropping us back there after a
            month, Urgan was very responsible and took good care of my friends
            responsible and took good care of my friends and me.{" "}
            <span className='text-sky-600'>read more.</span>
          </p>
        </div>
        <div className='min-h-[50vh] md:h-full min-w-72 rounded-md bg-slate-100 row-span-2 shadow-lg shadow-slate-400/70 flex flex-col items-center justify-between'>
          <div className='h-[50%] md:h-[70%]'>
            <Image src={Ladakh} className='h-full object-cover rounded-t-md' />
          </div>
          <div className='overflow-hidden flex flex-col items-start justify-around h-[50%] md:h-[30%] p-3'>
            <div className='flex items-center gap-2'>
              <div className='flex items-center justify-center rounded-full bg-slate-200'>
                <Image
                  alt='profile pic'
                  src={ProfilePic}
                  className='rounded-full'
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h4 className='font-bold text-sm tracking-wide'>
                  Arjun Raghav
                </h4>
                <span className='flex items-center gap-1 text-xs text-yellow-500'>
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </span>
              </div>
            </div>
            <p className='text-xs font-light text-gray-900/90'>
              I am writing this after reflecting on my one month stay with
              Bricabin in Ladakh. Right month stay with Bricabin in Ladakh.
              Right from picking us up at the airport to dropping us back there
              after a month, Urgan was very responsible and took good care of my
              friends responsible and took good care of my friends and me.{" "}
              <span className='text-sky-600'>read more.</span>
            </p>
          </div>
        </div>
        <div className='min-h-[30vh] md:h-[20vh] min-w-72 p-3 rounded-md bg-slate-100 shadow-lg shadow-slate-400/70 overflow-hidden flex flex-col items-start justify-around'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center justify-center rounded-full bg-slate-200'>
              <Image
                alt='profile pic'
                src={ProfilePic}
                className='rounded-full'
                width={50}
                height={50}
              />
            </div>
            <div>
              <h4 className='font-bold text-sm tracking-wide'>Arjun Raghav</h4>
              <span className='flex items-center gap-1 text-xs text-yellow-500'>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
            </div>
          </div>
          <p className='text-xs font-light text-gray-900/90'>
            I am writing this after reflecting on my one month stay with
            Bricabin in Ladakh. Right month stay with Bricabin in Ladakh. Right
            from picking us up at the airport to dropping us back there after a
            month, Urgan was very responsible and took good care of my friends
            responsible and took good care of my friends and me.{" "}
            <span className='text-sky-600'>read more.</span>
          </p>
        </div>
        <div className='min-h-[30vh] md:h-[20vh] min-w-72 p-3 rounded-md bg-slate-100 shadow-lg shadow-slate-400/70 overflow-hidden flex flex-col items-start justify-around'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center justify-center rounded-full bg-slate-200'>
              <Image
                alt='profile pic'
                src={ProfilePic}
                className='rounded-full'
                width={50}
                height={50}
              />
            </div>
            <div>
              <h4 className='font-bold text-sm tracking-wide'>Arjun Raghav</h4>
              <span className='flex items-center gap-1 text-xs text-yellow-500'>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
            </div>
          </div>
          <p className='text-xs font-light text-gray-900/90'>
            I am writing this after reflecting on my one month stay with
            Bricabin in Ladakh. Right month stay with Bricabin in Ladakh. Right
            from picking us up at the airport to dropping us back there after a
            month, Urgan was very responsible and took good care of my friends
            responsible and took good care of my friends and me.{" "}
            <span className='text-sky-600'>read more.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Discover;

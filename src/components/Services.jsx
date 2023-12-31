import { ServiceCard } from ".";
import ServiceData from '../utils/services_data.json';

const Services = () => {
  return (
    <section id="services" className='min-h-screen flex py-2 md:py-10 flex-col items-center gap-5 md:gap-16'>
      <div className='text-gray-900/90 text-3xl md:text-5xl'>
        <h3>Services</h3>
      </div>
      <div className=" flex items-center min-h-screen justify-center overflow-y-auto md:overflow-hidden rounded-xl md:rounded-none w-full flex-col shadow-black/50 shadow-sm py-5 md:shadow-none px-5  md:grid md:grid-cols-3 md:grid-rows-3 gap-10">
         {
            ServiceData.map(({icon, title, detail})=>(
                <div key={title}>
                    <ServiceCard icon={icon} title={title} detail={detail} />
                </div>
            ))
         }
      </div>
    </section>
  );
};

export default Services;

import { ServiceCard } from ".";
import ServiceData from '../utils/services_data.json';

const Services = () => {
  return (
    <section id="services" className='min-h-screen flex py-10 flex-col items-center gap-16'>
      <div className='text-gray-900/90 text-5xl'>
        <h3>Services</h3>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-10">
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

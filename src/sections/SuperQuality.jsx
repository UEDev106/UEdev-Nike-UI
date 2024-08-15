import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-blue-600'> Super </span>
          <span className='text-blue-600'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
         With a focus on ultimate comfort and style, our exquisitely designed footwear elevates your experience through unmatched quality, cutting-edge innovation, and a dash of elegance.


        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        Our pursuit of perfection and attention to detail assures your satisfaction.
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;

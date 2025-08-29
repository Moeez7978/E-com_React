import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiSecurePaymentLine } from 'react-icons/ri';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* Service 1 */}
        <div className="w-full sm:w-64 h-28 sm:h-60  flex items-center justify-center text-center rounded-md shadow-md bg-gray-100">
          <div className="flex flex-col items-center justify-between h-full py-6">
            <TbTruckDelivery className="bg-white rounded-full text-purple-500 text-4xl p-2" />
            <h3 className="font-light mt-2 sm:mt-4 text-base sm:text-lg">Fast and Reliable Delivery</h3>
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex flex-row sm:flex-col gap-20 sm:gap-6">
          <div className="w-full sm:w-64 h-24 flex flex-col items-center justify-center text-center rounded-md bg-gray-100 shadow-md">
            <MdSecurity className="bg-white rounded-full text-purple-500 text-3xl p-2" />
            <h3 className="font-light mt-2 text-base sm:text-lg">Non-Contact Shipping</h3>
          </div>
          <div className="w-full sm:w-64 h-24 flex flex-col items-center justify-center text-center rounded-md bg-gray-100 shadow-md">
            <GiReceiveMoney className="bg-white rounded-full text-purple-500 text-3xl p-2" />
            <h3 className="font-light mt-2 text-base sm:text-lg">Money Back Guarantee</h3>
          </div>
        </div>

        {/* Service 3 */}
        <div className="w-full sm:w-64 h-28 sm:h-60 flex items-center justify-center text-center rounded-md shadow-md bg-gray-100">
          <div className="flex flex-col items-center justify-between h-full py-6">
            <RiSecurePaymentLine className="bg-white rounded-full text-purple-500 text-4xl p-2" />
            <h3 className="font-light mt-2 sm:mt-4 text-base sm:text-lg">Secure Payment</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

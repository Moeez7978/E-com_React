import React from 'react';

const Trusted = () => {
  return (
    <div className="container mx-auto px-4 py-10 bg-gray-200">
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-2xl sm:text-3xl font-medium tracking-[6px] text-center">
          Trusted by 1000+ Companies
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {[
            'image2.png',
            'image3.png',
            'image4.png',
            'image5.png',
            'image6.png',
            'image7.png',
            'image8.png',
          ].map((img, index) => (
            <div key={index} className="w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 flex items-center justify-center">
              <img
                src={`https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/${img}`}
                alt="trusted-brand-logo"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;

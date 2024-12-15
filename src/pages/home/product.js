import React, { useEffect, useState } from 'react';

const AboutPage = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const sponsors = [
    { name: "MANI", imgSrc: "/assets/choice.svg" },
    { name: "MONEYLINE", imgSrc: "/assets/city.svg" },
    { name: "Mortgage Choice", imgSrc: "/assets/mani pro.svg" },
    { name: "City of West Torrens", imgSrc: "/assets/moneyline.svg" },
    { name: "PRISTINE DENTISTRY", imgSrc: "/assets/pristine.svg" }
  ];

  // Faster sponsor scroll - reduced interval to 1500ms (1.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
    }, 1500); // Increased speed
    return () => clearInterval(timer);
  }, [sponsors.length]);

  return (
    <div className="w-full bg-white shadow-sm overflow-hidden ">
      {/* Sponsors Header with Faster Animation */}
      <div className="w-full  p-6 h-[150px] relative overflow-hidden rounded-bl-3xl bg-[#25223D]  ">
        <div 
          className="flex items-center absolute" 
          style={{ 
            transform: `translateX(-${scrollIndex * 200}px)`,
            transition: 'transform 0.5s ease-in-out' // Faster transition
          }}
        >
          {/* Doubled sponsors array for continuous loop */}
          {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
            <div key={index} className="mx-8 flex-shrink-0">
              <img 
                src={sponsor.imgSrc}
                alt={sponsor.name}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-gradient-to-b from-purple-100 to-white p-10">
        <h1 className="text-4xl font-bold text-[#E16811] text-center mb-8 ml-36">
          About Us
        </h1>
        
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-start px-8">
          {/* Left Section - Static Curved Design */}
          <div className="w-full md:w-2/5 relative mt-36">
            {/* Purple curved background with reduced size */}
            <div className="absolute top-8 left-10 bg-[#25223D] w-[100%] h-[300px] rounded-[20px] transform -rotate-0"></div>

            {/* Main content container with reduced size */}
            <div className="relative bg-purple-100 rounded-[40px] ml-4 w-[100%] h-[300px]">
              {/* Orange squares decoration */}
              <div className="absolute -top-4 -left-4 flex gap-1">
                <div className="w-4 h-4 bg-orange-500"></div>
                <div className="w-3 h-3 bg-orange-500 ml-1"></div>
              </div>
              
              {/* Image container with reduced size */}
              <div className="relative h-full w-full overflow-hidden rounded-[40px]">
                  <img
                    src="/assets/groupmeet2017.svg"
                    alt="Community Group"
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: "center",
                    }}
                  />
                </div>

            </div>
          </div>

          {/* Right Section - Content */}
          <div className="w-full md:w-1/2 space-y-6 pt-4">
            <h2 className="text-4xl font-bold text-[#25223D]">
              Adelaide Tamil Association
            </h2>

            <p className="text-lg text-gray-700">
              Adelaide Tamil Association (ATA) is a non-profit, cultural organization 
              serving the Adelaide Tamil community and will strive to maintain Tamil 
              culture, educational, and community activities.
            </p>

            <p className="text-lg text-gray-700">
              Membership of the Adelaide Tamil Association is open to South 
              Australians who have a keen interest and desire to foster the Tamil 
              culture, language, and social interaction with other Tamils here in 
              South Australia.
            </p>

            <p className="text-lg text-gray-700">
              ATA values the contributions of its members and volunteers, who 
              continue to enrich this Tamil community and preserve its tradition in 
              Adelaide. We strongly recommend all Tamil people to become a part of ATA.
            </p>

            <p className="text-lg text-gray-700">
              ATA events make a great place for enriching our tradition for our 
              children.
            </p>

            <p className="text-lg text-gray-700">
              If you want more information, please contact us:<br />
              <a href="mailto:info@adelaidetamil.com.au" className="text-blue-600 hover:underline">
                info@adelaidetamil.com.au
              </a>
            </p>

            <p className="text-xl font-semibold text-[#25223D]">
              We work with the community for the community!!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
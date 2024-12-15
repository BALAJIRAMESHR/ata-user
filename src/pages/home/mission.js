import React from 'react';

const MissionVisionSection = () => {
  return (
    <div className="w-full px-4 py-8 md:p-16 lg:p-16 bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        {/* Mission Image */}
        <div className="w-full md:w-1/2 lg:w-[120%] h-[600px] flex items-center justify-center relative group p-1 rounded-md transition-all duration-300 hover:scale-105">
          <img
            src="/assets/missionmain.svg"
            alt="Mission"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        
        {/* Vision Image */}
        <div className="w-full md:w-1/2 lg:w-[120%] h-[600px] flex items-center justify-center relative group p-1 rounded-md transition-all duration-300 hover:scale-105">
          <img
            src="/assets/visionmain.svg"
            alt="Vision"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
      
      {/* Join Community Button */}
     <div className="flex justify-center mt-8 md:mt-12">
        <button
          className="w-full md:w-auto px-6 py-2 md:px-8 md:py-3 bg-[#E16811] border-2 border-[#E16811] hover:bg-opacity-90 text-white transition-colors duration-300 text-base sm:text-sm md:text-lg font-medium rounded-md"
          onClick={() => (window.location.href = '/membership')}
        >
          Join Our Community
        </button>
      </div>

    </div>
  );
};

export default MissionVisionSection;
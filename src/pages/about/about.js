import React, { useState, useRef, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const timelineData = {
  '1990': {
    image: "/assets/about.svg",
    title: "In 1990 'S",
    content: "'To us all towns are one, all men our kin' – Kaniyan Poongunranaar and 'Seek wealth, even by riding the waves' – Konrai Vaendhan (Avvayaar) inspired many Tamils to move to South Australia, seeking better opportunities. Initially scattered and small in number, they couldn't form a community."
  },
  '1995': {
    image: "assets/about-1.svg",
    title: "In 1995'S",
    content: "The Tamil population grew steadily as word spread about Adelaide's quality of life. Small cultural gatherings began in community halls, marking the first celebrations of Pongal and Tamil New Year in the city."
  },
  '2000': {
    image: "assets/about-2.svg",
    title: "In 2000'S",
    content: "The millennium marked a significant shift as the Tamil community began actively participating in multicultural events. The first Tamil language school was established, ensuring cultural preservation for the next generation."
  },
  '2004': {
    image: "assets/about-4.svg",
    title: "In 2004's",
    content: "The Adelaide Tamil Association was officially registered, providing a formal platform for community activities and cultural celebrations. The first major cultural show attracted over 500 attendees."
  },
  '2008': {
    image: "assets/about-5.svg",
    title: "In 2008'S",
    content: "Tamil entrepreneurs began establishing successful businesses in Adelaide, from IT consulting firms to restaurants. The community's economic contribution became increasingly significant."
  },
  '2015': {
    image: "/assets/about-6.svg",
    title: "In 2015'S",
    content: "Tamil students consistently achieved outstanding results in South Australian schools. The community established scholarship programs to support higher education."
  },
  '2018': {
    image: "/assets/about-7.svg",
    title: "In 2018'S",
    content: "The first Tamil Arts Festival showcased traditional music, dance, and literature. Local Tamil artists gained recognition in mainstream Australian cultural events."
  },
  '2020': {
    image: "/assets/about-8.svg",
    title: "In 2020'S",
    content: "During the global pandemic, the community showcased remarkable resilience by transitioning cultural events and language classes online, reaching even more people across South Australia."
  }
};

const AdelaideStoryTimeline = () => {
  const yearsArray = Object.keys(timelineData);
  const [activeYear, setActiveYear] = useState('1990');
  const [direction, setDirection] = useState(0);
  const timelineRef = useRef(null);

  const handleYearChange = (newYear) => {
    const currentIndex = yearsArray.indexOf(activeYear);
    const newIndex = yearsArray.indexOf(newYear);
    
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveYear(newYear);
  };

  const TimelinePoint = ({ year }) => {
    const isActive = activeYear === year;
    const index = yearsArray.indexOf(year);

    return (
      <div
        className="absolute cursor-pointer group"
        style={{
          left: `${(index / (yearsArray.length - 1)) * 100}%`, // Evenly distributed across the line
          top: '50%',
          transform: 'translateY(-50%)'
        }}
        onClick={() => handleYearChange(year)}
      >
        <div
          className={`h-4 w-4 rounded-full transition-all duration-300 ${
            isActive ? 'bg-orange-500 scale-125' : 'bg-orange-300 hover:bg-orange-400'
          }`}
        />
        <span
          className={`absolute -bottom-6 -left-4 text-sm ${
            isActive ? 'text-orange-500 font-bold' : 'text-orange-300'
          }`}
        >
          {year}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 text-center mb-16">
          The Adelaide Story
          <div className="mt-2">
            <div className="h-0.5 w-32 mx-auto bg-blue-900"></div>
          </div>
        </h1>

        <div className="mb-20 relative">
          <motion.div 
            key={activeYear}
            initial={{ opacity: 0, x: direction > 0 ? '100%' : '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? '-100%' : '100%' }}
            transition={{ type: "tween", duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left - Image */}
            <motion.div
              className="lg:col-span-4"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="relative">
                <img
                  src={timelineData[activeYear]?.image}
                  alt={`${activeYear} story`}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Center - Year */}
            <div className="lg:col-span-3">
              <div className="text-blue-600 text-6xl md:text-8xl font-bold text-center">
                {activeYear}
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-gray-600" />
                <h2 className="text-xl md:text-2xl text-gray-600">{timelineData[activeYear]?.title}</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {timelineData[activeYear]?.content}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Curved Timeline */}
        <div className="relative h-12 mt-0 mb-24">
          {/* Curved line */}
          <div 
            ref={timelineRef}
            className="absolute w-full h-0.5 bg-gray-300" 
            style={{ 
              top: '50%', 
              left: 0,
              transform: 'translateY(-50%)' 
            }}
          />

          {/* Timeline points */}
          {yearsArray.map((year) => (
            <TimelinePoint 
              key={year}
              year={year}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdelaideStoryTimeline;
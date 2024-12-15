import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Play } from 'lucide-react';
import Product from './product';
import Mission from './mission';
import Post from './post';
import Event from './event';
import './home.css';


const landscapes = [
  { 
    name: "குறிஞ்சி", 
    description: "Explore Mountain Landscapes",
    backgroundImage: "/assets/mounttain.svg",
    boxImages: [
      "/assets/kurinji.svg",
    ]
  },
  { 
    name: "முல்லை", 
    backgroundImage:"/assets/Kaaaadu.svg" ,
    boxImages: [
      "/assets/marutham.svg",
    ]
  },
  { 
    name: "மருதம்", 
    backgroundImage: "/assets/vaayal.svg",
    boxImages: [
      "/assets/mulai.svg",
    ]
  },
   { 
    name: "நெய்தல்", 
    backgroundImage: "/assets/seea.svg",
    boxImages: [
      "/assets/neithal.svg"
    ]
  },
    { 
    name: "பாலை", 
    backgroundImage: "/assets/paalai.svg",
    boxImages: [
    "/assets/palai.svg"
    ]
  }
];

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleBoxes, setVisibleBoxes] = useState([0, 1]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const productSectionRef = useRef(null);

  const advanceSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % landscapes.length);
      setVisibleBoxes((prev) => {
        const nextIndex = (prev[1] + 1) % landscapes.length;
        return [prev[1], nextIndex];
      });
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setInterval(advanceSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div 
        className="relative w-full min-h-[120vh] bg-cover bg-center transition-all duration-500"
        style={{ 
          backgroundImage: `url(${landscapes[currentSlide].backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 w-full h-full px-4 lg:px-12 flex flex-col">
          <div className="mt-16 lg:mt-32 mb-6 lg:mb-10 text-center">
            <h1 className="text-4xl lg:text-6xl font-semibold text-white mb-12 lg:mb-24">
              {landscapes[currentSlide].name}
            </h1>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-4/5 text-center lg:text-left px-4 lg:px-0">
              <h2 className="text-orange-400 text-xl lg:text-3xl mb-4 lg:mb-12">Welcome to "Adelaide Tamil Association"</h2>
              <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">Improve your Communication</h3>
              <h3 className="text-3xl lg:text-5xl font-bold text-white mb-8 lg:mb-12">with Us</h3>
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection(productSectionRef)}
                  className="bg-orange-500 hover:bg-orange-600 text-lg lg:text-2xl text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg flex items-center gap-2 justify-center"
                >
                  Get Started
                  <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
                </button>
                <button className="text-orange-500 hover:text-orange-400 px-6 py-3 lg:px-8 text-lg lg:text-2xl lg:py-4 rounded-lg flex items-center gap-2 justify-center">
                  <Play className="w-6 h-6 lg:w-10 lg:h-10" />
                  Play Video
                </button>
              </div>
            </div>

            {/* Image Boxes - Responsive Handling */}
            <div className="hidden lg:flex w-1/5 justify-end items-center gap-8 pr-1 relative">
              {visibleBoxes.map((boxIndex, idx) => (
                <div 
                  key={boxIndex}
                  className={`relative ${idx === 1 ? 'w-[300px] h-[400px]' : 'w-[350px] h-[450px]'} aspect-square transform transition-all duration-500 ${
                    isTransitioning && idx === 0 ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'
                  }`}
                  style={{ 
                    transitionDelay: idx === 1 ? '100ms' : '0ms', 
                    position: 'absolute', 
                    right: idx === 0 ? '320px' : '0',
                    '@media (max-width: 1024px)': {
                      display: 'none'
                    }
                  }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold mt-2">
                    {landscapes[boxIndex].name}
                  </div>

                  <div className={`absolute inset-0 rounded-[32px] overflow-hidden border-4 border-white`}>
                    {landscapes[boxIndex].boxImages.map((image, imageIndex) => (
                      <img 
                        key={imageIndex}
                        src={image}
                        alt={`${landscapes[boxIndex].description} - Image ${imageIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                        style={{
                          opacity: imageIndex === 0 ? 1 : 0,
                          zIndex: imageIndex === 0 ? 10 : 1
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots under the images */}
          <div className="hidden lg:flex absolute top-full mt-32 ml-36 left-1/2 transform -translate-x-1/2 gap-3">
            {landscapes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentSlide(index);
                    setVisibleBoxes([index, (index + 1) % landscapes.length]);
                    setIsTransitioning(false);
                  }, 500);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white scale-100' 
                    : 'bg-white/50 scale-75 hover:scale-90 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sections with Refs */}
      <div ref={productSectionRef} className="w-full pb-16">
        <Product />
      </div>
      <div className="w-full">
        <Mission/>
      </div>
      <div className="w-full">
        <Post/>
      </div>
      <div className="w-full">
        <Event/>
      </div>
    </div>
  );
};

export default LandingPage;
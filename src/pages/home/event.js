import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Bell, MapPin } from 'lucide-react';

const EventCard = ({ title, date, location, imageUrl }) => {
  const navigate = useNavigate();

  const handleEventClick = () => {
    navigate('/events');
  };

  return (
    <div 
      onClick={handleEventClick}
      className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl || "/api/placeholder/400/300"} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-2 text-sm">{date}</p>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-2" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="w-full">
          <button 
            className="w-full bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const EventCarousel = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const navigate = useNavigate();

  const events = [
    { title: "Summer Festival", date: "25th July, 2024", location: "Adelaide, 33176", imageUrl: "/assets/event-1.svg" },
    { title: "Food Workshop", date: "26th July, 2024", location: "Adelaide, 33176", imageUrl: "/assets/event-2.svg" },
    { title: "Music Concert", date: "22th July, 2024", location: "Adelaide, 33176", imageUrl: "/assets/event-3.svg" },
    { title: "Art Exhibition", date: "23th July, 2024", location: "Adelaide, 33176", imageUrl: "/assets/event-4.svg" },
    { title: "Dance Show", date: "24th July, 2024", location: "Adelaide, 33176", imageUrl: "/assets/event-6.svg" },
    { title: "Poetry Reading", date: "27th July, 2024", location: "Adelaide, 33176", imageUrl: "/assets/event-1.svg" }
  ];

  const eventGroups = [];
  for (let i = 0; i < events.length; i += 3) {
    eventGroups.push(events.slice(i, i + 3));
  }

  const nextGroup = () => {
    setCurrentGroup((prev) => (prev + 1) % eventGroups.length);
  };

  const prevGroup = () => {
    setCurrentGroup((prev) => (prev - 1 + eventGroups.length) % eventGroups.length);
  };

  useEffect(() => {
    const timer = setInterval(nextGroup, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-orange-600">Events</h1>
        <p className="text-center text-gray-600 mb-6 px-4">
          All the Events organised by Adelaide Tamil Association
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 px-4">
          <div className="flex items-center mb-4 md:mb-0">
            <Bell className="text-yellow-600 mr-2" />
            <span className="italic text-gray-700">Don't miss out on these!</span>
          </div>
          <button 
            onClick={() => navigate('/events')}
            className="flex items-center text-gray-900 font-semibold cursor-pointer hover:text-orange-500 transition-colors"
          >
            <span className="mr-1">See All Events</span>
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center">
            <button 
              onClick={prevGroup}
              className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 p-2  rounded-full bg-white shadow-xl hover:bg-gray-200 transition-colors hidden md:block"
              aria-label="Previous events"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex overflow-hidden relative w-full">
              <div 
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{ transform: `translateX(-${currentGroup * 100}%)` }}
              >
                {eventGroups.map((group, groupIndex) => (
                  <div 
                    key={groupIndex} 
                    className="grid grid-cols-1 md:grid-cols-3 w-full flex-shrink-0 gap-4 px-4"
                  >
                    {group.map((event) => (
                      <div key={event.title} className="w-full">
                        <EventCard {...event} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={nextGroup}
              className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-xl hover:bg-gray-200 transition-colors hidden md:block"
              aria-label="Next events"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-4">
            {eventGroups.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  currentGroup === index ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentGroup(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12 md:mt-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect, share, and grow with like-minded individuals. Your journey starts here!
          </p>
          <button 
            className="bg-white border-2 border-orange-500 text-orange-500 px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-orange-500 hover:text-white transition-colors duration-300"
            onClick={() => navigate('/membership')}
          >
            Join Our Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;
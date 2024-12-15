import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventsPage = () => {
  const navigate = useNavigate();

  const ongoingEvents = [
    {
      id: 1,
      title: "Farewell Celebration",
      date: "20th July, 2024",
      location: "Adelaide, 33176",
      image: "/assets/event-1.svg"
    },
    {
      id: 2,
      title: "One day Kitchen Spot",
      date: "26th July, 2024",
      location: "Adelaide, 33176",
      image: "/assets/event-2.svg"
    }
  ];

  const upcomingEvents = [
    {
      id: 3,
      title: "Farewell Celebration",
      date: "20th July, 2024",
      location: "Adelaide, 33176",
      image: "/assets/event-3.svg"
    },
    {
      id: 4,
      title: "One day Kitchen Spot",
      date: "26th July, 2024",
      location: "Adelaide, 33176",
      image: "/assets/event-4.svg"
    },
    {
      id: 5,
      title: "Agriculture Awareness",
      date: "22nd July, 2024",
      location: "Adelaide, 33176",
      image: "/assets/event-6.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Events</h1>

        <div>
          <h2 className="text-2xl font-bold mb-12">Ongoing Events</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ongoingEvents.map((event) => (
              <EventCard key={event.id} event={event} navigate={navigate} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} navigate={navigate} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ event, navigate }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gray-200">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>

        <div className="space-y-2 text-gray-500">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{event.date}</span>
          </div>

          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{event.location}</span>
          </div>
        </div>

        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-full" onClick={() => navigate('/membership')}>
          Join Now
        </button>
      </div>
    </div>
  );
};

export default EventsPage;
import React from 'react';

const TeamGrid = () => {
  const teamMembers = [
    { 
      name: "Mr. John Karin", 
      role: "President", 
      variant: "peach",
      image: "/assets/team-1.svg" // Replace with your actual image paths
    },
    { 
      name: "Mr. Manikandan", 
      role: "Secretary", 
      variant: "gray",
      image: "/assets/team-2.svg"
    },
    { 
      name: "Mr. Keerthidas", 
      role: "Treasure", 
      variant: "peach",
      image: "/assets/team-3.svg"
    },
    { 
      name: "Mr. Lawrence Khan", 
      role: "Management Committee", 
      variant: "gray",
      image: "/assets/team-4.svg"
    },
    { 
      name: "Mrs. Sara", 
      role: "President", 
      variant: "peach",
      image: "/assets/team-5.svg"
    },
    { 
      name: "Mr. Gowtham", 
      role: "Secretary", 
      variant: "gray",
      image: "/assets/team-6.svg"
    },
    { 
      name: "Mrs. Kaathimandu", 
      role: "Treasure", 
      variant: "peach",
      image: "/assets/team-7.svg"
    },
    { 
      name: "Mrs. Lavanya", 
      role: "Management Committee", 
      variant: "gray",
      image: "/assets/team-8.svg"
    }
  ];

  const StarIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" />
    </svg>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="text-orange-500">Our Team</span>
        <span className="inline-block ml-2 relative">
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group">
            <div className={`relative p-4 rounded-lg ${
              member.variant === 'peach' ? 'bg-orange-100' : 'bg-gray-100'
            }`}>
              {/* Main image container */}
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/api/placeholder/192/192"; // Fallback image if load fails
                  }}
                />
              </div>
              
              {/* Top-left star decoration */}
              <StarIcon className="absolute -top-2 -left-2 w-6 h-6 text-orange-400" />
              
              {/* Bottom-right star decoration */}
              <StarIcon className="absolute -bottom-2 -right-2 w-6 h-6 text-blue-600" />
              
              {/* Text content */}
              <div className="text-center mt-4">
                <h3 className="font-medium text-lg">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
import React from 'react';
import './post.css'

const LatestPostsSection = () => {
  const posts = [
    {
      id: 1,
      image: '/assets/post-1.svg', // Replace with actual image path
      title: 'ENTREPRENEURSHIP OPPORTUNITY',
    },
    {
      id: 2,
      image: '/assets/post-2.svg', // Replace with actual image path
      title: '“EMPOWERED WOMEN, EMPOWERS WOMEN”',
    },
    {
      id: 3,
      image: '/assets/post-3.svg', // Replace with actual image path
      title: 'BOWEL CANCER SCREENING PROGRAM FOR MEN',
    },
  ];

  return (
    <div className="w-full py-12 px-4 bg-[#F8F8FA] text-center">
      <h2 className="text-3xl font-bold text-[#E16811]">
        Our Latest Post
      </h2>
      <p className="text-gray-600 mt-2 mb-8">
        All the Newsletter / Post published by <br /> Adelaide Tamil Association
      </p>

      <div className="flex flex-wrap justify-center gap-24">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="max-w-[300px] bg-white rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover-orange-shadow"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{post.title}</h3>
              <button
              className="mt-4 px-4 py-2 text-[#E16811] border border-[#E16811] rounded-full hover:bg-[#E16811] hover:text-white transition duration-300"
              onClick={() => window.location.href = '/blog'}
            >
              Read More
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPostsSection;

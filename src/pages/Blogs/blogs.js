import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { CalendarDays, ArrowLeft, Search, X } from 'lucide-react';
import Bird from './download.jpg';

// Blog Posts Data
const blogPosts = [
  {
    id: 1,
    title: "A' Design Award & Competitions: Final Call For Submissions",
    excerpt: "Embark on a journey to the untouched beauty of a secluded beach nestled away from the hustle and bustle of city life.",
    date: "May 24, 2023",
    image: "/assets/blogs.svg", // Assuming this is a valid image path
    category: "Design Awards",
    keywords: ["design", "competition", "awards", "creativity"],
    fullContent: [
      {
        type: 'paragraph',
        text: "The A' Design Award & Competitions is making its final call for submissions. This prestigious competition invites designers, innovators, and companies from around the globe to participate and showcase their best works."
      },
      {
        type: 'heading',
        text: "A Global Design Celebration"
      },
      {
        type: 'paragraph',
        text: "Recognized as one of the most significant accolades in the design industry, the A' Design Award covers a wide range of categories, ensuring every creative field is represented."
      }
    ]
  },
  {
    id: 2,
    title: "Sustainable Design Innovations",
    excerpt: "Exploring groundbreaking eco-friendly design solutions reshaping sustainability.",
    date: "June 15, 2023",
    image: Bird,  // Using local image imported
    category: "Sustainability",
    keywords: ["eco", "design", "innovation", "green"],
    fullContent: [
      {
        type: 'paragraph',
        text: "Sustainable design has emerged as a critical approach to addressing global environmental challenges. From materials that reduce carbon footprint to designs that promote energy efficiency, innovative solutions are transforming industries worldwide."
      },
      {
        type: 'heading',
        text: "The Future of Eco-Friendly Design"
      },
      {
        type: 'paragraph',
        text: "Innovative approaches include upcycling, biomimicry, and circular design principles that reimagine how products are created, used, and recycled."
      }
    ]
  },
  {
    id: 3,
    title: "The Rise of Minimalist Design",
    excerpt: "Exploring the principles of minimalism in modern design aesthetics.",
    date: "July 10, 2023",
    image: "/assets/kurinji.svg",  // Assuming this is a valid image path
    category: "Design Trends",
    keywords: ["minimalism", "design", "trends", "simplicity"],
    fullContent: [
      {
        type: 'paragraph',
        text: "Minimalist design has transcended from a passing trend to a fundamental philosophy in contemporary design. Characterized by simplicity, clean lines, and a 'less is more' approach, minimalism has revolutionized various creative disciplines."
      },
      {
        type: 'heading',
        text: "Core Principles of Minimalist Design"
      },
      {
        type: 'paragraph',
        text: "At its core, minimalist design focuses on essential elements, removing unnecessary complexity. It emphasizes functionality, uses a limited color palette, and creates visual harmony through strategic use of negative space."
      }
    ]
  }
];

// Similar Blog Card Component
const SimilarBlogCard = ({ post }) => (
  <Link
    to={`/blog/${post.id}`}
    className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
  >
    <div className="h-48 overflow-hidden relative">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
        {post.title}
      </h3>
      <div className="flex items-center text-sm text-gray-500">
        <CalendarDays className="w-4 h-4 mr-2" />
        <span>{post.date}</span>
      </div>
    </div>
  </Link>
);

// Blog List Component with Enhanced Search
const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  // Enhanced search function
  const filteredPosts = blogPosts.filter(post =>
    searchTerm === '' ||
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.keywords.some(keyword =>
      keyword.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto relative">
        {/* Search Section */}
        <div className="mb-8 flex justify-end items-center">
          <div className={`flex items-center bg-white border-2 rounded-full px-4 py-2 transition-all duration-300 ${searchFocused ? 'border-blue-500 shadow-lg ring-2 ring-blue-100' : 'border-gray-200 hover:border-gray-300'}`}>
            <Search className={`mr-3 flex-shrink-0 transition-colors ${searchFocused ? 'text-blue-500' : 'text-gray-400'}`} />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Search Stats */}
        {searchTerm && (
          <div className="text-sm text-gray-500 mt-2 ml-4 flex items-center">
            <span>{filteredPosts.length} blog{filteredPosts.length !== 1 ? 's' : ''} found</span>
          </div>
        )}

        <h1 className="text-3xl md:text-4xl font-bold mb-6">Blogs</h1>

        {/* No Results Handling */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <Search className="mx-auto w-12 md:w-16 h-12 md:h-16 text-gray-300 mb-4" />
            <p className="text-lg md:text-xl text-gray-500">No blogs found matching "{searchTerm}"</p>
            <p className="text-gray-400 mt-2 text-sm md:text-base">Try a different search term</p>
          </div>
        )}

        {/* Blog Grid - Responsive */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <SimilarBlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Blog Post Component
const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogId = parseInt(id, 10);
  const post = blogPosts.find((p) => p.id === blogId);

  if (!post) {
    return <div className="container p-12">Blog post not found</div>;
  }

  // Get related blogs (excluding current post)
  const relatedBlogs = blogPosts.filter((p) => p.id !== blogId).sort(() => 0.5 - Math.random()).slice(0, 3);

  const handleGoBack = () => {
    navigate('/blog');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <button onClick={handleGoBack} className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300">
            <ArrowLeft className="mr-2" />
            Back to Blogs
          </button>
        </div>

        {/* Blog Post Content */}
        <article>
          <h1 className="text-4xl font-bold mb-6 text-gray-900">{post.title}</h1>
          <div className="flex items-center text-sm text-gray-600 mb-6">
            <CalendarDays className="w-5 h-5 mr-2 text-gray-500" />
            <span>{post.date}</span>
            <span className="ml-4 px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">{post.category}</span>
          </div>

          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            {post.fullContent.map((content, index) => {
              if (content.type === 'paragraph') {
                return (
                  <p key={index} className="mb-6 leading-relaxed">
                    {content.text}
                  </p>
                );
              }
              if (content.type === 'heading') {
                return (
                  <h2 key={index} className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
                    {content.text}
                  </h2>
                );
              }
              return null;
            })}
          </div>
        </article>

        {/* Similar Blogs Section */}
        <div className="mt-16 border-t pt-12">
          <h2 className="text-3xl font-bold mb-8 text-start text-gray-900">Similar Blogs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedBlogs.map((relatedPost) => (
              <SimilarBlogCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { BlogPost, BlogList };

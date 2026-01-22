import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Clock, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const Blog = () => {
  return (
    <>
      <SEO 
        title="Nursing Exam Preparation Blog - Test Series Strategy"
        description="In-depth articles and strategies for NORCET, RRB, KGMU, and SGPGI exams. Read 20-minute guides on how to maximize your score using test series."
        canonical="/blog"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Nursing Preparation Insights</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Deep dives into exam strategies, pattern analysis, and test-taking techniques. 
            Expert guides to help you crack NORCET, RRB, and State exams.
          </p>
        </div>
        
        {/* 3 Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black hover:shadow-md transition-all group flex flex-col h-full"
            >
              {/* Meta Header */}
              <div className="flex items-center text-xs text-gray-500 mb-4 space-x-3">
                <span className="bg-gray-100 text-black px-2 py-1 rounded font-bold uppercase tracking-wide">
                  {post.category}
                </span>
                <span className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" /> {post.readTime}
                </span>
              </div>
              
              {/* Title - No Excerpt */}
              <h2 className="text-xl font-bold text-black mb-3 group-hover:text-blue-900 transition-colors">
                {post.title}
              </h2>
              
              {/* Footer */}
              <div className="flex items-center text-black font-medium text-sm group-hover:underline mt-auto pt-4 border-t border-gray-100">
                Read Full Guide <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;

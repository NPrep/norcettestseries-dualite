import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { blogPosts } from '../data/blogData';
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.id}`}
      />
      
      <div className="bg-gray-50 min-h-screen py-12">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-black mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Articles
          </Link>

          {/* Header */}
          <header className="bg-white rounded-t-xl p-8 border border-gray-200 border-b-0">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                {post.category}
              </span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" /> {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" /> {post.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-black pl-4 italic">
              {post.excerpt}
            </p>
          </header>

          {/* Content Body */}
          <div className="bg-white p-8 md:p-12 border border-gray-200 border-t-0 rounded-b-xl">
            <div 
              className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-black prose-p:text-gray-700 prose-a:text-blue-700 hover:prose-a:text-blue-900 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
            
            {/* Keywords / Tags Footer */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center">
                <Tag className="h-4 w-4 mr-2" /> Related Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map(keyword => (
                  <span key={keyword} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm hover:bg-gray-200 transition-colors cursor-default">
                    #{keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;

import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { blogPosts } from '../data/blogData';
import { Calendar, Clock, ArrowLeft, Tag, Share2, BookOpen } from 'lucide-react';
import TableOfContents from '../components/TableOfContents';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Find related posts
  const relatedPosts = post.relatedPostIds 
    ? blogPosts.filter(p => post.relatedPostIds.includes(p.id))
    : [];

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.id}`}
      />
      
      <div className="bg-white min-h-screen pb-12">
        {/* Hero Header */}
        <div className="bg-gray-50 border-b border-gray-200 pt-12 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-black mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Articles
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="bg-black text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wide">
                  {post.category}
                </span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" /> {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" /> {post.readTime}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar TOC */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents items={post.toc} />
            </aside>

            {/* Main Content */}
            <article className="flex-grow max-w-4xl">
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
            </article>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="bg-gray-50 py-16 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-black mb-8 flex items-center">
                <BookOpen className="h-6 w-6 mr-2" /> Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(related => (
                  <Link 
                    key={related.id} 
                    to={`/blog/${related.id}`}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black hover:shadow-md transition-all group"
                  >
                    <div className="text-xs text-gray-500 mb-3 uppercase tracking-wide font-bold">
                      {related.category}
                    </div>
                    <h3 className="text-lg font-bold text-black group-hover:text-blue-900 mb-2">
                      {related.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mt-4">
                      <Clock className="h-3 w-3 mr-1" /> {related.readTime}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BlogPost;

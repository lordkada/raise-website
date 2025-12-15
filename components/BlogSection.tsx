import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-raise-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Latest Insights</h2>
            <p className="text-gray-400">Strategie e visioni per il procurement del futuro.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-raise-neon hover:text-white transition-colors font-bold">
            Vedi tutto <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="group block h-full">
              <article className="bg-raise-gray rounded-2xl p-8 h-full border border-white/5 hover:border-raise-neon transition-all hover:-translate-y-2 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                    ${post.category === 'Vision' ? 'bg-purple-900/50 text-purple-300' : 
                      post.category === 'Tech' ? 'bg-blue-900/50 text-blue-300' : 
                      'bg-raise-neon/20 text-raise-neon'}`}>
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-raise-neon transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">
                  {post.subtitle}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:underline">
                  Leggi articolo <ArrowRight className="w-4 h-4" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

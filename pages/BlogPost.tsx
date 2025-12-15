import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';


export const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-raise-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Articolo non trovato</h1>
          <button
            onClick={() => navigate('/')}
            className="text-raise-neon hover:underline"
          >
            Torna alla Home
          </button>
        </div>
      </div>
    );
  }

  // Find other posts for recommendation
  const otherPosts = BLOG_POSTS.filter(p => p.id !== id).slice(0, 2);

  return (
    <div className="min-h-screen bg-raise-black pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-6">


        {/* Header */}
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-raise-neon mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Torna alla Home
        </Link>

        <div className="mb-8">
          <span className={`px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block
                ${post.category === 'Vision' ? 'bg-purple-900/50 text-purple-300' :
              post.category === 'Tech' ? 'bg-blue-900/50 text-blue-300' :
                'bg-raise-neon/20 text-raise-neon'}`}>
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8 border-l-2 border-raise-neon pl-6">
            {post.subtitle}
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 border-b border-white/10 pb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {post.readTime}
            </div>
            <div className="ml-auto text-white">
              Target: <span className="text-gray-400">{post.target}</span>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-raise-neon hover:prose-a:text-raise-yellow prose-strong:text-white mb-20">
          {post.content}
        </div>

        {/* Footer CTA */}
        <div className="bg-raise-gray rounded-2xl p-8 border border-white/10 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Pronto a trasformare il tuo procurement?</h3>
          <p className="text-gray-400 mb-6">Prenota una demo oggi stesso e scopri la potenza di RAISE.</p>
          <button className="bg-raise-neon text-raise-black px-8 py-3 rounded-full font-bold hover:bg-raise-yellow transition-colors">
            Inizia Ora
          </button>
        </div>

      </article>

      {/* Recommended */}
      <div className="max-w-5xl mx-auto px-6 mt-20 pt-12 border-t border-white/10">
        <h3 className="text-2xl font-bold text-white mb-8">Potrebbe interessarti anche</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {otherPosts.map(p => (
            <Link to={`/blog/${p.id}`} key={p.id} className="block group">
              <div className="bg-raise-gray p-6 rounded-xl border border-white/5 group-hover:border-raise-neon/50 transition-colors">
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-raise-neon">{p.title}</h4>
                <p className="text-sm text-gray-400">{p.readTime}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

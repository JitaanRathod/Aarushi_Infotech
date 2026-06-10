import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'How to Automate Payment Reminders Directly from Tally Prime',
      excerpt: 'Discover how integrating WhatsApp API with Tally helps you reduce outstanding collections, automatically follow up, and get paid faster.',
      date: 'June 02, 2026',
      author: 'certified consultant',
      category: 'Tally Solutions'
    },
    {
      id: 2,
      title: 'TDL vs. Out-of-the-Box: When Should You Customize Tally?',
      excerpt: 'A comprehensive guide for finance managers on when custom Tally Definition Language (TDL) configurations offer high ROI versus standard configs.',
      date: 'May 28, 2026',
      author: 'senior architect',
      category: 'TDL Development'
    },
    {
      id: 3,
      title: 'Choosing Between Custom ERP and Ready-Made Software',
      excerpt: 'Read about the tradeoffs in cost, scalability, and workflow compatibility when planning your business digital infrastructure.',
      date: 'May 15, 2026',
      author: 'solutions manager',
      category: 'Enterprise Tech'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-brand-amber font-heading font-extrabold text-xs uppercase tracking-widest mb-4">
            AARUSHI INSIGHTS
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-navy mb-6 font-heading">
            Our Business Blog
          </h1>
          <p className="text-base md:text-lg text-brand-steelblue/80 font-medium">
            Stay updated with Tally Prime tutorials, accounting automations, and modern web application development insights.
          </p>
        </div>

        {/* Blog Listing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-4 mb-6 text-xs text-brand-steelblue/60 font-medium">
                  <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-brand-steelblue px-2.5 py-1 rounded-full bg-slate-50">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                </div>

                {/* Title and Excerpt */}
                <h3 className="text-lg font-heading font-extrabold text-brand-navy mb-4 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-brand-steelblue/80 leading-relaxed font-medium mb-8">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & Read button */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2 text-xs text-brand-navy/60 font-semibold uppercase tracking-wider">
                  <User className="w-4 h-4 text-brand-mint" />
                  <span>{post.author}</span>
                </div>
                <Link
                  to="#"
                  className="font-heading font-bold text-xs uppercase tracking-widest text-brand-navy hover:text-brand-amber transition-colors flex items-center gap-1.5 group"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

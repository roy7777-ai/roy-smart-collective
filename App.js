import React, { useState } from 'react';
import { Menu, X, Mail, Facebook, ChevronRight, Award, TrendingUp, Users, CheckCircle, ExternalLink } from 'lucide-react';

const RoySmartCollective = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  const blogPosts = [
    {
      title: "Top 5 AI Writing Tools for Content Creators in 2026",
      excerpt: "Discover the best AI-powered writing assistants that can help you create high-quality content faster and more efficiently.",
      category: "AI Tools",
      date: "January 15, 2026",
      readTime: "8 min read"
    },
    {
      title: "Essential Pet Care Products Every Dog Owner Needs",
      excerpt: "A comprehensive guide to must-have products that will keep your furry friend healthy, happy, and well-cared for.",
      category: "Pet Care",
      date: "January 10, 2026",
      readTime: "6 min read"
    },
    {
      title: "The Science Behind Effective Health Supplements",
      excerpt: "Understanding which supplements actually work and how to choose quality products backed by scientific research.",
      category: "Health & Wellness",
      date: "January 5, 2026",
      readTime: "10 min read"
    }
  ];

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI & Automation Reviews",
      description: "In-depth analysis of cutting-edge AI tools and automation software to help businesses and creators work smarter."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pet Product Recommendations",
      description: "Honest reviews of pet care products, from nutrition to toys, ensuring the best for your beloved companions."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Health & Wellness Guidance",
      description: "Evidence-based recommendations for supplements and wellness products to support your health journey."
    }
  ];

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-slate-100 rounded-full">
            <span className="text-sm font-semibold text-slate-700 tracking-wide">TRUSTED PRODUCT RECOMMENDATIONS</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Smart Choices for
            <br />
            <span className="text-blue-900">Modern Life</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Expert reviews and recommendations for AI tools, pet products, and health supplements 
            to help you make informed purchasing decisions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button 
              onClick={() => setCurrentPage('blog')}
              className="px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all flex items-center space-x-2 group"
            >
              <span>Explore Reviews</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all"
            >
              Learn More
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-slate-200">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">5+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-sm text-slate-600">Products Reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">3</div>
              <div className="text-sm text-slate-600">Main Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-sm text-slate-600">Honest Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What We Review
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive analysis across three key categories to help you find the best products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-900">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Latest Reviews
            </h2>
            <p className="text-xl text-slate-600">
              Recent insights and recommendations from our experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
                onClick={() => setCurrentPage('blog')}
              >
                <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200"></div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-xs font-semibold text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-sm text-slate-500">{post.date}</span>
                    <span className="text-blue-900 font-semibold text-sm flex items-center space-x-1">
                      <span>Read More</span>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('blog')}
              className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all"
            >
              View All Posts
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated with Our Latest Reviews
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get expert recommendations delivered to your inbox
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-all"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </>
  );

  const renderAbout = () => (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            About Roy Smart Collective
          </h1>
          <div className="h-1 w-24 bg-blue-900"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-slate-50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              At Roy Smart Collective, we believe in empowering consumers with honest, comprehensive product 
              recommendations. Our mission is to cut through marketing noise and provide clear, actionable insights 
              that help you make smart purchasing decisions.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
          <p className="text-slate-600 leading-relaxed text-lg mb-6">
            Roy Smart Collective is a trusted product review platform founded on the principles of transparency 
            and expertise. With over 5 years of experience in digital marketing and product analysis, we specialize 
            in three key areas: AI & Automation Tools, Pet Products, and Health & Wellness Supplements.
          </p>

          <p className="text-slate-600 leading-relaxed text-lg mb-8">
            Our team combines technical expertise, industry knowledge, and real-world testing to deliver reviews 
            you can trust. We understand that in today's crowded marketplace, finding quality products that truly 
            deliver on their promises can be challenging. That's where we come in.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Approach</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Thorough Testing</h3>
              <p className="text-slate-600">
                We personally test and evaluate every product we recommend, ensuring our reviews are based on 
                real experience, not just specifications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Reviews</h3>
              <p className="text-slate-600">
                We disclose all affiliate relationships and maintain editorial independence. Our reviews reflect 
                our honest opinions, highlighting both strengths and weaknesses.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Analysis</h3>
              <p className="text-slate-600">
                Our recommendations are backed by industry expertise, extensive research, and a deep understanding 
                of what makes products valuable to consumers.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Expertise</h2>
          
          <div className="bg-slate-50 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">AI & Automation Tools</h3>
            <p className="text-slate-600 leading-relaxed">
              We stay at the forefront of artificial intelligence and automation technology, testing the latest 
              tools that help businesses and creators work more efficiently. From AI writing assistants to 
              workflow automation platforms, we provide insights that help you leverage technology effectively.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Pet Products & Care</h3>
            <p className="text-slate-600 leading-relaxed">
              As pet enthusiasts ourselves, we understand the importance of finding products that keep our 
              furry friends healthy and happy. We review everything from nutrition and toys to grooming supplies 
              and accessories, always prioritizing pet safety and well-being.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Health & Wellness</h3>
            <p className="text-slate-600 leading-relaxed">
              We believe in evidence-based wellness. Our health supplement reviews focus on products backed by 
              scientific research, helping you navigate the complex world of nutrition and supplementation with 
              confidence and clarity.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Trust Us?</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
              <span className="text-slate-600 text-lg">Over 5 years of experience in digital marketing and product analysis</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
              <span className="text-slate-600 text-lg">Hundreds of products personally tested and reviewed</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
              <span className="text-slate-600 text-lg">Commitment to transparency and honest, unbiased reviews</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
              <span className="text-slate-600 text-lg">Regular updates to ensure recommendations stay current</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
              <span className="text-slate-600 text-lg">Full disclosure of affiliate relationships and partnerships</span>
            </li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-900 p-8 rounded">
            <p className="text-slate-700 text-lg leading-relaxed">
              <strong className="text-slate-900">Our Promise:</strong> We only recommend products we genuinely believe 
              in. If we wouldn't use it ourselves or recommend it to friends and family, we won't recommend it to you. 
              Your trust is our most valuable asset, and we work every day to earn and maintain it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderServices = () => (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Our Services
          </h1>
          <div className="h-1 w-24 bg-blue-900"></div>
          <p className="text-xl text-slate-600 mt-6 max-w-3xl">
            Comprehensive product reviews and recommendations across three specialized categories
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-10 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-900">
                  {service.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 p-10 rounded-xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How We Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Research & Selection</h3>
              <p className="text-slate-600 leading-relaxed">
                We identify trending and proven products based on market research, user feedback, and expert insights.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Hands-On Testing</h3>
              <p className="text-slate-600 leading-relaxed">
                Every product undergoes thorough testing in real-world scenarios to evaluate performance and value.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Comprehensive Analysis</h3>
              <p className="text-slate-600 leading-relaxed">
                We analyze features, benefits, drawbacks, pricing, and compare with alternatives in the market.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Honest Recommendations</h3>
              <p className="text-slate-600 leading-relaxed">
                Our final recommendations are based solely on product merit and value to our audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderBlog = () => (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Latest Reviews & Insights
          </h1>
          <div className="h-1 w-24 bg-blue-900"></div>
          <p className="text-xl text-slate-600 mt-6">
            Expert analysis and recommendations to help you make informed decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="h-56 bg-gradient-to-br from-slate-100 to-slate-200"></div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-xs font-semibold text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-sm text-slate-500">{post.date}</span>
                  <button className="text-blue-900 font-semibold text-sm flex items-center space-x-1 hover:text-blue-700">
                    <span>Read More</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">More Content Coming Soon</h3>
          <p className="text-slate-600 mb-6">
            We're constantly testing new products and publishing in-depth reviews. Stay tuned for more insights!
          </p>
        </div>
      </div>
    </section>
  );

  const renderContact = () => (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Get in Touch
          </h1>
          <div className="h-1 w-24 bg-blue-900"></div>
          <p className="text-xl text-slate-600 mt-6">
            Have questions or suggestions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                  <a href="mailto:contact@royyolo.cloud" className="text-blue-900 hover:text-blue-700 text-lg">
                    contact@royyolo.cloud
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Facebook className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Facebook</h3>
                  <a 
                    href="https://www.facebook.com/profile.php?id=100068170044252" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-900 hover:text-blue-700 text-lg flex items-center space-x-1"
                  >
                    <span>Visit our page</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-xl">
              <h3 className="font-bold text-slate-900 mb-3">Business Inquiries</h3>
              <p className="text-slate-600 leading-relaxed">
                For partnership opportunities, brand collaborations, or media inquiries, 
                please reach out via email. We typically respond within 24-48 hours.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="What is this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows="5"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'about': return renderAbout();
      case 'services': return renderServices();
      case 'blog': return renderBlog();
      case 'contact': return renderContact();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center space-x-3 group"
            >
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-900 text-lg group-hover:text-blue-900 transition-colors">
                  Roy Smart Collective
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Trusted Product Recommendations
                </div>
              </div>
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`font-semibold transition-colors ${
                    currentPage === item.id 
                      ? 'text-blue-900' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 font-semibold ${
                    currentPage === item.id 
                      ? 'text-blue-900' 
                      : 'text-slate-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <span className="font-bold text-lg">Roy Smart Collective</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Trusted product recommendations for AI tools, pet care, and health supplements.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => setCurrentPage('blog')} className="hover:text-white transition-colors">Blog</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="mailto:contact@royyolo.cloud" className="hover:text-white transition-colors">
                    contact@royyolo.cloud
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.facebook.com/profile.php?id=100068170044252" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center space-x-1"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © 2026 Roy Smart Collective. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              royyolo.cloud
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RoySmartCollective;
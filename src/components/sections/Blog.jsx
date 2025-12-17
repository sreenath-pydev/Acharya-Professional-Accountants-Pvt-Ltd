import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const blogPosts = [
  {
    category: 'Tax Strategy',
    date: 'May 15, 2025',
    title: 'Optimizing Your Tax Strategy for FY 2025-26',
    excerpt: 'Discover the latest tax reforms and how to leverage them for your business. Learn about new deductions, credits, and compliance requirements that could impact your bottom line this fiscal year.',
    views: '1.2K',
    comments: '24',
    image: '/blog_images/card1.webp',
  },
  {
    category: 'Compliance',
    date: 'April 28, 2025',
    title: 'GST: What Businesses Need to Know',
    excerpt: 'The upcoming GST reforms will bring significant changes to compliance procedures. We break down the key updates and how to prepare your business for a smooth transition to the new system.',
    views: '2.8K',
    comments: '42',
    image: '/blog_images/card2.webp',
  },
  {
    category: 'Business Growth',
    date: 'April 10, 2025',
    title: 'Financial Planning Strategies for Scaling Startups',
    excerpt: 'Learn how early-stage companies can implement robust financial planning processes to support sustainable growth. We share proven strategies for cash flow management and investor relations.',
    views: '3.4K',
    comments: '36',
    image: '/blog_images/card3.webp',
  },
  {
    category: 'Technology',
    date: 'March 22, 2025',
    title: 'Securing Financial Data in the Cloud Era',
    excerpt: 'As more businesses migrate financial systems to the cloud, data security becomes critical. Explore best practices for protecting sensitive financial information and maintaining compliance.',
    views: '1.7K',
    comments: '18',
    image: '/blog_images/card4.webp',
  },
  {
    category: 'International',
    date: 'March 5, 2025',
    title: 'Navigating Cross-Border Taxation Challenges',
    excerpt: 'For businesses expanding globally, understanding international tax regulations is crucial. Learn how to navigate transfer pricing, double taxation, and compliance across jurisdictions.',
    views: '2.1K',
    comments: '29',
    image: '/blog_images/card5.webp',
  },
  {
    category: 'Financial Analysis',
    date: 'February 18, 2025',
    title: 'Key Financial Metrics Every Business Should Track',
    excerpt: 'Discover the essential financial KPIs that provide actionable insights into your business performance. Learn how to interpret these metrics and make data-driven decisions.',
    views: '4.2K',
    comments: '56',
    image: '/blog_images/card6.webp',
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-secondary-dark">
      <div className="container mx-auto px-5 md:px-20">
        <div data-aos="fade-up" data-aos-delay="50">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-6 text-primary-accent">
            Insights & Updates
          </h2>
        </div>
        <div data-aos="fade-up" data-aos-delay="50">
          <p className="text-center max-w-3xl mx-auto mb-12 text-boulder">
            Stay informed with our latest industry insights, tax updates, and business strategies to help your organization thrive.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <div
                data-aos="fade-up"
                data-aos-delay={100 + index * 50}
                className="bg-dark-bg rounded-2xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-xl hover:shadow-primary-accent/30 border border-primary-accent/10 hover:border-primary-accent/30 transition-all duration-400 flex flex-col h-full"
              >
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-5 right-5 bg-primary-accent text-dark-bg px-3 py-1 rounded-full text-xs font-bold">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-boulder text-sm mb-3 flex items-center gap-2">
                    <i className="far fa-calendar text-primary-accent"></i> {post.date}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white hover:text-primary-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-boulder mb-6 flex-grow">{post.excerpt}</p>

                  <div className="pt-4 border-t border-primary-accent/10 flex justify-between items-center">
                    <a
                      href="#"
                      className="text-primary-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300"
                    >
                      Read More <i className="fas fa-arrow-right text-sm"></i>
                    </a>
                    <div className="flex gap-5">
                      <div className="flex items-center gap-1 text-boulder text-sm">
                        <i className="far fa-eye text-primary-accent"></i> {post.views}
                      </div>
                      <div className="flex items-center gap-1 text-boulder text-sm">
                        <i className="far fa-comment text-primary-accent"></i> {post.comments}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-3 border-2 border-primary-accent text-primary-accent px-8 py-3 rounded-full font-semibold hover:bg-primary-accent hover:text-dark-bg hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300"
          >
            View All Articles <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;

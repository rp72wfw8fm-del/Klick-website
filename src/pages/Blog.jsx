import { Calendar, User } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: '5 Tips for Finding the Best Plumber in Nairobi',
      excerpt: 'Learn how to identify qualified plumbers and get the best service for your money.',
      author: 'Sarah Kipchoge',
      date: '2026-04-28',
      category: 'Tips',
      image: '🔧'
    },
    {
      id: 2,
      title: 'How to Prepare Your Home for Professional Cleaning',
      excerpt: 'Get your home ready for professional cleaning services with these simple tips.',
      author: 'Grace Mutua',
      date: '2026-04-25',
      category: 'Guide',
      image: '🧹'
    },
    {
      id: 3,
      title: 'Understanding Service Provider Ratings on Klick',
      excerpt: 'How ratings work on Klick and why they matter for your service experience.',
      author: 'John Mwangi',
      date: '2026-04-22',
      category: 'Education',
      image: '⭐'
    },
    {
      id: 4,
      title: 'The Future of Service Marketplaces in Kenya',
      excerpt: 'Exploring trends and opportunities in the growing service marketplace industry.',
      author: 'Admin',
      date: '2026-04-20',
      category: 'News',
      image: '📈'
    },
    {
      id: 5,
      title: 'Payment Security: How Klick Protects Your Transactions',
      excerpt: 'Learn about the security measures we use to protect your payments on Klick.',
      author: 'Admin',
      date: '2026-04-18',
      category: 'Security',
      image: '🔒'
    },
    {
      id: 6,
      title: 'Success Story: How John Built His Plumbing Business on Klick',
      excerpt: 'Meet John and learn how he grew his service business using the Klick platform.',
      author: 'Admin',
      date: '2026-04-15',
      category: 'Stories',
      image: '👨‍💼'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Klick Blog</h1>
          <p className="text-xl opacity-90">Tips, guides, and stories from the Klick community</p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="card cursor-pointer hover:shadow-xl transition">
                <div className="text-5xl mb-4">{post.image}</div>
                <div className="mb-3">
                  <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2 hover:text-primary transition">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6 opacity-90">Get tips, updates, and stories delivered to your inbox.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-dark focus:outline-none"
            />
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

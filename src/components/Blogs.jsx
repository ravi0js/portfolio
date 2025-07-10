import { motion } from 'framer-motion'
import { useState } from 'react'

const Blogs = ({ blogs }) => {
  const [visibleBlogs, setVisibleBlogs] = useState(3)
  
  const loadMore = () => {
    setVisibleBlogs(prev => prev + 3)
  }

  return (
    <section className="min-h-screen py-20 bg-gray-800 bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            My Blogs
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.slice(0, visibleBlogs).map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-700 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-pink-400">{blog.date}</span>
                  <span className="text-sm text-gray-400">{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-200">{blog.title}</h3>
                <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-600 rounded-full text-sm text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6">
                <motion.a
                  href={blog.url}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white text-sm font-medium"
                >
                  Read Article
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleBlogs < blogs.length && (
          <div className="text-center">
            <motion.button
              onClick={loadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-pink-500 text-pink-400 rounded-lg hover:bg-pink-500 hover:text-white transition-colors"
            >
              Load More Articles
            </motion.button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Blogs
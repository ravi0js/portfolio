import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Visitors = ({ stats }) => {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    // Animate counting up
    const duration = 2000 // 2 seconds
    const increment = stats.totalVisitors / (duration / 16) // 60fps
    
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= stats.totalVisitors) {
        current = stats.totalVisitors
        clearInterval(timer)
      }
      setVisitorCount(Math.floor(current))
    }, 16)
    
    return () => clearInterval(timer)
  }, [stats.totalVisitors])

  return (
    <section className="min-h-screen py-20 bg-gray-900 bg-opacity-70 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Visitors Analytics
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Statistics about visitors to my portfolio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-200">Visitor Count</h3>
            
            <div className="flex items-center justify-center mb-8">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full">
                  <circle
                    cx="96"
                    cy="96"
                    r="90"
                    fill="none"
                    stroke="#2D3748"
                    strokeWidth="12"
                  />
                  <motion.circle
                    cx="96"
                    cy="96"
                    r="90"
                    fill="none"
                    stroke="url(#visitorGradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: 565, strokeDasharray: 565 }}
                    animate={{ strokeDashoffset: 565 - (565 * 0.85) }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    {visitorCount.toLocaleString()}
                  </span>
                  <span className="text-gray-400">Total Visitors</span>
                </div>
                <defs>
                  <linearGradient id="visitorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9F7AEA" />
                    <stop offset="100%" stopColor="#ED64A6" />
                  </linearGradient>
                </defs>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="text-2xl font-bold text-pink-400">{stats.monthlyVisitors.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">This Month</div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">{stats.weeklyVisitors.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">This Week</div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="text-2xl font-bold text-indigo-400">{stats.dailyVisitors.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Today</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-200">Visitors by Country</h3>
            
            <div className="space-y-4">
              {stats.countries.map((country, index) => (
                <div key={country.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{country.name}</span>
                    <span className="text-gray-400">{country.count} ({country.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${country.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className={`h-2.5 rounded-full ${
                        index % 4 === 0 ? 'bg-purple-500' : 
                        index % 4 === 1 ? 'bg-pink-500' : 
                        index % 4 === 2 ? 'bg-indigo-500' : 'bg-blue-500'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Visitors
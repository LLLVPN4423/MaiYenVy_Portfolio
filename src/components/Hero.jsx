import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-soft-beige via-soft-beige-dark to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(69,123,157,0.1),transparent_50%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gradient-to-br from-sea-blue-primary to-sea-blue-dark rounded-2xl shadow-lg"
          >
            <Sparkles size={40} className="text-white" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-sea-blue-dark mb-4 font-serif"
          >
            Mai Yến Vy
          </motion.h1>

          {/* Position */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl text-sea-blue-primary mb-6 font-medium"
          >
            Sinh viên ngành Văn hóa học & Báo chí
          </motion.p>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <p className="text-lg sm:text-xl text-sea-blue-dark italic font-serif">
              "Đam mê văn hóa ẩm thực, tỉ mỉ trong từng nguyên liệu"
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sea-blue-primary to-sea-blue-dark text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Xem dự án
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-sea-blue-primary"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

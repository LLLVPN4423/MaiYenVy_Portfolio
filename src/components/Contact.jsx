import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Facebook, Instagram, Linkedin, Globe, Send } from 'lucide-react'

const Contact = () => {
  // Cấu hình thông tin liên hệ - Thay đổi theo nhu cầu
  const config = {
    email: 'vymai7336@gmail.com',
    phone: '(+84) 766 976 223',
    address: '62/37 Ngô Gia Tự, An Bình, Dĩ An, Bình Dương',
    socialLinks: {
      facebook: 'https://facebook.com/yourprofile', // Thay link thực tế
      instagram: 'https://instagram.com/yourprofile', // Thay link thực tế
      linkedin: 'https://linkedin.com/in/yourprofile', // Thay link thực tế
      behance: 'https://behance.net/yourprofile', // Thay link thực tế
    },
  }

  const socialIcons = [
    { name: 'Facebook', icon: Facebook, href: config.socialLinks.facebook, color: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: Instagram, href: config.socialLinks.instagram, color: 'hover:bg-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: config.socialLinks.linkedin, color: 'hover:bg-blue-700' },
    { name: 'Portfolio', icon: Globe, href: config.socialLinks.behance, color: 'hover:bg-purple-600' },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-sea-blue-dark font-serif">
            Liên hệ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sea-blue-primary to-sea-blue-dark mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-soft-beige rounded-2xl p-8 shadow-sm border border-sea-blue-primary/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-sea-blue-primary/10 rounded-xl">
                <Mail size={24} className="text-sea-blue-primary" />
              </div>
              <h3 className="text-2xl font-bold text-sea-blue-dark font-serif">Liên hệ</h3>
            </div>
            <div className="space-y-4">
              <a
                href={`mailto:${config.email}`}
                className="block text-sea-blue-dark hover:text-sea-blue-primary transition-colors text-lg"
              >
                {config.email}
              </a>
              <p className="text-sea-blue-dark text-lg">
                {config.phone}
              </p>
              <p className="text-sea-blue-dark text-sm">
                {config.address}
              </p>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-soft-beige rounded-2xl p-8 shadow-sm border border-sea-blue-primary/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-sea-blue-primary/10 rounded-xl">
                <Send size={24} className="text-sea-blue-primary" />
              </div>
              <h3 className="text-2xl font-bold text-sea-blue-dark font-serif">Mạng xã hội</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {socialIcons.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 p-4 bg-white rounded-xl border border-sea-blue-primary/20 hover:border-sea-blue-primary transition-colors shadow-sm`}
                  >
                    <Icon size={20} className="text-sea-blue-primary" />
                    <span className="text-sea-blue-dark font-medium">{social.name}</span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sea-blue-primary/70 text-lg">
            Hãy kết nối để cùng nhau tạo ra những dự án ấn tượng!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

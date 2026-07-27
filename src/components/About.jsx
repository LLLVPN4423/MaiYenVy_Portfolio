import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Code, Users, Target, Mail, MapPin } from 'lucide-react'

const About = () => {
  const softSkills = [
    { name: 'Làm việc nhóm', icon: Users },
    { name: 'Giao tiếp hiệu quả', icon: Sparkles },
    { name: 'Chịu áp lực cao', icon: Target },
  ]

  const technicalSkills = [
    { name: 'Tiếng Anh (VSTEP B1)', level: 75 },
    { name: 'Tiếng Trung (Giao tiếp)', level: 70 },
    { name: 'Canva & Photoshop', level: 85 },
    { name: 'Video Edit (CapCut, Premiere)', level: 80 },
    { name: 'Quay chụp sự kiện', level: 85 },
    { name: 'Content đa kênh', level: 90 },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-sea-blue-dark font-serif">
            Giới thiệu
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sea-blue-primary to-sea-blue-dark mx-auto rounded-full" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Portrait Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Portrait Photo */}
            <div className="relative">
              <div className="aspect-[3/4] bg-soft-beige-dark rounded-2xl overflow-hidden shadow-xl border-2 border-sea-blue-primary/20">
                <img
                  src="https://raw.githubusercontent.com/LLLVPN4423/MaiYenVy_Portfolio/main/public/portrait.jpg"
                  alt="Mai Yến Vy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-sea-blue-primary/10 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-sea-blue-light/20 rounded-full -z-10" />
            </div>

            {/* Quick Info */}
            <div className="bg-soft-beige rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-sea-blue-primary" size={20} />
                <span className="text-sea-blue-dark">vymai7336@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-sea-blue-primary" size={20} />
                <span className="text-sea-blue-dark text-sm">62/37 Ngô Gia Tự, An Bình, Dĩ An, Bình Dương</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Who Am I & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Who Am I Section */}
            <div className="bg-soft-beige rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-sea-blue-dark mb-4 font-serif">Who Am I</h3>
              <div className="prose prose-lg text-sea-blue-dark">
                <p className="mb-4 leading-relaxed">
                  Là sinh viên ngành Văn hóa học với niềm đam mê sâu sắc dành cho văn hóa ẩm thực và bếp. 
                  Am hiểu về sự tinh tế trong việc kết hợp nguyên liệu, mong muốn ứng dụng am hiểu văn hóa 
                  và sự tỉ mỉ để học hỏi, phát triển kỹ năng làm bếp trong môi trường F&B chuyên nghiệp.
                </p>
                <p className="mb-4 leading-relaxed">
                  Chịu áp lực cao, nhanh nhẹn, có khả năng làm việc nhóm tốt. 
                  Đang theo học song song ngành Báo chí tại ĐH KHXH&NV - ĐHQG HCM với GPA 8.45/10.0 
                  và ngành Văn hóa học với GPA 8.36/10.0.
                </p>
                <p className="leading-relaxed italic text-sea-blue-primary">
                  Triết lý làm việc: "Tỉ mỉ trong từng chi tiết, đam mê trong từng công việc"
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Soft Skills */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-sea-blue-primary/10">
                <h4 className="text-lg font-bold text-sea-blue-dark mb-4 font-serif">Kỹ năng mềm</h4>
                <div className="space-y-3">
                  {softSkills.map((skill, index) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="p-2 bg-sea-blue-primary/10 rounded-lg">
                          <Icon size={16} className="text-sea-blue-primary" />
                        </div>
                        <span className="text-sea-blue-dark font-medium text-sm">{skill.name}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Technical Skills */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-sea-blue-primary/10">
                <h4 className="text-lg font-bold text-sea-blue-dark mb-4 font-serif">Kỹ năng chuyên môn</h4>
                <div className="space-y-3">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-1"
                    >
                      <div className="flex justify-between text-sea-blue-dark text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sea-blue-primary">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-soft-beige-dark rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-sea-blue-primary to-sea-blue-dark rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

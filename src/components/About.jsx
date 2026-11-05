import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Users, MessageCircle, Zap, Mail, MapPin, BookOpen } from 'lucide-react'
import {
  RoyalSectionHeading, StorybookPage, RoyalPanel, AntiquePhotoFrame,
  CardOrnament, SparkleField, NightBackdrop, DriftingPetals,
} from './decor/Ornaments'

const About = () => {
  const reduceMotion = useReducedMotion()

  const softSkills = [
    { name: 'Làm việc nhóm', icon: Users },
    { name: 'Giao tiếp hiệu quả', icon: MessageCircle },
    { name: 'Chịu áp lực cao', icon: Zap },
  ]

  const technicalSkills = [
    { name: 'Tiếng Anh (VSTEP B1)', level: 75 },
    { name: 'Tiếng Trung (Giao tiếp)', level: 70 },
    { name: 'Canva & Photoshop', level: 85 },
    { name: 'Video Edit (CapCut, Premiere)', level: 80 },
    { name: 'Quay chụp sự kiện', level: 85 },
    { name: 'Content đa kênh', level: 90 },
  ]

  const reveal = {
    hidden: { opacity: 0, y: 26 },
    show: (d = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: d, ease: 'easeOut' },
    }),
  }

  return (
    <section id="about" className="relative py-24 bg-midnight overflow-hidden">
      <NightBackdrop castle glass>
        <DriftingPetals count={2} className="opacity-25" />
      </NightBackdrop>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RoyalSectionHeading eyebrow="chương một" title="Một trang trong cuốn sách" />

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left — portrait + quick contact */}
          <motion.div
            variants={reveal}
            initial={reduceMotion ? false : 'hidden'}
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            custom={0.05}
            className="space-y-8"
          >
            <AntiquePhotoFrame className="mx-auto max-w-sm shadow-royal-lg">
              <div className="aspect-[3/4] overflow-hidden rounded-[0.15rem]">
                <img
                  src={`${import.meta.env.BASE_URL}portrait.jpg`}
                  alt="Mai Yến Vy"
                  className="w-full h-full object-cover"
                />
              </div>
            </AntiquePhotoFrame>

            <RoyalPanel surface="night" icon={Mail} title="Liên hệ nhanh" className="mx-auto max-w-sm">
              <div className="px-6 py-5 sm:px-8 space-y-4">
                <a href="mailto:vymai7336@gmail.com" className="flex items-center gap-3 group">
                  <Mail size={16} className="text-champagne flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-night/85 text-sm group-hover:text-champagne transition-colors break-all">
                    vymai7336@gmail.com
                  </span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-champagne mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-night/75 text-sm leading-relaxed">
                    62/37 Ngô Gia Tự, An Bình, Dĩ An, Bình Dương
                  </span>
                </div>
              </div>
            </RoyalPanel>
          </motion.div>

          {/* Right — storybook page panels */}
          <motion.div
            variants={reveal}
            initial={reduceMotion ? false : 'hidden'}
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            custom={0.15}
            className="space-y-10"
          >
            {/* Biography — the storybook page */}
            <StorybookPage className="relative overflow-hidden">
              <SparkleField count={6} className="opacity-30" tone="#A98242" />
              <div className="relative px-6 py-7 sm:px-10 sm:py-9">
                <div className="flex items-center gap-4 mb-6">
                  <span className="p-2.5 rounded-full bg-pink/25 border border-gold/50 text-bronze shadow-inner">
                    <BookOpen size={18} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-display text-3xl font-semibold text-ink">
                    Câu chuyện của tôi
                  </h3>
                </div>
                <div className="space-y-5 text-ink/85 leading-[1.9]">
                  <p className="first-letter:font-display first-letter:text-6xl first-letter:text-bronze first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85]">
                    Là sinh viên ngành Văn hóa học với niềm đam mê sâu sắc dành cho văn hóa ẩm thực
                    và bếp. Am hiểu về sự tinh tế trong việc kết hợp nguyên liệu, mong muốn ứng dụng
                    am hiểu văn hóa và sự tỉ mỉ để học hỏi, phát triển kỹ năng làm bếp trong môi
                    trường F&amp;B chuyên nghiệp.
                  </p>
                  <p>
                    Chịu áp lực cao, nhanh nhẹn, có khả năng làm việc nhóm tốt. Đang theo học song
                    song ngành Báo chí tại ĐH KHXH&amp;NV - ĐHQG HCM với GPA 8.45/10.0 và ngành Văn
                    hóa học với GPA 8.36/10.0.
                  </p>
                  <CardOrnament className="!my-2" />
                  <p className="font-display italic text-xl text-bronze/90">
                    "Tỉ mỉ trong từng chi tiết, đam mê trong từng công việc"
                  </p>
                </div>
              </div>
            </StorybookPage>

            {/* Skills — parchment panels */}
            <div className="grid sm:grid-cols-2 gap-8">
              <RoyalPanel title="Kỹ năng mềm">
                <ul className="px-6 py-6 sm:px-7 space-y-4">
                  {softSkills.map((skill, index) => {
                    const Icon = skill.icon
                    return (
                      <motion.li
                        key={skill.name}
                        initial={reduceMotion ? false : { opacity: 0, x: -14 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12, duration: 0.5 }}
                        className="flex items-center gap-3"
                      >
                        <span className="p-2 rounded-full bg-pink/25 border border-gold/50 text-bronze shadow-inner flex-shrink-0">
                          <Icon size={14} strokeWidth={1.5} />
                        </span>
                        <span className="text-ink/85 text-sm font-medium">{skill.name}</span>
                      </motion.li>
                    )
                  })}
                </ul>
              </RoyalPanel>

              <RoyalPanel title="Kỹ năng chuyên môn">
                <div className="px-6 py-6 sm:px-7 space-y-5">
                  {technicalSkills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-baseline mb-1.5">
                        <span className="text-ink/85 text-sm font-medium">{skill.name}</span>
                        <span className="text-bronze text-xs tracking-wide">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-cream-dark rounded-full overflow-hidden border border-gold/40">
                        <motion.div
                          initial={reduceMotion ? false : { width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, delay: index * 0.08, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-gold via-gold-dark to-bronze rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </RoyalPanel>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

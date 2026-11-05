import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Feather } from 'lucide-react'
import { RoyalSectionHeading, RoyalLetter, RoyalButton, CardOrnament, SparkleField, NightBackdrop } from './decor/Ornaments'

const Contact = () => {
  const reduceMotion = useReducedMotion()

  // Verified contact channels only — no placeholder social URLs.
  // Add real profile links here once the owner provides them.
  const config = {
    email: 'vymai7336@gmail.com',
    phone: '(+84) 766 976 223',
    phoneHref: 'tel:+84766976223',
    address: '62/37 Ngô Gia Tự, An Bình, Dĩ An, Bình Dương',
  }

  const reveal = {
    hidden: { opacity: 0, y: 26 },
    show: (d = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: d, ease: 'easeOut' },
    }),
  }

  return (
    <section id="contact" className="relative py-24 bg-midnight overflow-hidden">
      <NightBackdrop castle glass />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RoyalSectionHeading eyebrow="chương cuối" title="Lời mời hoàng gia" subtitle="Hãy cùng viết tiếp câu chuyện" />

        <motion.div
          variants={reveal}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          custom={0.1}
          className="max-w-2xl mx-auto"
        >
          <RoyalLetter className="shadow-[0_24px_70px_rgba(0,0,0,0.55)]">
            <div className="relative px-6 py-8 sm:px-12 sm:py-10 overflow-hidden">
              <SparkleField count={8} className="opacity-30" tone="#A98242" />

              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="p-2.5 rounded-full bg-pink/25 border border-gold/50 text-bronze shadow-inner">
                  <Feather size={18} strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-2xl font-semibold text-ink">Một lá thư nhỏ</h3>
              </div>

              <p className="font-script text-4xl sm:text-5xl text-rose mb-4">
                rất vui được kết nối
              </p>
              <p className="text-ink/75 leading-relaxed mb-10 max-w-md mx-auto">
                Dù là một dự án mới, một câu chuyện cần kể, hay đơn giản là một cuộc trò chuyện —
                tôi luôn sẵn lòng lắng nghe.
              </p>

              <div className="grid sm:grid-cols-3 gap-5 text-left">
                <a
                  href={`mailto:${config.email}`}
                  className="group bg-ivory/70 rounded-royal border border-champagne/50 p-5 hover:border-champagne/70 hover:shadow-royal hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Mail size={19} className="text-bronze mb-3" strokeWidth={1.5} />
                  <p className="text-[11px] tracking-widest-story uppercase text-rose/70 mb-1">Email</p>
                  <p className="text-ink/85 text-sm break-all group-hover:text-bronze transition-colors">
                    {config.email}
                  </p>
                </a>

                <a
                  href={config.phoneHref}
                  className="group bg-ivory/70 rounded-royal border border-champagne/50 p-5 hover:border-champagne/70 hover:shadow-royal hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Phone size={19} className="text-bronze mb-3" strokeWidth={1.5} />
                  <p className="text-[11px] tracking-widest-story uppercase text-rose/70 mb-1">Điện thoại</p>
                  <p className="text-ink/85 text-sm group-hover:text-bronze transition-colors">
                    {config.phone}
                  </p>
                </a>

                <div className="bg-ivory/70 rounded-royal border border-champagne/50 p-5">
                  <MapPin size={19} className="text-bronze mb-3" strokeWidth={1.5} />
                  <p className="text-[11px] tracking-widest-story uppercase text-rose/70 mb-1">Địa chỉ</p>
                  <p className="text-ink/85 text-sm leading-relaxed">{config.address}</p>
                </div>
              </div>

              <CardOrnament className="mt-10" />
            </div>
          </RoyalLetter>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={reveal}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true }}
          custom={0.2}
          className="mt-12"
        >
          <RoyalButton variant="gold" href={`mailto:${config.email}`} className="!rounded-full group">
            <Send size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            Gửi lời nhắn
          </RoyalButton>
          <p className="mt-5 text-night/50 text-xs tracking-wide">
            Email sẽ mở ứng dụng thư của bạn — không có biểu mẫu trung gian.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

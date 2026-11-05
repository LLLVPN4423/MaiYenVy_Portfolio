import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  RoyalSectionHeading, RoyalPanel, RoyalBadge, SparkleField,
  NightBackdrop, EnchantedBeanstalk,
} from './decor/Ornaments'

const Experience = () => {
  const reduceMotion = useReducedMotion()

  const experiences = [
    {
      company: 'Trung tâm Ngoại ngữ Anh Trung (Elle Learning)',
      role: 'CTV Direct Marketing',
      period: 'Tháng 10/2025',
      description: [
        'Triển khai quảng bá: Tiếp cận khách hàng mục tiêu thông qua hoạt động phát tờ rơi và tư vấn trực tiếp tại trường học, TTTM, khu dân cư.',
        'Thu thập Data: Chủ động tìm kiếm khách hàng tiềm năng (Lead Generation), đảm bảo hoàn thành chỉ tiêu dữ liệu được giao mỗi ca.',
        'Hỗ trợ sự kiện: Trực tiếp tham gia hậu cần, trang trí và thiết lập (set-up) gian hàng chuyên nghiệp tại các sự kiện ngoại khóa.',
        'Tư vấn khách hàng: Giới thiệu khóa học, chương trình ưu đãi và giải đáp thắc mắc để thu hút khách hàng ngay tại hiện trường.',
        'Kỹ năng linh hoạt: Xử lý tình huống khéo léo và giao tiếp hiệu quả với đa dạng nhóm đối tượng khách hàng.'
      ]
    },
    {
      company: 'Chương trình "Những Bước Chân Việt Nam"',
      organization: 'Đài Truyền hình TP.HCM (HTV) & Thành Đoàn TP.HCM',
      role: 'Thành viên Ban Tổ Chức',
      period: 'Tháng 4/2025',
      description: [
        'Điều phối người tham dự, hướng dẫn check-in, take care nghệ sĩ, khách mời VIP và các ông bà cựu chiến binh.',
        'Thực hiện công tác hậu cần, hỗ trợ vận hành sân khấu và phối hợp ghi hình cùng ekip HTV.',
        'Góp phần vào thành công của chương trình truyền hình ý nghĩa, quy mô lớn, thu hút sự quan tâm từ cộng đồng.'
      ]
    },
    {
      company: 'Chương trình Trải nghiệm Văn hóa Hàn Quốc - 찾아가는 문화 2025',
      role: 'Thành viên Ban Tổ Chức',
      period: 'Tháng 10-11/2025',
      description: [
        'Thực hiện chụp ảnh, ghi hình và hỗ trợ sản xuất nội dung truyền thông tại sự kiện.',
        'Phối hợp cùng đội ngũ tổ chức trong công tác set up khu vực sân khấu, booth trải nghiệm và khu check-in.'
      ]
    },
    {
      company: 'Chương trình bóng đá gây quỹ từ thiện "Chiến Binh Màu Nắng"',
      role: 'Cộng tác viên',
      period: 'Tháng 11/2024',
      description: [
        'Hỗ trợ set up khu vực sự kiện, đón tiếp và hướng dẫn khán giả, trong đó có các cầu thủ khách mời nổi tiếng.',
        'Thực hiện khâu check-in, phát quà và giải đáp thắc mắc cho khách tham dự, đảm bảo trải nghiệm diễn ra thuận lợi.',
        'Phối hợp truyền thông và hậu cần để đảm bảo tiến độ và hình ảnh chuyên nghiệp của chương trình.',
        'Tương tác, giới thiệu thông điệp sự kiện đến người tham dự, góp phần lan tỏa tinh thần thiện nguyện và nâng cao nhận diện chương trình.'
      ]
    },
    {
      company: 'CLB Kịch Khoa Báo Chí Truyền Thông-HCM USSH',
      role: 'Thành viên Ban Truyền thông',
      period: 'Tháng 11/2024 - Nay',
      description: [
        'Quản lý và thực hiện nội dung truyền thông (bài viết, hình ảnh, thiết kế) trên fanpage CLB, đảm bảo duy trì tương tác và truyền tải đúng tinh thần chương trình.',
        'Sáng tạo nội dung trước – trong – sau sự kiện cho 2 mùa diễn 09 và 10 với tổng cộng 8 suất diễn, thu hút hơn 2.000 khán giả tham dự.',
        'Phụ trách truyền thông và trực tiếp sản xuất nội dung (bài viết, thiết kế, hình ảnh hậu trường) cho 2 suất diễn Lá Hát Như Mưa tại Nhà Văn hóa Thanh Niên, Quận 3 – thuộc Lễ hội Thanh niên Youth Fest 2025 do Thành Đoàn TP.HCM tổ chức (quy mô trên 800 khán giả).',
        'Hỗ trợ điều phối khu vực lễ tân, quản lý cộng tác viên và phối hợp sản xuất nội dung realtime trong thời gian sự kiện.',
        'Trực booth bán vé, tư vấn thông tin về các vở diễn cho khán giả, giới thiệu chương trình và hỗ trợ quá trình mua vé, góp phần quảng bá hình ảnh CLB và thúc đẩy doanh thu bán vé.'
      ]
    }
  ]

  return (
    <section id="experience" className="relative py-24 bg-midnight overflow-hidden">
      <NightBackdrop castle glass />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <RoyalSectionHeading
          eyebrow="chương hai"
          title="Kinh nghiệm"
          subtitle="Leo theo cây đậu thần — mỗi nấc là một chương đã sống"
        />

        <div className="relative">
          {/* Enchanted beanstalk spine — Jack & the Beanstalk */}
          <div
            className={`absolute left-[2px] sm:left-1/2 top-2 bottom-2 w-16 sm:w-20 -translate-x-1/2 z-0 ${
              reduceMotion ? '' : 'animate-vine-sway'
            }`}
            aria-hidden="true"
          >
            <EnchantedBeanstalk
              nodes={experiences.length}
              className="h-full w-full drop-shadow-[0_0_12px_rgba(139,196,122,0.25)]"
            />
          </div>

          <div className="relative z-[1] space-y-12">
            {experiences.map((exp, index) => {
              const leftSide = index % 2 === 0
              return (
                <motion.div
                  key={index}
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: index * 0.05 }}
                  className={`relative pl-12 sm:pl-0 sm:w-[calc(50%-2.75rem)] ${
                    leftSide ? 'sm:mr-auto' : 'sm:ml-auto'
                  }`}
                >
                  {/* Golden bean node on the stalk */}
                  <span
                    className={`absolute top-9 left-[1px] sm:left-auto flex h-5 w-5 items-center justify-center ${
                      leftSide ? 'sm:-right-[2.65rem]' : 'sm:-left-[2.65rem]'
                    }`}
                    aria-hidden="true"
                  >
                    <span className="absolute inset-0 rounded-full bg-champagne/30 blur-[6px]" />
                    <span className="relative h-3.5 w-4 rounded-full border border-champagne/70 bg-gradient-to-br from-champagne via-gold to-gold-dark shadow-[0_0_0_3px_rgba(10,11,20,0.85),0_0_14px_rgba(232,212,168,0.55)]" />
                  </span>

                  <div className={`mb-3 ${leftSide ? 'sm:text-right' : ''}`}>
                    <RoyalBadge night>{exp.period}</RoyalBadge>
                  </div>

                  <RoyalPanel className="hover:shadow-princess-lg transition-shadow duration-500">
                    <div className="relative px-6 py-6 sm:px-7 overflow-hidden">
                      <SparkleField count={4} className="opacity-25" tone="#A98242" />
                      <h3 className="font-display text-xl font-semibold text-ink leading-snug mb-1">
                        {exp.company}
                      </h3>
                      {exp.organization && (
                        <p className="text-bronze/75 text-xs tracking-wide mb-2">{exp.organization}</p>
                      )}
                      <p className="font-script text-lg text-rose mb-4">{exp.role}</p>
                      <ul className="space-y-2.5">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2.5 text-ink/80 text-sm leading-relaxed">
                            <svg width="8" height="8" viewBox="0 0 8 8" className="mt-[6px] flex-shrink-0" aria-hidden="true">
                              <ellipse cx="4" cy="4" rx="3" ry="2.4" fill="#C6A15B" opacity="0.85" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </RoyalPanel>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

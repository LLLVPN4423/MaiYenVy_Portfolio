import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
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
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-sea-blue-dark font-serif">
            Kinh nghiệm
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sea-blue-primary to-sea-blue-dark mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-sea-blue-primary/20" />
              
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-sea-blue-primary rounded-full border-2 border-white shadow-md" />

              {/* Content */}
              <div className="bg-soft-beige rounded-2xl p-6 shadow-sm border border-sea-blue-primary/10 hover:border-sea-blue-primary/30 transition-colors">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-sea-blue-dark font-serif mb-1">
                      {exp.company}
                    </h3>
                    {exp.organization && (
                      <p className="text-sm text-sea-blue-primary/70 mb-2">
                        {exp.organization}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-sea-blue-primary font-medium">
                      <Briefcase size={16} />
                      <span>{exp.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sea-blue-dark/70 text-sm">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sea-blue-dark/80 text-sm">
                      <span className="w-1.5 h-1.5 bg-sea-blue-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

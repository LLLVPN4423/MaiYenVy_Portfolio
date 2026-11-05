import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { FileText, Image as ImageIcon, Video, Palette, X, Play } from 'lucide-react'
import {
  RoyalSectionHeading, CardOrnament, NightBackdrop,
  RoyalBadge, RoyalButton, CornerFlourish, BotanicalSprig,
} from './decor/Ornaments'

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    })

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [options])

  return [elementRef, isVisible]
}

const useDebounce = (callback, delay) => {
  const timeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return useCallback((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }, [callback, delay])
}

const LazyImage = ({ src, alt, className, ...props }) => {
  const [ref, isVisible] = useIntersectionObserver()
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <div ref={ref} className="relative w-full h-full bg-royal">
      {!isVisible && !hasError && (
        <div className="absolute inset-0 bg-royal animate-pulse" />
      )}
      {isVisible && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          loading="lazy"
          {...props}
        />
      )}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-champagne/50">
          <ImageIcon size={28} strokeWidth={1.25} />
          <span className="font-script text-lg">hình ảnh đang được sắp xếp</span>
        </div>
      )}
    </div>
  )
}

const Portfolio = () => {
  const reduceMotion = useReducedMotion()
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videoError, setVideoError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 12

  // Cấu hình danh mục dự án
  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'editor', name: 'Biên tập & Biên kịch', icon: FileText },
    { id: 'creator', name: 'Content Creator', icon: FileText },
    { id: 'media', name: 'Media & Chụp ảnh', icon: ImageIcon },
    { id: 'video', name: 'Quay dựng', icon: Video },
    { id: 'design', name: 'Thiết kế', icon: Palette },
  ]

  // Dữ liệu dự án thực tế từ folder "Các sản phẩm đã thực hiện" (selected images)
  const koreanFestivalImages = [
    'IMG_8307.jpg', 'IMG_8354.jpg', 'IMG_8414.jpg', 'IMG_8555.jpg', 'IMG_8637.jpg', 'IMG_8699.jpg'
  ]

  const volunteerImages = [
    '678550890_1403714191798576_5103472426435505945_n.jpg',
    '679071998_1403713455131983_6500414724288222981_n.jpg',
    '680156365_1403710065132322_1537551453669781584_n.jpg',
    'DSC_3705 (1).JPG',
    'IMG_0208.JPG',
    'IMG_0251.JPG'
  ]

  const btsImages = [
    'IMG_6323.JPG', 'IMG_6345.JPG', 'IMG_6362.JPG', 'IMG_6385.JPG', 'IMG_6411.JPG', 'IMG_6447.JPG'
  ]

  // Generate project cards for all images
  const koreanFestivalProjects = koreanFestivalImages.map((img, index) => ({
    id: 100 + index,
    category: 'media',
    title: `Lễ hội Hàn Quốc ${index + 1}`,
    description: `Ảnh ${index + 1} từ bộ sự kiện Lễ hội văn hóa Hàn Quốc`,
    thumbnail: `https://raw.githubusercontent.com/LLLVPN4423/MaiYenVy_Portfolio/main/public/${img}`,
    type: 'gallery',
    fullImage: `https://raw.githubusercontent.com/LLLVPN4423/MaiYenVy_Portfolio/main/public/${img}`
  }))

  const volunteerProjects = volunteerImages.map((img, index) => ({
    id: 200 + index,
    category: 'media',
    title: `Hoạt động tình nguyện ${index + 1}`,
    description: `Ảnh ${index + 1} từ bộ hoạt động tình nguyện`,
    thumbnail: `https://raw.githubusercontent.com/LLLVPN4423/MaiYenVy_Portfolio/main/public/${img}`,
    type: 'gallery',
    fullImage: `https://raw.githubusercontent.com/LLLVPN4423/MaiYenVy_Portfolio/main/public/${img}`
  }))

  const btsProjects = btsImages.map((img, index) => ({
    id: 300 + index,
    category: 'media',
    title: `BTS Sự kiện ${index + 1}`,
    description: `Ảnh ${index + 1} từ bộ BTS hậu trường sự kiện`,
    thumbnail: `https://raw.githubusercontent.com/LLLVPN4423/MaiYenVy_Portfolio/main/public/${img}`,
    type: 'gallery',
    fullImage: `https://raw.githubusercontent.com/LLLVPN4423/MaiYenVy_Portfolio/main/public/${img}`
  }))

  const projects = [
    // Biên tập & Biên kịch
    {
      id: 1,
      category: 'editor',
      title: 'Kịch bản Tập Cuối',
      description: 'Biên tập và kịch bản cho video tập cuối với nội dung sáng tạo',
      thumbnail: 'https://raw.githubusercontent.com/LLLVPN4423/MaiYenVy_Portfolio/main/public/IMG_8307.jpg',
      type: 'text',
    },

    // Content Creator (mockup — chưa có sản phẩm thực tế)
    {
      id: 2,
      category: 'creator',
      title: 'Chiến dịch TikTok',
      description: 'Campaign TikTok đạt 1M views với hashtag viral',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      type: 'social',
      mock: true,
    },
    {
      id: 3,
      category: 'creator',
      title: 'Instagram Reels',
      description: 'Series Reels về lifestyle với engagement rate 8%',
      thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
      type: 'social',
      mock: true,
    },

    // Media & Chụp ảnh - Tất cả ảnh
    ...koreanFestivalProjects,
    ...volunteerProjects,
    ...btsProjects,

    // Quay dựng
    {
      id: 7,
      category: 'video',
      title: 'GALA - Phần 2',
      description: 'Video quay dựng cho sự kiện GALA phần 2',
      thumbnail: 'https://raw.githubusercontent.com/LLLVPN4423/MaiYenVy_Portfolio/main/public/IMG_8354.jpg',
      type: 'video',
      videoUrl: '/videos/GALA - PHẦN 2.mp4',
    },
    {
      id: 8,
      category: 'video',
      title: 'Lâm Kịch Tập Cuối',
      description: 'Video biên tập kịch bản tập cuối',
      thumbnail: 'https://raw.githubusercontent.com/LLLVPN4423/MaiYenVy_Portfolio/main/public/IMG_8414.jpg',
      type: 'video',
      videoUrl: '/videos/LAMKICH_TAP CUOI_0406.mov',
    },

    // Thiết kế (mockup — chưa có sản phẩm thực tế)
    {
      id: 9,
      category: 'design',
      title: 'Poster Sự kiện',
      description: 'Thiết kế poster cho festival âm nhạc',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      type: 'design',
      mock: true,
    },
    {
      id: 10,
      category: 'design',
      title: 'Brand Identity',
      description: 'Bộ nhận diện thương hiệu cho startup',
      thumbnail: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
      type: 'design',
      mock: true,
    },
  ]

  // Lọc dự án theo danh mục
  const filteredProjects = activeFilter === 'all'
    ? (() => {
        // Khi chọn "Tất cả", chỉ hiển thị 1-2 dự án đầu tiên của mỗi danh mục
        const categoryProjects = {}
        projects.forEach(project => {
          if (!categoryProjects[project.category]) {
            categoryProjects[project.category] = []
          }
          if (categoryProjects[project.category].length < 2) {
            categoryProjects[project.category].push(project)
          }
        })
        return Object.values(categoryProjects).flat()
      })()
    : projects.filter(project => project.category === activeFilter)

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)

  // Reset page when filter changes
  const handleFilterChange = useDebounce((filterId) => {
    setActiveFilter(filterId)
    setCurrentPage(1)
  }, 150)

  // Close modals on Escape + lock body scroll while open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
        setSelectedVideo(null)
      }
    }
    if (selectedImage || selectedVideo) {
      window.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selectedImage, selectedVideo])

  const openMedia = (project) => {
    setVideoError(false)
    if (project.type === 'gallery' || project.type === 'text') {
      setSelectedImage({ src: project.fullImage || project.thumbnail, title: project.title })
    } else if (project.type === 'video') {
      setSelectedVideo(project.videoUrl)
    }
  }

  return (
    <section id="portfolio" className="relative py-24 bg-midnight overflow-hidden">
      <NightBackdrop castle glass />
      <BotanicalSprig className="absolute left-4 top-32 w-9 h-36 opacity-20 hidden lg:block" />
      <BotanicalSprig flip className="absolute right-4 top-32 w-9 h-36 opacity-20 hidden lg:block" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RoyalSectionHeading
          eyebrow="chương ba"
          title="Những trang đã viết"
          subtitle="Bộ sưu tập trong cuốn storybook hoàng gia — từng khung hình là một chương nhỏ"
        />

        {/* Chapter ribbon filters */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto mb-14 max-w-4xl"
          role="group"
          aria-label="Lọc dự án theo danh mục"
        >
          <div className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-champagne/35 to-transparent hidden sm:block" aria-hidden="true" />
          <div className="relative flex flex-wrap justify-center gap-2.5">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = activeFilter === category.id
              return (
                <motion.button
                  key={category.id}
                  onClick={() => handleFilterChange(category.id)}
                  whileHover={reduceMotion ? {} : { y: -2 }}
                  whileTap={reduceMotion ? {} : { scale: 0.97 }}
                  aria-pressed={isActive}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] tracking-widest-story uppercase font-medium transition-all duration-300 border ${
                    isActive
                      ? 'parchment paper-grain text-ink border-champagne/70 shadow-glow -translate-y-0.5'
                      : 'bg-navy/80 text-champagne/70 border-champagne/25 hover:border-champagne/55 hover:text-champagne hover:-translate-y-0.5 backdrop-blur-sm'
                  }`}
                >
                  {Icon && <Icon size={15} strokeWidth={1.5} />}
                  <span>{category.name}</span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Storybook plate grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${currentPage}`}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9"
          >
            {currentProjects.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : Math.min(i * 0.04, 0.24) }}
                className="group relative"
              >
                {/* Vintage illustrated plate */}
                <div className="relative royal-frame p-1 sm:p-[5px] shadow-royal hover:shadow-royal-lg transition-shadow duration-500">
                  <CornerFlourish className="absolute -top-1.5 -left-1.5 w-7 h-7 opacity-85 z-10" tone="#E8D4A8" />
                  <CornerFlourish className="absolute -top-1.5 -right-1.5 w-7 h-7 -scale-x-100 opacity-85 z-10" tone="#E8D4A8" />
                  <CornerFlourish className="absolute -bottom-1.5 -left-1.5 w-7 h-7 -scale-y-100 opacity-85 z-10" tone="#E8D4A8" />
                  <CornerFlourish className="absolute -bottom-1.5 -right-1.5 w-7 h-7 -scale-100 opacity-85 z-10" tone="#E8D4A8" />
                  <div className="absolute inset-[2px] rounded-[0.2rem] border border-champagne/35 pointer-events-none" aria-hidden="true" />

                  <div
                    className="relative overflow-hidden rounded-[0.15rem] bg-[#F8F1E3] border border-[#2A1F16]/25 cursor-pointer"
                    onClick={() => openMedia(project)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter') openMedia(project) }}
                    aria-label={`Xem ${project.title}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden m-1 rounded-[0.1rem]">
                      <LazyImage
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />

                      <div className="absolute top-2 left-2 flex flex-col items-start gap-1 z-[1]">
                        <RoyalBadge className="!bg-[#F5EBDD]/95 backdrop-blur-sm !border-champagne/55 !text-bronze">
                          {categories.find(c => c.id === project.category)?.name}
                        </RoyalBadge>
                        {project.mock && (
                          <RoyalBadge className="!bg-lilac/90 backdrop-blur-sm !border-bronze/25 !text-bronze">
                            Minh họa
                          </RoyalBadge>
                        )}
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1208]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                        <span className="px-4 py-1.5 parchment paper-grain text-bronze text-xs tracking-widest-story uppercase rounded-royal border border-champagne/50 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 shadow-sm">
                          {project.type === 'video' ? 'Mở cuộn phim' : 'Mở trang này'}
                        </span>
                      </div>
                    </div>

                    {/* Manuscript caption slip */}
                    <div className="parchment paper-grain paper-edge mx-1 mb-1 mt-0 rounded-[0.15rem] border border-champagne/35 px-4 py-3.5">
                      <CardOrnament className="mb-2" />
                      <h3 className="font-display text-xl font-semibold text-ink mb-1 leading-snug group-hover:text-bronze transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-bronze/70 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {totalPages > 1 && (
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center gap-4 mt-14"
            aria-label="Phân trang dự án"
          >
            <RoyalButton variant="night" className="!rounded-full !px-5 !py-2.5 !text-sm normal-case !tracking-wide"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              ← Trang trước
            </RoyalButton>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  aria-current={currentPage === page ? 'page' : undefined}
                  className={`w-10 h-10 rounded-full text-sm transition-all duration-300 border ${
                    currentPage === page
                      ? 'bg-gradient-to-br from-champagne to-gold text-[#3A2A1E] border-champagne shadow-glow'
                      : 'bg-royal/70 text-night/70 border-champagne/30 hover:border-champagne/60 hover:text-champagne'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <RoyalButton variant="night" className="!rounded-full !px-5 !py-2.5 !text-sm normal-case !tracking-wide"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Trang sau →
            </RoyalButton>
          </motion.nav>
        )}

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="font-script text-3xl text-champagne/80">Chương này còn đang viết…</p>
            <p className="text-night/60 text-sm mt-2">Không có dự án trong danh mục này</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox — open storybook leaf */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#05070F]/92 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Xem ảnh toàn màn hình"
          >
            <motion.button
              initial={reduceMotion ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { scale: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 p-2.5 bg-royal/70 rounded-full hover:bg-royal border border-champagne/45 transition-colors z-10"
              aria-label="Đóng"
            >
              <X size={22} className="text-champagne" />
            </motion.button>
            <motion.div
              initial={reduceMotion ? false : { scale: 0.88, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative royal-frame p-1.5 sm:p-2 shadow-royal-lg max-w-[92vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <CornerFlourish className="absolute -top-1.5 -left-1.5 w-8 h-8 opacity-85" tone="#E8D4A8" />
              <CornerFlourish className="absolute -top-1.5 -right-1.5 w-8 h-8 -scale-x-100 opacity-85" tone="#E8D4A8" />
              <CornerFlourish className="absolute -bottom-1.5 -left-1.5 w-8 h-8 -scale-y-100 opacity-85" tone="#E8D4A8" />
              <CornerFlourish className="absolute -bottom-1.5 -right-1.5 w-8 h-8 -scale-100 opacity-85" tone="#E8D4A8" />
              <div className="rounded-[0.15rem] border border-champagne/35 p-1 bg-[#FBF6EE] overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-[86vw] max-h-[68vh] object-contain rounded-[0.1rem] mx-auto"
                />
                {selectedImage.title && (
                  <div className="parchment paper-grain mt-1.5 px-4 py-2 rounded-royal border border-champagne/35 flex items-center justify-center gap-3">
                    <span className="w-4 h-px bg-champagne/55" aria-hidden="true" />
                    <p className="font-display text-sm text-bronze">{selectedImage.title}</p>
                    <span className="w-4 h-px bg-champagne/55" aria-hidden="true" />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video modal — vintage reel plate */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#05070F]/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Xem video"
          >
            <motion.button
              initial={reduceMotion ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { scale: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="absolute top-5 right-5 p-2.5 bg-royal/70 rounded-full hover:bg-royal border border-champagne/45 transition-colors z-10"
              aria-label="Đóng"
            >
              <X size={22} className="text-champagne" />
            </motion.button>
            <motion.div
              initial={reduceMotion ? false : { scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { scale: 0.96, opacity: 0 }}
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {videoError ? (
                <div className="aspect-video parchment paper-grain rounded-royal border border-champagne/50 flex flex-col items-center justify-center gap-3 text-bronze/70 shadow-royal">
                  <Play size={32} strokeWidth={1.25} />
                  <p className="font-script text-3xl text-bronze">Video tạm thời không khả dụng</p>
                  <p className="text-xs text-bronze/70 tracking-wide">Tệp video chưa được xuất bản — vui lòng quay lại sau</p>
                </div>
              ) : (
                <div className="royal-frame p-1.5 sm:p-2 shadow-royal-lg">
                  <div className="rounded-[0.15rem] border border-champagne/35 p-0.5 bg-[#FBF6EE] overflow-hidden">
                    <video
                      src={selectedVideo}
                      controls
                      autoPlay
                      preload="metadata"
                      className="w-full rounded-[0.1rem]"
                      onError={() => setVideoError(true)}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio

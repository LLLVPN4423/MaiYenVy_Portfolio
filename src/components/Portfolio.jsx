import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Play, FileText, Image, Video, Palette, X } from 'lucide-react'

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

  return (
    <div ref={ref} className="relative w-full h-full">
      {!isVisible && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse" />
      )}
      {isVisible && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  )
}

const Portfolio = () => {
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
    { id: 'media', name: 'Media & Chụp ảnh', icon: Image },
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
    thumbnail: `/media-selected/korean-festival/${img}`,
    type: 'gallery',
    fullImage: `/media-selected/korean-festival/${img}`
  }))

  const volunteerProjects = volunteerImages.map((img, index) => ({
    id: 200 + index,
    category: 'media',
    title: `Hoạt động tình nguyện ${index + 1}`,
    description: `Ảnh ${index + 1} từ bộ hoạt động tình nguyện`,
    thumbnail: `/media-selected/volunteer/${img}`,
    type: 'gallery',
    fullImage: `/media-selected/volunteer/${img}`
  }))

  const btsProjects = btsImages.map((img, index) => ({
    id: 300 + index,
    category: 'media',
    title: `BTS Sự kiện ${index + 1}`,
    description: `Ảnh ${index + 1} từ bộ BTS hậu trường sự kiện`,
    thumbnail: `/media-selected/bts/${img}`,
    type: 'gallery',
    fullImage: `/media-selected/bts/${img}`
  }))

  const projects = [
    // Biên tập & Biên kịch
    {
      id: 1,
      category: 'editor',
      title: 'Kịch bản Tập Cuối',
      description: 'Biên tập và kịch bản cho video tập cuối với nội dung sáng tạo',
      thumbnail: '/media-selected/korean-festival/IMG_8307.jpg',
      type: 'text',
    },

    // Content Creator (giữ mockup do folder trống)
    {
      id: 2,
      category: 'creator',
      title: 'Chiến dịch TikTok',
      description: 'Campaign TikTok đạt 1M views với hashtag viral',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      type: 'social',
    },
    {
      id: 3,
      category: 'creator',
      title: 'Instagram Reels',
      description: 'Series Reels về lifestyle với engagement rate 8%',
      thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
      type: 'social',
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
      thumbnail: '/media-selected/korean-festival/IMG_8354.jpg',
      type: 'video',
      videoUrl: '/videos/GALA - PHẦN 2.mp4',
    },
    {
      id: 8,
      category: 'video',
      title: 'Lâm Kịch Tập Cuối',
      description: 'Video biên tập kịch bản tập cuối',
      thumbnail: '/media-selected/korean-festival/IMG_8414.jpg',
      type: 'video',
      videoUrl: '/videos/LAMKICH_TAP CUOI_0406.mov',
    },

    // Thiết kế (giữ mockup do folder trống)
    {
      id: 9,
      category: 'design',
      title: 'Poster Sự kiện',
      description: 'Thiết kế poster cho festival âm nhạc',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      type: 'design',
    },
    {
      id: 10,
      category: 'design',
      title: 'Brand Identity',
      description: 'Bộ nhận diện thương hiệu cho startup',
      thumbnail: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
      type: 'design',
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

  return (
    <section id="portfolio" className="py-20 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-sea-blue-dark font-serif">
            Dự án đã thực hiện
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sea-blue-primary to-sea-blue-dark mx-auto rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-sea-blue-primary to-sea-blue-dark text-white'
                    : 'bg-white text-sea-blue-dark hover:bg-soft-beige-dark border border-sea-blue-primary/20'
                }`}
              >
                {Icon && <Icon size={16} />}
                <span className="text-sm sm:text-base">{category.name}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${currentPage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-xl overflow-hidden border border-sea-blue-primary/20 hover:border-sea-blue-primary shadow-sm hover:shadow-lg transition-all"
              >
                {/* Thumbnail */}
                <div
                  className="relative aspect-video overflow-hidden cursor-pointer"
                  onClick={() => {
                    if (project.type === 'gallery' || project.type === 'text') {
                      setSelectedImage(project.fullImage || project.thumbnail)
                    } else if (project.type === 'video') {
                      setSelectedVideo(project.videoUrl)
                    }
                  }}
                >
                  <LazyImage
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay for video type */}
                  {project.type === 'video' && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-16 h-16 bg-sea-blue-primary rounded-full flex items-center justify-center"
                      >
                        <Play size={24} className="text-white fill-current ml-1" />
                      </motion.div>
                    </div>
                  )}

                  {/* Overlay for gallery type */}
                  {(project.type === 'gallery' || project.type === 'text') && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Image size={32} className="text-white" />
                    </div>
                  )}

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-sea-blue-primary/90 text-white text-xs rounded-full">
                      {categories.find(c => c.id === project.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-sea-blue-dark mb-2 group-hover:text-sea-blue-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sea-blue-primary/70 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center gap-4 mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white text-sea-blue-dark rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-soft-beige-dark border border-sea-blue-primary/20 transition-colors"
            >
              Trước
            </motion.button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <motion.button
                  key={page}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-sea-blue-primary to-sea-blue-dark text-white'
                      : 'bg-white text-sea-blue-dark hover:bg-soft-beige-dark border border-sea-blue-primary/20'
                  }`}
                >
                  {page}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white text-sea-blue-dark rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-soft-beige-dark border border-sea-blue-primary/20 transition-colors"
            >
              Sau
            </motion.button>
          </motion.div>
        )}

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-sea-blue-primary/70 text-lg">Không có dự án trong danh mục này</p>
          </motion.div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <X size={24} className="text-white" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
            >
              <X size={24} className="text-white" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={selectedVideo}
                controls
                autoPlay
                preload="metadata"
                className="w-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio

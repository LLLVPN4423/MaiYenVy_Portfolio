# Portfolio Website - Sinh viên ngành Truyền thông

Một trang web Portfolio cá nhân dạng Landing Page (Single Page Application) dành cho sinh viên ngành Truyền thông, Văn hóa và Social Media.

## 🎨 Tính năng

- **Hero Section**: Giới thiệu tên, vị trí, câu quote và nút CTA
- **About Me**: Giới thiệu bản thân, kỹ năng mềm và kỹ năng chuyên môn
- **Portfolio**: Hệ thống filter mượt mà với 5 danh mục dự án:
  - Biên tập & Biên kịch (Text, kịch bản, bài viết)
  - Content Creator (Chiến dịch social media)
  - Media & Chụp ảnh (Gallery lưới ảnh)
  - Quay dựng (Video thumbnails với player)
  - Thiết kế (Poster, ấn phẩm đồ họa)
- **Contact**: Icon mạng xã hội và địa chỉ email
- **Responsive**: Hoạt động hoàn hảo trên Desktop, Tablet và Mobile
- **Animations**: Hiệu ứng mượt mà với Framer Motion

## 🛠️ Công nghệ sử dụng

- **React 18** - Frontend framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Vite** - Build tool

## 📦 Cài đặt

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy development server

```bash
npm run dev
```

Truy cập `http://localhost:3000` để xem trang web.

### 3. Build cho production

```bash
npm run build
```

File build sẽ nằm trong thư mục `dist/`.

### 4. Preview production build

```bash
npm run preview
```

## 🎯 Tùy chỉnh nội dung

### 1. Thay đổi thông tin cá nhân

Mở file `src/components/Hero.jsx` và chỉnh sửa:

```javascript
const config = {
  name: '[Tên của bạn]', // Thay tên thực tế
  position: 'Sinh viên ngành Truyền thông & Sáng tạo nội dung',
  quote: '"Chuyển đổi ý tưởng thành trải nghiệm số ấn tượng"',
  ctaText: 'Xem dự án',
}
```

### 2. Thay đổi thông tin giới thiệu

Mở file `src/components/About.jsx` và chỉnh sửa:

```javascript
const config = {
  description: `Mô tả về bản thân...`,
  softSkills: [
    { name: 'Làm việc nhóm', icon: User },
    { name: 'Sáng tạo', icon: Sparkles },
    // Thêm kỹ năng khác
  ],
  technicalSkills: [
    'Content Writing',
    'Social Media Marketing',
    // Thêm kỹ năng chuyên môn khác
  ],
}
```

### 3. Thay đổi thông tin liên hệ

Mở file `src/components/Contact.jsx` và chỉnh sửa:

```javascript
const config = {
  email: 'email@example.com', // Thay email thực tế
  socialLinks: {
    facebook: 'https://facebook.com/yourprofile',
    instagram: 'https://instagram.com/yourprofile',
    linkedin: 'https://linkedin.com/in/yourprofile',
    behance: 'https://behance.net/yourprofile',
  },
}
```

### 4. Thêm/Sửa dự án

Mở file `src/components/Portfolio.jsx` và chỉnh sửa mảng `projects`:

```javascript
const projects = [
  {
    id: 1,
    category: 'editor', // editor, creator, media, video, design
    title: 'Tên dự án',
    description: 'Mô tả ngắn về dự án',
    thumbnail: 'URL_ảnh_thumbnail',
    type: 'text', // text, social, gallery, video, design
    videoUrl: 'URL_video_embed' // Chỉ cần cho type='video'
  },
  // Thêm dự án khác
]
```

### 5. Thay đổi màu sắc

Mở file `tailwind.config.js` và chỉnh sửa:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#6366f1',    // Màu chính
      secondary: '#8b5cf6',  // Màu phụ
      dark: '#0f172a',       // Màu nền tối
      light: '#f8fafc',      // Màu nền sáng
    },
  },
}
```

## 📁 Cấu trúc thư mục

```
portfolio-website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Portfolio.jsx
│   ├── App.jsx           # Main component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🚀 Deploy

### GitHub Pages

1. Push code lên GitHub
2. Vào Settings > Pages
3. Chọn branch và folder (gh-pages hoặc main)
4. Deploy

### Vercel

1. Push code lên GitHub
2. Import project trên Vercel
3. Deploy tự động

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy

## 📝 Ghi chú

- Ảnh placeholder sử dụng Unsplash API
- Video embed sử dụng YouTube iframe
- Tất cả animations sử dụng Framer Motion
- Responsive design với mobile-first approach

## 🤝 Đóng góp

Feel free to fork và customize theo nhu cầu cá nhân!

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân

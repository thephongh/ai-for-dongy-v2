# AI Training Course for Traditional Medicine Practitioners

An interactive web application built with React and TypeScript that provides comprehensive AI training specifically designed for traditional medicine practitioners (lương y).

## 🎯 Features

- **6 Comprehensive Chapters**: From AI basics to advanced practical applications
- **Interactive Quizzes**: Test knowledge with timed quizzes after each chapter
- **Beautiful Design System**: Implements the provided design requirements with gradients and modern UI
- **Progress Tracking**: Visual progress indicators and completion status
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Vietnamese Content**: Fully localized content in Vietnamese

## 📚 Course Structure

1. **Chapter 1**: Khai Mở Tư Duy - AI và Y Học Cổ Truyền
2. **Chapter 2**: Giải Mã Ma Trận "Bộ Não" AI - Đào tạo, Tư duy và Giao tiếp
3. **Chapter 3**: Nghệ Thuật Giao Tiếp với AI - Prompt Nâng Cao
4. **Chapter 4**: AI Trợ Lý Toàn Năng - Ứng Dụng Lâm Sàng và Quản Lý
5. **Chapter 5**: Tinh Tường và An Toàn - Đạo Đức và Đánh Giá AI
6. **Chapter 6**: Con Đường Phía Trước - Tích Hợp và Phát Triển

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-training-course
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

## 🌐 Deployment

This app is configured for easy deployment on:

### Vercel (Recommended)
- Push to GitHub
- Connect repository to Vercel
- Deploy automatically

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- The `_redirects` file is already configured for SPA routing

## 🎨 Design System

The app implements a comprehensive design system based on the provided requirements:

- **Color Palette**: Vibrant gradients and solid colors
- **Typography**: Responsive typography with clamp() functions
- **Components**: Consistent card designs, buttons, and navigation
- **Responsive**: Mobile-first design approach

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **React Router** - Client-side routing
- **Vite** - Fast build tool and dev server
- **React Markdown** - Markdown content rendering
- **Lucide React** - Beautiful icons

## 📱 Features

### Content Management
- Markdown-based content system
- Structured quiz system with JSON configuration
- Progress tracking and completion status

### User Experience
- Timed quizzes with countdown
- Step-by-step navigation
- Visual progress indicators
- Responsive design for all devices

### Quiz System
- Multiple choice questions
- Automatic scoring
- Pass/fail feedback
- Retry functionality
- Progress persistence

## 🔧 Customization

### Adding New Chapters
1. Add content to `src/data/chapters.ts`
2. Include quiz questions in the same file
3. The app will automatically include the new chapter

### Modifying Design
- Update CSS variables in `src/styles/design-system.css`
- All colors, fonts, and spacing are centralized

### Content Updates
- Chapter content is written in Markdown
- Quiz questions are configured in JSON format
- All content is in Vietnamese

## 📄 License

This project is created for educational purposes for traditional medicine practitioners.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support regarding the course content or technical issues, please create an issue in the repository.

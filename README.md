# AI for Dongy v2 - Course Platform for Traditional Medicine Practitioners

An interactive web application built with React and TypeScript that provides comprehensive AI training specifically designed for traditional Vietnamese medicine practitioners (lương y).

## 🎯 Features

- **6 Comprehensive Chapters**: From AI basics to advanced practical applications
- **Markdown-Based Content**: Easy-to-edit course content stored in markdown files
- **Interactive Quizzes**: JSON-configured quizzes with timed questions after each chapter
- **Beautiful Design System**: Modern UI with gradients, glowing effects, and harmony bridge background
- **Progress Tracking**: Visual progress indicators and completion status
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Vietnamese Content**: Fully localized content in Vietnamese

## 📚 Course Structure

1. **Chapter 1**: Khai Mở Tư Duy - AI và Y Học Cổ Truyền
2. **Chapter 2**: Giải Mã Ma Trận "Bộ Não" AI - Đào tạo, Tư duy và Giao tiếp
3. **Chapter 3**: Nghệ Thuật Đối Thoại - Prompt Engineering và Kỹ Thuật Nâng Cao
4. **Chapter 4**: Ứng Dụng Thực Tế - AI trong Chẩn Đoán và Điều Trị
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

## 📁 Project Structure

```
ai-for-dongy-v2/
├── public/
│   ├── courses/                    # Course content (markdown files)
│   │   ├── chapter-1/
│   │   │   ├── index.md           # Chapter overview
│   │   │   ├── page-1.md          # Individual pages
│   │   │   ├── page-2.md
│   │   │   └── quiz.json          # Quiz configuration
│   │   └── chapter-6/
│   └── images/                     # Course images
│       ├── chapter-1/
│       │   └── 1.1-harmony-bridge.jpg
│       └── chapter-6/
├── src/
│   ├── components/                 # React components
│   │   ├── HomePage.tsx           # Landing page with hero section
│   │   ├── ChapterList.tsx        # Chapter navigation
│   │   ├── ChapterDetail.tsx      # Chapter content viewer
│   │   └── Navigation.tsx         # Main navigation
│   ├── data/
│   │   └── chapters.ts            # Chapter data configuration
│   ├── styles/
│   │   └── design-system.css      # Design system & CSS variables
│   ├── types/
│   │   └── course.ts              # TypeScript type definitions
│   └── utils/
│       ├── contentLoader.ts       # Markdown content loader
│       └── contentSplitter.ts     # Content pagination utility
└── README.md
```

## 📝 Content Management

### Editing Course Content

All course content is stored in markdown files under `public/courses/`. Each chapter has its own directory:

#### Chapter Structure
```
public/courses/chapter-X/
├── index.md           # Chapter overview and table of contents
├── page-1.md          # Individual lesson pages
├── page-2.md
├── ...
└── quiz.json          # Quiz questions and configuration
```

#### Editing Pages
1. Navigate to `public/courses/chapter-X/`
2. Edit any `.md` file with your preferred text editor
3. Use standard markdown syntax
4. Changes are reflected immediately in development mode

#### Adding/Removing Images
- **Safe to remove**: Delete entire image lines from markdown files
- **No broken images**: Removing `![alt](path)` lines won't cause "missing image" icons
- **Image location**: Store images in `public/images/chapter-X/`
- **Reference format**: `![Alt text](../../images/chapter-X/image-name.jpg)`

#### Quiz Configuration
Edit `quiz.json` files to modify quiz questions:
```json
{
  "id": "chapter-1-quiz",
  "chapterId": "chapter-1",
  "timeLimit": 20,
  "passingScore": 75,
  "questions": [
    {
      "id": "q1",
      "question": "Question text",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Explanation text"
    }
  ]
}
```

### Adding New Chapters
1. **Create chapter directory**: `public/courses/chapter-X/`
2. **Add content files**: `index.md`, `page-1.md`, etc.
3. **Create quiz**: `quiz.json` with questions
4. **Update chapter data**: Add to `src/data/chapters.ts` fallbackChapters array
5. **Add images**: Store in `public/images/chapter-X/`

### Design Customization
- **CSS Variables**: Update `src/styles/design-system.css`
- **Colors & Gradients**: Centralized in design system
- **Typography**: Responsive with clamp() functions
- **Components**: Modify individual component files in `src/components/`

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

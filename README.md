
# 🚀 Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing professional skills, projects, and providing seamless contact functionality.

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with dark/light theme support
- **📱 Responsive Layout**: Optimized for all devices and screen sizes
- **💬 Contact Form**: Integrated Web3Forms for reliable email delivery
- **🎯 Project Showcase**: Interactive project cards with live demos and GitHub links
- **🌙 Theme Toggle**: Dark and light mode with system preference detection
- **⚡ Performance**: Built with Next.js 15 and optimized for speed
- **♿ Accessibility**: WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **Forms**: Web3Forms API
- **Deployment**: Vercel/Netlify ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhayk2/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Main page composition
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Navigation header
│   ├── hero.tsx          # Landing section
│   ├── about.tsx         # About section
│   ├── projects.tsx      # Projects showcase
│   ├── contact.tsx       # Contact form
│   └── footer.tsx        # Footer
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🎨 Customization

### Personal Information
Update your personal details in:
- `src/components/hero.tsx` - Name and title
- `src/components/about.tsx` - Bio and skills
- `src/components/projects.tsx` - Project data
- `src/components/footer.tsx` - Social links

### Contact Form
1. Get your Web3Forms access key from [web3forms.com](https://web3forms.com)
2. Update the access key in `src/components/contact.tsx`
3. Test the form functionality

### Styling
- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Fonts**: Update font imports in `src/app/layout.tsx`
- **Components**: Customize shadcn/ui components in `src/components/ui/`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Deploy with zero configuration

### Manual Deployment
```bash
npm run build
npm start
```

## 📧 Contact Form Setup

This project uses Web3Forms for contact form functionality:

1. **Sign up** at [web3forms.com](https://web3forms.com)
2. **Get your access key**
3. **Update** the access key in `src/components/contact.tsx`
4. **Test** the form on your deployed site

## 🎯 Key Features Explained

### Web3Forms Integration
- **No backend required** - Direct API integration
- **Reliable delivery** - Professional email service
- **Spam protection** - Built-in security features
- **Free tier** - 250 submissions per month

### Theme System
- **System preference** detection
- **Manual toggle** between light/dark modes
- **Persistent** theme selection
- **Smooth transitions** between themes

### Project Showcase
- **Interactive cards** with hover effects
- **Live demos** and GitHub links
- **Technology tags** for each project
- **Responsive grid** layout

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Abhay Kumar**
- GitHub: [@abhayk2](https://github.com/abhayk2)
- LinkedIn: [abhayk176](https://www.linkedin.com/in/abhayk176/)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Web3Forms](https://web3forms.com/) for the contact form service

---

⭐ **Star this repository if you found it helpful!**

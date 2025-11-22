# Video Portfolio Website

A modern, responsive video portfolio website built with Next.js 14, inspired by premium video production companies. Features a sleek design with video CDN integration, smooth animations, and an elegant user interface.

## Features

- 🎬 **Video Portfolio Grid** - Showcase your video work in a beautiful responsive grid
- 🎥 **CDN Video Integration** - Uses Vimeo CDN for fast video streaming
- ✨ **Smooth Animations** - Engaging CSS animations and transitions
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Next.js 14** - Built with the latest Next.js App Router
- 🎨 **Tailwind CSS** - Modern utility-first CSS framework
- 🖼️ **Modal Video Player** - Click any video to watch in fullscreen modal
- 🔄 **Load More** - Pagination to load videos progressively

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Video CDN**: Vimeo
- **Image CDN**: Unsplash

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
VIDEO_WEBSITE/
├── app/
│   ├── globals.css         # Global styles and animations
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with background video
│   ├── VideoGrid.tsx       # Video portfolio grid with modal
│   ├── VideoCard.tsx       # Individual video card component
│   └── Footer.tsx          # Footer with social links
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customization

### Adding Your Own Videos

Edit `components/VideoGrid.tsx` and update the `videos` array:

```typescript
const videos: Video[] = [
  {
    id: 1,
    title: 'Your Video Title',
    brand: 'Brand Name × Director',
    videoUrl: 'https://player.vimeo.com/video/YOUR_VIDEO_ID',
    thumbnailUrl: 'YOUR_THUMBNAIL_URL',
  },
  // Add more videos...
]
```

### Changing Hero Background Video

Edit `components/Hero.tsx` and update the iframe src:

```typescript
<iframe
  src="https://player.vimeo.com/video/YOUR_VIDEO_ID?background=1&autoplay=1&loop=1"
  ...
/>
```

### Customizing Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#000000',
      secondary: '#ffffff',
      // Add your custom colors
    },
  },
}
```

### Using Your Own CDN

The project uses Vimeo for videos and Unsplash for images. You can easily switch to other CDNs:

- **Videos**: Replace Vimeo URLs with YouTube, Cloudflare Stream, Mux, or any video CDN
- **Images**: Use your own image hosting or CDN service

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed to:

- **Vercel** (Recommended) - Zero configuration needed
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting**

## Features Breakdown

### Header Component
- Fixed navigation bar
- Responsive mobile menu
- Smooth scroll links

### Hero Section
- Full-screen background video from CDN
- Animated text entrance
- Call-to-action button
- Scroll indicator

### Video Grid
- Responsive grid layout (1/2/3 columns)
- Hover effects with overlay
- Click to play in modal
- Load more pagination
- Thumbnail images with fallback

### Footer
- Brand information
- Quick links
- Social media icons
- Copyright notice

## Performance Optimizations

- ✅ Lazy loading for images
- ✅ CDN for video streaming
- ✅ Optimized animations
- ✅ Next.js automatic code splitting
- ✅ Progressive video loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Credits

- Design inspired by [Loudmouth Films](https://www.loudmouth.co.in/)
- Built with Next.js and Tailwind CSS
- Videos from Vimeo
- Images from Unsplash

## Support

For questions or issues, please create an issue in the repository.

---

**Happy Coding! 🚀**

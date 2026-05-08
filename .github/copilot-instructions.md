# Fernando A. Davila - Professional Racing Driver Portfolio Website

This is a React-based portfolio website for professional racing driver Fernando A. Davila.

## Project Setup

- **Framework**: React 18.2 with TypeScript
- **Build Tool**: Vite 5.0
- **Styling**: CSS3 with custom properties
- **Development Server**: Runs on http://localhost:5173/
- **Color Scheme**: Professional white with red accent colors

## Running the Project

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Project Structure

The project is organized as follows:

- `src/components/` - React components (Navigation, HeroSection)
- `src/` - Main application files (App.tsx, main.tsx, CSS files)
- `public/` - Static assets (add your images here)
- `index.html` - HTML entry point

## Key Components

### Navigation Component
- File: `src/components/Navigation.tsx`
- Purpose: Main navigation bar with logo and menu links
- Features: Sticky positioning, hover effects with red accent, responsive design

### Hero Section Component
- File: `src/components/HeroSection.tsx`
- Purpose: Landing page hero section with driver info
- Features: Image placeholder with red border, name, title, call-to-action button

## Customization Tips

1. **Replace Image Placeholder**:
   - Add your racing image to `public/` folder
   - Update `HeroSection.tsx` to display the actual image
   - Remove the placeholder div

2. **Color Scheme**:
   - Primary colors defined in `src/index.css`
   - Red accent: `#e53935`
   - White backgrounds: `#ffffff`, `#f5f5f5`

3. **Add More Sections**:
   - Create new components in `src/components/`
   - Import and use them in `App.tsx`

4. **Update Navigation Links**:
   - Modify menu items in `Navigation.tsx`
   - Add corresponding sections or pages

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge).

## Next Steps

1. ✅ Project structure created
2. ✅ Navigation and hero sections implemented
3. ✅ Professional white and red color scheme applied
4. ⏳ Replace image placeholder with actual racing photo
5. ⏳ Add About, Partners, News, Proposal, Calendar, and Contact sections
6. ⏳ Deploy to production hosting

## Deployment

Build the project:
```bash
npm run build
```

Deploy the `dist/` folder to your hosting service (Vercel, Netlify, GitHub Pages, etc.).

# Fernando A. Davila - Professional Racing Driver Website

A modern, professional React website for professional racing driver Fernando A. Davila, built with Vite and TypeScript.

## Features

- **Professional White & Red Theme**: Clean white design with bold red accent colors
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Navigation Bar**: Sticky navigation with portfolio links (About, Partners, News, Proposal, Calendar, Contact)
- **Hero Section**: Eye-catching hero section with driver name, title, and call-to-action button
- **Professional Styling**: Minimalist design focused on the driver's brand and professionalism

## Tech Stack

- **React 18.2**: Frontend framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Modern build tool and development server
- **CSS3**: Custom styling with modern CSS features

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Navigation bar component
│   ├── Navigation.css      # Navigation styling
│   ├── HeroSection.tsx     # Hero section component
│   └── HeroSection.css     # Hero section styling
├── App.tsx                 # Main app component
├── App.css                 # App styling
├── main.tsx                # React entry point
└── index.css               # Global styles

index.html                   # HTML template
package.json                 # Dependencies and scripts
vite.config.ts              # Vite configuration
tsconfig.json               # TypeScript configuration
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:5173/
```

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Adding Your Image

Replace the image placeholder in the HeroSection component:

1. Add your karting image to the `public/` folder
2. Update the `HeroSection.tsx` component to use your image instead of the placeholder

### Styling

Colors and design tokens are defined in `src/index.css`:
- Primary white background: `#ffffff`
- Light gray secondary: `#f5f5f5`
- Accent red: `#e53935`

Modify these variables to customize the color scheme throughout the site.

### Adding Pages

Create new page components in `src/components/` and import them in `App.tsx` to add more sections to your website.

## Key Sections

### Navigation
- Sticky navigation bar with logo and menu items
- Hover effects with purple accent color
- Mobile responsive menu (can be enhanced with hamburger menu for smaller screens)

### Hero Section
- Large hero image area with overlay text
- Driver name and title
- Call-to-action button with hover effects
- Fully responsive grid layout

## Browser Support

This website works on all modern browsers including:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This project is provided as-is for the Jayden Brooks portfolio website.

## Support

For questions or customization needs, please refer to the React and Vite documentation:
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

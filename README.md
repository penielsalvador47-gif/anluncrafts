# 安倫 Crafts - Website Documentation

## Overview
A professional, modern website showcasing traditional Ifugao crafts with a complete light/dark theme toggle system.

## Features

### 🎨 Design & User Experience
- **Modern, Professional Layout**: Clean and elegant design that highlights the products
- **Light/Dark Theme Toggle**: Seamless theme switching with persistent preference storage
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects, hover animations, and smooth transitions
- **Interactive Product Galleries**: Click thumbnails to view different product angles

### 📦 Products Included
1. **Inabnutan** - 5 product images
2. **Pasiking** - 5 product images
3. **Hape Eng** - 6 product images
4. **Kupit** - 5 product images
5. **Kayabang** - 5 product images

**Total: 26 high-quality product images**

### 🎯 Key Sections
- **Hero Section**: Eye-catching introduction with call-to-action
- **About Section**: Brief description of heritage craftsmanship
- **Products Section**: Detailed product showcases with image galleries
- **Footer**: Brand information and copyright

### ⚡ Technical Features
- **Theme Persistence**: User's theme choice is saved in localStorage
- **Image Optimization**: Consistent object-fit for all images
- **Smooth Scrolling**: Elegant navigation between sections
- **Intersection Observer**: Scroll-triggered animations
- **Keyboard Accessibility**: Full keyboard navigation support
- **Performance Optimized**: Lazy loading and debounced scroll events

## File Structure
```
website/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS with theme variables
├── script.js           # JavaScript functionality
├── images/             # Product images folder
│   ├── product_image_1.jpg  (Inabnutan 1)
│   ├── product_image_2.jpg  (Inabnutan 2)
│   ├── product_image_3.jpg  (Inabnutan 3)
│   ├── product_image_4.jpg  (Inabnutan 4)
│   ├── product_image_5.jpg  (Inabnutan 5)
│   ├── product_image_6.jpg  (Pasiking 1)
│   ├── product_image_7.jpg  (Pasiking 2)
│   ├── product_image_8.jpg  (Pasiking 3)
│   ├── product_image_9.jpg  (Pasiking 4)
│   ├── product_image_10.jpg (Pasiking 5)
│   ├── product_image_11.jpg (Hape Eng 1)
│   ├── product_image_12.jpg (Hape Eng 2)
│   ├── product_image_13.jpg (Hape Eng 3)
│   ├── product_image_14.jpg (Hape Eng 4)
│   ├── product_image_15.jpg (Hape Eng 5)
│   ├── product_image_16.jpg (Hape Eng 6)
│   ├── product_image_17.jpg (Kupit 1)
│   ├── product_image_18.jpg (Kupit 2)
│   ├── product_image_19.jpg (Kupit 3)
│   ├── product_image_20.jpg (Kupit 4)
│   ├── product_image_21.jpg (Kupit 5)
│   ├── product_image_22.jpg (Kayabang 1)
│   ├── product_image_23.jpg (Kayabang 2)
│   ├── product_image_24.jpg (Kayabang 3)
│   ├── product_image_25.jpg (Kayabang 4)
│   └── product_image_26.jpg (Kayabang 5)
└── README.md           # This file
```

## How to Use

### Opening the Website
1. Navigate to the `website` folder
2. Open `index.html` in any modern web browser
3. The website will load with the light theme by default

### Theme Toggle
- Click the sun/moon icon in the top right corner to switch between light and dark themes
- Your preference is automatically saved and will persist across sessions

### Product Gallery
- Click on any thumbnail image below a product to view it in the main display
- The active thumbnail is highlighted with a colored border
- Hover over images for smooth zoom effects

## Browser Compatibility
- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## Customization Guide

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root[data-theme="light"] {
    --accent-primary: #8B5E34;  /* Main accent color */
    --accent-hover: #6d4626;    /* Hover state color */
}
```

### Adding More Products
1. Add product images to the `images/` folder
2. Add a new product card section in `index.html` following the existing pattern
3. Update the `changeImage()` function in `script.js` if needed

### Modifying Text
All text content is in `index.html` and can be easily edited without affecting functionality.

## Performance Features
- **Optimized Images**: All images use object-fit for consistent display
- **CSS Grid**: Modern layout system for responsive thumbnails
- **Intersection Observer**: Efficient scroll animations
- **LocalStorage**: Fast theme preference retrieval
- **Minimal Dependencies**: Pure HTML/CSS/JS, no frameworks

## Accessibility
- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios in both themes
- Focus indicators for interactive elements

## Credits
**Design & Development**: Custom professional design
**Typography**: Google Fonts (Playfair Display, Manrope, Noto Serif SC, Noto Sans SC)
**Products**: Traditional Ifugao crafts from the Banaue Rice Terraces

## License
© 2024 安倫 Crafts. All rights reserved.

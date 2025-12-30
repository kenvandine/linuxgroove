# LinuxGroove

A vibrant, modern, and responsive website showcasing open source Linux apps with an introduction to Linux.

## Features

- **Vibrant Design**: Inspired by colorful, artistic aesthetics with rainbow gradients and paint splatter effects
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **Modern Animations**: Smooth transitions, parallax effects, and interactive elements
- **Accessibility**: Semantic HTML and smooth scrolling
- **Fun Interactive Elements**: Cursor trails, floating particles, and gradient animations

## File Structure

```
linuxgroove/
├── index.html       # Main HTML structure
├── styles.css       # All styling and responsive design
├── script.js        # Interactive functionality
└── README.md        # This file
```

## Customization

### Adding Your Apps

Edit the `index.html` file in the "Apps Showcase" section. Replace the placeholder app cards with your actual apps:

```html
<div class="app-card">
    <div class="app-icon">📱</div>
    <h3>Your App Name</h3>
    <p class="app-description">Description of your app</p>
    <div class="app-tags">
        <span class="tag">Technology</span>
        <span class="tag">Language</span>
    </div>
    <div class="app-links">
        <a href="github-url" class="app-link">GitHub</a>
        <a href="download-url" class="app-link">Download</a>
    </div>
</div>
```

### Customizing Colors

All colors are defined as CSS variables in `styles.css`:

```css
:root {
    --color-pink: #FF1B8D;
    --color-purple: #A855F7;
    --color-blue: #3B82F6;
    /* ... more colors */
}
```

### Contact Links

Update the contact section in `index.html` with your actual links:

```html
<a href="https://github.com/yourusername" class="contact-link">
    <span class="contact-icon">💻</span>
    <span>GitHub</span>
</a>
```

## Sections

1. **Hero**: Eye-catching landing with call-to-action buttons
2. **What is Linux**: Introduction to Linux with 6 key benefits
3. **Apps Showcase**: Display your open source applications
4. **Contact**: Links to your social profiles and contact methods
5. **Footer**: Copyright and tagline

## Technologies Used

- Pure HTML5, CSS3, and JavaScript (no frameworks)
- Google Fonts: Poppins and Outfit
- CSS Grid and Flexbox for layouts
- CSS animations and transitions
- Intersection Observer API for scroll animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This website template is open source and free to use.

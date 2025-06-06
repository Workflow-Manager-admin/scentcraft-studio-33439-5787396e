# Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

## Features

- **Lightweight**: No heavy UI frameworks - uses only vanilla CSS and React
- **Modern UI**: Clean, responsive design with KAVIA brand styling
- **Fast**: Minimal dependencies for quick loading times
- **Simple**: Easy to understand and modify

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Customization

### Title Font: "Beautiful Dream" (Self-hosted Required)

> 🎨 The "Beautiful Dream" font is **not available on Google Fonts, Adobe Fonts, or as an open CDN.**  
> To use it, you **MUST self-host the font file** and configure the CSS as described below.

#### How to Add "Beautiful Dream" Font for h1, h2, and .title

1. **Obtain the font files**  
   You must have a legal copy of "Beautiful Dream" in `.woff2` and/or `.woff` format.
   
2. **Add the font file(s)**  
   Place the font files into:  
   ```
   scentcraft_studio/src/assets/fonts/
   ```
   For example:
   ```
   scentcraft_studio/src/assets/fonts/BeautifulDream.woff2
   scentcraft_studio/src/assets/fonts/BeautifulDream.woff
   ```

3. **Update the CSS in `src/App.css`**  
   The following block should be added to the top of `src/App.css` and UNCOMMENTED (remove the comment markers) once files are in place:

   ```css
   @font-face {
     font-family: 'Beautiful Dream';
     src: url('./assets/fonts/BeautifulDream.woff2') format('woff2'),
          url('./assets/fonts/BeautifulDream.woff') format('woff');
     font-style: normal;
     font-weight: 400;
     font-display: swap;
   }
   ```

   The project is set up to apply this font to **all `h1`, `h2`, and `.title`** elements.

4. **If you do not have the font:**  
   Visit the official foundry or licensed website for "Beautiful Dream" and acquire the font following their terms of use.

5. **Fallback:**  
   Without these files, headings will fall back to system or cursive fonts.

---

### Colors

The main brand colors are defined as CSS variables in `src/App.css`:

```css
:root {
  --kavia-orange: #E87A41;
  --kavia-dark: #1A1A1A;
  --text-color: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --border-color: rgba(255, 255, 255, 0.1);
}
```

### Components

This template uses pure HTML/CSS components instead of a UI framework. You can find component styles in `src/App.css`. 

Common components include:
- Buttons (`.btn`, `.btn-large`)
- Container (`.container`)
- Navigation (`.navbar`)
- Typography (`.title`, `.subtitle`, `.description`)

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

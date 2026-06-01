# UR Hospitality — Corporate Catering Website

# UR Hospitality

Premium corporate catering website for UR Hospitality, Kolkata.

## Deployment

This is a static site. Deployed on Vercel.

### Local Development
Just open `index.html` in a browser.

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` inside this folder
3. For production: `vercel --prod`

## Project Structure

```
ur-hospitality/
├── index.html              # Main landing page
├── css/
│   └── style.css           # Custom styles + fonts
├── js/
│   └── main.js             # Modal, mobile menu, video, form handling
├── assets/
│   ├── images/             # Add your images here (logo, hero visuals, etc.)
│   └── videos/             # Add your video file here
└── README.md
```

## How to Run

1. Open the folder in VS Code (or any editor)
2. Simply open `index.html` in any modern browser

No build step or dependencies required (Tailwind is loaded via CDN).

## What Needs Your Content

### Video
- Replace the placeholder video with your actual file:
  - Path: `assets/videos/ur-hospitality-story.mp4`
- Recommended: Keep it under 15–20 seconds for the hero-style section

### Images (optional)
- Add a video poster at: `assets/images/video-poster.jpg`
- You can expand the `assets/images/` folder for future use (client logos, team photos, food shots, etc.)

### Client Logos in Marquee
Currently using reliable public CDN logos. Replace with your actual client logos when ready.

## Real Form Handler (Configured ✓)

The quote form is now connected to Formspree and will send real emails.

**Current Formspree Endpoint**: `https://formspree.io/f/maqkzvvp`

All quote submissions will be emailed to you and stored in your Formspree dashboard.

**Free plan limit**: 50 submissions per month.

### WhatsApp Fallback (Always Available)

Even if Formspree has issues, the form includes a **"Prefer WhatsApp? Message us directly"** button that auto-fills a professional message with the user's details.

### 2. WhatsApp Fallback (Always Available)

Even if Formspree is not configured, the form has a **"Prefer WhatsApp? Message us directly"** button that:
- Reads the data the user entered
- Opens WhatsApp with a professionally formatted message

This is very effective for B2B catering leads in India.

### Form Behavior
- On successful submission → Shows a clean "Thank you" screen inside the modal.
- On failure → Shows a friendly error message + keeps the WhatsApp button visible.
- Includes a honeypot field to reduce spam.

## Tech Stack

- Tailwind CSS (via CDN)
- Vanilla JavaScript
- Font Awesome 6
- Playfair Display + Inter fonts

---

Built as a clean, maintainable multi-file static site. Ready for deployment on Vercel, Netlify, or GitHub Pages.
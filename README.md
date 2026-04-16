# 🌿 KeenKeeper — Keep Your Friendships Alive

## 🌐 Live Demo

[![Netlify Status](https://img.shields.io/badge/Live%20Demo-keenkeeper-1F5C4A?style=for-the-badge&logo=netlify)](https://keenkeeper-website.netlify.app/)

KeenKeeper is a personal friendship tracker that helps you stay connected with the people who matter most. Log your interactions, visualize your communication patterns, and never let important relationships fade away.

---

## ✨ Features

- **Quick Check-In** — Log a call, text, or video interaction with a friend in one click
- **Interaction Timeline** — View a chronological history of all your check-ins
- **Pie Chart Analytics** — Visualize your interaction breakdown by type (Call, Text, Video)
- **Friend Profiles** — Dedicated pages for each friend with their interaction history
- **Toast Notifications** — Instant feedback when an interaction is logged
- **Responsive Design** — Works seamlessly on mobile and desktop

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)
- **Storage:** Local storage via custom `timelineStorage` utility

---

## 📁 Project Structure

```
keenkeeper/
├── app/
│   ├── page.jsx                  # Home / dashboard
│   ├── not-found.jsx             # Custom 404 page
│   └── timeline/
│       └── page.jsx              # Timeline view
├── components/
│   ├── QuickCheckIn.jsx          # Log interactions (call, text, video)
│   └── InteractionPieChart.jsx   # Donut chart by interaction type
├── lib/
│   └── timelineStorage.js        # Save/read entries from localStorage
└── public/
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `18+`
- npm or yarn

### Installation

```bash

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 📊 How It Works

1. **Add friends** to your KeenKeeper dashboard.
2. **Log interactions** using the Quick Check-In panel — choose between Call, Text, or Video.
3. **View your timeline** to see a chronological log of every check-in.
4. **Analyze patterns** with the interaction pie chart to see which communication style you use most.

---

## 🎨 Design

KeenKeeper uses a calm, earthy color palette centered around deep forest green (`#1F5C4A`) and soft white/slate tones, reflecting the warmth and longevity of meaningful friendships.

---

## 📦 Key Components

### `QuickCheckIn`
Renders three action buttons (Call, Text, Video) for a given friend. On click, creates a new timeline entry with a unique ID, the friend's details, interaction type, and timestamp — then saves it via `saveTimelineEntry`.

### `InteractionPieChart`
Accepts an array of timeline entries and renders a donut chart using Recharts, breaking down interactions by type. Gracefully handles the empty state when no data is available.

### `NotFound` (404 Page)
A custom 404 page styled to match the KeenKeeper brand, with navigation shortcuts back to home and the timeline.

---

> Built with 💚 to keep the friendships you care about alive.
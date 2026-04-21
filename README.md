# 🌿 KeenKeeper — Keep Your Friendships Alive

## 🌐 Live Demo

[![Netlify Status](https://img.shields.io/badge/Live%20Demo-keenkeeper-1F5C4A?style=for-the-badge&logo=netlify)](https://keenkeeper-website.netlify.app/)

KeenKeeper is a personal friendship tracker that helps you stay connected with the people who matter most. Browse your circle, open dedicated friend profiles, log interactions, explore your timeline, and get a quick visual snapshot of how you stay in touch.

---

## ✨ Features

- **Friend Dashboard** — Browse all friends from a clean home dashboard with individual profile cards
- **Dedicated Friend Profiles** — View contact details, tags, relationship goals, and next follow-up information for each friend
- **Quick Check-In** — Log a call, text, or video interaction in one click from a friend profile
- **Interaction Timeline** — View a chronological history of all your saved check-ins
- **Timeline Filters** — Narrow your interaction history by Call, Text, or Video
- **Clear Timeline Modal** — Remove all saved interaction history with a confirmation step
- **Pie Chart Analytics** — Visualize your interaction breakdown by type on the stats page
- **Toast Notifications** — Get instant feedback when an interaction is logged
- **Responsive Design** — Works smoothly across mobile and desktop layouts

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)
- **Storage:** Browser `localStorage` via custom `timelineStorage` utility

---

## 📁 Project Structure

```bash
keenkeeper/
├── public/
│   ├── _redirects               # Netlify SPA routing support
│   └── *.svg                    # Static assets
├── src/
│   ├── app/
│   │   ├── friends/[id]/        # Dynamic friend details page
│   │   ├── stats/               # Analytics page
│   │   ├── timeline/            # Timeline page
│   │   ├── layout.js            # Root layout
│   │   ├── not-found.jsx        # Custom 404 page
│   │   ├── page.js              # Home / dashboard
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── FriendCard.jsx
│   │   ├── FriendsSection.jsx
│   │   ├── InteractionPieChart.jsx
│   │   ├── NavBar.jsx
│   │   └── QuickCheckIn.jsx
│   ├── data/
│   │   └── friends.json         # Seed friend data
│   └── lib/
│   │   └── timelineStorage.js   # localStorage helpers for timeline entries
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `18+`
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <([https://github.com/Tariqul-stack/KeenKeeper](https://github.com/Tariqul-stack/KeenKeeper.git)>

# Move into the project directory
cd keenkeeper

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev     # Start the development server
npm run build   # Create a production build
npm run start   # Run the production build locally
npm run lint    # Run ESLint
```

## 📊 How It Works

1. **Browse your friends** from the home dashboard.
2. **Open a friend profile** to review their relationship details, contact status, and follow-up goal.
3. **Log interactions** using the Quick Check-In panel — choose between Call, Text, or Video.
4. **Store activity locally** in your browser using `localStorage`, so timeline entries persist between refreshes on the same device.
5. **Review your timeline** to see a chronological log of every check-in and filter it by interaction type.
6. **Analyze patterns** on the stats page with the interaction pie chart.

---

## 🎨 Design

KeenKeeper uses a calm, earthy color palette centered around deep forest green (`#1F5C4A`) and soft white/slate tones, reflecting the warmth and longevity of meaningful friendships.

---

## 📦 Key Components

### `QuickCheckIn`
Renders three action buttons (Call, Text, Video) for a given friend. On click, it creates a new timeline entry with a unique ID, the friend's details, interaction type, and timestamp, then saves it via `saveTimelineEntry`.

### `InteractionPieChart`
Accepts an array of timeline entries and renders a donut chart using Recharts, breaking down interactions by type. It also handles the empty state when no data is available.

### `timelineStorage`
Provides simple helpers for reading, saving, and filtering interaction entries in browser `localStorage`.

### `FriendDetailsPage`
Displays profile-specific relationship details, quick actions, progress stats, and the check-in interface for an individual friend.

### `NotFound` (404 Page)
A custom 404 page styled to match the KeenKeeper brand, with navigation shortcuts back to home and the timeline.

---

> Built with 💚 to keep the friendships you care about alive.

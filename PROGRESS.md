# Jalan-Jalan Development Progress

> Last Updated: January 4, 2026

## Overview

This document tracks the implementation progress of the Jalan-Jalan travel platform based on the Figma designs provided for each group.

---

## Groups Reference

| Group | Feature Module | Status |
|-------|----------------|--------|
| 1 | Context-Aware Planning Assistant | ✅ Completed |
| 2 | Interactive Travel Information Dashboard | ✅ Completed |
| 3 | Personal Travel Informatics | ✅ Completed (9 screens) |
| 4 | Social & Community Knowledge Layer | ✅ Completed (11 screens) |
| 5 | Predictive & Collective Analytics | ✅ Completed (3 screens + loading modal) |

---

## Group 1: Context-Aware Planning Assistant ✅

**Route:** `/chat`

**Figma:** https://www.figma.com/design/LzAmhhnb6JVjYz4h0wvHlI/Group-1?node-id=2-4

### Implemented Features

- **Chat Interface**
  - Collapsible sidebar with chat history
  - Chat header with toggle button
  - Message display (user & assistant messages)
  - Chat input with send, mic, and attachment buttons
  - Welcome/landing screen

- **Quick Actions**
  - Crowd Check
  - Plan Itinerary
  - Weather & Travel Time
  - Budget & Expenses
  - Local Recommendations
  - Emergency Helper

### Files Created

```
src/app/chat/page.tsx
src/components/chat/
├── index.ts
├── chat-sidebar.tsx
├── chat-header.tsx
├── chat-input.tsx
├── chat-message.tsx
├── chat-landing.tsx
└── quick-actions.tsx
```

---

## Group 2: Interactive Travel Information Dashboard ✅

**Routes:** `/wanderboard`, `/dashboard`, `/dashboard/budget`, `/dashboard/schedule`

**Figma:** https://www.figma.com/design/CWe9h9iNVYtsD92Bq3vM12/Group-2?node-id=55-393

### Implemented Screens

#### Landing Page (`/wanderboard`)
- Header with Wanderboard logo
- Navigation (Live Itinerary, Booking Details)
- Hero text: "Get live data from your destination."
- Search form with:
  - Destination input
  - Date picker
  - Pax selector
  - Search button

#### Live Itinerary / Dashboard (`/dashboard`)
- Dashboard header with navigation tabs
- **Cards (3-column layout):**
  - Attraction Operating Status (Petrosains, Muzium Negara, Aquaria, KL Tower)
  - Price Comparison (OYO Hotel, Boutique Hotel, Swiss Garden)
  - Safety Level (60% Caution)
  - Weather (28°C, Moderate rain)
  - Now Trending (#LangkawiSunset, Penang Hot Air Balloon, Viral Char Kuey Teaw)
  - Crowd Level (Area chart, Moderate)
  - Traffic Movement (Road closure, Traffic subside, Road clear)
  - Schedule & Updates CTA card

#### Budget Page (`/dashboard/budget`)
- Page title: "Check your booking details!"
- Tab navigation (Schedule & Updates, Budget)
- **Cards:**
  - Actual & Expected Budget (Donut chart - 65% spent, RM650/RM1000)
  - My Spending breakdown (Accommodation 50%, Transportation 10%, Food 10%, Shopping 10%, Others 10%)
  - Go to Module 3 CTA card

#### Schedule Page (`/dashboard/schedule`)
- Page title: "Check your booking details!"
- Tab navigation (Schedule & Updates, Budget)
- **Cards:**
  - Suggested Itinerary Schedule (Timeline with activities)
  - Booking List & Updates (Museum Ticket, Hotel, Flight with status)

### Files Created

```
src/app/wanderboard/page.tsx
src/app/dashboard/page.tsx
src/app/dashboard/budget/page.tsx
src/app/dashboard/schedule/page.tsx
src/components/dashboard/
├── index.ts
├── dashboard-header.tsx
└── cards/
    ├── index.ts
    ├── attraction-card.tsx
    ├── price-comparison-card.tsx
    ├── safety-card.tsx
    ├── weather-card.tsx
    ├── trending-card.tsx
    ├── crowd-level-card.tsx
    ├── traffic-card.tsx
    ├── itinerary-cta-card.tsx
    ├── budget-cta-card.tsx
    ├── budget-donut-chart.tsx
    ├── spending-breakdown-card.tsx
    ├── itinerary-timeline.tsx
    ├── booking-list-card.tsx
    ├── halal-spots-card.tsx
    └── budget-metrics-card.tsx
```

---

## Group 3: Personal Travel Informatics ✅

**Routes:** `/informatics`, `/informatics/dashboard`, `/informatics/insights`, `/informatics/planner`, `/informatics/planner/[id]/expenses`, `/informatics/reflection`, `/informatics/settings`, `/informatics/settings/profile`, `/informatics/settings/privacy`

**Source:** React prototype from `docs/group-3-react/` (converted to Next.js)

### Implemented Screens

#### Onboarding (`/informatics`)
- Travel DNA definition page
- Comfort vs. Cost slider
- Pacing slider (Relaxed to Packed Itinerary)
- Annual Travel Budget Goal input (RM)
- "Start My Journey" CTA button

#### My Travel Pulse Dashboard (`/informatics/dashboard`)
- Welcome header
- Donut chart showing yearly budget usage (65% of RM 15,000)
- Metric cards: Trips Taken (4), Avg. Overspend (12%), Savings Goal (88%)
- Active Trip Watchlist (London, Tokyo with price trends)
- Insights carousel (auto-rotating with navigation)
- Currency exchange rates (EUR, GBP, CHF to MYR)
- Bottom navigation bar

#### Spending Insights (`/informatics/insights`)
- Summary cards: Total Spent (YTD), Trips This Year
- Monthly Spending bar chart (Jan-Jun)
- Spending by Category breakdown:
  - Accommodation (35%), Food & Dining (25%), Transportation (20%)
  - Activities (10%), Shopping (6%), Others (4%)
- Destination Stats (Europe, Southeast Asia, Local, East Asia)
- Travel Patterns (duration, booking window, visited month, adherence rate)
- Behavioural Insights (peak days, budget adherence, seasonal preference)

#### Trip Planner (`/informatics/planner`)
- New Trip button
- Active Trip card with expense tracking link
- Upcoming Trips list (Paris, Langkawi, Barcelona, Cameron Highlands)
- AI Trip Suggestion card
- Past Trips with budget comparison
- New Trip Modal:
  - Destination, Country, Start/End dates
  - Budget breakdown: Flights, Accommodation, Food, Activities, Transport, Misc
  - Total Budget calculator

#### Trip Expense Tracking (`/informatics/planner/[id]/expenses`)
- Trip header with back navigation
- Budget Overview card (Total Spent, Remaining, Progress bar)
- Category breakdown chips (Food, Transport, Stay, Activities, Shopping, Other)
- Add Expense button and form
- Recent Expenses list with category icons

#### Trip Report / Reflection (`/informatics/reflection`)
- Trip selector grid
- Selected trip info card
- Budget vs Actual Spend comparison chart
- Reason tags: Hidden Fees, Impulse Buy, Transport, Emergency, Dining Out, Shopping
- Note to future self textarea
- "Save Lesson to Profile" button

#### Settings (`/informatics/settings`)
- User profile card (avatar, name, email, membership)
- Account section: Edit Profile, Privacy Settings
- Preferences: Push Notifications, Price Drop Alerts, Weekly Summary toggles
- Support: Help Centre
- Data Management: Reset Travel Planning
- Sign Out button

#### Edit Profile (`/informatics/settings/profile`)
- Avatar with change photo button
- Display Name input
- Email Address input
- Membership status
- Save Changes button

#### Privacy Settings (`/informatics/settings/privacy`)
- Privacy info card
- Toggle options:
  - Data Sharing, Usage Analytics, Location Services, Public Profile
- Data Management: Download My Data, Delete Account

### Files Created

```
src/app/informatics/
├── layout.tsx                     # Layout wrapper
├── page.tsx                       # Onboarding
├── dashboard/
│   └── page.tsx                   # My Travel Pulse
├── insights/
│   └── page.tsx                   # Spending Insights
├── planner/
│   ├── page.tsx                   # Trip Planner
│   └── [id]/
│       └── expenses/
│           └── page.tsx           # Trip Expense Tracking
├── reflection/
│   └── page.tsx                   # Trip Report
└── settings/
    ├── page.tsx                   # Settings
    ├── profile/
    │   └── page.tsx               # Edit Profile
    └── privacy/
        └── page.tsx               # Privacy Settings

src/components/informatics/
├── index.ts
├── bottom-navigation.tsx
├── donut-chart.tsx
├── metric-card.tsx
├── watchlist-card.tsx
└── nudge-overlay.tsx
```

---

## Group 4: Social & Community Knowledge Layer ✅

**Routes:** `/community`, `/community/stories`, `/community/events`, `/community/stories/[id]`, `/community/stories/create`, `/community/stories/[id]/report`, `/community/stories/[id]/report/success`, `/login`, `/register`, `/admin`, `/admin/reports/[id]`

**Figma:** https://www.figma.com/design/ieTaTXzZg3wUhxb0MLXoqF/Group-4--Copy-

### Implemented Screens

#### Community Homepage (`/community`)
- Header with Jalan² logo and navigation
- Search section with destination search and filter buttons (My Trip, Community Story, Frequent Traveler, Upcoming Events)
- **My Trip Section:**
  - Trip cards with image, destination, dates, and Add Story button
  - Sample trips: Kuala Lumpur (Jan 10-15, 2026), Langkawi Island (Dec 20-25, 2025)
- **Upcoming Events Section:**
  - Event cards with date badge, title, location
  - "See more" link
  - Sample events: Langkawi Hot Air Balloon, Thaipusam Festival
- **Community Story Section:**
  - Story cards with image, location, author info, hashtags
  - "See more" link
  - Sample stories from Maldives, Bali, etc.

#### Community Story Listing (`/community/stories`)
- Header with navigation
- Story cards in grid layout (3 columns)
- Each card displays:
  - Image placeholder
  - Location name
  - Author avatar and name
  - Hashtags (#Muslimfriendly, #budgettravel, etc.)

#### Upcoming Events Listing (`/community/events`)
- Header with navigation
- Event cards in grid layout (3 columns)
- Each card displays:
  - Image placeholder
  - Date badge (day/month)
  - "Upcoming" status badge
  - Event title
  - Location

#### Community Story Detail (`/community/stories/[id]`)
- Header with navigation
- "Community Stories" title with "Create Community Story" button
- Two-column layout:
  - **Left column:** Location header, main image, image carousel with navigation arrows
  - **Right column:** Author info with badge (Frequent Traveller), story title and content, comment input, Traveler Experiences section

#### Add My Story (`/community/stories/create`)
- Header with navigation
- "Create a Community Story" title
- Form fields:
  - Photo upload area with camera icon
  - Add a title (text input)
  - Add Location (search input with Search button)
  - Tell us about your trip (textarea with 100 word limit note)
  - Share Image (dashed upload area)
  - Create Tags (input with Create button, tag badges with remove option)
  - Confirmation checkbox for terms
  - Submit button

#### Community Stories - Report (`/community/stories/[id]/report`)
- Modal dialog overlaying the story detail page
- Header with "Report" title and close button (X)
- Report category dropdown (Misinformation, Hate Speech, Harassment, Spam)
- Justification textarea
- Confirmation checkbox
- "Back" and "Confirm" buttons

#### Community Stories - Report Success (`/community/stories/[id]/report/success`)
- Modal dialog with success state
- Large checkmark icon with purple circular background
- "Report" title
- Success message: "YOUR REPORT IS SUCCESSFULLY SUBMITTED"
- "Back to Home" button

#### Login Page (`/login`)
- Header with Jalan² logo
- Two-column layout:
  - **Left column:** Login form card with purple border
    - "Welcome to Jalan²" title
    - Email input field
    - Password input field with "Forget Password?" link
    - Login button (blue #1E3A8A)
    - Register link/button
  - **Right column:** Travel illustration placeholder

#### Register Page (`/register`)
- Header with Jalan² logo
- Two-column layout:
  - **Left column:** Register form card with purple border
    - "Welcome to Jalan²" title
    - Name input field
    - Email input field
    - Password input field
    - City of Residence input field
    - Frequent Visited City input field
    - Confirm button (blue #1E3A8A)
    - Back link/button
  - **Right column:** Travel illustration placeholder

#### Admin Dashboard (`/admin`)
- Fixed left sidebar with:
  - Jalan² logo
  - MENU label
  - Report menu item (highlighted with purple accent)
- Top header bar with user avatar
- Main content area:
  - "Report" page title
  - Summary cards row:
    - Total of Community Story Report (count: 5)
    - Pending Report (count: 3)
  - Reports table card:
    - Table headers: Bil, Name, Date of Report, Type of Report, Status, Action, Action Taken
    - Status badges (Resolved - green, Pending - red)
    - "View More" action buttons
    - Pagination (1, Next)

#### Admin Report Detail (`/admin/reports/[id]`)
- Fixed left sidebar (same as dashboard)
- "Community Story Report" page title
- Story preview section:
  - Location header
  - Main image placeholder
  - Image carousel with 3 thumbnails
- Story content section:
  - Author info with avatar and "Frequent Traveller" badge
  - Story title and full content
- Report Details card:
  - Report Date, Email, Type of Report, Justification
  - Action buttons: "Reject Report" (outline), "Delete Community Story" (red)
- Delete confirmation modal:
  - "Delete Community Story" title with close button
  - Reasons dropdown
  - Back and Confirm buttons

### Files Created

```
src/app/community/
├── page.tsx                    # Community Homepage
├── stories/
│   ├── page.tsx                # Community Story Listing
│   ├── [id]/
│   │   ├── page.tsx            # Community Story Detail
│   │   └── report/
│   │       ├── page.tsx        # Report Modal Page
│   │       └── success/
│   │           └── page.tsx    # Report Success Modal Page
│   └── create/
│       └── page.tsx            # Add My Story
└── events/
    └── page.tsx                # Upcoming Events Listing

src/app/login/
└── page.tsx                    # Login Page

src/app/register/
└── page.tsx                    # Register Page

src/app/admin/
├── page.tsx                    # Admin Dashboard
└── reports/
    └── [id]/
        └── page.tsx            # Admin Report Detail
```

---

## Group 5: Predictive & Collective Analytics ✅

**Routes:** `/predictions`, `/predictions/preferences`, `/predictions/plan`

**Source:** Lo-fi wireframes from `docs/group-5-images/` (converted to hi-fi Next.js with shadcn/ui)

### Implemented Screens

#### Trip Details Input (`/predictions`)
- TravelSmart header with logo
- Hero section with icon and title "Plan Your Perfect Trip"
- Trip Details form card:
  - Destination search input
  - Travel Dates picker
  - Number of Travelers counter (- / +)
- "Continue to Preferences" CTA button

#### Travel Preferences (`/predictions/preferences`)
- Step indicator (Trip Details → Preferences → Your Plan)
- Two-column preferences form:
  - **Left column:**
    - Travel Style radio options (Low Budget, Balanced, Comfortable)
    - Crowd Preference radio options (Avoid crowds, Okay with some, No preference)
    - Budget per person (Min/Max inputs in RM)
  - **Right column:**
    - Safety Options checkboxes (Avoid late-night, Well-lit areas, Verified transport)
    - Alert Preferences checkboxes (High crowd, Weather, Price drops, Safety warnings)
- Back and "Generate Travel Plan" buttons
- **Loading Modal:**
  - Animated sparkle icon
  - "Generating Your Travel Plan" title
  - Progress steps list with status indicators
  - Progress bar with percentage
  - "Powered by AI" footer

#### Plan Selection & Alerts (`/predictions/plan`)
- Step indicator showing step 3 complete
- AI-Generated Travel Plan header card:
  - Destination, dates, travelers, estimated cost
  - Share button
- **Choose Your Plan section:**
  - Low Crowd Plan (RM 1,200/person, LOW-MEDIUM Crowd)
  - Balanced Plan (Recommended, RM 1,050/person, MED-HIGH Crowd)
  - Budget Saver Plan (RM 900/person, MEDIUM Crowd)
  - Selected plan shows features list
- **AI Travel Predictions & Alerts section:**
  - Real-time badge, All Alerts filter dropdown
  - Crowd Forecast card (HIGH - Cenang Beach with AI suggestion)
  - Weather Alert card (WARNING - Island Hopping with AI suggestion)
  - Price Drop card (SAVE RM 80 - Hotel ABC with AI suggestion)
  - Safety Notice card (CAUTION - Area X with AI suggestion)
- **AI Personalized Suggestions section:**
  - Smart Tips badge
  - Three tip cards with recommendations
- "Confirm & Save Plan" CTA button

### Files Created

```
src/app/predictions/
├── page.tsx                      # Trip Details Input
├── preferences/
│   └── page.tsx                  # Travel Preferences + Loading Modal
└── plan/
    └── page.tsx                  # Plan Selection & Alerts

src/components/ui/
└── select.tsx                    # Select dropdown component (added)
```

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI)
- **Icons:** Lucide React

---

## Notes for Integration

All groups use **shadcn/ui** for consistent styling across the platform. When combining groups:

1. Consider a unified navigation structure
2. Ensure consistent color palette (purple-based theme with #1E3A8A primary)
3. Share common components (buttons, cards, inputs)
4. Maintain consistent spacing and typography

---

## Routes Summary

| Route | Group | Description |
|-------|-------|-------------|
| `/chat` | 1 | AI Chat Assistant |
| `/wanderboard` | 2 | Dashboard Landing Page |
| `/dashboard` | 2 | Live Itinerary Dashboard |
| `/dashboard/budget` | 2 | Budget Overview |
| `/dashboard/schedule` | 2 | Schedule & Bookings |
| `/informatics` | 3 | Travel DNA Onboarding |
| `/informatics/dashboard` | 3 | My Travel Pulse Dashboard |
| `/informatics/insights` | 3 | Spending Insights |
| `/informatics/planner` | 3 | Trip Planner |
| `/informatics/planner/[id]/expenses` | 3 | Trip Expense Tracking |
| `/informatics/reflection` | 3 | Trip Report / Reflection |
| `/informatics/settings` | 3 | Settings |
| `/informatics/settings/profile` | 3 | Edit Profile |
| `/informatics/settings/privacy` | 3 | Privacy Settings |
| `/community` | 4 | Community Homepage |
| `/community/stories` | 4 | Community Story Listing |
| `/community/stories/[id]` | 4 | Community Story Detail |
| `/community/stories/create` | 4 | Add My Story Form |
| `/community/stories/[id]/report` | 4 | Report Story Modal |
| `/community/stories/[id]/report/success` | 4 | Report Success Modal |
| `/community/events` | 4 | Upcoming Events Listing |
| `/login` | 4 | User Login Page |
| `/register` | 4 | User Registration Page |
| `/admin` | 4 | Admin Dashboard |
| `/admin/reports/[id]` | 4 | Admin Report Detail |
| `/predictions` | 5 | Trip Details Input |
| `/predictions/preferences` | 5 | Travel Preferences |
| `/predictions/plan` | 5 | Plan Selection & Alerts |

---

## Pending Tasks: Hi-Fi Figma Designs

The following groups need hi-fi Figma designs created based on the finalized Next.js layouts:

### Group 3: Personal Travel Informatics
- **Source:** React prototype converted to Next.js
- **Screens to design:** 9 screens
  - Onboarding / Travel DNA
  - My Travel Pulse Dashboard
  - Spending Insights
  - Trip Planner
  - Trip Expense Tracking
  - Trip Report / Reflection
  - Settings
  - Edit Profile
  - Privacy Settings

### Group 5: Predictive & Collective Analytics
- **Source:** Lo-fi wireframes converted to Next.js
- **Screens to design:** 3 screens + 1 modal
  - Trip Details Input (`/predictions`)
  - Travel Preferences (`/predictions/preferences`)
  - Loading Modal (popup on preferences page)
  - Plan Selection & Alerts (`/predictions/plan`)

### Notes
- Both groups use the teal (#14B8A6) color scheme in their implementations
- Design should follow shadcn/ui conventions and the existing visual style
- Consider using Figma MCP or Figma API to automate design creation from component specifications

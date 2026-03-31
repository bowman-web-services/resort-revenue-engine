# Coconut Cove Resort & Spa — Demo Site Plan

**Draft Date:** March 31, 2026
**Purpose:** Fictional showcase for Resort Revenue Engine platform
**Tech:** Hugo static site on Netlify (BWS Master Template)
**Branding:** Fun, tropical, cartoon coconut mascot ("Coco"). Visually memorable, obviously fictional.

---

## IMPORTANT DISCLAIMER

**Coconut Cove Resort & Spa is NOT a real resort.** It is a demonstration website showcasing the Resort Revenue Engine platform by Bowman Web Services LLC. All content, pricing, images, and features are fictional and used solely for demonstration purposes.

---

## BRANDING

### Name
Coconut Cove Resort & Spa

### Tagline
"Where Every Day Is Paradise (Even the Coconuts Agree)"

### Mascot
**Coco** — A cartoon coconut with sunglasses, a tiny umbrella drink, and flip-flops. Appears throughout the site as a guide/helper character. Different versions for different sections:
- Coco with a briefcase (Weddings & Events)
- Coco in a chef's hat (Dining)
- Coco on a surfboard (Activities)
- Coco with a membership card (The Club)
- Coco at a desk with headset (AI Agent demo)
- Coco in a spa robe (Spa)

### Color Palette
- Primary: Tropical Teal (#0CB8B6)
- Secondary: Sunset Orange (#FF6B35)
- Accent: Palm Green (#2D6A4F)
- Sand: Warm Beige (#F5E6CC)
- Text: Deep Navy (#1B2838)
- White: Clean White (#FFFFFF)

### Typography
- Headlines: Montserrat Bold (modern, clean)
- Body: Open Sans (readable)
- Accent/Fun: Pacifico (tropical script for taglines)

---

## SITE STRUCTURE

### CORE PAGES

#### 1. Homepage
**URL:** /
**Purpose:** Showcase all 6 revenue divisions with clear CTAs
**Content:**
- Hero: Full-width tropical image with "Welcome to Coconut Cove" + tagline
- Coco mascot waving in corner
- 6-division grid (each card links to division section):
  - Book Direct & Save
  - Weddings & Events
  - Day Pass Experience
  - The Coconut Club (Membership)
  - Special Offers & Promos
  - Member Marketplace
- "Why Book Direct?" comparison strip (vs. OTA pricing)
- AI Agent demo callout: "Talk to Coco — Our AI Concierge" with embedded chat widget
- Testimonials (fictional)
- Resort overview video placeholder
- Newsletter signup

**AI/Automation Notes:**
- Chat widget powered by Telnyx AI agent (demo mode)
- Newsletter signup triggers N8N welcome sequence
- Page view triggers retargeting pixel

#### 2. About the Resort
**URL:** /about/
**Content:**
- Resort story (fictional — "Founded by a family who believed vacations shouldn't come with stress")
- Property overview: 350 rooms, beachfront, 4 restaurants, 3 pools, spa, fitness center
- Location: Fictional location on Riviera Maya coast
- Sustainability commitment (solar panels, reef-safe sunscreen policy, local sourcing)
- Team section (fictional GM, Chef, Spa Director — with Coco mascot versions)
- Awards & recognition (fictional)

#### 3. Accommodations
**URL:** /rooms/
**Content:**
- Room categories with photos, descriptions, amenities, max occupancy, view type
  - Standard Garden View
  - Deluxe Ocean View
  - Junior Suite
  - Premium Suite
  - Preferred Club Suite (VIP tier)
  - Presidential Villa
- Comparison table
- "Book Direct" CTA on each room type
- Virtual tour placeholder

#### 4. Dining
**URL:** /dining/
**Content:**
- 4 restaurants:
  - **The Reef** — Seafood, oceanfront, à la carte (Voyager+ members)
  - **Cocina Maya** — Mexican/Yucatecan cuisine, à la carte
  - **The Palapa** — International buffet, all-day
  - **Sunset Bar & Grill** — Pool bar, casual, burgers/tacos
- 3 bars:
  - **Coco's Beach Bar** — Beachfront, signature cocktails
  - **The Lobby Lounge** — Premium spirits, live music evenings
  - **Swim-Up Bar** — Pool bar
- Menu highlights (fictional)
- Dietary accommodations (vegan, gluten-free, kosher options)
- Private dining options → links to Weddings & Events

#### 5. Activities & Amenities
**URL:** /activities/
**Content:**
- Water sports: snorkeling, kayaking, paddleboarding, sailing (included)
- Pools: infinity pool, family pool, adults-only pool
- Beach: private beach, cabana rentals
- Fitness center: 24/7 access, yoga classes, personal training
- Kids' club: ages 4-12, supervised activities
- Teen zone: ages 13-17
- Entertainment: nightly shows, live music, theme nights
- Excursions: Tulum ruins, cenote tours, catamaran (additional cost)
- Golf: 18-hole championship course (Navigator+ included, others pay)
- Activity calendar (sample)

#### 6. Spa
**URL:** /spa/
**Content:**
- Treatment menu (massage, facial, body wraps, hydrotherapy)
- Spa packages (couples, detox, prenatal)
- Member discounts (15% Explorer, 15% Voyager, 25% Navigator+)
- Booking: AI agent or online scheduler
- Facilities: sauna, steam room, plunge pools, relaxation lounge

#### 7. Accessibility / ADA
**URL:** /accessibility/
**Content:**
- Wheelchair-accessible rooms (quantity, features)
- Pool lifts
- Beach wheelchair availability
- Restaurant accessibility
- Service animal policy
- Hearing/vision accommodation
- Advance accommodation request form

#### 8. Transportation
**URL:** /transportation/
**Content:**
- Airport transfers (CUN): included for Voyager+ members, $89/couple for others
- Shuttle schedule (resort to Playa del Carmen, Cancun)
- Car rental partnerships
- Taxi/ride-share guidance
- Driving directions
- Ferry to Cozumel info

#### 9. FAQ
**URL:** /faq/
**Content:**
- Organized by category: Booking, Membership, Day Pass, Weddings, General, AI Agent
- "Ask Coco" prompt (links to AI chat)
- 30+ questions with expandable answers

#### 10. Contact
**URL:** /contact/
**Content:**
- AI chat widget (primary)
- AI phone number (demo)
- Email: hello@coconutcoveresort.com (fictional)
- Physical address (fictional)
- Contact form (routes to Airtable via N8N)
- Department directory
- Social media links (placeholder)

---

### REVENUE DIVISION PAGES

#### Division 1: Retail / Direct Booking
**URL:** /book-direct/
**Purpose:** Compete with OTAs — show why direct is better

**Pages:**
- /book-direct/ — Landing page with booking engine, price comparison widget
- /book-direct/packages/ — Seasonal packages (honeymoon, family, wellness)
- /book-direct/deals/ — Last-minute offers, early bird specials
- /book-direct/group-rates/ — 10+ rooms

**Key Features:**
- Live price comparison: "This room on Expedia: $420/night. Book direct: $340/night + free airport transfer"
- AI booking agent embedded
- Best-rate guarantee badge
- Loyalty points earning (future stays)

**AI/Automation:**
- Booking engine integrates with PMS (demo mock)
- AI phone agent handles reservation calls
- Abandoned booking triggers N8N follow-up email (within 1 hour)
- Dynamic pricing display (mock)

#### Division 2: Weddings & Events
**URL:** /weddings/
**Purpose:** Dedicated marketing for wedding/event revenue

**Pages:**
- /weddings/ — Hero gallery, "Your Dream Beach Wedding" messaging
- /weddings/packages/ — 3 tiers (Intimate, Classic, Grand) with pricing
- /weddings/venues/ — Beach, garden, ballroom, rooftop terrace
- /weddings/gallery/ — Photo gallery (stock/placeholder)
- /weddings/coordinators/ — Meet the team (fictional)
- /weddings/inquiry/ — Lead capture form
- /events/ — Corporate retreats, family reunions, milestone celebrations

**Key Features:**
- Lead capture form → Airtable CRM → N8N assigns coordinator
- AI agent answers wedding FAQs
- Package comparison tool
- Vendor partnerships (photography, flowers, DJ — all fictional)

**AI/Automation:**
- Lead form → Airtable → N8N sends wedding packet PDF within 5 min
- AI phone agent handles initial wedding inquiries
- Follow-up sequence: 1 day, 3 days, 7 days, 14 days

#### Division 3: Day Pass / Seek & Go
**URL:** /day-pass/
**Purpose:** Capture cruise passengers, locals, and non-overnight visitors

**Pages:**
- /day-pass/ — "Experience Paradise for a Day" landing page
- /day-pass/packages/ — Half-day, full-day, VIP day options
- /day-pass/cruise/ — Specific page targeting cruise passengers
- /day-pass/locals/ — Resident pricing program
- /day-pass/booking/ — Real-time availability + booking

**Pricing (Fictional):**
- Half Day (10am-4pm): $79/adult, $49/child
- Full Day (9am-7pm): $129/adult, $69/child
- VIP Day (9am-9pm, includes à la carte): $189/adult, $99/child

**Key Features:**
- Cruise ship schedule integration (shows when ships dock)
- "Book before your ship arrives" messaging
- QR code for walk-ins
- ResortPass/DayPass platform integration demo

**AI/Automation:**
- Day pass booking confirmation via SMS
- Upsell: "Upgrade to overnight stay" triggered at 3pm
- Post-visit email with membership offer

#### Division 4: The Coconut Club (Membership)
**URL:** /club/
**Purpose:** Showcase the membership program

**Pages:**
- /club/ — Overview of The Coconut Club, value proposition
- /club/tiers/ — Explorer, Voyager, Navigator, Ambassador with full comparison
- /club/calculator/ — Interactive savings calculator ("How much would you save as a member?")
- /club/faq/ — Membership-specific FAQs (transparent, no hiding fees)
- /club/apply/ — Application/inquiry form
- /club/members/ — Login portal placeholder (member dashboard)
- /club/testimonials/ — Member stories (fictional)

**Key Features:**
- Interactive savings calculator (inputs: trips/year, party size, current spend → shows member savings)
- Side-by-side tier comparison table
- "No Hidden Fees" guarantee banner
- Contract summary visible before any commitment
- 30-day satisfaction guarantee callout

**AI/Automation:**
- Application form → Airtable → N8N assigns sales consultant
- AI phone agent handles membership inquiries
- Drip sequence: educational emails about program benefits (days 1, 3, 7, 14)
- Calculator results trigger personalized follow-up

#### Division 5: Promo / Special Offers
**URL:** /promos/
**Purpose:** Pre-qualified promotional trips (not mass-market minivac)

**Pages:**
- /promos/ — Current promotional offers
- /promos/qualify/ — Pre-qualification quiz (content engagement required)
- /promos/experience/ — "What to Expect on Your Visit" (transparent about resort tour)
- /promos/booking/ — Qualified prospects only → booking page

**Pre-Qualification Flow:**
1. Prospect takes quiz (travel preferences, budget range, party size, visit frequency)
2. Watches 3-min resort video (must watch 80%+)
3. Reviews "What to Expect" page (transparent about resort tour component)
4. Qualified → unlocks promotional pricing
5. Not qualified → offered Day Pass or direct booking instead

**Key Features:**
- Content-based filtering (eliminates freeloaders before they arrive)
- Transparent about resort tour requirement (no bait-and-switch)
- Qualification data feeds to Airtable for personalized tour prep
- Higher close rate because prospects are pre-educated

**AI/Automation:**
- Quiz results → Airtable lead record
- Video completion tracked
- Qualified leads get automated promo offer email
- Non-qualified get Day Pass/direct booking alternative
- AI phone agent follows up with qualified leads

#### Division 6: Member Rentals / Guest Access
**URL:** /member-marketplace/
**Purpose:** Resort-sanctioned platform for members to share/transfer unused weeks

**Pages:**
- /member-marketplace/ — Browse available member weeks
- /member-marketplace/how-it-works/ — Process explanation for both members and guests
- /member-marketplace/list/ — Members list their available weeks (login required)
- /member-marketplace/book/ — Guests book available weeks
- /member-marketplace/faq/ — How rental income works, resort policies

**Key Features:**
- Members set their price (floor = AI fee cost; ceiling = 80% of OTA rate)
- Resort approves all listings (quality control)
- 15% resort commission on rental transactions
- Guest receives "Member Guest" bracelet with defined perks
- Eliminates need for rogue rental sites

**AI/Automation:**
- New listing → resort approval queue (Airtable)
- Approved listing → published to marketplace
- Booking confirmation → both member and guest notified
- Post-stay review system

---

### SUPPORTING SECTIONS

#### Resort Dashboard (Admin Demo)
**URL:** /dashboard/ (behind demo login)
**Purpose:** Show resort directors what they'd see

**Dashboard Shows:**
- Real-time revenue by division (chart)
- Occupancy rate + forecast
- Lead pipeline by source (direct, wedding, day pass, membership, promo)
- AI agent performance (calls handled, bookings made, satisfaction score)
- Member utilization rates
- Day pass bookings today
- Wedding pipeline status
- OTA vs. direct booking ratio trend

#### AI Agent Demo
**URL:** /ai-demo/
**Purpose:** Let prospects interact with the AI concierge

**Features:**
- Live chat widget (Telnyx demo mode)
- Sample phone call recording
- "Try asking Coco about..." prompts
- Performance stats (response time, languages, satisfaction)

---

## TECHNICAL ARCHITECTURE

### Hugo Site Structure

```
coconut-cove-demo/
├── config.toml
├── content/
│   ├── _index.md                    # Homepage
│   ├── about/_index.md
│   ├── rooms/_index.md
│   ├── dining/_index.md
│   ├── activities/_index.md
│   ├── spa/_index.md
│   ├── accessibility/_index.md
│   ├── transportation/_index.md
│   ├── faq/_index.md
│   ├── contact/_index.md
│   ├── book-direct/
│   │   ├── _index.md
│   │   ├── packages.md
│   │   ├── deals.md
│   │   └── group-rates.md
│   ├── weddings/
│   │   ├── _index.md
│   │   ├── packages.md
│   │   ├── venues.md
│   │   ├── gallery.md
│   │   ├── coordinators.md
│   │   └── inquiry.md
│   ├── events/_index.md
│   ├── day-pass/
│   │   ├── _index.md
│   │   ├── packages.md
│   │   ├── cruise.md
│   │   ├── locals.md
│   │   └── booking.md
│   ├── club/
│   │   ├── _index.md
│   │   ├── tiers.md
│   │   ├── calculator.md
│   │   ├── faq.md
│   │   ├── apply.md
│   │   ├── members.md
│   │   └── testimonials.md
│   ├── promos/
│   │   ├── _index.md
│   │   ├── qualify.md
│   │   ├── experience.md
│   │   └── booking.md
│   ├── member-marketplace/
│   │   ├── _index.md
│   │   ├── how-it-works.md
│   │   ├── list.md
│   │   ├── book.md
│   │   └── faq.md
│   ├── dashboard/_index.md
│   └── ai-demo/_index.md
├── layouts/
│   ├── _default/
│   ├── partials/
│   │   ├── coco-chat-widget.html
│   │   ├── booking-engine.html
│   │   ├── savings-calculator.html
│   │   ├── price-comparison.html
│   │   └── qualification-quiz.html
│   └── shortcodes/
│       ├── coco-says.html            # Mascot callout boxes
│       ├── tier-comparison.html
│       ├── revenue-dashboard.html
│       └── ai-demo.html
├── static/
│   ├── images/
│   │   ├── coco/                     # Mascot variants
│   │   ├── rooms/
│   │   ├── dining/
│   │   ├── activities/
│   │   └── resort/
│   └── js/
│       ├── savings-calculator.js
│       ├── quiz.js
│       └── chat-widget.js
├── data/
│   ├── rooms.yaml
│   ├── dining.yaml
│   ├── packages.yaml
│   ├── tiers.yaml
│   └── promos.yaml
└── themes/
    └── coconut-cove/                 # Custom theme (based on BWS Master Template)
```

### Integrations (Demo Mode)

| System | Purpose | Demo Behavior |
|--------|---------|---------------|
| Telnyx AI | Chat + phone agent | Live demo agent with Coconut Cove persona |
| Airtable | CRM + lead management | Demo base with sample data |
| N8N | Workflow automation | Demo workflows (email sequences, lead routing) |
| Netlify | Hosting + forms | Auto-deploy from GitHub |
| Google Analytics | Tracking | GA4 with custom events |

### AI Agent Personas

**Coco (Chat Agent)**
- Personality: Friendly, helpful, slightly playful
- Language: EN/ES bilingual
- Capabilities: Room info, availability check, FAQ, membership info, day pass booking
- Escalation: "Let me connect you with our team" → contact form

**Coco (Phone Agent)**
- Same personality, voice-optimized
- Handles: Reservations, membership inquiries, wedding initial calls
- Call recording + transcript → Airtable
- Hours: 24/7 (AI); human backup 8am-8pm EST

---

## PAGE COUNT SUMMARY

| Section | Pages |
|---------|-------|
| Core pages | 10 |
| Book Direct | 4 |
| Weddings & Events | 7 |
| Day Pass | 5 |
| The Club | 7 |
| Promos | 4 |
| Member Marketplace | 5 |
| Dashboard + AI Demo | 2 |
| **Total** | **44 pages** |

---

## BUILD PRIORITY

### Phase 1 (Demo MVP)
1. Homepage
2. About
3. The Club (all pages) — this is the pitch centerpiece
4. Promos (qualify + experience)
5. AI Demo page
6. Contact

### Phase 2 (Full Demo)
7. All accommodation/dining/activity pages
8. Day Pass (all pages)
9. Weddings (all pages)
10. Member Marketplace
11. Dashboard

### Phase 3 (Polish)
12. Accessibility
13. Transportation
14. FAQ (full)
15. SEO optimization
16. Performance tuning

---

*Site plan v0.1 — March 31, 2026 — Bowman Web Services LLC*

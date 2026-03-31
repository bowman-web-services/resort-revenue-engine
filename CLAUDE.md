# Coconut Cove Resort & Spa — Demo Site

## Auto-load
```bash
[ -f .env ] && source .env
```

## What This Is
Fictional all-inclusive resort demo site showcasing the Resort Revenue
Engine platform by Bowman Web Services. NOT A REAL RESORT.

## Tech
- Hugo static site on Netlify
- Auto-deploy from GitHub: bowman-web-services/resort-revenue-engine
- BWS custom theme (themes/coconut-cove/)
- System font stack — NO Google Fonts
- Phone: 386-384-8445 (BWS main line)

## Rules
- Run BWS Deploy Guard before any git push
- Never use Netlify CLI
- No Google Fonts imports
- All images must be royalty-free or AI-generated (fictional resort)
- Every page must clearly state this is a DEMO / fictional resort
- BWS branding in footer on every page

## Color Palette
- Primary: #0e7c5f (tropical teal/green)
- Secondary: #f4a835 (warm coconut gold)
- Accent: #e85d3a (coral/sunset orange)
- Dark: #1a2332 (deep ocean navy)
- Light: #f5f0e8 (sand/cream)
- White: #ffffff

## Page Count
44 pages across 8 sections:
- Homepage (1)
- Resort (7): overview, accommodations, dining, activities, spa, accessibility, transportation, faq
- Club (7): overview, how-it-works, tiers, benefits, calculator, faq, join
- Weddings (5): overview, packages, venues, gallery, contact
- Day Pass (3): overview, cruise-guests, group-rates
- Promos (4): overview, current-offers, qualify, what-to-expect
- Member Rentals (4): overview, how-it-works, for-guests, list-your-weeks
- For Resorts (5): overview, platform, pricing, about-bws, contact
- Utility (5): about, contact, privacy, terms, disclaimer

## Build
```bash
hugo --minify
```

## Status
- Built: March 31, 2026
- No GitHub repo yet
- No Netlify deploy yet
- No custom domain yet
- Images: emoji placeholders only (need AI-generated or stock)

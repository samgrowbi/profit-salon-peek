# True Profit

Build a single-page, mobile-first landing page for a Meta ads campaign for 
"True Profit Salons," a Profit-First-certified financial firm (bookkeeping, 
CFO advisory, tax) built specifically for hair/beauty salon owners doing 
$1M+ in revenue.

PURPOSE
This page promotes 50% OFF their existing paid offer, the "Profit Clarity 
Analysis" — a 60-minute one-on-one financial deep dive normally priced at 
$500, now $250 for a limited time. Paid upfront via Stripe. This is a PAID 
diagnostic product, not a free consultation — the page should feel premium 
and credible, not like a typical "book a free call" funnel.

BRAND / TONE
- Warm but authoritative — "CFO for your salon" energy, not corporate accounting-firm energy
- Speaks directly to salon owners: stylists, booth rent vs. commission, tips, 
  service vs. retail revenue, owner pay — not generic small-business language
- Confident, clear, zero jargon. Short sentences. No fear-mongering.
- Reference Profit First methodology and CFO-level advisory without over-explaining it
- Pull visual/brand cues from trueprofitsalons.com (clean, editorial, gold/neutral 
  finance-meets-beauty palette, professional headshots, soft rounded cards) — 
  match their existing brand rather than inventing a new one

PAGE STRUCTURE

1. Sticky top bar
   - Phone number + email (left), "Claim 50% Off" button (right)
   - Consistent with our standard navbar CTA pattern used across other 
     client LPs on growbi.co

2. Hero
   - Headline: "Find Out Exactly Where Your Salon's Profit Is Leaking — 
     In 60 Minutes"
   - Subhead: "A one-on-one deep dive into your numbers with a Profit First 
     Certified salon CFO. Normally $500 — right now 50% off at $250."
   - Primary CTA button: "Claim My 50% Off Deep Dive" → scrolls to form
   - Secondary trust line under CTA: "$500 value, now $250 • 60 minutes • 
     Pay securely via Stripe"
   - Right side or background: subtle salon imagery (avoid stock-photo cliché; 
     professional, warm, real-looking)
   - Small stat row: Avg Revenue Increase / Avg Profit Increase / Avg Cash 
     Reserves Increase (placeholder $0K figures, styled like counters — mark 
     clearly as placeholder)

3. "Sound Familiar?" pain section (3–4 short cards)
   - Money's coming in but never seems to stay
   - You don't actually know what you pay yourself vs. what the business owes
   - Your bookkeeper (or spreadsheet) tells you the past, not what to do next
   - You've never gotten a straight answer on pricing, service mix, or margins

4. "What's Included" — the deep dive deliverable (matches their existing 
   Profit Clarity Analysis page, don't invent new deliverables):
   - A clear snapshot of current revenue, expenses, and real profit
   - Review of owner's pay, cash flow, and overall financial health
   - Quick check of pricing, service mix, and margins to spot hidden leaks
   - Your top 3–5 opportunities to protect and increase profit
   - A simple 90-day action plan you can implement with us, your current 
     accountant, or on your own
   Present as a checklist or icon grid, not paragraphs.

5. Why This (not a generic bookkeeper) — light differentiation, no 
   competitor names:
   - "This isn't a free sales call in disguise" — a paid, structured session 
     with a real deliverable, led by a Profit First Certified Advanced advisor
   - Salon-exclusive expertise — no explaining your industry to a generalist
   - You leave with a written 90-day plan, not just a slide deck

6. Offer / Pricing block (visual centerpiece)
   - Show "$500" crossed out → "$250" highlighted, "50% OFF" badge
   - 3-step process: Book & pay securely → short intake form → 60-minute call
   - Light, honest urgency: limited spots per month / offer expires [date] 
     (placeholder date, styled but not fake-scarcity gimmicky)
   - CTA button again here

7. Social proof
   - 2–3 testimonial cards styled like their existing site testimonials 
     (e.g. Salon Gloss / Bodhi Sanctuary style quotes) — CLEARLY MARK as 
     placeholder/fake content, to be swapped with real approved quotes 
     before this page goes live
   - Logo row: QuickBooks Certified, Profit First Certified, badges

8. About the advisor
   - Short bio block for Ross Loveland (Advanced Certified Profit First 
     Professional) with headshot placeholder, 1–2 sentence credibility statement

9. FAQ (accordion)
   - What happens after I book?
   - Is this a sales pitch for ongoing services?
   - What do I need to prepare?
   - What if I'm not on QuickBooks?
   - Is the $250 refundable?
   - Do you only work with salons at $1M+ revenue?

10. Final CTA section + intake form
    Form fields (feeds Supabase → Zapier → CRM, same pattern as our other 
    client LPs):
    - Full name
    - Salon/business name
    - Email
    - Phone
    - Monthly revenue (dropdown range)
    - What bookkeeping software do you currently use? (dropdown: QuickBooks 
      Online, QuickBooks Desktop, Xero, Spreadsheet/Excel, None/Not sure, Other)
    - Biggest financial pain point right now (short text or dropdown)
    On submit: show confirmation state directing to Stripe payment / booking 
    widget step (placeholder embed container — real booking widget URL added later)

11. Footer
    - Standard: logo, nav links, phone/email, social icons, privacy policy link
    - Small disclaimer: "Average client results. Individual results may vary."

TECHNICAL REQUIREMENTS
- Fully responsive, mobile-first (majority of traffic will be Meta mobile)
- Fast load — optimize images, no heavy animation libraries
- Form submissions write to Supabase (table: leads or similar, matching our 
  existing schema pattern), ready to be wired to a Zapier webhook
- Capture UTM parameters (utm_source, utm_campaign, utm_medium, etc.) as 
  hidden fields stored with each lead submission
- Add Meta Pixel placeholder script tag in <head> with a clear comment 
  marking where the Pixel ID goes
- Clean semantic HTML for SEO/accessibility even though this is an ad LP
- Sticky mobile CTA bar at bottom of viewport ("Claim 50% Off" button) 
  that appears after hero scroll

Do not fabricate specific dollar results, client names, or reviews as real — 
clearly mark ALL testimonial/stat content as placeholder text to be replaced 
with approved real content before launch.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://profit-salon-peek.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/35f96945-97da-4c96-8f05-a990cb89074b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

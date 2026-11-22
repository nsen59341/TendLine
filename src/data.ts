/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { IndustryInsight, FailureScenario, OfferTier, FaqItem } from "./types";

export const insights: IndustryInsight[] = [
  {
    id: 1,
    articleSlug: "ai-voice-agents-hvac",
    title: "AI Voice Agents Eliminate Inbound Lead Leakage",
    source: "BrightLocal Benchmark & TendLine India ROI Model",
    finding: "Up to 62% of inbound small-business calls are missed on the first attempt, and 78% of customers buy from the first responder. At 300–600 calls/mo (₹1,200–₹1,800 avg ticket), AI call capture models ₹25,920–₹1,10,565/mo in recovered revenue.",
    whoApplied: "Indian Service & Multi-Location Lead Model (Base to Strong)",
    measuredImpact: [
      "100% call answer rate during peak spikes",
      "₹25,920–₹1,10,565/mo modelled extra revenue",
      "~21 to 61 extra booked leads per month",
      "Setup payback in 1–7 months (modelled)"
    ],
    aiOpportunity: "Deploys an AI Voice agent on your primary +91 business line. Answers in Hindi or English, qualifies the enquiry, area, and urgency, books directly into your CRM or Google Sheets, and sends an instant WhatsApp summary.",
    opportunityScore: {
      impact: 90,
      ease: 80,
      overall: 87
    }
  },
  {
    id: 2,
    articleSlug: "hvac-emergency-call-capture",
    title: "WhatsApp & High-Intent After-Hours Lead Capture",
    source: "India SMB WhatsApp & Voice Pricing Benchmark (2026)",
    finding: "80% of Indian SMB owners manage enquiries over phone and WhatsApp, yet evening and directory leads sit unworked. Answering in seconds captures ₹1,200–₹6,000 bookings and annual plans at ₹12–₹27 per 3-min AI call.",
    whoApplied: "Pan-India Owner-Run Businesses & Small Franchises",
    measuredImpact: [
      "+₹3,11,040 to ₹13,26,780/yr modelled capture",
      "₹1,200–₹1,800 base-to-strong avg ticket",
      "₹4–₹8/min Indian voice AI run rate",
      "0% missed-lead rate after office hours"
    ],
    aiOpportunity: "Instant missed-call WhatsApp recovery within 60 seconds + 24/7 WhatsApp Business AI assistant that qualifies area, need, and urgency before prospects dial your competitors.",
    opportunityScore: {
      impact: 85,
      ease: 90,
      overall: 87
    }
  },
  {
    id: 3,
    articleSlug: "hvac-web-lead-capture",
    title: "Sub-Minute Web & WhatsApp Utility Automation",
    source: "Meta India Rate Card & Lead Response Benchmark (2026)",
    finding: "WhatsApp utility confirmations cost just ₹0.11–₹0.15 per message (~₹110–₹150 for 1,000 reminders before BSP fee & GST). Instant automated replies qualify buyers and share transparent price ranges before human follow-up.",
    whoApplied: "AutoScale Lead-Driven Indian Businesses",
    measuredImpact: [
      "Replies in seconds instead of hours",
      "₹110–₹150 Meta fee per 1,000 reminders",
      "5–7x lower cost via Utility vs Marketing templates",
      "Zero added front-desk payroll required"
    ],
    aiOpportunity: "Custom Web & WhatsApp assistant answers pricing/coverage FAQs, verifies PIN codes, shares UPI advance/booking links, and updates Zoho CRM, LeadSquared, or Google Sheets.",
    opportunityScore: {
      impact: 75,
      ease: 92,
      overall: 80
    }
  },
  {
    id: 4,
    articleSlug: "automated-google-reviews",
    title: "Automated Google Reviews & Quote Re-engagement",
    source: "India Local SEO & Estimate Follow-Up Model",
    finding: "Sending a Google review link on WhatsApp after every closed job builds 20–30+ fresh reviews monthly, while 48-hour WhatsApp and 72-hour voice follow-ups recover unsigned quotations.",
    whoApplied: "Metro & Tier-2 Local Service Businesses",
    measuredImpact: [
      "20–30+ new monthly Google reviews target",
      "Consistent Google Map Pack profile trust",
      "48h WhatsApp + 72h voice quote follow-ups",
      "Instant owner alert on negative feedback"
    ],
    aiOpportunity: "Automates post-completion WhatsApp review requests (with 48h follow-up) and multi-stage quote recovery workflows triggered directly from CRM status.",
    opportunityScore: {
      impact: 72,
      ease: 92,
      overall: 78
    }
  },
  {
    id: 5,
    articleSlug: "predictive-hvac-maintenance",
    title: "Opt-In Renewal & Off-Peak Reactivation Engine",
    source: "India Recurring Contract & Retention Model (2026)",
    finding: "Reaching 500 opted-in past clients costs ~₹430 in Meta fees. With 100 active annual plans/retainers at ₹2,500 each (₹2,50,000/yr recurring), protecting every 10% of renewal rate saves ₹25,000/year.",
    whoApplied: "Recurring Service & Retainer Businesses in India",
    measuredImpact: [
      "₹2,50,000/yr per 100 annual plans (at ₹2,500)",
      "~₹430 Meta fee to message 500 past buyers",
      "₹0 additional advertising spend required",
      "30, 15 & 7-day reminders with UPI link"
    ],
    aiOpportunity: "DPDP-compliant opt-in campaigns triggered by renewal expiry dates, seasons, and festivals with 30/15/7-day WhatsApp reminders, UPI payment links, and 3-day post-expiry voice follow-ups.",
    opportunityScore: {
      impact: 85,
      ease: 80,
      overall: 84
    }
  }
];

export const failureScenarios: FailureScenario[] = [
  {
    id: 1,
    category: "Acquisition",
    scenario: "You or your team are busy with an existing client and miss an inbound enquiry call — the prospect immediately calls the next number on Google or Justdial (₹1,200–₹1,800+ job lost).",
    solution: "A 24/7 AI Voice Agent answers in Hindi or English, qualifies need, area, and urgency, books the slot, and sends you a WhatsApp summary.",
    deliveryModel: "DFY",
    annualLeakEstimate: 180000
  },
  {
    id: 2,
    category: "Acquisition",
    scenario: "A prospect taps WhatsApp or visits your site at 11pm, gets no reply until the next morning, and books with a faster competitor overnight.",
    solution: "A Web & WhatsApp AI Assistant replies in seconds, asks about location and requirement, shares typical price ranges, and offers next-day slots.",
    deliveryModel: "DFY",
    annualLeakEstimate: 96000
  },
  {
    id: 3,
    category: "Acquisition",
    scenario: "A quotation or proposal (₹6,000–₹45,000+) is sent, the client goes silent, and your team forgets to follow up during busy weeks.",
    solution: "Automated estimate follow-up triggers a WhatsApp check-in after 48 hours and an AI voice follow-up call after 72 hours if there is no reply.",
    deliveryModel: "DFY",
    annualLeakEstimate: 216000
  },
  {
    id: 4,
    category: "Acquisition",
    scenario: "Peak seasonal or campaign rush overwhelms a 1- or 2-person office, leaving 30–40% of inbound calls unanswered.",
    solution: "AI Voice overflow handles concurrent calls, books against real calendar capacity, and escalates urgent requests to your on-call team member.",
    deliveryModel: "DFY",
    annualLeakEstimate: 264000
  },
  {
    id: 5,
    category: "Experience",
    scenario: "A buyer calls after office hours with an urgent requirement, hits no answer, and immediately calls a competitor.",
    solution: "After-hours emergency triage on voice and WhatsApp classifies urgency, collects full address and landmark, and alerts your on-call lead.",
    deliveryModel: "DFY",
    annualLeakEstimate: 192000
  },
  {
    id: 6,
    category: "Experience",
    scenario: "A job or service is completed well, but nobody asks for a Google review, leaving your Google Maps rating flat while rivals climb.",
    solution: "CRM-triggered WhatsApp review link sent after job closure, one polite follow-up after 48 hours, and an owner alert if any complaint comes back.",
    deliveryModel: "DFY",
    annualLeakEstimate: 84000
  },
  {
    id: 7,
    category: "Experience",
    scenario: "Directory leads (Justdial, Sulekha, IndiaMART) arrive by call or email and are returned hours later after competitors already closed them.",
    solution: "Instant lead webhook catches each directory enquiry and triggers an AI voice call or WhatsApp message within 60 seconds, then logs the outcome.",
    deliveryModel: "DWY",
    annualLeakEstimate: 144000
  },
  {
    id: 8,
    category: "Experience",
    scenario: "Annual contracts, AMCs, or retainers (₹2,500–₹6,000/yr) expire unnoticed and customers renew with someone else.",
    solution: "Automated renewal engine sends WhatsApp reminders at 30, 15, and 7 days before expiry with a UPI link, plus a voice call 3 days after expiry.",
    deliveryModel: "DWY",
    annualLeakEstimate: 75000
  },
  {
    id: 9,
    category: "Efficiency",
    scenario: "You or your office staff answer the same questions all day: service area, visit/consultation charge (₹249–₹299), timings, and what is included.",
    solution: "WhatsApp and website bot states pricing ranges, coverage, and visit charges up front (with optional UPI advance link) and escalates only edge cases.",
    deliveryModel: "DFY",
    annualLeakEstimate: 72000
  },
  {
    id: 10,
    category: "Efficiency",
    scenario: "Team members receive messy voice notes missing floor, landmark, society/office rules, or exact customer requirements.",
    solution: "AI captures a structured brief (issue, requirement, address, landmark, access notes, urgency) and sends it to your team with a Google Maps pin.",
    deliveryModel: "DFY",
    annualLeakEstimate: 60000
  },
  {
    id: 11,
    category: "Efficiency",
    scenario: "Customers forget scheduled appointments and your team wastes travel time, fuel, and calendar slots on no-shows.",
    solution: "Automated WhatsApp reminders 24 hours and 2 hours before the appointment, with a 1-tap reschedule link that updates your calendar.",
    deliveryModel: "DFY",
    annualLeakEstimate: 90000
  },
  {
    id: 12,
    category: "Efficiency",
    scenario: "You cannot see which lead channel (Justdial, Google, Meta Ads, referrals) actually produces paying customers.",
    solution: "Source tracking logs every incoming lead and confirmed booking, sending a weekly ROI breakdown straight to your WhatsApp or email.",
    deliveryModel: "DWY",
    annualLeakEstimate: 84000
  },
  {
    id: 13,
    category: "Growth",
    scenario: "Your business runs purely on referrals and has no automated repeat-booking or post-service follow-up system.",
    solution: "Automatic service reminders by purchase date and category, plus a referral request sent automatically after every 5-star review.",
    deliveryModel: "DWY",
    annualLeakEstimate: 240000
  },
  {
    id: 14,
    category: "Growth",
    scenario: "You want to add staff or expand to a new city zone, but all enquiries and scheduling still run from your personal phone.",
    solution: "Shared WhatsApp Business number, AI voice agent, structured brief handoff, and simple owner dashboard so you scale without adding office staff.",
    deliveryModel: "Consulting",
    annualLeakEstimate: 360000
  },
  {
    id: 15,
    category: "Growth",
    scenario: "Off-peak months hit monthly cash flow with zero proactive opt-in outreach to your existing customer database.",
    solution: "Targeted, DPDP-compliant opt-in seasonal & festival campaigns sent directly to your past customer list at ~₹0.86/message Meta rate.",
    deliveryModel: "DWY",
    annualLeakEstimate: 150000
  }
];

export const offerTiers: OfferTier[] = [
  {
    id: 1,
    title: "Call Capture Starter System",
    tagline: "Stop losing incoming phone and WhatsApp enquiries while you and your team are busy with clients.",
    features: [
      "AI Voice Agent (+91 Number): Answers inbound calls in Hindi & English, qualifies need, area, and urgency, books slots, handles after-hours triage, and sends a WhatsApp summary to the owner.",
      "Instant Missed-Call WhatsApp Recovery: Automatically sends a WhatsApp follow-up within 60 seconds of any unanswered call.",
      "Post-Job Review Automation: Sends a Google review link on WhatsApp after job completion, with one polite follow-up after 48 hours."
    ],
    results: [
      "Base-case model: ~₹25,920/mo extra revenue (Strong: ₹1,10,565/mo)",
      "Net ₹11,820–₹15,820/mo after run cost (base case)",
      "Setup payback in 3–7 months at 300+ calls/mo (1 mo in strong case)"
    ],
    bestFor: "Owner-run businesses (1–5 staff) losing calls during work. Works best at 300+ calls/month or ₹1,200+ average ticket value.",
    delivery: "Project-based (2–3 weeks to go live)"
  },
  {
    id: 2,
    title: "Lead Conversion Growth System",
    tagline: "Turn website visitors, Google/Justdial/IndiaMART enquiries, and open quotations into booked jobs on autopilot.",
    features: [
      "Everything in Tier 1 (Call Capture Starter System)",
      "WhatsApp & Website AI Assistant: Shares price ranges, captures quotes, offers time slots, and sends UPI payment links for visit charges or advances.",
      "Directory-Lead Auto-Callback: Catches new Justdial, Sulekha, or IndiaMART leads and triggers a voice call or WhatsApp within 60 seconds.",
      "Estimate Follow-Up & Reminders: 48h WhatsApp + 72h voice follow-up on open quotes, plus 24h & 2h appointment reminders with 1-tap reschedule.",
      "Monthly Performance Report: Calls handled, bookings, lead sources, and reviews delivered straight to the owner."
    ],
    results: [
      "First reply in seconds instead of hours across all lead sources",
      "Every directory lead and unsigned estimate systematically followed up",
      "Fewer missed appointments via 24h & 2h WhatsApp reminders",
      "Clear monthly visibility into which lead channels actually convert"
    ],
    bestFor: "Growing businesses (5–15 team members) getting enquiries from Google, Justdial, WhatsApp & ads but losing leads before booking.",
    delivery: "Hybrid (Project build + 3-month optimization retainer)"
  },
  {
    id: 3,
    title: "Full AI Growth Infrastructure",
    tagline: "An autonomous front-office revenue, renewal, and lead management engine built to scale without adding office staff.",
    features: [
      "Everything in Tiers 1 & 2",
      "AMC & Repeat-Service Renewal Engine: Automated WhatsApp reminders at 30, 15, and 7 days before expiry with UPI payment links and 3-day post-expiry calls.",
      "Seasonal Campaign Engine: Opt-in WhatsApp campaigns tied to seasons, festivals, and past purchase dates.",
      "Full CRM & Team Handoff: Syncs with Zoho, LeadSquared, HubSpot, or Google Sheets and sends structured job briefs + Google Maps pins to staff on WhatsApp.",
      "Custom Owner Dashboard & DPDP Consent Log: Tracks bookings, lead sources, renewals, and timestamped opt-ins, backed by a 6-month optimization retainer."
    ],
    results: [
      "Protects recurring renewals (₹2,50,000/yr per 100 plans at ₹2,500)",
      "Turns dormant past buyers into predictable off-peak bookings",
      "Front office largely run by the system with human fallback for complex calls",
      "Full owner visibility to scale teams without proportional office overhead"
    ],
    bestFor: "Established businesses or small franchises (10–25 team members) with recurring clients scaling without adding office staff.",
    delivery: "Hybrid (Project build + 6-month strategic retainer)"
  }
];

export const faqs: FaqItem[] = [
  {
    id: 1,
    category: "Implementation",
    question: "Do we have to replace Zoho, Google Sheets, or our current CRM?",
    answer: "No. We integrate directly with your existing CRM or lightweight tools—including Zoho CRM/FSM, LeadSquared, HubSpot, Freshsales, or Google Sheets—using secure webhooks and APIs. If you do not use a CRM yet, we can connect directly to Google Sheets or Zoho's free starter tier so your team gets organized instantly."
  },
  {
    id: 2,
    category: "Security",
    question: "How do you handle DPDP compliance, WhatsApp opt-ins, and data security?",
    answer: "Your WhatsApp Business Account always remains in your own business name and ownership. We build explicit opt-in capture into the first call or chat, store consent timestamps securely, handle STOP replies automatically, and route reminders through approved WhatsApp Utility templates—aligned with India's DPDP Rules and TRAI guidelines."
  },
  {
    id: 3,
    category: "ROI",
    question: "How soon does an Indian business see a return on this system?",
    answer: "Payback in India depends on call volume and average ticket size—measured in months, not days. In our modelled Tier 1 base case (300 calls/month at ₹1,200 average job value), recovering ~21.6 jobs adds ₹25,920/month in revenue, delivering full setup payback in 3–7 months. Higher-volume businesses (600+ calls/month at ₹1,800+ tickets) can achieve payback in the first month."
  },
  {
    id: 4,
    category: "Implementation",
    question: "Can we test the system with a low-risk pilot before committing to a full tier?",
    answer: "Yes. We offer an optional 2-week Entry Pilot deploying a WhatsApp assistant and missed-call follow-up directly on your own WhatsApp Business number for 14 days, complete with a before-and-after report. If you continue to Tier 1, 100% of your pilot fee is credited toward your setup."
  },
  {
    id: 5,
    category: "Implementation",
    question: "Will the AI voice agent handle Indian phone numbers, Hindi, and English accents?",
    answer: "Yes. We deploy India-tested voice systems connected to +91 Indian numbers that support clear Indian English and Hindi out of the box (with regional languages added only after 20+ real-call quality tests). A 3-minute answered call typically costs ₹12–₹27 in usage, and complex or upset callers are transferred immediately to a human with a full summary."
  },
  {
    id: 6,
    category: "ROI",
    question: "How are third-party voice and WhatsApp usage charges handled?",
    answer: "Voice AI minutes (typically ₹4–₹8/min on Indian platforms) and Meta WhatsApp template charges (roughly ₹0.11–₹0.15 for utility reminders and ₹0.8631 for marketing messages, plus BSP fee) are billed transparently at actuals based on your real usage, separate from your custom implementation scope."
  }
];

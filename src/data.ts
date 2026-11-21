/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { IndustryInsight, FailureScenario, OfferTier, FaqItem } from "./types";

export const insights: IndustryInsight[] = [
  {
    id: 1,
    articleSlug: "ai-voice-agents-hvac",
    title: "AI Voice Agents Eliminate Inbound HVAC Call Leakage",
    source: "1,200+ HVAC Contractor Benchmark Study",
    finding: "HVAC and AC contractors miss 35–50% of inbound calls during peak summer heatwaves and monsoon surges. 24/7 AI Voice Assistants answer every call and recover ₹68,000–₹1,53,000/mo in lost AC & cooling jobs.",
    whoApplied: "Precision Cooling Systems (15-Tech HVAC Field Study)",
    measuredImpact: [
      "100% call answer rate during heatwave spikes",
      "₹68,000–₹1,53,000/mo recovered HVAC revenue",
      "+40–65% booked jobs within 60 days",
      "4–8x ROI achieved in first 60 days"
    ],
    aiOpportunity: "Deploys 24/7 AI Voice agent on your primary phone lines. Qualifies residential and commercial AC callers, checks technician dispatch schedules, and books appointments directly into Zoho CRM, LeadSquared, or Google Calendar.",
    opportunityScore: {
      impact: 92,
      ease: 82,
      overall: 89
    }
  },
  {
    id: 2,
    articleSlug: "hvac-emergency-call-capture",
    title: "No-Cooling & Commercial AC Emergency Call Capture",
    source: "HVAC Field Dispatch Data & Benchmark Study",
    finding: "Growing HVAC contractors lose ₹4.25L–₹11.05L/yr on unanswered after-hours emergency calls. Capturing ₹15,300–₹27,200 emergency commercial AC, VRF, and chiller repair tickets transforms contractor profitability.",
    whoApplied: "Regional HVAC & VRF Specialist Firm",
    measuredImpact: [
      "+₹15,30,000 annual revenue captured from phone lines",
      "₹20,400 average HVAC emergency ticket size",
      "384% first-quarter ROI recorded",
      "0% missed-call rate during peak summer heatwaves"
    ],
    aiOpportunity: "Instant missed-call WhatsApp/SMS + AI voice callback workflow seals no-cooling and commercial AC breakdown jobs before clients call local competitors.",
    opportunityScore: {
      impact: 96,
      ease: 86,
      overall: 93
    }
  },
  {
    id: 3,
    articleSlug: "hvac-web-lead-capture",
    title: "Rapid Web HVAC Lead Capture (Sub-2 Minute Response)",
    source: "HVAC Lead Conversion Benchmark 2025",
    finding: "AI web & WhatsApp chat slashes inquiry response times from 4+ hours to under 2 minutes. 78% of homeowners and facility managers hire the first HVAC contractor who responds when their AC is down.",
    whoApplied: "AutoScale Cooling & HVAC Clients",
    measuredImpact: [
      "Sub-2 minute response times (down from 4+ hrs)",
      "+50% lead-to-booking conversion rate",
      "42% of jobs booked after-hours via web & WhatsApp AI",
      "Zero added dispatcher overhead required"
    ],
    aiOpportunity: "Custom AI web agent answers HVAC FAQs, verifies local PIN code coverage, provides ballpark inspection estimates, and books CRM appointments on the spot.",
    opportunityScore: {
      impact: 82,
      ease: 90,
      overall: 84
    }
  },
  {
    id: 4,
    articleSlug: "automated-google-reviews",
    title: "Automated Google Reviews & Estimate Re-engagement",
    source: "Local SEO & HVAC Contractor Study",
    finding: "Automated post-job review sequences boost Google ratings to 4.8+ stars while automatic 48-hour VRF and AC installation estimate re-engagement captures outstanding quotes.",
    whoApplied: "Apex Cooling Systems & HVAC Field Service Network",
    measuredImpact: [
      "+75% new Google reviews in 90 days",
      "4.8 star average Google Map Pack rating",
      "+15% revenue from installation quote follow-ups",
      "100% automated hands-free workflow"
    ],
    aiOpportunity: "Automates post-service WhatsApp & SMS review requests and multi-touch 48-hour AC/VRF installation estimate follow-ups without manual office staff intervention.",
    opportunityScore: {
      impact: 78,
      ease: 95,
      overall: 83
    }
  },
  {
    id: 5,
    articleSlug: "predictive-hvac-maintenance",
    title: "Predictive Off-Peak Seasonal Maintenance Outreach",
    source: "HVAC Industry Benchmark Report 2026",
    finding: "Predictive maintenance outreach linked to weather shifts and equipment age prevents off-season monsoon and winter revenue dips for HVAC and AMC contractors.",
    whoApplied: "Pan-India HVAC & Commercial Cooling Service Network",
    measuredImpact: [
      "25–35% reduction in off-season revenue dips",
      "3–5x higher conversion than blast emails",
      "₹0 additional advertising spend required",
      "Annual Maintenance Contracts (AMC) locked in early"
    ],
    aiOpportunity: "Monitors CRM equipment age and local city weather forecasts to auto-trigger personalized WhatsApp & SMS AC/HVAC tune-up reminders with 1-click booking.",
    opportunityScore: {
      impact: 72,
      ease: 90,
      overall: 78
    }
  }
];

export const failureScenarios: FailureScenario[] = [
  {
    id: 1,
    category: "Acquisition",
    scenario: "HVAC technician is on a rooftop site install and misses an inbound AC breakdown call — the client immediately calls a competitor and books a ₹10,200 commercial/multi-split repair.",
    solution: "A 24/7 AI Voice Agent (Retell/Vapi) answers immediately, qualifies cooling urgency, books the diagnostic visit into Zoho CRM/LeadSquared, and confirms via WhatsApp.",
    deliveryModel: "DFY",
    annualLeakEstimate: 408000
  },
  {
    id: 2,
    category: "Acquisition",
    scenario: "A homeowner or clinic whose AC unit failed at 9pm browses your website, finds no interactive chat or booking, and leaves to call a competitor offering '24/7 Dispatch'.",
    solution: "A custom HVAC Web AI Chatbot answers emergency cooling FAQs and secures booking and contact details on the spot.",
    deliveryModel: "DFY",
    annualLeakEstimate: 187000
  },
  {
    id: 3,
    category: "Acquisition",
    scenario: "A ₹80,750 VRF / multi-split AC installation estimate is sent, the client goes silent, and the owner forgets to follow up during summer rush. The high-ticket job is lost.",
    solution: "Make.com workflow triggers multi-stage estimate follow-ups: automated WhatsApp & SMS in 48h, email AMC/EMI options in 72h, and an AI voice agent check-in.",
    deliveryModel: "DFY",
    annualLeakEstimate: 382500
  },
  {
    id: 4,
    category: "Acquisition",
    scenario: "Peak May–June summer heatwave overwhelms your office coordinator; 40% of inbound AC calls go unanswered and callers never receive a timely call-back.",
    solution: "Instant overflow voice agents take over when lines are busy, booking routine AC servicing and routing no-cooling emergencies to active field technicians.",
    deliveryModel: "DFY",
    annualLeakEstimate: 493000
  },
  {
    id: 5,
    category: "Experience",
    scenario: "Client calls at 11pm with a dead AC or commercial server-room cooling breakdown, hits no answer, and immediately calls a local competitor with '24/7 Emergency AC Service' in their ad.",
    solution: "An after-hours HVAC emergency triage agent answers 24/7, screens for true emergency vs. routine inquiry, and alerts the on-call tech via WhatsApp/SMS summary.",
    deliveryModel: "DFY",
    annualLeakEstimate: 442000
  },
  {
    id: 6,
    category: "Experience",
    scenario: "An AC or VRF install is successfully completed, but the tech forgets to ask for a review. Your Google Map Pack rating stays dormant while competitors pull ahead.",
    solution: "Zoho CRM / LeadSquared integration: job completion triggers a WhatsApp & SMS review request with a direct Google Business link within 1 hour.",
    deliveryModel: "DFY",
    annualLeakEstimate: 153000
  },
  {
    id: 7,
    category: "Experience",
    scenario: "A prospective client submits a website or Justdial enquiry for split/cassette AC installation but waits 4+ hours for a response, booking with another dealer in the meantime.",
    solution: "Instant AI reply + webhook alerting the HVAC coordinator via WhatsApp/SMS with one-click tap to call back, dropping response time under 120 seconds.",
    deliveryModel: "DFY",
    annualLeakEstimate: 221000
  },
  {
    id: 8,
    category: "Experience",
    scenario: "You have no system for Annual Maintenance Contract (AMC) renewals and upsells. High-value AC installation customers are never re-engaged for pre-summer servicing.",
    solution: "Automated CRM workflow triggers scheduled personalized WhatsApp & SMS service reminders and AMC renewal offers 6 months post-installation.",
    deliveryModel: "DWY",
    annualLeakEstimate: 272000
  },
  {
    id: 9,
    category: "Efficiency",
    scenario: "Your coordinator spends 3–4 hours a day on the phone answering basic AC servicing charges and PIN code coverage questions rather than optimizing technician routes.",
    solution: "Deploy an interactive voice/web HVAC FAQ chatbot to handle service PIN codes, standard inspection charges, and general scheduling autonomously.",
    deliveryModel: "DFY",
    annualLeakEstimate: 204000
  },
  {
    id: 10,
    category: "Efficiency",
    scenario: "An HVAC tech is dispatched without equipment context, arriving to find a legacy R-22/R-410A compressor or inverter PCB issue they weren't prepared for.",
    solution: "AI Voice Agent transcribes caller equipment details (brand, tonnage, age, symptoms) and syncs them straight into CRM dispatch notes for the technician.",
    deliveryModel: "DFY",
    annualLeakEstimate: 136000
  },
  {
    id: 11,
    category: "Efficiency",
    scenario: "Manual appointment reminders are forgotten, leading to a 15–20% no-show or locked-premises rate that wastes fuel, travel time, and technician field hours.",
    solution: "CRM-linked WhatsApp & SMS confirmation sequence at booking, 24 hours prior, and when tech is en route, with one-click rescheduling.",
    deliveryModel: "DFY",
    annualLeakEstimate: 238000
  },
  {
    id: 12,
    category: "Efficiency",
    scenario: "You spend thousands of rupees every month on Google Ads, Justdial, and IndiaMART for 'AC Repair' but have zero visibility into which channels convert into completed jobs.",
    solution: "Integrate custom source tracking on AI booking webhooks to compile a weekly automated lead-source ROI report delivered straight to your inbox.",
    deliveryModel: "DWY",
    annualLeakEstimate: 170000
  },
  {
    id: 13,
    category: "Growth",
    scenario: "Your HVAC business relies 100% on passive word-of-mouth referrals. You have no predictable lead capture engine to fill tech schedules during monsoon and winter months.",
    solution: "Connect an SEO-optimized web chat with Google Ads, IndiaMART, and Meta Lead webhooks for immediate automated 60-second follow-up systems.",
    deliveryModel: "DWY",
    annualLeakEstimate: 552500
  },
  {
    id: 14,
    category: "Growth",
    scenario: "You want to add 2 new field service teams to your HVAC operation but are paralyzed because your office coordinator cannot handle double the call volume.",
    solution: "Integrate a scalable front-office AI systems stack that handles unlimited simultaneous calls and web/WhatsApp bookings without adding office headcount.",
    deliveryModel: "Consulting",
    annualLeakEstimate: 807500
  },
  {
    id: 15,
    category: "Growth",
    scenario: "Off-peak months (monsoon/winter) trigger drastic revenue drops for your HVAC firm, leaving technicians underutilized and hurting monthly cash flow.",
    solution: "Run automated, highly targeted AMC & recall campaigns that scan your CRM for aging AC/VRF systems and offer pre-season check-ups via WhatsApp & SMS.",
    deliveryModel: "DWY",
    annualLeakEstimate: 442000
  }
];

export const offerTiers: OfferTier[] = [
  {
    id: 1,
    title: "HVAC Call Capture Starter System",
    tagline: "Stop losing incoming AC repair, installation, and AMC leads to missed calls and local competitors.",
    features: [
      "24/7 AI Voice Agent (Retell AI / Vapi): Answers 100% of inbound calls in clear Indian English, qualifies cooling urgency, books directly into your CRM, and routes emergencies.",
      "Instant Missed-Call WhatsApp & SMS Recovery (Make.com): Triggers automated follow-up within 60s of any missed call to lock in the customer.",
      "Post-Service Review Automation (Make.com/Zapier): Sends automated WhatsApp & SMS review prompts within 1 hour of job completion to dominate Google Local Map Packs.",
      "Full CRM Webhook Integration (Zoho CRM, LeadSquared, HubSpot, Freshsales, Google Calendar, etc.)"
    ],
    results: [
      "Slashes missed HVAC calls by 90%+",
      "Recovers ₹25,500–₹68,000/mo in leaked phone revenue",
      "Secures a 4–8x ROI in under 60 days of deployment"
    ],
    bestFor: "HVAC contractors or small teams (1-5 techs) looking to recover lost revenue from unanswered calls during busy summer seasons.",
    delivery: "Project-based (Fully delivered and active in 2–3 weeks)"
  },
  {
    id: 2,
    title: "HVAC Lead Conversion Growth System",
    tagline: "Maximize every web inquiry, Justdial/IndiaMART lead, and VRF estimate, converting traffic into booked jobs on autopilot.",
    features: [
      "Everything in the HVAC Call Capture Starter System",
      "Website & WhatsApp HVAC AI Chatbot (Voiceflow / Chatling): Diagnostic FAQ responder, live estimate capture, and booking assistant that converts leads 24/7.",
      "Installation & AMC Quote Follow-Up Automation: Multi-stage trigger sequence (WhatsApp + SMS + email + AI voice) to recover 5–15% of unsigned AC/VRF quotes.",
      "Automated Dispatch & Reminder Sequences: Smart 24h & 2h WhatsApp/SMS reminder sequences that bring no-shows down below 5%.",
      "Monthly HVAC AI Performance Analytics: Automatically compiles call volume, booking rates, and recovered revenue analytics straight to the owner."
    ],
    results: [
      "30–50% increase in lead-to-booking conversions",
      "Recovers 5–15% of outstanding HVAC installation quotes",
      "Brings booking no-show rates below 5% with zero manual work",
      "Recovers ₹68,000–₹1,53,000/mo in additional revenue"
    ],
    bestFor: "Growing HVAC businesses (5-15 techs) with healthy inbound enquiries but high leak rates across the customer acquisition funnel.",
    delivery: "Hybrid model (Full project build + 3-month strategic optimization retainer)"
  },
  {
    id: 3,
    title: "Full HVAC AI Growth Infrastructure",
    tagline: "A completely autonomous HVAC front office operations engine designed to help you scale your field teams without adding overhead.",
    features: [
      "Everything in Tiers 1 & 2",
      "Seasonal Maintenance & AMC Renewal Engine: Smart campaigns that target past customers based on city weather forecasts, system age, and contract renewal dates.",
      "Full CRM & Coordinator Handoff: AI Voice agent collects equipment brand, tonnage, and diagnostic notes, populating your CRM and texting the active tech.",
      "Custom HVAC AI Executive Dashboard: Real-time visibility into booked jobs, call logs, acquisition channels (Google Ads/IndiaMART/Justdial), and team utilization.",
      "White-Glove Onboarding & 6-Month Strategic Retainer: Direct ongoing optimizations, script updates, integration adjustments, and monthly growth consulting."
    ],
    results: [
      "Unlocks ₹1,27,500–₹2,55,000/mo in additional revenue",
      "Operates a highly synchronized, 100% automated HVAC front office",
      "Eliminates manual CRM entries, forgotten quote follow-ups, and review collections",
      "Allows the owner to focus completely on expanding field capacity and technician hiring"
    ],
    bestFor: "Established HVAC contractors (10-30+ field teams) looking to optimize operations, secure city-wide market dominance, and expand capacity without proportional overhead.",
    delivery: "Hybrid model (Full enterprise system build + 6-month white-glove retainer)"
  }
];

export const faqs: FaqItem[] = [
  {
    id: 1,
    category: "Implementation",
    question: "Do we have to replace Zoho CRM, LeadSquared, or our current HVAC software?",
    answer: "No. Our core philosophy is building custom integration layers, not replacing software. We integrate directly with your existing CRM and dispatch tools (such as Zoho CRM, LeadSquared, HubSpot, Freshsales, Tally/Google Sheets, or custom field-service portals) using secure APIs and webhooks. Your techs and coordinators keep using what they already know."
  },
  {
    id: 2,
    category: "Security",
    question: "How secure is our customer data and dispatch system?",
    answer: "We employ strict enterprise-grade security protocols. All integrations utilize secure API keys, HTTPS protocols, and end-to-end encryption. Your voice agents and chatbots run on isolated, compliant server environments. We never sell, store, or train AI models on your proprietary customer databases or dispatch logs."
  },
  {
    id: 3,
    category: "ROI",
    question: "How soon does an HVAC contractor in India see a return on this system?",
    answer: "Most HVAC clients see a full financial return on their setup investment within 30 to 60 days. Because we target immediate revenue leaks—like missed inbound AC calls during summer heatwaves (averaging ₹3,000–₹24,000+ in value each) and forgotten VRF or commercial installation estimates—the system captures lost money from day one. Even a couple of captured commercial repairs or AMC contracts can pay for the system."
  },
  {
    id: 4,
    category: "Implementation",
    question: "How much effort is required from our office coordinator or team during setup?",
    answer: "Almost none. We deliver these systems as complete, white-glove, Done-For-You (DFY) solutions. Our team handles the scripts, HVAC prompt engineering, CRM/WhatsApp webhooks, and exhaustive edge-case testing. Your team is only involved for a brief discovery audit and a final 45-minute sign-off session to review the AI's tone and dispatch rules before we launch."
  },
  {
    id: 5,
    category: "Implementation",
    question: "Will the AI voice agent sound robotic or struggle with Indian accents?",
    answer: "Absolutely not. We use ultra-low latency conversational frameworks (Retell AI / Vapi) tuned specifically for Indian English accents, local PIN codes, and HVAC terminology. They respond in under 1 second, recognize technical terms (R-32, R-410A, inverter PCBs, VRF systems, chillers, compressors), match natural cadences, and handle interrupts gracefully. If a caller insists on speaking to a human, the AI transfers the call immediately with a transcribed summary."
  },
  {
    id: 6,
    category: "ROI",
    question: "Why should an HVAC business hire TendLine instead of trying no-code templates?",
    answer: "Patchwork templates break under peak summer pressure. Standard templates lack fail-safes, fail during CRM sync delays, and create duplicate customer records, causing technician dispatch nightmares. TendLine builds professional-grade, resilient enterprise growth infrastructure with built-in redundancy, custom API parsing, and ongoing optimization to ensure your AI works 24/7/365 without glitching."
  }
];

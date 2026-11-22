/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArticleAuthor, BlogArticleMeta } from "../types";

export const SOCIAL_PROFILES = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tendline-automation-0407a7429",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nsen59341/",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/natasha.sen.9655",
  },
] as const;

export const SOCIAL_SAME_AS = SOCIAL_PROFILES.map((profile) => profile.href);

export const DEFAULT_AUTHOR: ArticleAuthor = {
  name: "Natasha Sen",
  role: "Founder & AI Systems Architect, TendLine",
  bio: "Natasha Sen designs AI voice agents, WhatsApp and web chatbots, and CRM workflow automation systems for Indian business owners, focusing on practical lead capture, follow-up speed, and reliable conversion.",
  profileUrl: "/#author-natasha-sen",
};

export const articlesMeta: BlogArticleMeta[] = [
  {
    id: 1,
    slug: "ai-voice-agents-hvac",
    title: "AI Voice Agents Eliminate Inbound Lead & Call Leakage",
    excerpt:
      "Modelled Indian call-capture economics point to ₹3,11,040–₹13,26,780 a year (₹25,920–₹1,10,565/month) in recoverable revenue. Learn how AI voice agents capture inbound enquiries when your team is busy.",
    category: "AI Voice Agents",
    publishedDate: "2026-11-02",
    publishedDateLabel: "November 2, 2026",
    readingTime: "6 min read",
    seoTitle: "AI Voice Agents Eliminate Inbound Call & Lead Leakage | TendLine",
    seoDescription:
      "See how AI voice agents help Indian business owners answer inbound calls during busy hours, protect ad spend, and convert missed calls into booked appointments.",
    featuredImageAlt:
      "Minimalist AI voice dispatch console with matte charcoal microphone and bronze audio waveform display on travertine stone",
    keywords: [
      "AI voice agents India",
      "inbound lead leakage",
      "missed business calls",
      "AI receptionist for business",
      "capture more leads",
    ],
  },
  {
    id: 2,
    slug: "hvac-emergency-call-capture",
    title: "After-Hours & High-Intent Call Capture: Closing the 2026 AI Readiness Gap",
    excerpt:
      "What 2026 business benchmark data shows about AI adoption—and why answering evening and peak-hour inbound enquiries is where real competitive advantage starts.",
    category: "Lead Management",
    publishedDate: "2026-11-05",
    publishedDateLabel: "November 5, 2026",
    readingTime: "6 min read",
    seoTitle: "After-Hours & High-Intent Lead Capture for Businesses | TendLine",
    seoDescription:
      "Explore 2026 AI adoption findings and learn how automated call capture keeps after-hours and high-intent leads from going to your competitors.",
    featuredImageAlt:
      "Modern business operations desk at dusk with warm brass desk lamp illuminating planning blueprints and a telephone receiver",
    keywords: [
      "after-hours lead capture",
      "inbound call answering",
      "AI adoption 2026 India",
      "24/7 lead response",
      "lead management automation",
    ],
  },
  {
    id: 3,
    slug: "hvac-web-lead-capture",
    title: "Rapid Web & WhatsApp Lead Capture Without Automating a Broken Process",
    excerpt:
      "Adding a chatbot without clear follow-up only automates the gap. Learn the three operational decisions that turn web and WhatsApp enquiries into booked appointments.",
    category: "AI Chatbots",
    publishedDate: "2026-11-08",
    publishedDateLabel: "November 8, 2026",
    readingTime: "6 min read",
    seoTitle: "Rapid Web & WhatsApp Lead Capture & AI Chatbots | TendLine",
    seoDescription:
      "Discover how to deploy website and WhatsApp chatbots and automated lead capture responsibly so every enquiry receives fast follow-up and converts into a booked client.",
    featuredImageAlt:
      "Modern brushed aluminum tablet on a warm sand architectural desk showing a clean dark and bronze chat interface",
    keywords: [
      "web lead capture",
      "WhatsApp AI chatbot India",
      "automate lead follow-up",
      "business chatbot",
      "appointment booking automation",
    ],
  },
  {
    id: 4,
    slug: "automated-google-reviews",
    title: "Automated Google Reviews & Proposal / Quote Recovery",
    excerpt:
      "How CRM-connected post-service review requests and 48-hour quote follow-ups help Indian businesses strengthen local visibility and recover unsigned proposals.",
    category: "Business Automation",
    publishedDate: "2026-11-10",
    publishedDateLabel: "November 10, 2026",
    readingTime: "5 min read",
    seoTitle: "Automated Google Reviews & Quote Follow-Up Recovery | TendLine",
    seoDescription:
      "Learn how Indian businesses automate post-service Google review requests and 48-hour quotation follow-ups directly from their CRM.",
    featuredImageAlt:
      "Architectural flat lay of geometric brass five-star emblem blocks and linen proposal folders on a warm sand and charcoal table",
    keywords: [
      "automated Google reviews",
      "quotation follow-up automation",
      "business automation India",
      "CRM review automation",
      "recover unsigned quotes",
    ],
  },
  {
    id: 5,
    slug: "predictive-hvac-maintenance",
    title: "Predictive Off-Peak Customer Reactivation & Retention Outreach",
    excerpt:
      "Use existing CRM customer history and seasonal shifts to trigger timely check-in and renewal reminders during slower business months.",
    category: "AI Technology",
    publishedDate: "2026-11-12",
    publishedDateLabel: "November 12, 2026",
    readingTime: "5 min read",
    seoTitle: "Predictive Off-Peak Customer Reactivation Outreach | TendLine",
    seoDescription:
      "Stabilize off-peak sales calendars using predictive CRM customer history and automated WhatsApp reactivation reminders without increasing ad spend.",
    featuredImageAlt:
      "Isometric architectural rendering of a modern precision system unit with a warm bronze seasonal dial",
    keywords: [
      "predictive customer reactivation",
      "seasonal outreach India",
      "CRM renewal automation",
      "automated WhatsApp reminders",
      "business AI technology",
    ],
  },
];

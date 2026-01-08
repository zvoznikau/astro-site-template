export const brand = {
  // Basic brand information
  name: 'DemoAPPmax',
  description: 'Monitor your servers. Catch issues before users do.',
  tagline: 'CPU, RAM, Disk, Network, alerts and status history.',

  // Product information
  product: {
    name: 'DemoAPPmax',
    category: 'Server performance monitoring',
    platform: 'iOS',
    valueProposition: 'Monitor your servers. Catch issues before users do.',
    secondaryLine: 'CPU, RAM, Disk, Network, alerts and status history.',
    // App Store description
    appStoreDescription:
      'Stay organized and manage your server infrastructure with DemoAPPmax. Monitor CPU, RAM, Disk, and Network performance in real-time, receive instant alerts when thresholds are exceeded, and access comprehensive status history to track trends over time. DemoAPPmax is the server monitoring app that makes it easy to keep your infrastructure healthy and prevent issues before they affect your users. Accomplish what matters most each day with real-time monitoring and intelligent alerts, powerful tools designed to help you maintain optimal server performance.',
  },

  // Pricing
  pricing: {
    monthly: {
      price: '$9.99',
      period: 'month',
      bestValue: false,
    },
    yearly: {
      price: '$99.99',
      period: 'year',
      bestValue: true,
    },
  },

  // CTA buttons
  cta: {
    primary: 'Download on the App Store',
    secondary: 'View pricing',
    subscribe: 'Subscribe',
  },

  // FAQ
  faq: [
    {
      question: 'What platforms are supported?',
      answer:
        'DemoAPPmax is currently available for iOS. We are working on macOS and Android versions.',
    },
    {
      question: 'Do you have alerts?',
      answer:
        'Yes, DemoAPPmax provides real-time alerts for CPU, RAM, Disk, and Network usage. You can customize alert thresholds.',
    },
    {
      question: 'Does it work without running a server agent?',
      answer:
        'No, DemoAPPmax requires a lightweight agent to be installed on your servers to collect performance metrics.',
    },
    {
      question: 'Is there a free trial?',
      answer:
        'Yes, we offer a 14-day free trial with full access to all features. No credit card required.',
    },
    {
      question: 'How do I cancel?',
      answer:
        'You can cancel your subscription at any time from the App Store settings. Your access will continue until the end of the current billing period.',
    },
  ],

  // SEO configuration
  seo: {
    title: 'DemoAPPmax - Server Performance Monitoring for iOS',
    description:
      'Monitor your servers with DemoAPPmax. Track CPU, RAM, Disk, and Network performance. Get real-time alerts and status history.',
    keywords: [
      'server monitoring',
      'performance monitoring',
      'iOS app',
      'server management',
      'CPU monitoring',
      'RAM monitoring',
      'disk monitoring',
      'network monitoring',
      'server alerts',
      'status history',
    ],
    ogImage: '/og-image.jpg',
    canonical: 'https://demoappmax.com',
  },

  // Analytics and verification
  analytics: {
    googleAnalytics: 'GA_MEASUREMENT_ID_PLACEHOLDER',
    googleTagManager: 'GTM_ID_PLACEHOLDER',
    bingVerification: 'BING_VERIFICATION_CODE_PLACEHOLDER',
  },

  // URLs and links
  urls: {
    website: 'https://demoappmax.com',
    appStore: 'https://apps.apple.com/app/demoappmax',
    support: 'mailto:support@demoappmax.com',
    privacy: 'https://demoappmax.com/privacy',
    terms: 'https://demoappmax.com/terms',
    documentation: 'https://docs.demoappmax.com',
  },

  // Contact information
  contact: {
    email: 'contact@demoappmax.com',
    support: 'support@demoappmax.com',
  },

  // Theme configuration
  theme: {
    default: 'dark', // Start with dark theme
    available: ['light', 'dark'],
  },

  // Navigation menu items
  navigation: {
    items: [
      { label: 'Features', href: '/#features' },
      { label: 'How it works', href: '/#how-it-works' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Documentation', href: 'https://docs.demoappmax.com', external: true },
    ],
  },

  // Social proof items
  socialProof: [
    {
      title: 'Privacy-first',
      description: 'Your server data stays private and secure.',
    },
    {
      title: 'Fast setup',
      description: 'Get started in minutes with our simple installation.',
    },
    {
      title: 'Clear dashboards',
      description: 'Easy-to-read metrics and visualizations.',
    },
  ],

  // Features list
  features: [
    {
      title: 'CPU Monitoring',
      description: 'Track CPU usage in real-time with detailed metrics.',
      icon: 'cpu',
    },
    {
      title: 'RAM Monitoring',
      description: 'Monitor memory usage and identify potential issues.',
      icon: 'ram',
    },
    {
      title: 'Disk Monitoring',
      description: 'Keep track of disk space and I/O performance.',
      icon: 'disk',
    },
    {
      title: 'Network Monitoring',
      description: 'Monitor network traffic and connection status.',
      icon: 'network',
    },
    {
      title: 'Alerts',
      description: 'Get notified when thresholds are exceeded.',
      icon: 'alerts',
    },
    {
      title: 'History',
      description: 'View historical data and trends over time.',
      icon: 'history',
    },
  ],

  // How it works steps
  howItWorks: [
    {
      step: 1,
      title: 'Connect',
      description: 'Install the lightweight agent on your servers.',
    },
    {
      step: 2,
      title: 'Monitor',
      description: 'View real-time performance metrics in the app.',
    },
    {
      step: 3,
      title: 'Get alerts',
      description: 'Receive notifications when issues are detected.',
    },
  ],

  // Page configuration - block order
  // Best practices for sales: Hero → SocialProof → Features → Description (builds interest) → HowItWorks → Pricing → FAQ → CTA
  pages: {
    index: {
      blocks: [
        'Header',
        'Hero',
        'SocialProof',
        'Features',
        'AppStoreDescription', // After Features: provides more context before pricing
        'HowItWorks',
        'Pricing',
        'FAQ',
        'CTABand',
        'Footer',
      ],
    },
  },

  // Images configuration
  // Purpose: context, not decoration. Images add depth and emotion.
  // See .cursor/rules/images.md for detailed rules
  images: {
    // Hero image: Product screenshot or abstract tech visual
    hero: {
      src: '/images/hero-app-screenshot.png', // App screenshot showing dashboard
      alt: 'DemoAPPmax server monitoring dashboard - CPU, RAM, Disk, and Network monitoring',
      type: 'product', // 'product' | 'abstract' | 'ambient'
    },
    // Visual pauses between blocks (breathing space)
    // MANDATORY: pause after Hero to avoid "documentation" look
    pauses: [
      {
        after: 'Hero', // MANDATORY: Insert after Hero
        src: '', // e.g., './images/pause-1.png' or 'https://images.unsplash.com/...'
        alt: '',
        type: 'ambient', // 'product' | 'abstract' | 'ambient'
      },
      {
        after: 'Features',
        src: '',
        alt: '',
        type: 'abstract',
      },
    ],
    // Supporting images for Features / How it works (1-2 max, very calm)
    supporting: {
      features: {
        src: '',
        alt: '',
        type: 'abstract',
      },
    },
  },
}

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
  },

  // Contact information
  contact: {
    email: 'contact@demoappmax.com',
    support: 'support@demoappmax.com',
  },

  // Theme configuration
  theme: {
    default: 'light',
    available: ['light', 'dark'],
  },

  // Navigation menu items
  navigation: {
    items: [
      { label: 'Features', href: '#features' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
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
  pages: {
    index: {
      blocks: [
        'Header',
        'Hero',
        'SocialProof',
        'Features',
        'HowItWorks',
        'Pricing',
        'FAQ',
        'CTABand',
        'Footer',
      ],
    },
  },
}

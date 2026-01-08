// Blog posts configuration
export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  excerpt: string
  content: string
  author: {
    name: string
    email?: string
  }
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

// Blog author
export const blogAuthor = {
  name: 'Vadzim Zvoznikau',
  email: 'vadzim@demoappmax.com',
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'launch',
    title: 'DemoAPPmax Launch',
    description: 'We are excited to announce the launch of DemoAPPmax - a new server monitoring application',
    date: '2024-01-15',
    excerpt: 'Today we are proud to introduce DemoAPPmax - a revolutionary server monitoring application that helps you track your infrastructure performance in real-time.',
    content: `
<h2>What is DemoAPPmax?</h2>
<p>DemoAPPmax is a modern iOS application designed for system administrators, DevOps engineers, and anyone who cares about their server stability. Our application allows you to:</p>
<ul>
  <li><strong>Monitor CPU, RAM, Disk, and Network</strong> in real-time</li>
  <li><strong>Receive instant notifications</strong> when thresholds are exceeded</li>
  <li><strong>View performance history</strong> for trend analysis</li>
  <li><strong>Manage multiple servers</strong> from one convenient interface</li>
</ul>

<h2>Why We Created DemoAPPmax</h2>
<p>In the modern world, where servers are the foundation of any business, it's important to have a reliable monitoring tool. We noticed that existing solutions are either too complex or not functional enough. DemoAPPmax combines ease of use with powerful capabilities.</p>

<h2>What's Next?</h2>
<p>We are just beginning our journey. In upcoming updates, we plan to add:</p>
<ul>
  <li>macOS and Android support</li>
  <li>Advanced analytics capabilities</li>
  <li>Integrations with popular cloud platforms</li>
  <li>Custom dashboards</li>
</ul>

<h2>Join Us!</h2>
<p>Download DemoAPPmax from the App Store and start monitoring your servers today. We would love to hear your feedback and suggestions!</p>
    `.trim(),
    author: {
      name: 'Vadzim Zvoznikau',
    },
    seo: {
      title: 'DemoAPPmax Launch - New Server Monitoring Application',
      description: 'Learn about the launch of DemoAPPmax - a revolutionary iOS application for real-time server performance monitoring',
      keywords: ['app launch', 'server monitoring', 'iOS app', 'DemoAPPmax', 'server monitoring'],
    },
  },
  {
    slug: 'first-changes',
    title: 'First Updates and Improvements',
    description: 'We listened to your feedback and made the first important improvements to DemoAPPmax',
    date: '2024-02-10',
    excerpt: 'Thank you to all users for your feedback! We analyzed your suggestions and released an update with important interface and performance improvements.',
    content: `
<p>Thank you to all users for your feedback! We analyzed your suggestions and released an update with important interface and performance improvements.</p>

<h2>What's New?</h2>

<h3>Improved Interface</h3>
<p>We completely redesigned the dashboard, making it more intuitive and informative. Now you can:</p>
<ul>
  <li>Find information faster</li>
  <li>Switch between servers more easily</li>
  <li>Customize metric display to your needs</li>
</ul>

<h3>Performance Optimization</h3>
<p>The application now works significantly faster:</p>
<ul>
  <li>Battery consumption reduced by 30%</li>
  <li>Faster data loading</li>
  <li>Optimized work with large numbers of servers</li>
</ul>

<h3>New Features</h3>
<ul>
  <li>Added dark theme support</li>
  <li>Improved notification system</li>
  <li>Added data export capability</li>
</ul>

<h2>Your Feedback Matters</h2>
<p>We continue to work on improving DemoAPPmax and greatly value your feedback. If you have ideas or suggestions, please contact us through the in-app support.</p>

<h2>What's Next?</h2>
<p>In the next update, we plan to:</p>
<ul>
  <li>Add server grouping support</li>
  <li>Implement more flexible alert settings</li>
  <li>Improve historical data visualization</li>
</ul>

<p>Thank you for staying with us!</p>
    `.trim(),
    author: {
      name: 'Vadzim Zvoznikau',
    },
    seo: {
      title: 'First Updates and Improvements to DemoAPPmax - App Update',
      description: 'Learn about the first improvements to DemoAPPmax: performance optimization, new interface, and additional features',
      keywords: ['app update', 'DemoAPPmax improvements', 'new features', 'performance optimization'],
    },
  },
  {
    slug: 'first-customers',
    title: 'First Customers and Their Success Stories',
    description: 'We are excited to share stories of our first customers and their successes with DemoAPPmax',
    date: '2024-03-05',
    excerpt: 'In just a few months, DemoAPPmax has helped many companies improve their server monitoring. We want to share some success stories from our first customers.',
    content: `
<p>In just a few months, DemoAPPmax has helped many companies improve their server monitoring. We want to share some success stories from our first customers.</p>

<h2>Story 1: E-commerce Startup</h2>
<p><strong>Problem:</strong> A team of 5 people managed 15 servers without centralized monitoring. Issues were only discovered after user complaints.</p>
<p><strong>Solution:</strong> After implementing DemoAPPmax, the team was able to:</p>
<ul>
  <li>Reduce problem detection time from hours to minutes</li>
  <li>Prevent 3 critical incidents thanks to early warnings</li>
  <li>Save 20 hours per week on manual monitoring</li>
</ul>
<p><strong>Testimonial:</strong> <em>"DemoAPPmax changed how we manage our infrastructure. Now we are proactive, not reactive."</em> - Company CTO</p>

<h2>Story 2: Web Development Agency</h2>
<p><strong>Problem:</strong> The agency served clients with different monitoring requirements but had no unified tool.</p>
<p><strong>Solution:</strong> DemoAPPmax allowed them to:</p>
<ul>
  <li>Centralize monitoring of all client servers</li>
  <li>Set up individual alerts for each client</li>
  <li>Provide clients with performance reports</li>
</ul>
<p><strong>Testimonial:</strong> <em>"Our clients appreciate the transparency we can provide thanks to DemoAPPmax."</em> - DevOps Engineer</p>

<h2>Story 3: Educational Platform</h2>
<p><strong>Problem:</strong> The platform experienced peak loads during exams, leading to failures.</p>
<p><strong>Solution:</strong> With DemoAPPmax, the team:</p>
<ul>
  <li>Learned to predict peak loads</li>
  <li>Optimized server resources in advance</li>
  <li>Reduced incidents by 80%</li>
</ul>
<p><strong>Testimonial:</strong> <em>"We no longer fear exam periods. DemoAPPmax gives us confidence."</em> - System Administrator</p>

<h2>Usage Statistics</h2>
<p>In the first 3 months:</p>
<ul>
  <li><strong>500+</strong> active users</li>
  <li><strong>2000+</strong> monitored servers</li>
  <li><strong>95%</strong> user satisfaction</li>
  <li><strong>4.8/5</strong> average App Store rating</li>
</ul>

<h2>Join Successful Companies</h2>
<p>If you want to improve your server monitoring, try DemoAPPmax free for 14 days. We are confident you will see results in the first week!</p>
    `.trim(),
    author: {
      name: 'Vadzim Zvoznikau',
    },
    seo: {
      title: 'First DemoAPPmax Customers - Success Stories and Testimonials',
      description: 'Learn how DemoAPPmax helped first customers improve server monitoring and prevent incidents',
      keywords: ['customer testimonials', 'success stories', 'use cases', 'DemoAPPmax reviews', 'server monitoring'],
    },
  },
]

// Get latest posts
export function getLatestPosts(count: number = 3): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}

// Get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

// Get all posts sorted by date (newest first)
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

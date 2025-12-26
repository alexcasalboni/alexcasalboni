export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const navigation: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/posts" },
  { label: "Talks", href: "/talks" },
  { label: "Contact", href: "/contact" },
];

export const socials: LinkItem[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alexcasalboni", external: true },
  { label: "Twitter/X", href: "https://twitter.com/alex_casalboni", external: true },
  { label: "GitHub", href: "https://github.com/alexcasalboni", external: true },
  { label: "Email", href: "mailto:alex@alexcasalboni.com" },
];

export const quickHighlights = [
  "10+ years of Developer Advocacy across startups and hyperscalers.",
  "Keynote speaker and community builder with hundreds of talks delivered worldwide.",
  "Content strategist with successful blogs, videos, podcasts, and newsletters.",
  "Product storyteller bridging engineering, go-to-market, and customer outcomes.",
];

export const featuredProjects = [
  {
    title: "AWS Lambda Power Tuning",
    description: "Open-source step function to optimize cost and performance for AWS Lambda workloads, adopted globally by thousands of teams.",
    link: "https://github.com/alexcasalboni/aws-lambda-power-tuning",
  },
  {
    title: "Talks & Workshops",
    description: "Hands-on sessions about serverless, observability, and cloud cost optimization for engineering and product teams.",
    link: "/talks",
  },
  {
    title: "Blog & Publications",
    description: "In-depth articles distilling complex technology topics into actionable insights for builders and business leaders.",
    link: "/posts",
  },
  {
    title: "Advisory & Mentorship",
    description: "Supporting developer-first companies with community strategy, product messaging, and technical storytelling.",
    link: "/contact",
  },
];

export const blogPosts = [
  {
    title: "Modern Serverless Cost Optimization",
    date: "September 2024",
    summary: "Practical levers and mental models to reduce cloud spend without slowing your team down.",
    link: "https://alexcasalboni.com/serverless-cost-optimization",
  },
  {
    title: "Developer Advocacy as a Product Function",
    date: "June 2024",
    summary: "A framework to align advocacy, product, and go-to-market outcomes for sustainable impact.",
    link: "https://alexcasalboni.com/developer-advocacy-product-function",
  },
  {
    title: "Shipping Reliable Event-Driven Architectures",
    date: "February 2024",
    summary: "Patterns, pitfalls, and testing strategies for teams embracing event-first design.",
    link: "https://alexcasalboni.com/event-driven-architectures",
  },
];

export const talks = [
  {
    title: "Keynote: The Future of Serverless Observability",
    event: "ServerlessConf",
    location: "San Francisco, CA",
    date: "2024",
    link: "https://www.youtube.com/watch?v=dndBtPwsfQ4&list=PLmKbPNja2HQijRaImXMYJEpAo8oM1rb7O",
  },
  {
    title: "Building Community-Led Growth with Technical Storytelling",
    event: "DevRelCon",
    location: "London, UK",
    date: "2023",
    link: "https://www.youtube.com/watch?v=qvOZX9xgwdI&list=PLmKbPNja2HQijRaImXMYJEpAo8oM1rb7O",
  },
  {
    title: "Hands-on Serverless Reliability Clinic",
    event: "AWS Summit",
    location: "Paris, FR",
    date: "2023",
    link: "https://www.youtube.com/watch?v=aPvF7hthZ8E&list=PLmKbPNja2HQijRaImXMYJEpAo8oM1rb7O",
  },
  {
    title: "From Metrics to Outcomes: Measuring Developer Experience",
    event: "Community-organized",
    location: "Remote",
    date: "2022",
    link: "https://www.youtube.com/watch?v=L-dTAeGTwfI&list=PLmKbPNja2HQijRaImXMYJEpAo8oM1rb7O",
  },
];

export const playlist = {
  title: "Featured Talks Playlist",
  description:
    "A curated set of talks and interviews covering serverless, developer experience, and the business side of advocacy.",
  youtubeUrl: "https://www.youtube.com/playlist?list=PLmKbPNja2HQijRaImXMYJEpAo8oM1rb7O",
  embedUrl: "https://www.youtube.com/embed/videoseries?list=PLmKbPNja2HQijRaImXMYJEpAo8oM1rb7O",
};

export const contactMethods = [
  { label: "Email", href: "mailto:alex@alexcasalboni.com", note: "Direct inquiries, collaborations, and advisory." },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alexcasalboni", note: "Professional network and business conversations." },
  { label: "Twitter/X", href: "https://twitter.com/alex_casalboni", note: "Quick updates, threads, and ongoing discussions." },
  { label: "GitHub", href: "https://github.com/alexcasalboni", note: "Code, open-source projects, and contributions." },
];

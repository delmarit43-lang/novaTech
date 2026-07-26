import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting Nova Tech Database Seeding...');

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@novatech.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'password123';
  const editorEmail = process.env.EDITOR_EMAIL || 'editor@novatech.com';
  const editorPassword = process.env.EDITOR_PASSWORD || 'password123';
  const staffEmail = process.env.STAFF_EMAIL || 'staff@novatech.com';
  const staffPassword = process.env.STAFF_PASSWORD || 'password123';

  // 1. Create Default Admin User
  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 12);
    await prisma.user.create({
      data: {
        name: 'Nova Admin',
        email: adminEmail,
        password: hashedPassword,
        role: 'ADMIN',
      },
    });
    console.log(`✅ Default Admin created: ${adminEmail}`);
  }

  const existingEditor = await prisma.user.findUnique({ where: { email: editorEmail } });
  if (!existingEditor) {
    const hashedPassword = await bcrypt.hash(editorPassword, 12);
    await prisma.user.create({
      data: {
        name: 'Nova Editor',
        email: editorEmail,
        password: hashedPassword,
        role: 'EDITOR',
      },
    });
    console.log(`✅ Content Editor created: ${editorEmail}`);
  }

  const existingStaff = await prisma.user.findUnique({ where: { email: staffEmail } });
  if (!existingStaff) {
    const hashedPassword = await bcrypt.hash(staffPassword, 12);
    await prisma.user.create({
      data: {
        name: 'Staff User',
        email: staffEmail,
        password: hashedPassword,
        role: 'USER',
      },
    });
    console.log(`✅ Staff USER created: ${staffEmail} (no admin panel login)`);
  }

  // 2. Seed Settings
  const existingSetting = await prisma.setting.findFirst();
  if (!existingSetting) {
    await prisma.setting.create({
      data: {
        companyName: 'Nova Tech Solutions',
        email: 'contact@novatech.com',
        phone: '+1 (555) 019-2834',
        address: '100 Innovation Way, Suite 400, Tech Valley, CA 94025',
        workingHours: 'Mon - Fri: 9:00 AM - 6:00 PM EST',
        facebook: 'https://facebook.com/novatech',
        linkedin: 'https://linkedin.com/company/novatech',
        github: 'https://github.com/novatech',
        youtube: 'https://youtube.com/novatech',
        instagram: 'https://instagram.com/novatech',
        footerDescription: 'Empowering enterprise growth with next-generation web architectures, cloud microservices, and bespoke AI innovations.',
      },
    });
    console.log('✅ Settings seeded');
  }

  // 3. Seed Hero Section
  const existingHero = await prisma.heroSection.findFirst();
  if (!existingHero) {
    await prisma.heroSection.create({
      data: {
        title: 'Architecting Enterprise Digital Systems',
        subtitle: 'NEXT-GENERATION SOFTWARE & CLOUD ENGINEERING',
        description: 'Nova Tech builds ultra-scalable web platforms, enterprise microservices, and custom artificial intelligence infrastructure for high-growth leaders.',
        buttonOneText: 'Explore Solutions',
        buttonOneLink: '/services',
        buttonTwoText: 'Schedule Architecture Review',
        buttonTwoLink: '/contact',
        status: 'ACTIVE',
      },
    });
    console.log('✅ Hero Section seeded');
  }

  // 4. Seed About Section
  const existingAbout = await prisma.aboutSection.findFirst();
  if (!existingAbout) {
    await prisma.aboutSection.create({
      data: {
        title: 'We Engineer High-Performance Digital Solutions',
        description: 'Nova Tech is a premier digital architecture studio. We deliver bulletproof backend systems, beautiful frontend applications, and scalable cloud architectures.',
        mission: 'Deliver state-of-the-art engineering solutions that maximize enterprise velocity, scalability, and security.',
        vision: 'To shape the future of enterprise software engineering through technical elegance and continuous innovation.',
      },
    });
    console.log('✅ About Section seeded');
  }

  // 5. Seed Services
  const serviceCount = await prisma.service.count();
  if (serviceCount === 0) {
    await prisma.service.createMany({
      data: [
        {
          title: 'Enterprise Software Engineering',
          slug: 'enterprise-software-engineering',
          description: 'Custom microservices, distributed architectures, and web software designed for high availability and throughput.',
          icon: 'Cpu',
          category: 'Software Engineering',
          featured: true,
          status: 'ACTIVE',
        },
        {
          title: 'Cloud Infrastructure & DevOps',
          slug: 'cloud-infrastructure-devops',
          description: 'AWS/GCP Kubernetes orchestration, CI/CD automated pipelines, and zero-downtime infrastructure design.',
          icon: 'Cloud',
          category: 'Cloud Services',
          featured: true,
          status: 'ACTIVE',
        },
        {
          title: 'AI & Data Intelligence Systems',
          slug: 'ai-data-intelligence-systems',
          description: 'Custom LLM integrations, predictive analytics pipelines, and workflow automation engines.',
          icon: 'Sparkles',
          category: 'Artificial Intelligence',
          featured: true,
          status: 'ACTIVE',
        },
        {
          title: 'Cybersecurity & Compliance',
          slug: 'cybersecurity-compliance',
          description: 'End-to-end vulnerability assessments, SOC2/HIPAA compliance frameworks, and zero-trust backend security.',
          icon: 'ShieldCheck',
          category: 'Cybersecurity',
          featured: false,
          status: 'ACTIVE',
        },
      ],
    });
    console.log('✅ Services seeded');
  }

  // 6. Seed Portfolio Projects
  const portfolioCount = await prisma.portfolio.count();
  if (portfolioCount === 0) {
    await prisma.portfolio.createMany({
      data: [
        {
          title: 'FinTech High-Frequency Trading Portal',
          slug: 'fintech-trading-portal',
          industry: 'Financial Technology',
          client: 'Aether Capital',
          description: 'Real-time WebSocket market data dashboard processing 50,000+ data points per second.',
          challenge: 'Handling extreme latency spikes during peak market open volatility.',
          solution: 'Built distributed Redis pub-sub caching with Node.js cluster workers and PostgreSQL time-series indexing.',
          result: 'Reduced trading latency by 84% and achieved 99.999% uptime.',
          technologies: ['Node.js', 'PostgreSQL', 'Redis', 'React', 'Docker'],
          featured: true,
          status: 'ACTIVE',
        },
        {
          title: 'Healthcare EHR & Telemedicine Engine',
          slug: 'healthcare-ehr-telemedicine',
          industry: 'Healthcare & Biotech',
          client: 'Pulse Care Global',
          description: 'HIPAA-compliant patient portal with end-to-end encrypted video consultations and record management.',
          challenge: 'Strict compliance requirement for sensitive data encryption and auditing.',
          solution: 'Implemented zero-trust data pipeline with AES-256 GCM database level payload encryption.',
          result: 'Successfully onboarded 120+ clinics and over 500,000 active patient profiles.',
          technologies: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'WebRTC'],
          featured: true,
          status: 'ACTIVE',
        },
      ],
    });
    console.log('✅ Portfolio seeded');
  }

  // 7. Seed Team Members
  const teamCount = await prisma.teamMember.count();
  if (teamCount === 0) {
    await prisma.teamMember.createMany({
      data: [
        {
          name: 'Alexander Vance',
          position: 'Chief Technology Officer & Co-Founder',
          bio: '15+ years architecting distributed systems for Fortune 500 companies.',
          skills: ['Distributed Systems', 'Cloud Architecture', 'Node.js', 'PostgreSQL'],
          email: 'alexander@novatech.com',
          linkedin: 'https://linkedin.com/in/alexandervance',
          github: 'https://github.com/alexvance',
          status: 'ACTIVE',
        },
        {
          name: 'Elena Rostova',
          position: 'VP of AI & Cloud Engineering',
          bio: 'Former Tech Lead specializing in AI models, vector databases, and real-time streaming.',
          skills: ['AI/ML', 'Python', 'Kubernetes', 'AWS'],
          email: 'elena@novatech.com',
          linkedin: 'https://linkedin.com/in/elenarostova',
          github: 'https://github.com/elena-rostova',
          status: 'ACTIVE',
        },
      ],
    });
    console.log('✅ Team Members seeded');
  }

  // 8. Seed Testimonials
  const testimonialCount = await prisma.testimonial.count();
  if (testimonialCount === 0) {
    await prisma.testimonial.createMany({
      data: [
        {
          clientName: 'Marcus Sterling',
          company: 'Aether Capital',
          position: 'CEO',
          rating: 5,
          review: 'Nova Tech transformed our backend infrastructure. Their technical precision and speed of delivery were truly remarkable.',
          status: 'ACTIVE',
        },
        {
          clientName: 'Sarah Jenkins',
          company: 'Pulse Care',
          position: 'Director of Technology',
          rating: 5,
          review: 'The HIPAA compliance and backend scalability Nova Tech delivered exceeded every benchmark set by our board.',
          status: 'ACTIVE',
        },
      ],
    });
    console.log('✅ Testimonials seeded');
  }

  // 9. Seed Blog Posts
  const blogCount = await prisma.blogPost.count();
  if (blogCount === 0) {
    await prisma.blogPost.createMany({
      data: [
        {
          title: 'Building High-Throughput Node.js Microservices with Prisma & PostgreSQL',
          slug: 'building-high-throughput-nodejs-microservices',
          category: 'Backend Architecture',
          content: 'Distributed systems demand clean layering between controllers, service layers, and Prisma ORM data mappers...',
          author: 'Alexander Vance',
          tags: ['Node.js', 'PostgreSQL', 'Prisma', 'Architecture'],
          status: 'PUBLISHED',
        },
        {
          title: 'Scaling Cloud Microservices for Million-User Workloads',
          slug: 'scaling-cloud-microservices',
          category: 'Cloud & DevOps',
          content: 'Modern enterprise applications require robust connection pooling, rate limiting, and zero-downtime deployments...',
          author: 'Elena Rostova',
          tags: ['Docker', 'Cloud', 'DevOps', 'Performance'],
          status: 'PUBLISHED',
        },
      ],
    });
    console.log('✅ Blog Posts seeded');
  }

  // 10. Seed FAQs
  const faqCount = await prisma.fAQ.count();
  if (faqCount === 0) {
    await prisma.fAQ.createMany({
      data: [
        {
          question: 'What tech stack does Nova Tech recommend for enterprise web applications?',
          answer: 'We recommend Node.js with Express and Prisma ORM backed by PostgreSQL for backend services, paired with React/Vite on the frontend.',
          category: 'General',
          status: 'ACTIVE',
        },
        {
          question: 'How do you ensure security and code quality during development?',
          answer: 'We enforce strict Zod runtime schema validation, JWT authentication with Refresh Token rotation, Helmet headers, rate limiting, and 100% type-checked APIs.',
          category: 'Security',
          status: 'ACTIVE',
        },
      ],
    });
    console.log('✅ FAQs seeded');
  }

  // 11. Seed Technologies
  const techCount = await prisma.technology.count();
  if (techCount === 0) {
    await prisma.technology.createMany({
      data: [
        { name: 'Node.js', category: 'Backend', status: 'ACTIVE' },
        { name: 'PostgreSQL', category: 'Database', status: 'ACTIVE' },
        { name: 'Prisma ORM', category: 'ORM', status: 'ACTIVE' },
        { name: 'React.js', category: 'Frontend', status: 'ACTIVE' },
        { name: 'Docker', category: 'DevOps', status: 'ACTIVE' },
        { name: 'TypeScript', category: 'Languages', status: 'ACTIVE' },
      ],
    });
    console.log('✅ Technologies seeded');
  }

  // 12. Seed Partners
  const partnerCount = await prisma.partner.count();
  if (partnerCount === 0) {
    await prisma.partner.createMany({
      data: [
        { name: 'Amazon Web Services', website: 'https://aws.amazon.com', status: 'ACTIVE' },
        { name: 'Google Cloud Platform', website: 'https://cloud.google.com', status: 'ACTIVE' },
        { name: 'PostgreSQL Global Group', website: 'https://postgresql.org', status: 'ACTIVE' },
      ],
    });
    console.log('✅ Partners seeded');
  }

  console.log('🎉 Nova Tech Database Seeding Completed Successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

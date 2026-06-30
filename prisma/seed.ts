import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // 1. Create or get default user
  const email = "sahilkhan.official325@gmail.com";
  const hashedPassword = await bcrypt.hash("password123", 10);

  let user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
        name: "Sahil Khan",
        password: hashedPassword,
        role: "ADMIN",
      },
    });
    console.log("Created admin user:", user.email);
  } else {
    console.log("Admin user already exists:", user.email);
  }

  // 2. Seed blog posts from MDX/default data
  const blogsData = [
    {
      slug: "building-spiderverse",
      title: "Building a Spider-Verse Portfolio",
      excerpt: "How I built an animated frontend portfolio using Next.js and Framer Motion.",
      content: `This is my journey of building a cinematic frontend portfolio.

- Next.js App Router
- Tailwind CSS
- Framer Motion
- Custom animations

To create a Spider-Verse aesthetic, we use a custom cursor, glitch animations, and high-fidelity transitions. In this blog, we'll dive deep into how to combine Framer Motion and canvas-based animations for the ultimate web experience.`,
      tags: ["nextjs", "frontend", "animation"],
      published: true,
      authorId: user.id,
    },
    {
      slug: "frontend-system-design",
      title: "Frontend System Design for Beginners",
      excerpt: "How to think like a senior frontend engineer.",
      content: `Frontend is not just UI. It's architecture, performance, and UX.

When designing a frontend application at scale, you need to consider:
1. Component modularity and reusability
2. State management strategies (local, global, server state)
3. Asset optimization and loading performance
4. Accessibility (a11y) and SEO best practices

Let's dive into how you can structure your Next.js application to handle growing complexity while maintaining lighthouse scores of 100.`,
      tags: ["frontend", "system-design"],
      published: true,
      authorId: user.id,
    },
  ];

  for (const blog of blogsData) {
    const existing = await prisma.blog.findUnique({
      where: { slug: blog.slug },
    });

    if (!existing) {
      await prisma.blog.create({
        data: blog,
      });
      console.log("Created blog:", blog.title);
    } else {
      console.log("Blog already exists:", blog.title);
    }
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

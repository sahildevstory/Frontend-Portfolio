import prisma from "@/lib/prisma";

export async function getBlogs() {
  try {
    return await prisma.blog.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      include: {
        author: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching blogs from Prisma:", error);
    return [];
  }
}

export async function getBlog(slug: string) {
  try {
    return await prisma.blog.findUnique({
      where: { slug, published: true },
      include: {
        author: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching blog from Prisma:", error);
    return null;
  }
}
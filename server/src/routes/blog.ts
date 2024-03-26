import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createPostInput, updatePostInput } from "@pritam12m/common";

const book = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

//Middleware for protecting blog paths
book.use("/*", async (c, next) => {
  const token = c.req.header("Authorization");

  if (!token) {
    c.status(403);
    return c.json({ error: "You are not authorized" });
  }
  try {
    const decoded = await verify(token, c.env.JWT_SECRET);
    c.set("userId", decoded.user_id);
    await next();
  } catch (err) {
    c.status(403);
    return c.json({ error: "You are not authorized" });
  }
});

book.post("/", async (c) => {
  const id = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = createPostInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      error: "Invalid inputs",
    });
  }

  try {
    const res = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: id,
      },
    });
    return c.json({ id: res.id });
  } catch (err) {
    return c.json({ error: "Failed creating post" });
  }
});

book.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = updatePostInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      error: "Invalid inputs",
    });
  }

  if (body.title && body.content) {
    try {
      const updatePost = await prisma.post.update({
        where: {
          id: body.id,
        },
        data: {
          title: body.title,
          content: body.content,
        },
      });
      return c.json({ id: updatePost.id });
    } catch (err) {
      c.status(403);
      return c.text("Failed to upload the post");
    }
  } else if (body.title && !body.content) {
    try {
      const updatePost = await prisma.post.update({
        where: {
          id: body.id,
        },
        data: {
          title: body.title,
        },
      });
      return c.json({ id: updatePost.id });
    } catch (err) {
      c.status(403);
      return c.text("Failed to upload the post");
    }
  } else if (!body.title && body.content) {
    try {
      const updatePost = await prisma.post.update({
        where: {
          id: body.id,
        },
        data: {
          content: body.content,
        },
      });
      return c.json({ id: updatePost.id });
    } catch (err) {
      c.status(403);
      return c.text("Failed to upload the post");
    }
  }

  return c.json({
    error: "You didn't send anything to update the post with",
  });
});

book.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const res = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    return c.json({
      post: res,
    });
  } catch (err) {
    return c.json({
      error: "Can't find post with given id!!!",
    });
  }
});

book.get("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const res = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        authorId: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json({ posts: res });
  } catch (err) {
    return c.json({ error: "Some error occured" });
  }
});

export default book;

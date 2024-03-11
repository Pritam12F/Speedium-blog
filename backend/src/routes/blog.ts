import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";

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

  return c.text("Post updated successfully");
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
      error: "Can't find with given id!!!",
    });
  }
});

book.get("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const res = await prisma.post.findMany({});

    return c.json({ posts: res });
  } catch (err) {
    return c.json({ error: "Some error occured" });
  }
});

export default book;

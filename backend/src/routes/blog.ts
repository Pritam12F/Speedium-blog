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

book.post("/", (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  return c.text("Post blog route");
});

book.put("/", (c) => {
  return c.text("Put blog route");
});

book.get("/:id", (c) => {
  const id = c.req.param("id");

  return c.text(`Your given id is ${id}`);
});

export default book;

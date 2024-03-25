import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signupInput, signinInput } from "@pritam12m/common";

const book = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

book.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signupInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      error: "Invalid inputs",
    });
  }

  try {
    const res = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
      },
    });

    const token = await sign({ user_id: res.id }, c.env.JWT_SECRET);

    return c.json({ result: res, token: token });
  } catch (err) {
    c.status(403);
    return c.text("Some error occured while trying to signup");
  }
});

book.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signinInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      error: "Invalid inputs",
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });
  if (!user) {
    c.status(411);
    return c.json({ error: "There is no such user" });
  }
  const token = await sign({ user_id: user.id }, c.env.JWT_SECRET);

  return c.json({ user, token });
});

export default book;

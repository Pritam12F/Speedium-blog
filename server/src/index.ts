import { Hono } from "hono";
import book from "./routes/index";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());

app.get("/", (c) => {
  return c.text("Hello Pritam!");
});

//Main router
app.route("/api/v1", book);

export default app;

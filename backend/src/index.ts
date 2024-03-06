import { Hono } from "hono";
import book from "./routes/index";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

//Main router
app.route("/api/v1", book);

export default app;

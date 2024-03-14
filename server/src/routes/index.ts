import userBook from "./user";
import blogBook from "./blog";
import { Hono } from "hono";

const rootBook = new Hono();

rootBook.route("/user", userBook);
rootBook.route("/blog", blogBook);

export default rootBook;

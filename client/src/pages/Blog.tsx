import { Card } from "../components/BlogCards";
import { Navbar } from "../components/Navbar";
import { FindBlogPosts, FindUserInit, MyObject } from "../hooks";

export const Blog = () => {
  const firstInitial = FindUserInit();
  const posts = FindBlogPosts();

  return (
    <div>
      <Navbar initial={firstInitial.toUpperCase()} />
      <Card posts={posts} />
    </div>
  );
};

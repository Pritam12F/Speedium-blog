import { Card } from "../components/BlogCards";
import { Navbar } from "../components/Navbar";
import { useBlogPosts, useUserInit } from "../hooks";

export const Blog = () => {
  const firstInitial = useUserInit();
  const posts = useBlogPosts().posts;

  return (
    <div>
      <Navbar initial={firstInitial.toUpperCase()} />
      <div className="flex flex-col m-4">
        {posts
          ? posts.map((el, index) => <Card post={el} key={index} />)
          : null}
      </div>
    </div>
  );
};

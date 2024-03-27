import { useNavigate } from "react-router-dom";
import { Card } from "../components/BlogCards";
import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { useBlogPosts, useUserInit } from "../hooks";

export const Blog = () => {
  const firstInitial = useUserInit();
  const posts = useBlogPosts();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar initial={firstInitial.toUpperCase()} />
      <div className="flex justify-center mt-4">
        <Button
          label="Create new Post"
          onClick={() => {
            navigate(`/blogs/create`);
          }}
        />
      </div>
      <div className="flex flex-col m-4 items-center">
        {posts
          ? posts.map((el, index) => <Card post={el} key={index} />)
          : null}
      </div>
    </div>
  );
};

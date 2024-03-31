import { useNavigate } from "react-router-dom";
import { Card } from "../components/BlogCards";
import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { useBlogPosts, useUserInit } from "../hooks";
import { Skeletons } from "../components/Skeletons";
import { useState } from "react";

export const Blog = () => {
  const { userInit } = useUserInit();
  const [isLoading, setIsLoading] = useState(true);
  const posts = useBlogPosts(setIsLoading);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <>
        <Navbar initial={"A"} />
        <Skeletons />
        <Skeletons />
        <Skeletons />
        <Skeletons />
      </>
    );
  }
  return (
    <div>
      <Navbar initial={userInit.toUpperCase()} />
      {posts ? (
        <>
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
        </>
      ) : (
        <>
          <div>Loading...</div>
        </>
      )}
    </div>
  );
};

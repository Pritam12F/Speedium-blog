import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import { postsAtom, userId_, userInitial } from "../atoms/atoms";
import { useRecoilValue } from "recoil";
import { Card, cardProps } from "../components/BlogCards";
import { NoPosts } from "../components/NoPosts";

export const MyBlogs = () => {
  const navigate = useNavigate();
  const userId = useRecoilValue(userId_);
  const userInit = useRecoilValue(userInitial);
  const posts = useRecoilValue(postsAtom);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    if (!userId) {
      navigate("/blogs");
    }
    const filtered = posts.filter((post: cardProps) => post.authorId == userId);
    setMyPosts(filtered);
    console.log(filtered);
  }, []);

  return (
    <div>
      <Navbar initial={userInit.toUpperCase()} />
      <div className="flex justify-around mt-4">
        <Button
          label="All posts"
          onClick={() => {
            navigate("/blogs");
          }}
        />
        <Button
          label="Create new Post"
          onClick={() => {
            navigate(`/blogs/create`);
          }}
        />
        <Button
          label="My posts"
          onClick={() => {
            navigate("/myposts");
          }}
        />
      </div>
      <div className="flex flex-col items-center mx-10 mt-4">
        {myPosts.length != 0 ? (
          myPosts.map((el, index) => (
            <Card post={el} type="personal" key={index} />
          ))
        ) : (
          <NoPosts />
        )}
      </div>
    </div>
  );
};

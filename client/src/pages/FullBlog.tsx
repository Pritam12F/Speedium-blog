import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { postsAtom } from "../atoms/atoms";
import { useEffect, useState } from "react";

export const FullBlog = () => {
  const { id } = useParams();
  const posts = useRecoilValue(postsAtom);
  const [current, setCurrent] = useState({});

  useEffect(() => {
    const findPost = posts.filter((obj) => obj.id === id);
    setCurrent(findPost[0]);
  }, []);

  return (
    <div>
      <div>
        <div>{current.title}</div>
        <div>{current.content}</div>
      </div>
      <div>
        <div>{`Written by ${current.author}`}</div>
        <div>Some random good words about the author</div>
      </div>
      <button
        onClick={() => {
          console.log(current);
        }}
      >
        Click me
      </button>
    </div>
  );
};

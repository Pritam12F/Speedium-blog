import { useParams, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { postsAtom } from "../atoms/atoms";
import { useEffect, useState } from "react";
import { cardProps } from "../components/BlogCards";
import { Button } from "@chakra-ui/react";

export const FullBlog = () => {
  const { id } = useParams();
  const posts = useRecoilValue(postsAtom);
  const [current, setCurrent] = useState<cardProps | null>(null);

  useEffect(() => {
    const findPost = posts.filter((obj: cardProps) => obj.id === id);
    setCurrent(findPost[0]);
  }, []);

  return (
    <div className="grid grid-cols-10 grid-rows-5 my-10 mx-5 gap-2">
      <div className="col-span-7 row-span-full rounded-md shadow-zinc-700 shadow-md">
        <div className="font-semibold text-2xl p-5">{current?.title}</div>
        <div className="p-5">{current?.content}</div>
      </div>
      <div className="col-span-3 p-3 row-span-2 rounded-md shadow-zinc-700 shadow-md">
        <div className="text-slate-400 text-sm px-2">{`Written by ${current?.author.name}`}</div>
        <div className="text-md pt-4 px-2">{`
Meet ${current?.author.name}, a masterful wordsmith whose captivating prose illuminates the digital sphere. With each post, he effortlessly blends insight and creativity, leaving readers inspired and engaged.`}</div>
        <Link to={`/blogs/${id}/update`}>
          <Button
            style={{
              marginTop: "1rem",
              marginLeft: "0.5rem",
              background: "black",
              color: "whitesmoke",
            }}
          >
            Update post
          </Button>
        </Link>
      </div>
    </div>
  );
};

import { useParams, Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { postsAtom, userInitial } from "../atoms/atoms";
import { useEffect, useState } from "react";
import { cardProps } from "../components/BlogCards";
import { Button } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";

export const FullBlog = () => {
  const { id, type } = useParams();
  const posts = useRecoilValue(postsAtom);
  const [current, setCurrent] = useState<cardProps | null>(null);
  const useInit = useRecoilValue(userInitial);
  const navigate = useNavigate();

  useEffect(() => {
    if (!useInit) {
      navigate("/blogs");
    }
    const findPost = posts.filter((obj: cardProps) => obj.id === id);
    setCurrent(findPost[0]);
    console.log(type);
  }, [useInit]);

  return (
    <div>
      <Navbar initial={useInit.toUpperCase()} />
      <div className="grid grid-cols-10 grid-rows-10 my-10 mx-5 gap-2">
        <div className="col-span-full row-span-7 rounded-md shadow-zinc-700 shadow-md md:col-span-7 md:row-span-full">
          <div className="font-semibold text-2xl p-5">{current?.title}</div>
          <div className="p-5">{current?.content}</div>
        </div>
        <div className="col-span-full row-span-3 p-3 rounded-md shadow-zinc-700 shadow-md md:col-span-3 md:row-span-full">
          <div className="text-slate-400 text-sm px-2">{`Written by ${current?.author.name}`}</div>
          <div className="text-md pt-4 px-2">{`
Meet ${current?.author.name}, a masterful wordsmith whose captivating prose illuminates the digital sphere. With each post, he effortlessly blends insight and creativity, leaving readers inspired and engaged.`}</div>
          {type === "personal" ? (
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
          ) : null}
        </div>
      </div>
    </div>
  );
};

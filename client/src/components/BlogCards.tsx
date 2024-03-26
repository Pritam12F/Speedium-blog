import { useEffect } from "react";
import { MyObject } from "../hooks";

export const Card = (props) => {
  const posts: MyObject = props.post;

  useEffect(() => {
    console.log(posts);
  }, []);

  return (
    <div className="border-2 shadow-lg rounded-md p-5">
      <div className="flex">
        <div className="bg-red-200 w-7 h-7 rounded-full flex justify-center items-center text-xs mr-3 font-semibold">
          {posts.author.name[0].toUpperCase()}
        </div>
        <div className="font-bold">{posts.title}</div>
      </div>
      <div className="mt-4">
        {posts.content.length > 50
          ? posts.content.substring(0, 49) + "...."
          : posts.content}
      </div>
      <div className="mt-7 flex">
        <div className="mr-4 text-slate-400">Posted by</div>
        {posts.author.name}
      </div>
    </div>
  );
};

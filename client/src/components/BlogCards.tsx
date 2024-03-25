import { useEffect } from "react";
import { MyObject } from "../hooks";

export const Card = (props) => {
  const posts: MyObject[] = props.posts.posts;

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div className="flex m-4">
      {posts != undefined
        ? posts.map((el, index) => (
            <div key={index} className="border-2 p-5 m-5 rounded-md shadow-md">
              <div className="font-semibold">{el.title}</div>
              <div>{el.content}</div>
            </div>
          ))
        : null}
    </div>
  );
};

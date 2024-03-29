import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userId_ } from "../atoms/atoms";
import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { useUserInit } from "../hooks";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const userId = useRecoilValue(userId_);
  const { userInit } = useUserInit();

  useEffect(() => {
    console.log(userId);
  }, [userId]);

  return (
    <div className="h-screen bg-gradient-to-br from-blue-500 to-green-500">
      <Navbar initial={userInit.toUpperCase()} />
      <div className="flex flex-col max-w-sm rounded-lg shadow-md p-5 mx-auto my-32 bg-green-300">
        <div className="flex flex-col my-4">
          <label htmlFor="title" className="font-semibold">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter your title"
            className="p-1 mt-4 rounded-lg"
            id="title"
          ></input>
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="content" className="font-semibold">
            Content
          </label>
          <input
            type="text"
            placeholder="Enter your content"
            className="p-1 mt-4 rounded-lg"
            id="content"
          ></input>
        </div>
        <Button
          label="Create post"
          onClick={() => {
            console.log("hello");
          }}
        />
      </div>
    </div>
  );
};

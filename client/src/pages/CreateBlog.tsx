import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userId_, userInitial } from "../atoms/atoms";
import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { handleCreate, handleUpdate } from "../utils/OnClickHandlers";
import { ErrorCrorUp, SuccessCrorUp } from "../components/Alerts";
import { useParams } from "react-router-dom";

interface createOrUpdate {
  label: "Create" | "Update";
}

export const CreateBlog = (props: createOrUpdate) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const userId = useRecoilValue(userId_);
  const userInit = useRecoilValue(userInitial);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    console.log(userId);
  }, [userId]);

  return (
    <div className="h-screen bg-gradient-to-br from-blue-500 to-green-500">
      <Navbar initial={userInit.toUpperCase()} />
      <div className="flex flex-col max-w-3xl rounded-lg shadow-md p-5 mx-auto my-32 bg-green-300">
        <div className="font-semibold text-2xl mx-auto">
          {props.label === "Create" ? "Create a post" : "Update a Post"}
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="title" className="font-semibold">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter your title"
            className="p-1 mt-4 rounded-lg"
            id="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </div>
        <div className="flex flex-col my-5">
          <label htmlFor="content" className="font-semibold">
            Content
          </label>
          <textarea
            placeholder="Enter your content"
            className="p-1 mt-4 rounded-lg min-h-40 text-start justify-start"
            id="content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
        <Button
          label={props.label === "Create" ? "Create post" : "Update Post"}
          onClick={() => {
            props.label === "Create"
              ? handleCreate(title, content, userId, setError, setSuccess)
              : handleUpdate(title, content, id, setError, setSuccess);
          }}
        />
        {error ? <ErrorCrorUp label={props.label} /> : null}
        {success ? <SuccessCrorUp label={props.label} /> : null}
      </div>
    </div>
  );
};

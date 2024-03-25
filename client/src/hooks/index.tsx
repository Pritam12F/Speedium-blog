import { useEffect, useState } from "react";
import axios from "axios";

export const FindUserInit = () => {
  const [userInitial, setUserInitial] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("speedium-token");
    const link = import.meta.env.VITE_BACKEND_URL + "/user/finduser";

    const user = axios
      .post(link, {
        token: token,
      })
      .then((res) => {
        const name = res.data.name;
        if (!name) {
          setUserInitial("A");
        } else {
          setUserInitial(name[0]);
        }
      })
      .catch((err) => {
        console.log("Failed");
      });
  }, []);

  return userInitial;
};

export interface MyObject {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
}

export const FindBlogPosts = () => {
  const [posts, setPosts] = useState<MyObject[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("speedium-token");
    const link = import.meta.env.VITE_BACKEND_URL + "/blog";
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: link,
      headers: {
        Authorization: token,
      },
    };

    axios
      .request(config)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  return posts;
};

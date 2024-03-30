import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { postsAtom, userInitial, userId_ } from "../atoms/atoms";

export const useUserInit = () => {
  const [userInit, setUserInit] = useRecoilState<string>(userInitial);
  const [userId, setUserId] = useRecoilState<string>(userId_);

  useEffect(() => {
    const token = localStorage.getItem("speedium-token");
    const link = import.meta.env.VITE_BACKEND_URL + "/user/finduser";

    axios
      .post(link, {
        token: token,
      })
      .then((res) => {
        const name = res.data.name;
        if (!name) {
          setUserInit("A");
        } else {
          setUserInit(name[0]);
          setUserId(res.data.userId);
        }
      })
      .catch((err: Error) => {
        console.log("Failed, error: ", err);
      });
  }, []);

  return { userInit, userId };
};

export interface MyObject {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
  author: string;
}

export const useBlogPosts = () => {
  const [posts, setPosts] = useRecoilState(postsAtom);

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
        setPosts(res.data.posts);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  return posts;
};

export const useCheckLoggedIn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = localStorage.getItem("speedium-token");
  const link = import.meta.env.VITE_BACKEND_URL + "/user/finduser";

  axios
    .post(link, {
      token: token,
    })
    .then((res) => {
      setIsLoading(false);
      setIsLoggedIn(true);
    })
    .catch((err: Error) => {
      setIsLoading(false);
      setIsLoggedIn(false);
    });

  return { isLoading, isLoggedIn };
};

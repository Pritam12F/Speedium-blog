import { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { postsAtom, userInitial, userId_ } from "../atoms/atoms";
import { useNavigate } from "react-router-dom";

export const useUserInit = () => {
  const [userInit, setUserInit] = useRecoilState<string>(userInitial);
  const [userId, setUserId] = useRecoilState<string>(userId_);
  const navigate = useNavigate();

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
        navigate("/signin");
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

export const useBlogPosts = (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [posts, setPosts] = useRecoilState(postsAtom);

  useEffect(() => {
    const token = localStorage.getItem("speedium-token");
    const link = import.meta.env.VITE_BACKEND_URL + "/blog";

    axios
      .get(link, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setPosts(res.data.posts);
        setIsLoading(false);
      })
      .catch((e: Error) => {
        console.log(e);
        setIsLoading(false);
      });
  }, []);

  return posts;
};

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

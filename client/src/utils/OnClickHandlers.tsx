import { SigninInput, SignupInput } from "@pritam12m/common";
import axios from "axios";
import { NavigateFunction } from "react-router-dom";

export const handleSignup = async (
  username: string,
  email: string,
  password: string,
  navigate: NavigateFunction,
  setError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const link = import.meta.env.VITE_BACKEND_URL + "/user/signup";
  const data: SignupInput = {
    email: email,
    name: username,
    password: password,
  };
  await axios
    .post(link, data)
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem("speedium-token", token);
      navigate("/blogs");
    })
    .catch((err: Error) => {
      console.log("Error occured: ", err);
      setError(true);
    });
};

export const handleSignin = async (
  email: string,
  pass: string,
  navigate: NavigateFunction,
  setError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const link = import.meta.env.VITE_BACKEND_URL + "/user/signin";
  const data: SigninInput = {
    email: email,
    password: pass,
  };
  await axios
    .post(link, data)
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem("speedium-token", token);
      navigate("/blogs");
    })
    .catch((err: Error) => {
      console.log("Error occured: ", err);
      setError(true);
    });
};

export const handleUpdate = async () => {};

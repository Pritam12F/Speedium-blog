import { useEffect } from "react";
import { Skeletons } from "../components/Skeletons";
import { useNavigate } from "react-router-dom";

export const Checker = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("speedium-token")) {
      navigate("/blogs");
    } else {
      navigate("/signup");
    }
  }, []);

  return (
    <>
      <Skeletons />
      <Skeletons />
      <Skeletons />
      <Skeletons />
    </>
  );
};

import { Navbar } from "../components/Navbar";
import { FindUserInit } from "../hooks";

export const Blog = () => {
  const firstInitial = FindUserInit();

  return (
    <div>
      <Navbar initial={firstInitial.toUpperCase()} />
    </div>
  );
};

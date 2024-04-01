import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useSetRecoilState } from "recoil";
import { postsAtom, userId_, userInitial } from "../atoms/atoms";

type NavbarType = {
  initial: string;
};
export const Navbar = (props: NavbarType) => {
  const navigate = useNavigate();
  const setUserInit = useSetRecoilState(userInitial);
  const setPosts = useSetRecoilState(postsAtom);
  const setId = useSetRecoilState(userId_);

  return (
    <div className="flex justify-between items-center shadow-lg py-1 sticky top-0 bg-slate-200 rounded-b-lg">
      <div
        className="text-2xl font-semibold mx-4 cursor-pointer text-lime-500 bg-red-100 rounded-lg py-1 px-2 hover:text-blue-600"
        onClick={() => {
          navigate("/blogs");
        }}
      >
        Speedium
      </div>
      <div className="flex">
        <div className="mx-10 bg-green-400 rounded-full w-12 h-12 flex justify-center items-center font-semibold cursor-pointer">
          {props.initial}
        </div>
        <Button
          label="Logout"
          onClick={() => {
            localStorage.removeItem("speedium-token");
            navigate("/signin");
            setUserInit("");
            setPosts([]);
            setId("");
          }}
        />
      </div>
    </div>
  );
};

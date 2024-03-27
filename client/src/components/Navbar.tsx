import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useSetRecoilState } from "recoil";
import { userInitial } from "../atoms/atoms";

type NavbarType = {
  initial: string;
};
export const Navbar = (props: NavbarType) => {
  const navigate = useNavigate();
  const setUserInit = useSetRecoilState(userInitial)

  return (
    <div className="flex justify-between items-center shadow-lg py-1 sticky top-0 bg-slate-200 rounded-b-lg">
      <div>
        <div className="text-2xl font-semibold mx-4">Speedium</div>
      </div>
      <div className="flex">
        <div className="mx-10 bg-green-400 rounded-full w-12 h-12 flex justify-center items-center font-semibold">
          {props.initial}
        </div>
        <Button
          label="Logout"
          onClick={() => {
            localStorage.removeItem("speedium-token");
            navigate("/signin");
            setUserInit("");
          }}
        />
      </div>
    </div>
  );
};

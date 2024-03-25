import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

type NavbarType = {
  initial: string;
};
export const Navbar = (props: NavbarType) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center shadow-lg py-1 sticky top-0 bg-slate-200 rounded-b-lg">
      <div>
        <div className="text-2xl font-semibold mx-4">Speedium</div>
      </div>
      <div className="flex">
        <div className="mx-10 bg-green-400 rounded-full w-12 h-12 flex justify-center items-center">
          {props.initial}
        </div>
        <Button
          label="Logout"
          onClick={() => {
            localStorage.removeItem("speedium-token");
            navigate("/signin");
          }}
        />
      </div>
    </div>
  );
};

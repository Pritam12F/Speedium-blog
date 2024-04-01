import { useNavigate } from "react-router-dom";

type GrayTextInput = {
  type: "signup" | "signin";
};

export const GrayText = ({ type }: GrayTextInput) => {
  const navigate = useNavigate();
  const to = type == "signup" ? "/signin" : "/signup";
  function onClickHandler() {
    navigate(to);
  }
  return (
    <div className="text-slate-500 px-4 py-2 text-sm flex flex-col sm:flex-row sm:text-base">
      <span className="mx-4">
        {type == "signup"
          ? "Already have an account?"
          : "Don't have an account?"}
      </span>
      <button className="underline mx-auto" onClick={onClickHandler}>
        {type == "signup" ? "Log In" : "Sign up"}
      </button>
    </div>
  );
};

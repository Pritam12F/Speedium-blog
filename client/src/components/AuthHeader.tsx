import { GrayText } from "./GreyText";
import SmallH from "./SmallHeading";

type auth = {
  page: "signup" | "signin";
};

export const Header = ({ page }: auth) => {
  return (
    <div className="flex flex-col items-center">
      <SmallH
        content={
          page == "signup" ? "Create an account" : "Sign in to your account"
        }
      />
      <GrayText type={page} />
    </div>
  );
};

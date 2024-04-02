import { GrayText } from "./GreyText";
import SmallH from "./SmallHeading";

export const Header = ({ page }: { page: "signup" | "signin" }) => {
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

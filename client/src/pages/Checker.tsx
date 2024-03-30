import { Skeletons } from "../components/Skeletons";
import { useCheckerHook } from "../hooks";

export const Checker = () => {
  const check = useCheckerHook();
  return <Skeletons />;
};

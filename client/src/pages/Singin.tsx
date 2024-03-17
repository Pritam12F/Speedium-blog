import { InputBox } from "../components/InputLabel";
import { Button } from "../components/Button";
import { useRecoilState } from "recoil";
import { signInEmail, signInPass } from "../atoms/atoms";
import { useNavigate } from "react-router-dom";
import { Quote } from "../components/Quote";
import { Header } from "../components/AuthHeader";
import { handleSignin } from "../utils/OnClickHandlers";

function SignIn() {
  const [email, setEmail] = useRecoilState(signInEmail);
  const [pass, setPass] = useRecoilState(signInPass);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:grid grid-cols-2">
      <div className="border-2 mt-32 mb-56 w-2/3 mx-auto rounded-xl shadow-xl grid-flow-col">
        <Header page="signin" />
        <div className="px-8 pb-8">
          <InputBox
            label="Email"
            id="1"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputBox
            label="Password"
            id="2"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center pb-6">
          <Button
            label="Sign In"
            onClick={() => {
              handleSignin(email, pass, navigate);
            }}
          />
        </div>
      </div>
      <Quote />
    </div>
  );
}

export default SignIn;

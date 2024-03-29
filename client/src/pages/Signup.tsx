import { InputBox } from "../components/InputLabel";
import { Button } from "../components/Button";
import { useRecoilState } from "recoil";
import { usernameState, emailState, passwordState } from "../atoms/atoms";
import { useNavigate } from "react-router-dom";
import { Quote } from "../components/Quote";
import { Header } from "../components/AuthHeader";
import { handleSignup } from "../utils/OnClickHandlers";
import { useState } from "react";
import { ErrorSignup } from "../components/Alerts";

export const SignUp = () => {
  const [username, setUsername] = useRecoilState(usernameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPass] = useRecoilState(passwordState);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  return (
    <div className="flex flex-col h-screen sm:grid grid-cols-2">
      <div className="border-2 mt-32 mb-32 w-2/3 mx-auto rounded-xl shadow-xl">
        <Header page="signup" />
        <div className="px-8 pb-8">
          <InputBox
            label="Username"
            id="1"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <InputBox
            label="Email"
            id="2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputBox
            label="Password"
            id="3"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center pb-6 pt-3">
          <Button
            label="Sign Up"
            onClick={() => {
              handleSignup(username, email, password, navigate, setError);
            }}
          />
        </div>
        {error ? <ErrorSignup /> : null}
      </div>
      <Quote />
    </div>
  );
};

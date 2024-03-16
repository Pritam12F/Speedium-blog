import { InputBox } from "../components/InputLabel";
import { Button } from "../components/Button";
import { useRecoilState } from "recoil";
import { signInEmail, signInPass } from "../atoms/atoms";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Quote } from "../components/Quote";
import { SigninInput } from "@pritam12m/common";
import { Header } from "../components/AuthHeader";

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
            type="text"
            placeholder="youremail@gmail.com"
            id="2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputBox
            label="Password"
            type="password"
            placeholder="Enter your password"
            id="3"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center pb-6">
          <Button
            label="Sign In"
            onClick={async (e) => {
              const link = import.meta.env.VITE_BACKEND_URL + "/user/signin";
              const data: SigninInput = {
                email: email,
                password: pass,
              };
              await axios
                .post(link, data)
                .then((res) => {
                  const token = res.data.token;
                  localStorage.setItem("speedium-token", token);
                  navigate("/blogs");
                })
                .catch((err) => {
                  console.log(err);
                  alert("Incorrect email or password");
                });
            }}
          />
        </div>
      </div>
      <Quote />
    </div>
  );
}

export default SignIn;

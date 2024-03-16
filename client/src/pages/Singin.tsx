import { InputBox } from "../components/InputLabel";
import SmallH from "../components/SmallHeading";
import { GrayText } from "../components/GreyText";
import { Button } from "../components/Button";
import { useRecoilState } from "recoil";
import { signInEmail, signInPass } from "../atoms/atoms";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useRecoilState(signInEmail);
  const [pass, setPass] = useRecoilState(signInPass);
  const navigate = useNavigate();

  return (
    <div className="border-2 mt-20 w-1/3 mx-auto rounded-xl shadow-xl">
      <div className="flex flex-col items-center">
        <SmallH content="Sign in to your account" />
        <GrayText
          content="Don't have an account?"
          link="Sign up"
          to="/signup"
        />
      </div>
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
          placeholder="Set your password"
          id="3"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-center pb-8">
        <Button
          label="Sign In"
          onClick={(e) => {
            const link = import.meta.env.VITE_BACKEND_URL + "/user/signin";
            const data = {
              email: email,
              password: pass,
            };
            axios
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
  );
}

export default SignIn;

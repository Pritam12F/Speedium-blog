import SmallH from "../components/SmallHeading";
import { GrayText } from "../components/GreyText";
import { InputBox } from "../components/InputLabel";
import { Button } from "../components/Button";
import { useRecoilState } from "recoil";
import { usernameState, emailState, passwordState } from "../atoms/atoms";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Quote } from "../components/Quote";

export const SignUp = () => {
  const [username, setUsername] = useRecoilState(usernameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPass] = useRecoilState(passwordState);
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2">
      <div className="border-2 mt-32 mb-32 w-2/3 mx-auto rounded-xl shadow-xl">
        <div className="flex flex-col items-center">
          <SmallH content="Create an account" />
          <GrayText
            content="Already have an account?"
            link="Login"
            to="/signin"
          />
        </div>
        <div className="px-8 pb-8">
          <InputBox
            label="Username"
            type="text"
            placeholder="Enter your username"
            id="1"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
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
        <div className="flex justify-center pb-6 pt-3">
          <Button
            label="Sign Up"
            onClick={(e) => {
              const link = import.meta.env.VITE_BACKEND_URL + "/user/signup";
              const data = {
                name: username,
                email: email,
                password: password,
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
                  alert("Incorrect inputs!!");
                });
            }}
          />
        </div>
      </div>
      <Quote />
    </div>
  );
};

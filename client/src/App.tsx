import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/Signup";
import { RecoilRoot } from "recoil";
import SignIn from "./pages/Singin";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blogs" element={<div>Blog route</div>} />
          <Route path="*" element={<div>Unknown route</div>} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

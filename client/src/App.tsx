import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/Signup";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<div>Signin route</div>} />
          <Route path="/blogs" element={<div>Blog route</div>} />
          <Route path="*" element={<div>Unknown route</div>} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

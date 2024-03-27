import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/Signup";
import { RecoilRoot } from "recoil";
import SignIn from "./pages/Singin";
import { Blog } from "./pages/Blog";
import { CreateBlog } from "./pages/CreateBlog";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id" element={<CreateBlog/>}/>
          <Route path="*" element={<div>Unknown route</div>} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

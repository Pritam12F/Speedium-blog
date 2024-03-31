import { Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/Signup";
import SignIn from "./pages/Singin";
import { Blog } from "./pages/Blog";
import { CreateBlog } from "./pages/CreateBlog";
import { FullBlog } from "./pages/FullBlog";
import { Checker } from "./pages/Checker";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/create" element={<CreateBlog label="Create" />} />
      <Route path="/blogs/:id" element={<FullBlog />} />
      <Route path="/blogs/:id/update" element={<CreateBlog label="Update" />} />
      <Route path="*" element={<Checker />} />
    </Routes>
  );
}

export default App;

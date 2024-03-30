import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/Signup";
import { RecoilRoot } from "recoil";
import SignIn from "./pages/Singin";
import { Blog } from "./pages/Blog";
import { CreateBlog } from "./pages/CreateBlog";
import { FullBlog } from "./pages/FullBlog";
import { Checker } from "./pages/Checker";
import { useCheckLoggedIn } from "./hooks";

function App() {
  const { isLoading, isLoggedIn } = useCheckLoggedIn();

  if (isLoading) {
    return <Checker />;
  }
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/blogs"
            element={isLoggedIn ? <Blog /> : <Navigate to="/signin" />}
          />
          <Route
            path="/blogs/create"
            element={
              isLoggedIn ? (
                <CreateBlog label="Create" />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          <Route
            path="/blogs/:id"
            element={isLoggedIn ? <FullBlog /> : <Navigate to="/signin" />}
          />
          <Route
            path="/blogs/:id/update"
            element={
              isLoggedIn ? (
                <CreateBlog label="Update" />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          <Route
            path="*"
            element={isLoggedIn ? <Blog /> : <Navigate to="/signin" />}
          />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

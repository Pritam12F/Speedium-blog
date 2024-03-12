import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<div>Signup route</div>} />
          <Route path="/signin" element={<div>Signin route</div>} />
          <Route path="/blogs" element={<div>Blog route</div>} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

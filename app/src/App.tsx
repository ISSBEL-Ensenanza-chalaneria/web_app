import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Register from "./pages/contact";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/registro" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

export default App;


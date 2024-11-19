import { FC } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { PostDetail } from "./pages/PostDetail";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </>
  );
};

export default App;

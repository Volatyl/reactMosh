import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.css";
//import Counter from "./components/counter";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

/* export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />); */

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  return (
    <>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

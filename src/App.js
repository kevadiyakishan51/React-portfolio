import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Layout from "./layout/Layout";
import About from "./components/homeCompo/aboutCompo/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { AboutPage } from "./components/AboutPage";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;

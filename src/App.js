import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { AboutPage } from "./components/AboutPage";
import { Contact } from "./components/Contact";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;

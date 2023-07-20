import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/home/Home";
import { MenuPizzas, MenuDrinks, MenuDesserts } from "./pages/menu/sections";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Menu } from "./pages/menu/Menu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/pizzas" element={<MenuPizzas />} />
        <Route path="/menu/drinks" element={<MenuDrinks />} />
        <Route path="/menu/desserts" element={<MenuDesserts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;

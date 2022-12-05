import { Routes, Route} from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Contact } from './components/Contact';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reserve' element={<Contact />} />
      </Route>
    </Routes>  
  );
}

export default App;

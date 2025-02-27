import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Layout/Nav';
import Cardapio from './components/Cardapio';
import Pratos from './components/Pratos';
import NovoPrato from './components/NovoPrato';
import NovoItem from './components/NovoItem';

function App() {
  return (
    <Router>
      <Nav />
      <div className="principal">
        <main>
          <Routes>
            <Route path="/" element={<Cardapio />} />
            <Route path="/pratos" element={<Pratos />} />
            <Route path="/novo-prato" element={<NovoPrato />} />
            <Route path="/novo-item" element={<NovoItem />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
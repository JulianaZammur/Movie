import './App.css';
import Sensei from './components/Sensei.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="mt-5 mb-4 text-center">Lista de Películas</h1>
        <Sensei />
      </div>
    </div>
  );
}

export default App;

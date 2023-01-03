import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Link1 from './pages/Link1';
import Link2 from './pages/Link2';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/link1" element={<Link1 />} />
          <Route path="/link2" element={<Link2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

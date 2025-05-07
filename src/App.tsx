import { useState } from 'react';
import Navbar from './components/Navbar';
import SpaceBackground from './components/SpaceBackground';
import Home from './pages/Home';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <SpaceBackground />
      <div className="relative z-10">
        <Navbar setActivePage={setActivePage} />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
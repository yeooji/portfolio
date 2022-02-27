import './App.css';
import Header from './components/Header';
// import Content from './components/Content';
import Footer from './components/Footer';

import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;

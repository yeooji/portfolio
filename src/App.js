import React from "react";

import './App.css';
import { BrowserRouter } from 'react-router-dom';

import ScrollTop from './components/ScrollTop';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  

  return (
      <BrowserRouter>
        <ScrollTop />
        <a href='#main' className='skip-nav'>본문 바로가기</a>
        <div className="App">
          <Header />
          <Content />
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;

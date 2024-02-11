import React from "react";
import { Route, Routes } from 'react-router-dom'
import { Home, About } from './pages'
import { Navbar, Footer} from './components'

function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;

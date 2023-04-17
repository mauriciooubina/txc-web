import "./styles/App.css";
import "typeface-montserrat";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Inicio } from "./components/Inicio";
import { Plantel } from "./components/Plantel";
import { Torneos } from "./components/Torneos";
import { Nosotros } from "./components/Nosotros";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="TxC">
        <Header />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/plantel" element={<Plantel />} />
          <Route path="/torneos" element={<Torneos />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

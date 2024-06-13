import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Payment from "./pages/Payment";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservations" element={<Reservation />} />
        <Route path="payment" element={<Payment />} />  
      </Routes>
    </Router>
  );
}

export default App;

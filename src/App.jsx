import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Payment from "./pages/PaymentReservation";
import { CartProvider } from "./context/CartContext";
import PaymentFood from "./pages/PaymentFood";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="reservations" element={<Reservation />} />
          <Route path="payment" element={<Payment />} />
          <Route path="paymentfood" element={<PaymentFood />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

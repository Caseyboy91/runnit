import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Items from "./pages/Items/Items";
import Success from "./pages/Success/Success";
import Cancel from "./pages/Cancel/Cancel";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import CartProvider from "./CartContext";
import "./App.scss";

function App() {
  document.title = "Runnit";
  return (
    <CartProvider>
      <Container>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Container>
    </CartProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Bar from "./pages/Bar/Bar";
import Concession from "./pages/Concession/Concession";
import Merch from "./pages/Merch/Merch";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  document.title = "Runnit";
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/concession" element={<Concession />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

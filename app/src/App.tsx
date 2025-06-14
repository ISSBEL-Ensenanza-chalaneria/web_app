import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import WhatsAppButton from "./components/chat/WhatsappButton";
import { Contact } from "./pages/contact/Contact";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white text-gray-900">
        <nav className="flex justify-center gap-8 p-4 bg-white shadow-md sticky top-0 z-50">
          <Link to="/" className="hover:text-blue-600 font-medium">
            Inicio
          </Link>
          <Link to="/servicios" className="hover:text-blue-600 font-medium">
            Servicios
          </Link>
          <Link to="/blog" className="hover:text-blue-600 font-medium">
            Blog
          </Link>
          <Link to="/contacto" className="hover:text-blue-600 font-medium">
            Contacto
          </Link>
        </nav>
        <main className="px-4 md:px-12 lg:px-24 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer />
      <WhatsAppButton></WhatsAppButton>
    </Router>
  );
};

export default App;

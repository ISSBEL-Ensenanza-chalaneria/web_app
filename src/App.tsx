import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WhatsAppButton from "./components/chat/WhatsappButton";
import { Contact } from "./pages/contact/Contact";
import { Home } from "./pages/home/home";
import { Blog } from "./pages/blog/blog";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  return (
    <div className="app-layout">
      <Router>
        <Header />
        <main className="content min-h-screen bg-gradient-to-b from-sky-100 to-white text-gray-900 px-4 md:px-12 lg:px-24 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web_app/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/web_app/blog" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/web_app/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
      <WhatsAppButton />
    </div>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/pages/Home';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import InternshipPage from './components/pages/InternshipPage';

function App() {
  return (
    <Router>
      <div className="font-inter text-white bg-dark-bg">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internship" element={<InternshipPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
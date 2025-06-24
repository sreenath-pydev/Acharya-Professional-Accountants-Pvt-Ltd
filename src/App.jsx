import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/pages/Home';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="font-inter text-white bg-dark-bg">
        <Header />
        <Home />
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
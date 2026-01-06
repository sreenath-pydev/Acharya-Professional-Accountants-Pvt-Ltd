import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/pages/Home';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import InternshipPage from './components/pages/CareersPage';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import ContactPage from './components/pages/ContactPage';
import CoursesPage from './components/pages/CoursesPage';
import CourseGlobalProPage from './components/pages/CourseGlobalProPage';
import CourseCProPage from './components/pages/CourseCProPage';
import CourseCPATPage from './components/pages/CourseCPATPage';
import ServiceAccountingPage from './components/pages/ServiceAccountingPage';
import ServiceTaxationPage from './components/pages/ServiceTaxationPage';
import ServiceAuditingPage from './components/pages/ServiceAuditingPage';
import ServiceGstPage from './components/pages/ServiceGstPage';
import ServiceBusinessConsultingPage from './components/pages/ServiceBusinessConsultingPage';
import ServiceAdvisoryPage from './components/pages/ServiceAdvisoryPage';
import LoanSupportPage from './components/pages/LoanSupportPage';
import CareersPage from './components/pages/CareersPage';
import TaxCalculatorPage from './components/pages/TaxCalculatorPage';
import LocationPage from './components/pages/LocationPage';

function App() {
  return (
    <Router>
      <div className="font-inter text-white bg-dark-bg">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/accounting" element={<ServiceAccountingPage />} />
          <Route path="/services/taxation" element={<ServiceTaxationPage />} />
          <Route path="/services/auditing" element={<ServiceAuditingPage />} />
          <Route path="/services/gst" element={<ServiceGstPage />} />
          <Route path="/services/business-consulting" element={<ServiceBusinessConsultingPage />} />
          <Route path="/services/advisory" element={<ServiceAdvisoryPage />} />
          <Route path="/services/business-loans" element={<LoanSupportPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/globalpro" element={<CourseGlobalProPage />} />
          <Route path="/courses/c-pro" element={<CourseCProPage />} />
          <Route path="/courses/c-pat" element={<CourseCPATPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/Internship" element={<InternshipPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/calculator" element={<TaxCalculatorPage />} />

          {/* Location Based Pages */}
          <Route
            path="/accounting-service-in-kozhikode"
            element={
              <LocationPage
                locationName="Kozhikode"
                seoTitle="CA Firm in Kozhikode | Accounting, Tax & Audit Services | Acharya"
                seoDescription="Top CA Firm in Kozhikode offering expert Accounting, GST Registration, Income Tax Filing, and Audit services. Trusted by local businesses for financial growth."
                canonicalUrl="https://acharyaprofessionalaccountants.in/accounting-service-in-kozhikode"
              />
            }
          />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy loaded pages
const Home = lazy(() => import('./components/pages/Home'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const ServicesPage = lazy(() => import('./components/pages/ServicesPage'));
const ServiceAccountingPage = lazy(() => import('./components/pages/ServiceAccountingPage'));
const ServiceTaxationPage = lazy(() => import('./components/pages/ServiceTaxationPage'));
const ServiceAuditingPage = lazy(() => import('./components/pages/ServiceAuditingPage'));
const AuditingServiceDetailPage = lazy(() => import('./components/pages/AuditingServiceDetailPage'));
const ServiceGstPage = lazy(() => import('./components/pages/ServiceGstPage'));
const GSTServiceDetailPage = lazy(() => import('./components/pages/GSTServiceDetailPage'));
const ServiceBusinessConsultingPage = lazy(() => import('./components/pages/ServiceBusinessConsultingPage'));
const ServiceAdvisoryPage = lazy(() => import('./components/pages/ServiceAdvisoryPage'));
const MCAServiceDetailPage = lazy(() => import('./components/pages/MCAServiceDetailPage'));
const LoanSupportPage = lazy(() => import('./components/pages/LoanSupportPage'));
const LoanDetailPage = lazy(() => import('./components/pages/LoanDetailPage'));
const CoursesPage = lazy(() => import('./components/pages/CoursesPage'));
const CourseGlobalProPage = lazy(() => import('./components/pages/CourseGlobalProPage'));
const CourseCProPage = lazy(() => import('./components/pages/CourseCProPage'));
const CourseCPATPage = lazy(() => import('./components/pages/CourseCPATPage'));
const CareersPage = lazy(() => import('./components/pages/CareersPage'));
const InternshipPage = lazy(() => import('./components/pages/InternshipPage'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));
const TaxCalculatorPage = lazy(() => import('./components/pages/TaxCalculatorPage'));
const DynamicPageHandler = lazy(() => import('./components/pages/DynamicPageHandler'));

function App() {
  return (
    <Router>
      <div className="font-inter text-white bg-dark-bg">
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/accounting" element={<ServiceAccountingPage />} />
            <Route path="/services/taxation" element={<ServiceTaxationPage />} />
            <Route path="/services/auditing" element={<ServiceAuditingPage />} />
            <Route path="/services/auditing/:serviceId" element={<AuditingServiceDetailPage />} />
            <Route path="/services/gst" element={<ServiceGstPage />} />
            <Route path="/services/gst/:serviceId" element={<GSTServiceDetailPage />} />
            <Route path="/services/business-consulting" element={<ServiceBusinessConsultingPage />} />
            <Route path="/services/advisory" element={<ServiceAdvisoryPage />} />
            <Route path="/services/advisory/:serviceId" element={<MCAServiceDetailPage />} />
            <Route path="/services/business-loans" element={<LoanSupportPage />} />
            <Route path="/services/business-loans/:loanSlug" element={<LoanDetailPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/globalpro" element={<CourseGlobalProPage />} />
            <Route path="/courses/c-pro" element={<CourseCProPage />} />
            <Route path="/courses/c-pat" element={<CourseCPATPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/Internship" element={<InternshipPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/calculator" element={<TaxCalculatorPage />} />

            {/* Location Based Pages - Dynamic Handler for partial matching */}
            <Route path="/:slug" element={<DynamicPageHandler />} />
          </Routes>
        </Suspense>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;

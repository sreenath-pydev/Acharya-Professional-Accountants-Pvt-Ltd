import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import LoadingSpinner from './components/common/LoadingSpinner';
import AnalyticsTracker from './components/common/AnalyticsTracker';

import Home from './components/pages/Home';

// Lazy loaded pages
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const ServicesPage = lazy(() => import('./components/pages/ServicesPage'));
const ServiceAccountingPage = lazy(() => import('./components/pages/ServiceAccountingPage'));
const ServiceBookkeepingPage = lazy(() => import('./components/pages/ServiceBookkeepingPage'));
const ServiceFinancialStatementsPage = lazy(() => import('./components/pages/ServiceFinancialStatementsPage'));
const ServiceCashFlowPage = lazy(() => import('./components/pages/ServiceCashFlowPage'));
const ServiceManagementReportsPage = lazy(() => import('./components/pages/ServiceManagementReportsPage'));
const ServiceReconciliationsPage = lazy(() => import('./components/pages/ServiceReconciliationsPage'));
const ServiceTaxationPage = lazy(() => import('./components/pages/ServiceTaxationPage'));
const ServiceTdsTcsPage = lazy(() => import('./components/pages/ServiceTdsTcsPage'));
const ServiceTaxPlanningPage = lazy(() => import('./components/pages/ServiceTaxPlanningPage'));
const ServiceNoticeResponsesPage = lazy(() => import('./components/pages/ServiceNoticeResponsesPage'));
const ServiceTaxAuditPage = lazy(() => import('./components/pages/ServiceTaxAuditPage'));
const ServiceAuditingPage = lazy(() => import('./components/pages/ServiceAuditingPage'));
const AuditingServiceDetailPage = lazy(() => import('./components/pages/AuditingServiceDetailPage'));
const ServiceInternalAuditPage = lazy(() => import('./components/pages/ServiceInternalAuditPage'));
const ServiceGstPage = lazy(() => import('./components/pages/ServiceGstPage'));
const GSTServiceDetailPage = lazy(() => import('./components/pages/GSTServiceDetailPage'));
const ServiceBusinessConsultingPage = lazy(() => import('./components/pages/ServiceBusinessConsultingPage'));
const ServiceAdvisoryPage = lazy(() => import('./components/pages/ServiceAdvisoryPage'));
const MCAServiceDetailPage = lazy(() => import('./components/pages/MCAServiceDetailPage'));
const LoanSupportPage = lazy(() => import('./components/pages/LoanSupportPage'));
const LoanDetailPage = lazy(() => import('./components/pages/LoanDetailPage'));
const CoursesPage = lazy(() => import('./components/pages/CoursesPage'));

const CareersPage = lazy(() => import('./components/pages/CareersPage'));
const InternshipPage = lazy(() => import('./components/pages/InternshipPage'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));
const TaxCalculatorPage = lazy(() => import('./components/pages/TaxCalculatorPage'));
const DynamicPageHandler = lazy(() => import('./components/pages/DynamicPageHandler'));

function App() {
  return (
    <Router>
      <div className="font-inter text-white bg-dark-bg min-h-screen relative overflow-hidden">
        {/* Global Background Aura (Radial & Triangle Glow) Effect */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          {/* Dedicated Hero Section/Top Glows */}
          <div className="absolute top-[-5%] left-[5%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle,rgba(229,161,69,0.25)_0%,rgba(229,161,69,0)_70%)] filter blur-[100px] animate-glow-1" />
          <div className="absolute top-[-2%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle,rgba(142,64,14,0.26)_0%,rgba(142,64,14,0)_70%)] filter blur-[95px] animate-glow-2" />

          {/* Glow 1 - Upper Left */}
          <div className="absolute top-[10%] left-[-15%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle,rgba(229,161,69,0.23)_0%,rgba(229,161,69,0)_70%)] filter blur-[90px] animate-glow-1" />

          {/* Glow 2 - Upper Right */}
          <div className="absolute top-[25%] right-[-15%] w-[75vw] h-[75vw] max-w-[850px] max-h-[850px] rounded-full bg-[radial-gradient(circle,rgba(142,64,14,0.27)_0%,rgba(142,64,14,0)_70%)] filter blur-[110px] animate-glow-2" />

          {/* Triangle Glow 1 - Upper Middle Right */}
          <svg 
            className="absolute top-[20%] right-[-5%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] pointer-events-none select-none opacity-25 animate-glow-2" 
            viewBox="0 0 100 100"
          >
            <defs>
              <radialGradient id="global-tri-grad-1" cx="50%" cy="60%" r="50%">
                <stop offset="0%" stopColor="#e5a145" stopOpacity="1.0" />
                <stop offset="100%" stopColor="#e5a145" stopOpacity="0" />
              </radialGradient>
              <filter id="global-triangle-blur-1" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="20" />
              </filter>
            </defs>
            <polygon points="50,15 90,85 10,85" fill="url(#global-tri-grad-1)" filter="url(#global-triangle-blur-1)" />
          </svg>

          {/* Glow 3 - Middle Left */}
          <div className="absolute top-[45%] left-[-10%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle,rgba(94,59,40,0.30)_0%,rgba(94,59,40,0)_70%)] filter blur-[100px] animate-glow-3" />

          {/* Triangle Glow 2 - Middle Left */}
          <svg 
            className="absolute top-[50%] left-[-8%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] pointer-events-none select-none opacity-30 animate-glow-3" 
            viewBox="0 0 100 100"
          >
            <defs>
              <radialGradient id="global-tri-grad-2" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#8e400e" stopOpacity="1.0" />
                <stop offset="100%" stopColor="#8e400e" stopOpacity="0" />
              </radialGradient>
              <filter id="global-triangle-blur-2" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="22" />
              </filter>
            </defs>
            <polygon points="50,85 10,15 90,15" fill="url(#global-tri-grad-2)" filter="url(#global-triangle-blur-2)" />
          </svg>

          {/* Glow 4 - Lower Right */}
          <div className="absolute top-[68%] right-[-10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle,rgba(229,161,69,0.21)_0%,rgba(229,161,69,0)_70%)] filter blur-[90px] animate-glow-1" />

          {/* Triangle Glow 3 - Lower Center/Right */}
          <svg 
            className="absolute top-[75%] right-[8%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] pointer-events-none select-none opacity-22 animate-glow-1" 
            viewBox="0 0 100 100"
          >
            <defs>
              <radialGradient id="global-tri-grad-3" cx="50%" cy="55%" r="50%">
                <stop offset="0%" stopColor="#5e3b28" stopOpacity="1.0" />
                <stop offset="100%" stopColor="#5e3b28" stopOpacity="0" />
              </radialGradient>
              <filter id="global-triangle-blur-3" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="18" />
              </filter>
            </defs>
            <polygon points="50,15 95,80 5,80" fill="url(#global-tri-grad-3)" filter="url(#global-triangle-blur-3)" />
          </svg>

          {/* Glow 5 - Lower Left */}
          <div className="absolute top-[85%] left-[-15%] w-[85vw] h-[85vw] max-w-[1000px] max-h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(142,64,14,0.23)_0%,rgba(142,64,14,0)_70%)] filter blur-[120px] animate-glow-2" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10">
          <AnalyticsTracker />
          <Header />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/accounting" element={<ServiceAccountingPage />} />
              <Route path="/services/accounting/bookkeeping" element={<ServiceBookkeepingPage />} />
              <Route path="/services/accounting/financial-statements" element={<ServiceFinancialStatementsPage />} />
              <Route path="/services/accounting/cash-flow" element={<ServiceCashFlowPage />} />
              <Route path="/services/accounting/management-reports" element={<ServiceManagementReportsPage />} />
              <Route path="/services/accounting/reconciliations" element={<ServiceReconciliationsPage />} />
              <Route path="/services/taxation" element={<ServiceTaxationPage />} />
              <Route path="/services/taxation/tds-tcs" element={<ServiceTdsTcsPage />} />
              <Route path="/services/taxation/tax-planning" element={<ServiceTaxPlanningPage />} />
              <Route path="/services/taxation/notice-responses" element={<ServiceNoticeResponsesPage />} />
              <Route path="/services/taxation/tax-audit" element={<Navigate to="/services/auditing/tax-audit" replace />} />
              <Route path="/services/auditing" element={<ServiceAuditingPage />} />
              <Route path="/services/auditing/tax-audit" element={<ServiceTaxAuditPage />} />
              <Route path="/services/auditing/internal-audit" element={<ServiceInternalAuditPage />} />
              <Route path="/services/auditing/:serviceId" element={<AuditingServiceDetailPage />} />
              <Route path="/services/gst" element={<ServiceGstPage />} />
              <Route path="/services/gst/:serviceId" element={<GSTServiceDetailPage />} />
              <Route path="/services/business-consulting" element={<ServiceBusinessConsultingPage />} />
              <Route path="/services/advisory" element={<ServiceAdvisoryPage />} />
              <Route path="/services/advisory/:serviceId" element={<MCAServiceDetailPage />} />
              <Route path="/services/business-loans" element={<LoanSupportPage />} />
              <Route path="/services/business-loans/:loanSlug" element={<LoanDetailPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/globalpro" element={<Navigate to="/courses" replace />} />
              <Route path="/courses/c-pro" element={<Navigate to="/courses" replace />} />
              <Route path="/courses/c-pat" element={<Navigate to="/courses" replace />} />
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
      </div>
    </Router>
  );
}

export default App;

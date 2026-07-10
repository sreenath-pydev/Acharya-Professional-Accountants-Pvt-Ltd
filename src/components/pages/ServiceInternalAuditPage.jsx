import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';

const ServiceInternalAuditPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Internal Audit & Growth Plan | Acharya Professional Accountants"
        description="Internal audit services from a practising Chartered Accountant in Calicut, Kerala: financial control reviews, compliance checks, and a monthly growth plan for small businesses across India."
        keywords="internal audit, internal controls review, process audit, operational efficiency, compliance audit, corporate governance"
        canonical="https://www.acharyaprofessionalaccountants.in/services/auditing/internal-audit"
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .internal-audit-page {
          --bg: #040404;
          --bg-alt: #1c1c1b;
          --surface: #1c1c1b;
          --glass: rgba(28, 28, 27, 0.4);
          --glass-brd: rgba(229, 161, 69, 0.15);
          --text: #ffffff;
          --muted: #747474;
          --muted-soft: #7c7c7b;
          --gold: #e5a145;
          --gold-soft: #f2b44d;
          --emerald: #e5a145;
          --coral: #FF6A5C;
          --line: rgba(229, 161, 69, 0.15);
          --radius: 14px;
          --font-display: 'Montserrat', sans-serif;
          --font-body: 'Inter', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
          --ease: cubic-bezier(.16, .8, .24, 1);

          font-family: var(--font-body);
          background: var(--bg);
          color: var(--text);
          line-height: 1.7;
          overflow-x: hidden;
        }

        .internal-audit-page .wrap {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 28px;
          position: relative;
        }

        @media (max-width:640px) {
          .internal-audit-page .wrap {
            padding: 0 20px;
          }
        }

        /* reveal */
        .internal-audit-page .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
        }

        .internal-audit-page .reveal.in {
          opacity: 1;
          transform: translateY(0);
        }

        .internal-audit-page .reveal-stagger>* {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.6s var(--ease), transform 0.6s var(--ease);
        }

        .internal-audit-page .reveal-stagger.in>* {
          opacity: 1;
          transform: translateY(0);
        }

        .internal-audit-page .reveal-stagger.in>*:nth-child(1) { transition-delay: 0.02s; }
        .internal-audit-page .reveal-stagger.in>*:nth-child(2) { transition-delay: 0.10s; }
        .internal-audit-page .reveal-stagger.in>*:nth-child(3) { transition-delay: 0.18s; }
        .internal-audit-page .reveal-stagger.in>*:nth-child(4) { transition-delay: 0.26s; }
        .internal-audit-page .reveal-stagger.in>*:nth-child(5) { transition-delay: 0.34s; }
        .internal-audit-page .reveal-stagger.in>*:nth-child(6) { transition-delay: 0.42s; }
        .internal-audit-page .reveal-stagger.in>*:nth-child(7) { transition-delay: 0.50s; }
        .internal-audit-page .reveal-stagger.in>*:nth-child(8) { transition-delay: 0.58s; }

        @media (prefers-reduced-motion: reduce) {
          .internal-audit-page .reveal,
          .internal-audit-page .reveal-stagger>* {
            opacity: 1;
            transform: none;
            transition: none !important;
          }
        }

        /* buttons */
        .internal-audit-page .btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 15px;
          padding: 15px 26px;
          border-radius: 10px;
          text-decoration: none;
          cursor: pointer;
          border: none;
          overflow: hidden;
          transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
          isolation: isolate;
        }

        .internal-audit-page .btn:active {
          transform: scale(0.97);
        }

        .internal-audit-page .btn-primary {
          color: #1a1200;
          background: linear-gradient(120deg, var(--gold), var(--gold-soft));
          box-shadow: 0 0 0 1px rgba(242, 180, 77, 0.25), 0 12px 24px -10px rgba(242, 180, 77, 0.55);
        }

        .internal-audit-page .btn-primary::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.55), transparent);
          transform: translateX(-120%) skewX(-15deg);
          transition: transform 0.6s ease;
        }

        .internal-audit-page .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 0 1px rgba(242, 180, 77, 0.4), 0 18px 32px -10px rgba(242, 180, 77, 0.7);
        }

        .internal-audit-page .btn-primary:hover::before {
          transform: translateX(120%) skewX(-15deg);
        }

        .internal-audit-page .btn-secondary {
          color: var(--text);
          background: transparent;
          border: 1.5px solid var(--glass-brd);
          backdrop-filter: blur(6px);
        }

        .internal-audit-page .btn-secondary:hover {
          border-color: var(--emerald);
          color: var(--emerald);
          box-shadow: 0 0 0 4px rgba(229, 161, 69, 0.08);
          transform: translateY(-3px);
        }

        .internal-audit-page .whatsapp-btn {
          background: #25D366;
          color: #fff;
          border-radius: 40px;
          padding: 12px 22px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 15px;
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.35);
        }

        .internal-audit-page .whatsapp-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(37, 211, 102, 0.45);
        }

        .internal-audit-page .whatsapp-btn svg {
          width: 22px;
          height: 22px;
          fill: currentColor;
        }

        /* hero */
        .internal-audit-page .hero {
          padding: 40px 0 50px;
          position: relative;
          overflow: hidden;
        }

        .internal-audit-page .mesh {
          position: absolute;
          inset: -10% -10% auto -10%;
          height: 780px;
          z-index: -1;
          filter: blur(90px);
          opacity: 0.55;
          pointer-events: none;
        }

        .internal-audit-page .blob {
          position: absolute;
          border-radius: 50%;
        }

        .internal-audit-page .blob1 {
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, var(--gold) 0%, transparent 70%);
          top: -140px;
          left: -60px;
          animation: float1 16s ease-in-out infinite;
        }

        .internal-audit-page .blob2 {
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, #8e400e 0%, transparent 70%);
          top: 60px;
          right: -100px;
          animation: float2 20s ease-in-out infinite;
        }

        .internal-audit-page .blob3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #5e3b28 0%, transparent 70%);
          top: 280px;
          left: 40%;
          animation: float3 18s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(60px, 50px); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-50px, 60px); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -40px); }
        }

        .internal-audit-page .grid-tex {
          position: absolute;
          inset: 0;
          z-index: -1;
          background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 26px 26px;
          mask-image: radial-gradient(ellipse 700px 460px at 50% 0%, black, transparent);
        }

        .internal-audit-page .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: center;
        }

        @media (max-width:900px) {
          .internal-audit-page .hero-grid {
            grid-template-columns: 1fr;
            gap: 44px;
          }
        }

        .internal-audit-page .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--emerald);
          background: rgba(229, 161, 69, 0.08);
          border: 1px solid rgba(229, 161, 69, 0.25);
          padding: 6px 12px;
          border-radius: 20px;
          margin-bottom: 24px;
        }

        .internal-audit-page .eyebrow .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--emerald);
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(229, 161, 69, 0.5); }
          50% { opacity: 0.6; box-shadow: 0 0 0 5px rgba(229, 161, 69, 0); }
        }

        .internal-audit-page h1.headline {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(34px, 4.6vw, 55px);
          line-height: 1.08;
          letter-spacing: -1px;
          margin-bottom: 22px;
        }

        .internal-audit-page h1.headline .grad {
          background: linear-gradient(120deg, var(--gold), var(--emerald) 90%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .internal-audit-page .hero-sub {
          font-size: 17.5px;
          color: var(--muted);
          max-width: 480px;
          margin-bottom: 34px;
        }

        .internal-audit-page .hero-sub strong {
          color: var(--text);
          font-weight: 600;
        }

        .internal-audit-page .hero-ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 30px;
          align-items: center;
        }

        /* stub card */
        .internal-audit-page .stub-holder {
          perspective: 1200px;
        }

        .internal-audit-page .stub {
          background: linear-gradient(160deg, var(--surface), var(--bg-alt));
          border: 1px solid var(--glass-brd);
          border-radius: 18px;
          padding: 28px 28px 24px;
          max-width: 360px;
          margin: 0 auto;
          position: relative;
          box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.6);
          transform-style: preserve-3d;
          transition: transform 0.15s ease-out;
          animation: drift 7s ease-in-out infinite;
        }

        @keyframes drift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .internal-audit-page .stub::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 18px;
          padding: 1px;
          background: linear-gradient(120deg, var(--gold), transparent 40%, var(--emerald));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.5;
          pointer-events: none;
        }

        .internal-audit-page .stub-perf {
          border-top: 1.5px dashed var(--line);
          margin: 16px 0;
        }

        .internal-audit-page .stub-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 11px;
          font-size: 13px;
        }

        .internal-audit-page .stub-row .label {
          color: var(--muted-soft);
          font-family: var(--font-mono);
          font-size: 10.5px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .internal-audit-page .stub-row .val {
          font-weight: 600;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text);
        }

        .internal-audit-page .stub-head {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 6px;
        }

        .internal-audit-page .stub-title {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .internal-audit-page .stub-amount {
          font-family: var(--font-mono);
          font-size: 36px;
          font-weight: 700;
          margin: 14px 0 2px;
          background: linear-gradient(120deg, var(--gold-soft), var(--emerald));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .internal-audit-page .stub-amount span {
          font-size: 15px;
          color: var(--muted);
          font-weight: 500;
          -webkit-text-fill-color: var(--muted);
        }

        .internal-audit-page .stamp {
          position: absolute;
          top: 24px;
          right: -12px;
          border: 2px solid var(--coral);
          color: var(--coral);
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 10.5px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 6px 10px;
          border-radius: 8px;
          transform: rotate(10deg);
          background: rgba(255, 106, 92, 0.08);
          animation: wobble 4s ease-in-out infinite;
        }

        @keyframes wobble {
          0%, 100% { transform: rotate(10deg); }
          50% { transform: rotate(6deg); }
        }

        /* section */
        .internal-audit-page section {
          padding: 100px 0;
        }

        @media (max-width:640px) {
          .internal-audit-page section {
            padding: 64px 0;
          }
        }

        .internal-audit-page .section-head {
          max-width: 600px;
          margin-bottom: 52px;
        }

        .internal-audit-page .section-eyebrow {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 600;
          margin-bottom: 12px;
        }

        .internal-audit-page h2.section-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(26px, 3vw, 37px);
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin-bottom: 14px;
        }

        .internal-audit-page .section-desc {
          color: var(--muted);
          font-size: 16px;
          max-width: 520px;
        }

        /* Internal Audit specific */
        .internal-audit-page .audit-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        @media (max-width: 820px) {
          .internal-audit-page .audit-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        .internal-audit-page .audit-card {
          background: linear-gradient(160deg, var(--surface), var(--bg-alt));
          border: 1px solid rgba(229, 161, 69, 0.25);
          border-radius: 24px;
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(229, 161, 69, 0.1), 0 12px 30px -12px rgba(229, 161, 69, 0.15);
          height: fit-content;
        }

        .internal-audit-page .audit-card .badge-offer {
          background: var(--coral);
          color: #fff;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 14px;
          border-radius: 30px;
          display: inline-block;
          margin-bottom: 12px;
          align-self: flex-start;
          animation: pulse-offer 2s ease-in-out infinite;
        }

        @keyframes pulse-offer {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }

        .internal-audit-page .audit-card h3 {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .internal-audit-page .audit-card .price {
          font-family: var(--font-mono);
          font-size: 44px;
          font-weight: 700;
          color: #fff;
          margin: 10px 0 6px;
        }

        .internal-audit-page .audit-card .price span {
          font-size: 18px;
          color: var(--emerald);
          font-weight: 500;
        }

        .internal-audit-page .audit-card .price .original {
          font-size: 22px;
          color: var(--muted-soft);
          text-decoration: line-through;
          font-weight: 400;
          margin-left: 12px;
        }

        .internal-audit-page .audit-card .price .discount-badge {
          display: inline-block;
          background: var(--coral);
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          padding: 2px 12px;
          border-radius: 20px;
          margin-left: 10px;
          vertical-align: middle;
        }

        .internal-audit-page .audit-card .sub {
          color: var(--muted-soft);
          font-size: 14px;
          margin-bottom: 20px;
        }

        .internal-audit-page .audit-card ul {
          list-style: none;
          margin: 16px 0 28px;
        }

        .internal-audit-page .audit-card ul li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          font-size: 15px;
          color: #DEE2ED;
          margin-bottom: 14px;
          line-height: 1.5;
        }

        .internal-audit-page .audit-card ul li .ico {
          color: var(--emerald);
          font-weight: 700;
          flex: none;
          font-family: var(--font-mono);
          font-size: 16px;
        }

        .internal-audit-page .audit-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 480px) {
          .internal-audit-page .audit-features-grid {
            grid-template-columns: 1fr;
          }
        }

        .internal-audit-page .audit-feature {
          background: var(--glass);
          border: 1px solid var(--glass-brd);
          border-radius: 16px;
          padding: 24px 20px;
          text-align: center;
          transition: transform 0.3s var(--ease), border-color 0.3s;
        }

        .internal-audit-page .audit-feature:hover {
          transform: translateY(-6px);
          border-color: var(--gold);
        }

        .internal-audit-page .audit-feature .icon {
          font-size: 32px;
          display: block;
          margin-bottom: 12px;
        }

        .internal-audit-page .audit-feature h4 {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 6px;
          color: var(--text);
        }

        .internal-audit-page .audit-feature p {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.4;
        }

        .internal-audit-page .audit-guarantee {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(229, 161, 69, 0.08);
          border: 1px solid rgba(229, 161, 69, 0.2);
          border-radius: 14px;
          padding: 18px 24px;
          margin-top: 24px;
          grid-column: 1 / -1;
        }

        .internal-audit-page .audit-guarantee .badge-text {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 18px;
          color: var(--emerald);
          white-space: nowrap;
        }

        .internal-audit-page .audit-guarantee p {
          font-size: 14px;
          color: var(--muted);
          margin: 0;
        }

        @media (max-width: 600px) {
          .internal-audit-page .audit-guarantee {
            flex-direction: column;
            text-align: center;
            gap: 8px;
            padding: 16px;
          }
          .internal-audit-page .audit-guarantee .badge-text {
            white-space: normal;
          }
        }

        /* trust bar */
        .internal-audit-page .trust-bar {
          padding: 34px 0;
          border-bottom: 1px solid var(--line);
          border-top: 1px solid var(--line);
          overflow: hidden;
          margin-top: 20px;
        }

        .internal-audit-page .marquee {
          display: flex;
          width: max-content;
          animation: scroll 26s linear infinite;
        }

        .internal-audit-page .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .internal-audit-page .trust-item {
          display: flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
          font-size: 14px;
          color: var(--muted);
          font-weight: 500;
          padding: 0 34px;
          border-right: 1px solid var(--line);
        }

        .internal-audit-page .trust-item .ico {
          color: var(--emerald);
          font-weight: 700;
        }

        /* final cta */
        .internal-audit-page .final-cta {
          text-align: center;
          background: linear-gradient(120deg, rgba(229, 161, 69, 0.14), rgba(142, 64, 14, 0.14));
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
          border: 1px solid var(--glass-brd);
          border-radius: 22px;
          padding: 60px 32px;
          margin-top: 20px;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .internal-audit-page .final-cta h2 {
          font-family: var(--font-display);
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .internal-audit-page .final-cta p {
          color: var(--muted);
          margin-bottom: 28px;
          font-size: 15.5px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* testimonials */
        .internal-audit-page .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-top: 20px;
        }

        .internal-audit-page .testimonial {
          background: var(--glass);
          border: 1px solid var(--glass-brd);
          border-radius: 16px;
          padding: 28px 24px;
          transition: transform 0.3s var(--ease), border-color 0.3s;
        }

        .internal-audit-page .testimonial:hover {
          transform: translateY(-4px);
          border-color: var(--gold);
        }

        .internal-audit-page .testimonial .stars {
          color: var(--gold);
          font-size: 18px;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .internal-audit-page .testimonial blockquote {
          font-size: 14.5px;
          color: var(--text);
          font-style: italic;
          margin-bottom: 12px;
          line-height: 1.6;
        }

        .internal-audit-page .testimonial .author {
          font-size: 13px;
          color: var(--muted-soft);
          font-weight: 500;
        }

        .internal-audit-page .testimonial .author span {
          color: var(--emerald);
        }

        /* FAQ */
        .internal-audit-page .faq-list {
          max-width: 760px;
          margin: 0 auto;
        }

        .internal-audit-page .faq-item {
          border-bottom: 1px solid var(--line);
        }

        .internal-audit-page .faq-item summary {
          list-style: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 4px;
          font-weight: 600;
          font-size: 16px;
          font-family: var(--font-display);
          transition: color 0.25s;
        }

        .internal-audit-page .faq-item summary:hover {
          color: var(--gold);
        }

        .internal-audit-page .faq-item summary::-webkit-details-marker {
          display: none;
        }

        .internal-audit-page .faq-item summary::after {
          content: "+";
          font-size: 22px;
          color: var(--muted-soft);
          transition: transform 0.3s var(--ease);
        }

        .internal-audit-page .faq-item[open] summary::after {
          transform: rotate(45deg);
        }

        .internal-audit-page .faq-item p {
          padding: 0 4px 22px;
          color: var(--muted);
          font-size: 14.5px;
          line-height: 1.7;
        }

        /* offer highlight */
        .internal-audit-page .offer-highlight {
          background: linear-gradient(120deg, rgba(255, 106, 92, 0.15), rgba(242, 180, 77, 0.15));
          border: 1px solid rgba(255, 106, 92, 0.25);
          border-radius: 12px;
          padding: 14px 20px;
          margin-top: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .internal-audit-page .offer-highlight .tag {
          background: var(--coral);
          color: #fff;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 30px;
        }

        .internal-audit-page .offer-highlight .text {
          font-size: 14px;
          color: var(--text);
        }

        .internal-audit-page .offer-highlight .text strong {
          color: var(--gold);
        }

        .internal-audit-page .offer-highlight .text .savings {
          color: var(--coral);
          font-weight: 700;
        }
      `}</style>

      <div className="internal-audit-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="mesh">
            <div className="blob blob1"></div>
            <div className="blob blob2"></div>
            <div className="blob blob3"></div>
          </div>
          <div className="grid-tex"></div>
          <div className="wrap hero-grid">
            <div className="reveal in" data-aos="fade-right">
              <div className="eyebrow">
                <span className="dot"></span> 🔥 Limited Time Offer: 58% Off
              </div>
              <h1 className="headline">
                Grow your business with our <span className="grad">Internal Audit</span> service
              </h1>
              <p className="hero-sub">
                <strong>Now ₹5,000 a month</strong>, down from ₹12,000. You get monthly reports, hands-on fund management, and insights from a practising CA, with a 6-month growth promise behind it.
              </p>
              <div className="hero-ctas">
                <a
                  href="https://wa.me/919446369434?text=Hi%20Acharya%2C%20I%27m%20interested%20in%20the%20Internal%20Audit%20%26%20Growth%20Plan%20at%20%E2%82%B95000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn whatsapp-btn"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12.032 21.965c-1.821 0-3.582-.489-5.123-1.405l-4.636 1.522 1.542-4.499a9.822 9.822 0 01-1.6-5.452c0-5.455 4.435-9.89 9.89-9.89 2.64 0 5.122 1.03 6.989 2.898a9.822 9.822 0 012.898 6.989c0 5.455-4.435 9.89-9.89 9.89z"></path>
                  </svg>
                  Claim Offer on WhatsApp
                </a>
                <a href="#audit-plan" className="btn btn-secondary">
                  See details
                </a>
              </div>
              <div style={{ fontSize: '14px', color: 'var(--muted-soft)' }}>
                🌟 Trusted by small businesses · Calicut-based CA firm · Serving India-wide
              </div>
            </div>

            <div className="stub-holder reveal in" data-aos="fade-left">
              <div className="stub" id="stubCard">
                <div className="stamp">58% OFF</div>
                <div className="stub-head">ACHARYA · INTERNAL AUDIT</div>
                <div className="stub-title">Growth Plan</div>
                <div className="stub-amount"><span>₹</span>5,000 <span>/ month</span></div>
                <div style={{ fontSize: '12px', color: 'var(--muted-soft)', textAlign: 'center', marginBottom: '8px', textDecoration: 'line-through' }}>
                  Was ₹12,000/month
                </div>
                <div className="stub-perf"></div>
                <div className="stub-row"><span className="label">COMMITMENT</span><span className="val">6 months</span></div>
                <div className="stub-row"><span className="label">MONTHLY REPORTS</span><span className="val">✓</span></div>
                <div className="stub-row"><span className="label">FUND MANAGEMENT</span><span className="val">✓</span></div>
                <div className="stub-row"><span className="label">GST FILING</span><span className="val">✓</span></div>
                <div className="stub-row"><span className="label">GROWTH PROMISE</span><span className="val">6 months</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="trust-bar">
          <div className="marquee" id="marquee">
            <div className="trust-item"><span className="ico">🔥</span> Special Offer: ₹5,000/month (was ₹12,000, save 58%)</div>
            <div className="trust-item"><span className="ico">✓</span> Internal Audit &amp; Growth Plan at ₹5,000 per month</div>
            <div className="trust-item"><span className="ico">✓</span> 6-month growth promise with monthly reports</div>
            <div className="trust-item"><span className="ico">✓</span> Fund management tips &amp; projection planning</div>
            <div className="trust-item"><span className="ico">✓</span> Expense comparison &amp; competencies analysis</div>
            <div className="trust-item"><span className="ico">✓</span> GST filing assistance included</div>
            {/* Duplicated for smooth loop */}
            <div className="trust-item"><span className="ico">🔥</span> Special Offer: ₹5,000/month (was ₹12,000, save 58%)</div>
            <div className="trust-item"><span className="ico">✓</span> Internal Audit &amp; Growth Plan at ₹5,000 per month</div>
            <div className="trust-item"><span className="ico">✓</span> 6-month growth promise with monthly reports</div>
            <div className="trust-item"><span className="ico">✓</span> Fund management tips &amp; projection planning</div>
            <div className="trust-item"><span className="ico">✓</span> Expense comparison &amp; competencies analysis</div>
            <div className="trust-item"><span className="ico">✓</span> GST filing assistance included</div>
          </div>
        </section>

        {/* What Is Internal Audit */}
        <section id="what-is-internal-audit" data-aos="fade-up">
          <div className="wrap">
            <div className="section-head reveal in">
              <div className="section-eyebrow">Internal Audit, Explained</div>
              <h2 className="section-title">A regular health check for your business finances</h2>
              <p className="section-desc">
                An internal audit is an independent look at your financial records, controls, and day-to-day processes. It's separate from your annual statutory audit, and instead of a once-a-year snapshot, it gives you an ongoing view of where money is leaking, where compliance risk is building up, and where operations could run tighter.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))', gap: '24px' }} className="reveal-stagger in">
              <div style={{ background: 'var(--glass)', border: '1px solid var(--glass-brd)', borderRadius: '16px', padding: '28px 24px' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>🔍</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Financial Controls Review</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
                  We look at how money actually moves through your business: approvals, reconciliations, record-keeping, and flag anything that's weak or missing.
                </p>
              </div>
              <div style={{ background: 'var(--glass)', border: '1px solid var(--glass-brd)', borderRadius: '16px', padding: '28px 24px' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>✅</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Compliance &amp; Risk Check</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
                  We review your filings and statutory obligations against current requirements, so issues surface while they're still easy to fix.
                </p>
              </div>
              <div style={{ background: 'var(--glass)', border: '1px solid var(--glass-brd)', borderRadius: '16px', padding: '28px 24px' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚙️</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Operational Efficiency</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
                  Beyond compliance, we look at how the business runs day to day and point out where time, stock, or spending is being wasted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When You Need One */}
        <section id="when-you-need-it" data-aos="fade-up">
          <div className="wrap">
            <div className="section-head reveal in">
              <div className="section-eyebrow">Is It Time?</div>
              <h2 className="section-title">Signs your business is due for an internal audit</h2>
              <p className="section-desc">There's no single rule for when to start. These are the moments small businesses in India most often reach out to us.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))', gap: '24px' }} className="reveal-stagger in">
              <div style={{ background: 'var(--glass)', border: '1px solid var(--glass-brd)', borderRadius: '16px', padding: '24px' }}>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>📈 You're growing fast and can't tell if profit is keeping pace with revenue</p>
              </div>
              <div style={{ background: 'var(--glass)', border: '1px solid var(--glass-brd)', borderRadius: '16px', padding: '24px' }}>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>🏦 You're preparing for a loan application or bringing on an investor</p>
              </div>
              <div style={{ background: 'var(--glass)', border: '1px solid var(--glass-brd)', borderRadius: '16px', padding: '24px' }}>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>🧾 GST filings or reconciliations have fallen behind</p>
              </div>
              <div style={{ background: 'var(--glass)', border: '1px solid var(--glass-brd)', borderRadius: '16px', padding: '24px' }}>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>🔁 It's been over a year since anyone independently reviewed your books</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Audit Section */}
        <section id="audit-plan" data-aos="fade-up">
          <div className="wrap">
            <div className="section-head reveal in">
              <div className="section-eyebrow">Internal Audit Services</div>
              <h2 className="section-title">Complete financial clarity &amp; growth roadmap</h2>
              <p className="section-desc">Our monthly program gives you the insights and tools to scale with confidence, and we commit to measurable growth within 6 months, backed by a practising Chartered Accountant.</p>
            </div>

            <div className="audit-grid reveal-stagger in">
              {/* Left: Card with price and inclusions */}
              <div className="audit-card" data-aos="fade-right">
                <span className="badge-offer">🔥 LIMITED TIME OFFER</span>
                <h3>Internal Audit &amp; Growth Plan</h3>
                <div className="price">
                  ₹5,000 <span>/ month</span>
                  <span className="original">₹12,000</span>
                  <span className="discount-badge">58% OFF</span>
                </div>
                <div className="sub">Regular price ₹12,000/month, now ₹5,000/month for a limited time</div>

                <div className="offer-highlight">
                  <span className="tag">Save ₹7,000/mo</span>
                  <span className="text">You're saving <span className="savings">₹7,000 every month</span>, that's <strong>58% off</strong> the regular price. It won't stay at this rate for long.</span>
                </div>

                <ul>
                  <li><span className="ico">📊</span> A monthly comparison statement that tracks your performance against previous months and flags trends.</li>
                  <li><span className="ico">💰</span> Fund management tips and tracking, with practical advice to improve your cash flow and working capital.</li>
                  <li><span className="ico">📈</span> Projection planning and forecasting, so you can plan your next move using real revenue and expense data.</li>
                  <li><span className="ico">🧾</span> GST filing assistance, so your filings stay accurate and on time.</li>
                  <li><span className="ico">📉</span> An expense report with comparison, so you can see exactly where your money is going.</li>
                  <li><span className="ico">⚖️</span> A competencies and performance analysis that shows your strengths and where there's room to improve.</li>
                </ul>
                <a
                  href="https://wa.me/919446369434?text=Hi%20Acharya%2C%20I%27m%20interested%20in%20the%20Internal%20Audit%20%26%20Growth%20Plan%20at%20%E2%82%B95000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full text-center justify-center"
                >
                  Claim Your Offer Now
                </a>
              </div>

              {/* Right: Features grid + guarantee */}
              <div data-aos="fade-left">
                <div className="audit-features-grid">
                  <div className="audit-feature">
                    <span className="icon">📈</span>
                    <h4>Growth in 6 Months</h4>
                    <p>We promise tangible growth within 6 months, or we keep working with you until you get there. It's less a one-off service and more an ongoing partnership.</p>
                  </div>
                  <div className="audit-feature">
                    <span className="icon">📋</span>
                    <h4>Monthly Reports</h4>
                    <p>Detailed reports every month to track your progress, compare performance against benchmarks, and plan your next strategic move with confidence.</p>
                  </div>
                  <div className="audit-feature">
                    <span className="icon">💡</span>
                    <h4>Expert Fund Management</h4>
                    <p>Actionable tips and strategies to improve your cash flow, optimize fund allocation, and ensure your business has the liquidity it needs to grow.</p>
                  </div>
                  <div className="audit-feature">
                    <span className="icon">📊</span>
                    <h4>Competencies Analysis</h4>
                    <p>A deep dive into your business strengths and areas for improvement, backed by data. We help you understand what's working and what needs attention.</p>
                  </div>
                </div>

                <div className="audit-guarantee" id="guarantee">
                  <span className="badge-text">🔹 6-Month Growth Guarantee</span>
                  <p>We're committed to your success. This plan is built to deliver measurable results within six months, and if you don't see growth, we'll keep working with you at no extra cost until you do.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section id="process" data-aos="fade-up">
          <div className="wrap">
            <div className="section-head reveal in">
              <div className="section-eyebrow">How It Works</div>
              <h2 className="section-title">From first call to action plan</h2>
              <p className="section-desc">A straightforward four-step process. No surprises, no jargon.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '24px' }} className="reveal-stagger in">
              <div style={{ background: 'var(--glass)', border: '1px solid var(--glass-brd)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--gold)', fontSize: '13px', marginBottom: '10px' }}>01</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Discovery &amp; Scoping</h4>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>A short call to understand your business, current records, and where you're most concerned.</p>
              </div>
              <div style={{ background: 'var(--glass)', border: '1px solid var(--glass-brd)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--gold)', fontSize: '13px', marginBottom: '10px' }}>02</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Fieldwork &amp; Review</h4>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>We go through your financial records, controls, and filings against what we scoped.</p>
              </div>
              <div style={{ background: 'var(--glass)', border: '1px solid var(--glass-brd)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--gold)', fontSize: '13px', marginBottom: '10px' }}>03</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Reporting &amp; Findings</h4>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>A plain-language report on what we found, ranked by what matters most.</p>
              </div>
              <div style={{ background: 'var(--glass)', border: '1px solid var(--glass-brd)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--gold)', fontSize: '13px', marginBottom: '10px' }}>04</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Action Plan &amp; Follow-up</h4>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Clear next steps, and ongoing check-ins if you're on the monthly plan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose / Features deep dive */}
        <section id="features" data-aos="fade-up">
          <div className="wrap">
            <div className="section-head reveal in">
              <div className="section-eyebrow">What's included</div>
              <h2 className="section-title">Everything you need to scale your business</h2>
              <p className="section-desc">Our Internal Audit service goes beyond the numbers. We give you a roadmap for sustainable growth, built around clarity, control, and confidence.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))', gap: '24px' }} className="reveal-stagger in">
              <div className="audit-feature-card" style={{ background: 'var(--glass)', border: '1px solid var(--glass-brd)', borderRadius: '16px', padding: '28px 24px', transition: 'transform 0.3s var(--ease), border-color 0.3s' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>📊</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Monthly Comparison Statement</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Track your month-over-month performance with clear, visual comparisons. See exactly where you're improving and where you need to focus your efforts.</p>
              </div>
              <div className="audit-feature-card" style={{ background: 'var(--glass)', border: '1px solid var(--glass-brd)', borderRadius: '16px', padding: '28px 24px', transition: 'transform 0.3s var(--ease), border-color 0.3s' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>💰</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Fund Management Tips</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Get expert advice on cash flow, working capital, and smart fund allocation. We help you make your money work harder for your business.</p>
              </div>
              <div className="audit-feature-card" style={{ background: 'var(--glass)', border: '1px solid var(--glass-brd)', borderRadius: '16px', padding: '28px 24px', transition: 'transform 0.3s var(--ease), border-color 0.3s' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>📈</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Projection &amp; Forecast Planning</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Plan your next move using real revenue and expense data. We help you create projections and forecasts so you can make strategic decisions with confidence.</p>
              </div>
              <div className="audit-feature-card" style={{ background: 'var(--glass)', border: '1px solid var(--glass-brd)', borderRadius: '16px', padding: '28px 24px', transition: 'transform 0.3s var(--ease), border-color 0.3s' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>🧾</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>GST Filing Assistance</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Keep your filings accurate, compliant, and on time. We take the hassle out of tax compliance and reconciliation so you can focus on operations.</p>
              </div>
              <div className="audit-feature-card" style={{ background: 'var(--glass)', border: '1px solid var(--glass-brd)', borderRadius: '16px', padding: '28px 24px', transition: 'transform 0.3s var(--ease), border-color 0.3s' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>📉</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Expense Report &amp; Comparison</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>See exactly where your money is going with detailed expense reports. We compare your expenses against previous cycles to identify cost-cutting opportunities.</p>
              </div>
              <div className="audit-feature-card" style={{ background: 'var(--glass)', border: '1px solid var(--glass-brd)', borderRadius: '16px', padding: '28px 24px', transition: 'transform 0.3s var(--ease), border-color 0.3s' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚖️</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Competencies &amp; Performance</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Identify your business's core strengths and areas for operational improvement. We analyze your performance to help you optimize workflows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" data-aos="fade-up">
          <div className="wrap">
            <div className="section-head reveal in">
              <div className="section-eyebrow">Who You're Working With</div>
              <h2 className="section-title">A practising Chartered Accountant, not a call center</h2>
              <p className="section-desc">
                Acharya Professional Accountants is an ICAI-registered CA firm that has served businesses in Kozhikode for over 10 years. We work with 500+ active clients across GST, tax, audit, and compliance, with a 100% on-time filing record.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '24px' }} className="reveal-stagger in">
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '700', color: 'var(--gold)' }}>10+</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)' }}>Years in practice</div>
              </div>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '700', color: 'var(--gold)' }}>500+</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)' }}>Businesses served</div>
              </div>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '700', color: 'var(--gold)' }}>ICAI</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)' }}>Registered Chartered Accountant</div>
              </div>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '700', color: 'var(--gold)' }}>Calicut</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)' }}>Based in Kerala, serving India-wide</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" data-aos="fade-up">
          <div className="wrap">
            <div className="section-head reveal in">
              <div className="section-eyebrow">What our clients say</div>
              <h2 className="section-title">Real results from real businesses</h2>
              <p className="section-desc">
                Small business owners and entrepreneurs trust us to help them grow. Here's what some of them have to say about our Internal Audit &amp; Growth Plan.
              </p>
            </div>
            <div className="testimonial-grid reveal-stagger in">
              <div className="testimonial">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "The monthly reports and fund management tips have completely transformed how I run my business. I used to struggle with cash flow, but now I have a clear picture of where my money is going. The growth in just 4 months has been remarkable. And at this price, it's an absolute steal!"
                </blockquote>
                <div className="author">— Priya S., <span>Founder, Priya's Boutique</span></div>
              </div>
              <div className="testimonial">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "I was skeptical at first, but the competencies analysis showed me exactly where I was losing money. The projection planning helped me prepare for a busy season, and I ended up with my best quarter ever. Worth every rupee, especially at the current offer price."
                </blockquote>
                <div className="author">— Rahul K., <span>Director, RK Enterprises</span></div>
              </div>
              <div className="testimonial">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "The GST filing assistance alone is worth the price. But the monthly comparison statements and expense reports have given me insights I never had before. I feel in control of my business finances for the first time. At ₹5,000/month, this is unbeatable value."
                </blockquote>
                <div className="author">— Anjali M., <span>Owner, Anjali's Kitchen</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" data-aos="fade-up">
          <div className="wrap">
            <div className="section-head reveal in" style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
              <div className="section-eyebrow">FAQ</div>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-desc" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Everything you need to know about our internal audit services and growth plans.</p>
            </div>

            <div className="faq-list">
              <details className="faq-item" defaultOpen>
                <summary>What is the difference between an internal audit and a statutory audit?</summary>
                <p>
                  A statutory audit is a legally required, once-a-year examination of financial statements, usually carried out by an independent auditor for compliance purposes. An internal audit is a voluntary, ongoing review of a business's financial controls, processes, and risk areas, designed to catch issues early and support better decision-making throughout the year rather than just at year-end.
                </p>
              </details>
              <details className="faq-item">
                <summary>Is internal audit mandatory for my business?</summary>
                <p>
                  Internal audit is not mandatory for most small businesses and sole proprietorships in India, though certain company classes and sizes have requirements under the Companies Act. Even where it isn't required, an internal audit is a common practice for businesses that want better visibility into their finances.
                </p>
              </details>
              <details className="faq-item">
                <summary>How often should a small business get an internal audit?</summary>
                <p>
                  Most small businesses benefit from a quarterly or monthly review rather than a single annual check, since it catches cash flow and compliance issues while they're still small. Businesses going through rapid growth, a funding round, or a change in ownership structure often benefit from more frequent reviews during that period.
                </p>
              </details>
              <details className="faq-item">
                <summary>What is the special offer pricing?</summary>
                <p>
                  For a limited time, the Internal Audit &amp; Growth Plan is available at ₹5,000 per month, discounted from the regular price of ₹12,000 per month. This offer is available for new clients for a limited period.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="wrap reveal in" style={{ marginTop: '60px', marginBottom: '8px' }} data-aos="fade-up">
          <div className="final-cta">
            <h2>Ready to Take Control of Your Financial Growth?</h2>
            <p>Join our monthly program and get CA-backed internal audits, monthly comparison statements, and expert fund management at 58% off.</p>
            <a
              href="https://wa.me/919446369434?text=Hi%20Acharya%2C%20I%27m%20interested%20in%20the%20Internal%20Audit%20%26%20Growth%20Plan%20at%20%E2%82%B95000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Claim Offer on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServiceInternalAuditPage;


import React from 'react';

export const auditingServices = {
    'statutory-audit': {
        title: 'Statutory Audit',
        seoTitle: 'Statutory Audit Services in Kerala',
        seoDescription: 'Expert statutory audit services ensuring compliance with the Companies Act, 2013 and accounting standards (Ind AS / IFRS).',
        keywords: 'statutory audit, company audit, financial statement audit, audit firm kerala, acharya auditing',
        icon: 'fa-balance-scale',
        content: (
            <>
                <p className="mb-4">
                    Statutory audits are not just a compliance requirement but a critical examination of your financial health. At Acharya Professional Accountants, we conduct rigorous statutory audits for private limited companies, public companies, and LLPs in accordance with the Companies Act, 2013, and applicable accounting standards (AS/Ind AS).
                </p>
                <h3 className="text-xl font-bold text-white mb-3">Our Statutory Audit Process</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                    <li><strong>Planning & Risk Assessment:</strong> Understanding your business environment and identifying key risk areas.</li>
                    <li><strong>Internal Control Testing:</strong> Evaluating the effectiveness of your internal financial controls.</li>
                    <li><strong>Substantive Testing:</strong> Verifying balances, transactions, and disclosures in the financial statements.</li>
                    <li><strong>Reporting:</strong> Issuing an independent auditor's report that adds credibility to your financial statements.</li>
                </ul>
                <p>
                    We ensure that your financial statements present a true and fair view of your business affairs, providing assurance to shareholders, regulators, lenders, and other stakeholders.
                </p>
            </>
        )
    },
    'internal-audit': {
        title: 'Internal Audit',
        seoTitle: 'Internal Audit & Risk Advisory Services',
        seoDescription: 'Comprehensive internal audit services to evaluate internal controls, risk management, and operational efficiency.',
        keywords: 'internal audit, risk advisory, internal controls, process audit, operational audit',
        icon: 'fa-search-dollar',
        content: (
            <>
                <p className="mb-4">
                    Internal auditing is an independent, objective assurance and consulting activity designed to add value and improve an organization's operations. Our internal audit services go beyond simple tick-box compliance to provide strategic insights that help you achieve your business objectives.
                </p>
                <h3 className="text-xl font-bold text-white mb-3">Key Focus Areas</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                    <li><strong>Process Optimization:</strong> Reviewing standard operating procedures (SOPs) to eliminate inefficiencies and bottlenecks.</li>
                    <li><strong>Risk Management:</strong> Identifying operational, financial, and compliance risks and recommending mitigation strategies.</li>
                    <li><strong>Fraud Prevention:</strong> Implementing robust controls to detect and prevent fraud and revenue leakage.</li>
                    <li><strong>Governance:</strong> enhancing the corporate governance framework to ensure accountability and transparency.</li>
                </ul>
                <p>
                    Whether outsourced or co-sourced, our internal audit team works as a partner to your management, providing actionable recommendations to strengthen your business.
                </p>
            </>
        )
    },
    'tax-audit': {
        title: 'Tax Audit (u/s 44AB)',
        seoTitle: 'Tax Audit Services under Section 44AB',
        seoDescription: 'Professional tax audit services for businesses and professionals exceeding turnover limits under the Income Tax Act.',
        keywords: 'tax audit, section 44ab, income tax audit, form 3cd, tax compliance audit',
        icon: 'fa-file-invoice',
        content: (
            <>
                <p className="mb-4">
                    Under Section 44AB of the Income Tax Act, 1961, businesses and professionals exceeding specified turnover limits are required to get their accounts audited by a Chartered Accountant. This 'Tax Audit' ensures that the books of accounts are properly maintained and that taxable income is computed correctly.
                </p>
                <h3 className="text-xl font-bold text-white mb-3">Our Tax Audit Scope</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                    <li><strong>Verification of Books:</strong> Detailed checking of vouchers, ledgers, and books of accounts for accuracy.</li>
                    <li><strong>Compliance Check:</strong> Ensuring adherence to TDS/TCS provisions, payment of statutory dues, and other tax laws.</li>
                    <li><strong>Form 3CD Preparation:</strong> Comprehensive reporting of required particulars in Form 3CD with accurate disclosures.</li>
                    <li><strong>Disallowance Identification:</strong> Identifying expenses inadmissible under the Income Tax Act to determine correct taxable profit.</li>
                </ul>
                <p>
                    We help you navigate the complexities of tax laws, ensuring timely filing of the tax audit report to avoid heavy penalties and scrutiny.
                </p>
            </>
        )
    },
    'gst-audit': {
        title: 'GST Audit & Reconciliation',
        seoTitle: 'GST Audit and Annual Reconciliation Services',
        seoDescription: 'Detailed GST data analysis and reconciliation services to ensure 100% compliance and prevent departmental notices.',
        keywords: 'gst audit, gst reconciliation, gstr 9c, gst compliance, gst data matching',
        icon: 'fa-calculator',
        content: (
            <>
                <p className="mb-4">
                    While the mandatory GST audit by CAs has been removed, the responsibility for accurate self-assessment and reconciliation has increased. Our GST Audit & Reconciliation service acts as a 'health check' for your GST compliance, ensuring that your returns match your books of accounts perfectly.
                </p>
                <h3 className="text-xl font-bold text-white mb-3">What We Cover</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                    <li><strong>Turnover Reconciliation:</strong> Matching turnover as per financials with GSTR-1 and GSTR-3B filings.</li>
                    <li><strong>ITC Reconciliation:</strong> Verifying Input Tax Credit claimed against GSTR-2B and purchase registers to identify ineligible or missed credits.</li>
                    <li><strong>Tax Rate Confirmation:</strong> Reviewing HSN/SAC codes and tax rates applied on outward supplies.</li>
                    <li><strong>Departmental Audit Support:</strong> Preparing your records and representing your case during departmental audits (under Section 65).</li>
                </ul>
                <p>
                    Our proactive approach identifies discrepancies early, allowing you to rectify them voluntarily and avoid interest and penalties later.
                </p>
            </>
        )
    },
    'stock-audit': {
        title: 'Stock Audit Support Services',
        seoTitle: 'Stock Audit & Inventory Verification Support | Acharya',
        seoDescription: 'Professional stock audit support services to help businesses verify physical stock, ensure working capital compliance, and strengthen inventory controls.',
        keywords: 'stock audit, inventory verification, stock count, bank stock audit, inventory valuation, working capital compliance',
        icon: 'fa-boxes',
        content: (
            <>
                <p className="mb-6">
                    Accurate inventory management is the cornerstone of reliable financial reporting,
                    operational efficiency, and working capital optimization. Inventory discrepancies,
                    valuation errors, stock leakages, and weak controls can lead to financial losses,
                    cash flow challenges, lending issues, and reduced profitability. Our stock audit
                    support services help you strengthen inventory governance and build lender confidence.
                </p>

                {/* About Section */}
                <div className="bg-secondary-dark/50 border border-primary-accent/10 rounded-2xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Comprehensive Stock Audit Support</h3>
                    <p className="mb-4 text-boulder text-base">
                        Acharya Professional Accountants provides comprehensive Stock Audit Support Services
                        to help businesses prepare for, manage, and respond to inventory audits conducted by
                        banks, financial institutions, internal auditors, or management. Our team assists
                        in ensuring accurate inventory reporting, robust documentation, and seamless audit
                        readiness — whether for working capital assessments, statutory requirements, or
                        operational reviews.
                    </p>
                    <p className="font-semibold text-white mb-3 text-base">Our service offerings include:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 list-none mb-4 pl-0">
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Inventory Verification Support
                        </li>
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Bank Stock Audit Assistance
                        </li>
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Stock Reconciliation
                        </li>
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Inventory Valuation Review
                        </li>
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Inventory Process Assessment
                        </li>
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Stock Documentation Review
                        </li>
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Working Capital Compliance Support
                        </li>
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Inventory Risk Assessment
                        </li>
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Audit Readiness Support
                        </li>
                    </ul>
                    <p className="text-boulder text-base">
                        We combine deep inventory expertise with a practical business understanding to
                        deliver actionable recommendations that improve inventory accuracy, strengthen
                        controls, and enhance stakeholder confidence.
                    </p>
                </div>

                {/* Business Value Cards */}
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-white mb-6">How Stock Audit Helps Your Business</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Improves Inventory Accuracy</h4>
                            <p className="text-sm text-boulder">Ensures inventory records match actual stock positions, reducing discrepancies and improving reliability of financial reporting.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Strengthens Internal Controls</h4>
                            <p className="text-sm text-boulder">Identifies weaknesses in inventory handling, recording, and reporting processes, enabling targeted improvements.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Reduces Inventory Losses</h4>
                            <p className="text-sm text-boulder">Detects shrinkage, pilferage, wastage, and stock leakages that erode profitability and operational efficiency.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Enhances Working Capital Management</h4>
                            <p className="text-sm text-boulder">Provides reliable inventory data for better financial planning, funding decisions, and cash flow optimization.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Improves Financial Reporting</h4>
                            <p className="text-sm text-boulder">Ensures proper stock valuation and accurate financial statements, supporting audit and regulatory requirements.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Builds Lender Confidence</h4>
                            <p className="text-sm text-boulder">Supports banks and financial institutions with reliable inventory information, strengthening working capital facilities.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Reduces Operational Risks</h4>
                            <p className="text-sm text-boulder">Identifies process inefficiencies, bottlenecks, and inventory-related risks that impact business continuity.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Supports Better Business Decisions</h4>
                            <p className="text-sm text-boulder">Provides management with accurate inventory insights for strategic planning, procurement, and sales optimization.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Improves Profitability</h4>
                            <p className="text-sm text-boulder">Helps optimize inventory levels, reduce carrying costs, and minimize obsolescence — directly impacting the bottom line.</p>
                        </div>
                    </div>
                </div>

                {/* Audit Support Process */}
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-white mb-6">Our Stock Audit Support Process</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-secondary-dark/30 border border-white/5 rounded-xl p-5 flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary-accent text-dark-bg font-bold flex items-center justify-center flex-shrink-0 text-sm">1</div>
                            <div>
                                <h5 className="font-bold text-white mb-1 text-sm">Understanding Inventory Operations</h5>
                                <p className="text-xs text-boulder">Review of inventory nature, movement processes, storage practices, and industry-specific considerations.</p>
                            </div>
                        </div>
                        <div className="bg-secondary-dark/30 border border-white/5 rounded-xl p-5 flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary-accent text-dark-bg font-bold flex items-center justify-center flex-shrink-0 text-sm">2</div>
                            <div>
                                <h5 className="font-bold text-white mb-1 text-sm">Inventory Risk Assessment</h5>
                                <p className="text-xs text-boulder">Identification of risk areas, review of inventory controls, and assessment of stock reporting procedures.</p>
                            </div>
                        </div>
                        <div className="bg-secondary-dark/30 border border-white/5 rounded-xl p-5 flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary-accent text-dark-bg font-bold flex items-center justify-center flex-shrink-0 text-sm">3</div>
                            <div>
                                <h5 className="font-bold text-white mb-1 text-sm">Physical Stock Verification Support</h5>
                                <p className="text-xs text-boulder">Verification planning, sampling methodologies, physical stock count assistance, and exception identification.</p>
                            </div>
                        </div>
                        <div className="bg-secondary-dark/30 border border-white/5 rounded-xl p-5 flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary-accent text-dark-bg font-bold flex items-center justify-center flex-shrink-0 text-sm">4</div>
                            <div>
                                <h5 className="font-bold text-white mb-1 text-sm">Inventory Reconciliation</h5>
                                <p className="text-xs text-boulder">Physical stock vs book records reconciliation, ERP and inventory system review, variance analysis, and discrepancy investigation.</p>
                            </div>
                        </div>
                        <div className="bg-secondary-dark/30 border border-white/5 rounded-xl p-5 flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary-accent text-dark-bg font-bold flex items-center justify-center flex-shrink-0 text-sm">5</div>
                            <div>
                                <h5 className="font-bold text-white mb-1 text-sm">Inventory Valuation Review</h5>
                                <p className="text-xs text-boulder">Valuation methodology review, costing verification, obsolete and slow-moving stock assessment, and accounting standards compliance.</p>
                            </div>
                        </div>
                        <div className="bg-secondary-dark/30 border border-white/5 rounded-xl p-5 flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary-accent text-dark-bg font-bold flex items-center justify-center flex-shrink-0 text-sm">6</div>
                            <div>
                                <h5 className="font-bold text-white mb-1 text-sm">Audit Reporting &amp; Recommendations</h5>
                                <p className="text-xs text-boulder">Inventory audit observations, control weaknesses, risk findings, process improvement recommendations, and corrective action roadmap.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h5 className="font-bold text-white mb-1 text-sm">Experienced Audit Professionals</h5>
                            <p className="text-xs text-boulder">Extensive experience supporting inventory and stock audits across industries and business sizes.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h5 className="font-bold text-white mb-1 text-sm">Industry-Specific Expertise</h5>
                            <p className="text-xs text-boulder">Deep understanding of inventory-intensive industries — from manufacturing to retail, pharma to logistics.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h5 className="font-bold text-white mb-1 text-sm">Risk-Based Audit Approach</h5>
                            <p className="text-xs text-boulder">Focused identification of high-risk inventory areas, ensuring audit efforts deliver maximum value.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h5 className="font-bold text-white mb-1 text-sm">Practical Business Recommendations</h5>
                            <p className="text-xs text-boulder">Solutions that improve operations, inventory management, and overall business performance.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h5 className="font-bold text-white mb-1 text-sm">Timely Audit Support</h5>
                            <p className="text-xs text-boulder">Efficient coordination to meet lender and management requirements, with minimal disruption to business operations.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h5 className="font-bold text-white mb-1 text-sm">Strong Compliance Focus</h5>
                            <p className="text-xs text-boulder">Support aligned with accounting standards, regulatory requirements, and lender expectations.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h5 className="font-bold text-white mb-1 text-sm">Confidentiality &amp; Integrity</h5>
                            <p className="text-xs text-boulder">Protection of sensitive inventory and financial information with the highest professional standards.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h5 className="font-bold text-white mb-1 text-sm">Personalized Client Service</h5>
                            <p className="text-xs text-boulder">Dedicated support throughout the audit process, with responsive communication and practical guidance.</p>
                        </div>
                    </div>
                </div>

                {/* Industries We Serve */}
                <div className="mb-10 bg-secondary-dark/30 border border-white/5 rounded-2xl p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-4">Industries We Serve</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">Manufacturing</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">Trading &amp; Distribution</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">Retail</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">E-commerce</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">Pharmaceuticals</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">Healthcare</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">FMCG</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">Logistics &amp; Warehousing</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">Construction</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">Import &amp; Export Businesses</span>
                    </div>
                </div>

                {/* Partner Benefits */}
                <div className="mb-10">
                    <h3 className="text-xl font-bold text-white mb-4">Benefits of Working With Us</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0">
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Accurate inventory reporting</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Improved stock control systems</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Better inventory visibility</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Reduced inventory losses</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Enhanced working capital management</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Stronger internal controls</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Improved financial reporting accuracy</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Increased lender confidence</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Better operational efficiency</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Actionable inventory management insights</li>
                    </ul>
                </div>

                {/* FAQs */}
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border-b border-white/10 pb-4 cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-white group-hover:text-primary-accent transition-colors list-none">
                                <span>What is a stock audit?</span>
                                <span className="transition-transform group-open:rotate-180 text-primary-accent">▼</span>
                            </summary>
                            <p className="mt-3 text-boulder text-sm leading-relaxed">
                                A stock audit is a systematic examination of a business's inventory to verify the accuracy of stock records, assess valuation, identify discrepancies, and evaluate internal controls. It provides assurance to management, lenders, and stakeholders on inventory reliability.
                            </p>
                        </details>
                        <details className="group border-b border-white/10 pb-4 cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-white group-hover:text-primary-accent transition-colors list-none">
                                <span>Why do banks require stock audits?</span>
                                <span className="transition-transform group-open:rotate-180 text-primary-accent">▼</span>
                            </summary>
                            <p className="mt-3 text-boulder text-sm leading-relaxed">
                                Banks require stock audits to assess the accuracy of inventory reported as collateral for working capital facilities. It helps lenders evaluate the borrower's inventory management practices, identify risks, and ensure adequate security coverage for the loan.
                            </p>
                        </details>
                        <details className="group border-b border-white/10 pb-4 cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-white group-hover:text-primary-accent transition-colors list-none">
                                <span>How often should inventory audits be conducted?</span>
                                <span className="transition-transform group-open:rotate-180 text-primary-accent">▼</span>
                            </summary>
                            <p className="mt-3 text-boulder text-sm leading-relaxed">
                                Frequency depends on business size, inventory volume, and lender requirements. Typically, stock audits are conducted annually or half-yearly. However, businesses with high inventory turnover or working capital facilities may require quarterly or monthly reviews.
                            </p>
                        </details>
                        <details className="group border-b border-white/10 pb-4 cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-white group-hover:text-primary-accent transition-colors list-none">
                                <span>What are the common issues identified during stock audits?</span>
                                <span className="transition-transform group-open:rotate-180 text-primary-accent">▼</span>
                            </summary>
                            <p className="mt-3 text-boulder text-sm leading-relaxed">
                                Common issues include stock count discrepancies, valuation errors, obsolete inventory, pilferage, documentation gaps, reconciliation mismatches, and weak internal controls over inventory movement and recording.
                            </p>
                        </details>
                        <details className="group border-b border-white/10 pb-4 cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-white group-hover:text-primary-accent transition-colors list-none">
                                <span>How does a stock audit improve working capital management?</span>
                                <span className="transition-transform group-open:rotate-180 text-primary-accent">▼</span>
                            </summary>
                            <p className="mt-3 text-boulder text-sm leading-relaxed">
                                A stock audit provides accurate inventory data, helping businesses optimize stock levels, reduce carrying costs, and improve cash flow. It also supports better borrowing decisions by providing reliable collateral valuation for lenders.
                            </p>
                        </details>
                        <details className="group border-b border-white/10 pb-4 cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-white group-hover:text-primary-accent transition-colors list-none">
                                <span>How can professional stock audit support help businesses?</span>
                                <span className="transition-transform group-open:rotate-180 text-primary-accent">▼</span>
                            </summary>
                            <p className="mt-3 text-boulder text-sm leading-relaxed">
                                Professional stock audit support ensures accurate inventory records, identifies control weaknesses, reduces operational risks, and builds lender confidence. It also helps businesses improve inventory governance and make informed strategic decisions.
                            </p>
                        </details>
                    </div>
                </div>
            </>
        )
    },
    'audit-documentation': {
        title: 'Audit Documentation & Audit Readiness Support Services',
        seoTitle: 'Audit Documentation & Audit Readiness Support Services | Acharya',
        seoDescription: 'Professional Audit Documentation & Audit Readiness Support Services by Acharya Professional Accountants. Ensure compliance, reduce risks, and strengthen governance with expert audit documentation support.',
        keywords: 'Audit Documentation Services, Audit Readiness Support, Audit Compliance Documentation, Financial Documentation Review, Audit Support Services, Compliance Documentation, Audit Preparedness, Internal Documentation Review, Regulatory Compliance Support, Audit File Preparation, Corporate Compliance Services, Financial Audit Support',
        icon: 'fa-folder-open',
        content: (
            <>
                <p className="mb-6">
                    Proper documentation is the foundation of every successful audit, compliance review,
                    and financial reporting process. Incomplete, inaccurate, or poorly maintained records
                    can lead to audit delays, regulatory observations, compliance risks, and increased
                    costs. Our Audit Documentation Support helps you maintain organized records, improve
                    audit readiness, and strengthen corporate governance.
                </p>

                {/* About Section */}
                <div className="bg-secondary-dark/50 border border-primary-accent/10 rounded-2xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Comprehensive Audit Documentation &amp; Audit Readiness Support</h3>
                    <p className="mb-4 text-boulder text-base">
                        Acharya Professional Accountants provides comprehensive Audit Documentation and
                        Audit Readiness Support Services to help businesses prepare for statutory audits,
                        tax audits, GST audits, regulatory reviews, and management assessments. Our team
                        works with you to review existing records, identify documentation gaps, organize
                        financial and compliance documents, and create a structured audit-ready framework.
                    </p>
                    <p className="font-semibold text-white mb-3 text-base">Our service offerings include:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 list-none mb-4 pl-0">
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Audit Documentation Review
                        </li>
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Audit Readiness Assessment
                        </li>
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Financial Record Organization
                        </li>
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Compliance Documentation Support
                        </li>
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Statutory Audit Preparation
                        </li>
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Tax Audit Documentation Support
                        </li>
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> GST Audit Documentation Assistance
                        </li>
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Internal Control Documentation
                        </li>
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Regulatory Inspection Readiness
                        </li>
                        <li className="flex items-center gap-2 text-boulder text-base">
                            <span className="text-primary-accent font-bold">✓</span> Management Reporting Support
                        </li>
                    </ul>
                    <p className="text-boulder text-base">
                        We combine deep audit expertise with practical business understanding to deliver
                        structured, audit-ready documentation that supports efficient audits, stronger
                        compliance, and enhanced stakeholder confidence.
                    </p>
                </div>

                {/* Business Value Cards */}
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-white mb-6">How Audit Documentation Helps Your Business</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Enhances Audit Readiness</h4>
                            <p className="text-sm text-boulder">Ensures documents are organized and readily available for auditors, reducing last-minute scrambling and stress.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Reduces Audit Delays</h4>
                            <p className="text-sm text-boulder">Minimizes time spent locating records and responding to audit queries, accelerating the audit timeline.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Strengthens Regulatory Compliance</h4>
                            <p className="text-sm text-boulder">Supports compliance with statutory, tax, and regulatory requirements through well-maintained records.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Improves Internal Controls</h4>
                            <p className="text-sm text-boulder">Promotes better documentation practices, accountability, and transparency across the organization.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Reduces Business Risks</h4>
                            <p className="text-sm text-boulder">Helps identify documentation gaps that may create compliance exposures, financial risks, or legal issues.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Supports Better Decision Making</h4>
                            <p className="text-sm text-boulder">Provides management with reliable and accessible business information for strategic planning.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Increases Stakeholder Confidence</h4>
                            <p className="text-sm text-boulder">Demonstrates professionalism, transparency, and governance to investors, lenders, and partners.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Facilitates Funding and Due Diligence</h4>
                            <p className="text-sm text-boulder">Supports investor reviews, bank financing, mergers, acquisitions, and strategic transactions with clean documentation.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h4 className="font-bold text-primary-accent mb-2 text-base">Improves Operational Efficiency</h4>
                            <p className="text-sm text-boulder">Creates standardized documentation processes across departments, saving time and reducing errors.</p>
                        </div>
                    </div>
                </div>

                {/* Audit Documentation Process */}
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-white mb-6">Our Audit Documentation Process</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-secondary-dark/30 border border-white/5 rounded-xl p-5 flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary-accent text-dark-bg font-bold flex items-center justify-center flex-shrink-0 text-sm">1</div>
                            <div>
                                <h5 className="font-bold text-white mb-1 text-sm">Documentation Assessment</h5>
                                <p className="text-xs text-boulder">Review of existing records, identification of documentation gaps, evaluation of record-keeping practices, and compliance readiness assessment.</p>
                            </div>
                        </div>
                        <div className="bg-secondary-dark/30 border border-white/5 rounded-xl p-5 flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary-accent text-dark-bg font-bold flex items-center justify-center flex-shrink-0 text-sm">2</div>
                            <div>
                                <h5 className="font-bold text-white mb-1 text-sm">Audit Requirement Mapping</h5>
                                <p className="text-xs text-boulder">Understanding audit requirements, regulatory documentation review, financial reporting support, and compliance documentation expectations.</p>
                            </div>
                        </div>
                        <div className="bg-secondary-dark/30 border border-white/5 rounded-xl p-5 flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary-accent text-dark-bg font-bold flex items-center justify-center flex-shrink-0 text-sm">3</div>
                            <div>
                                <h5 className="font-bold text-white mb-1 text-sm">Documentation Organization</h5>
                                <p className="text-xs text-boulder">Structuring financial records, supporting document categorization, digital and physical document management, and audit trail development.</p>
                            </div>
                        </div>
                        <div className="bg-secondary-dark/30 border border-white/5 rounded-xl p-5 flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary-accent text-dark-bg font-bold flex items-center justify-center flex-shrink-0 text-sm">4</div>
                            <div>
                                <h5 className="font-bold text-white mb-1 text-sm">Compliance Documentation Review</h5>
                                <p className="text-xs text-boulder">Statutory compliance records, tax documentation, GST documentation, regulatory filings, and internal control documentation review.</p>
                            </div>
                        </div>
                        <div className="bg-secondary-dark/30 border border-white/5 rounded-xl p-5 flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary-accent text-dark-bg font-bold flex items-center justify-center flex-shrink-0 text-sm">5</div>
                            <div>
                                <h5 className="font-bold text-white mb-1 text-sm">Audit Readiness Review</h5>
                                <p className="text-xs text-boulder">Verification of document completeness, identification of missing information, audit preparedness testing, and management readiness support.</p>
                            </div>
                        </div>
                        <div className="bg-secondary-dark/30 border border-white/5 rounded-xl p-5 flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary-accent text-dark-bg font-bold flex items-center justify-center flex-shrink-0 text-sm">6</div>
                            <div>
                                <h5 className="font-bold text-white mb-1 text-sm">Reporting &amp; Recommendations</h5>
                                <p className="text-xs text-boulder">Documentation gap report, compliance observations, process improvement recommendations, and audit readiness roadmap.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h5 className="font-bold text-white mb-1 text-sm">Experienced Audit &amp; Compliance Professionals</h5>
                            <p className="text-xs text-boulder">Extensive experience supporting audits, regulatory reviews, and compliance documentation across industries.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h5 className="font-bold text-white mb-1 text-sm">Structured Documentation Methodology</h5>
                            <p className="text-xs text-boulder">Systematic approach to organizing, reviewing, and maintaining records for audit readiness.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h5 className="font-bold text-white mb-1 text-sm">Compliance-Focused Expertise</h5>
                            <p className="text-xs text-boulder">Deep understanding of audit and regulatory expectations across statutory, tax, and GST frameworks.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h5 className="font-bold text-white mb-1 text-sm">Risk-Based Assessment</h5>
                            <p className="text-xs text-boulder">Identification of documentation weaknesses and compliance exposures before they become issues.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h5 className="font-bold text-white mb-1 text-sm">Practical Business Solutions</h5>
                            <p className="text-xs text-boulder">Recommendations designed for real-world implementation, not theoretical compliance.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h5 className="font-bold text-white mb-1 text-sm">Confidentiality &amp; Integrity</h5>
                            <p className="text-xs text-boulder">Secure handling of sensitive business information with the highest professional standards.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h5 className="font-bold text-white mb-1 text-sm">Timely Support</h5>
                            <p className="text-xs text-boulder">Efficient preparation ahead of audits, inspections, and regulatory deadlines.</p>
                        </div>
                        <div className="bg-secondary-dark/40 border border-white/5 rounded-xl p-5 hover:border-primary-accent/30 transition-all duration-300">
                            <h5 className="font-bold text-white mb-1 text-sm">Personalized Client Assistance</h5>
                            <p className="text-xs text-boulder">Dedicated support tailored to each business's unique documentation and compliance requirements.</p>
                        </div>
                    </div>
                </div>

                {/* Industries We Serve */}
                <div className="mb-10 bg-secondary-dark/30 border border-white/5 rounded-2xl p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-4">Industries We Serve</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">Manufacturing</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">Trading &amp; Distribution</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">Information Technology</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">Healthcare</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">Construction &amp; Real Estate</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">Professional Services</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">E-commerce</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">Logistics</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">Hospitality</span>
                        <span className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-full text-xs text-boulder hover:border-primary-accent/40 hover:text-white transition-all">Startups &amp; Emerging Businesses</span>
                    </div>
                </div>

                {/* Partner Benefits */}
                <div className="mb-10">
                    <h3 className="text-xl font-bold text-white mb-4">Benefits of Working With Us</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0">
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Better audit preparedness</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Organized and accessible documentation</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Reduced audit timelines</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Improved compliance management</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Stronger internal controls</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Enhanced governance standards</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Better stakeholder confidence</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Improved operational efficiency</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Reduced compliance risks</li>
                        <li className="flex items-center gap-2 text-boulder text-base"><span className="text-primary-accent font-bold">✓</span> Professional audit support</li>
                    </ul>
                </div>

                {/* FAQs */}
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border-b border-white/10 pb-4 cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-white group-hover:text-primary-accent transition-colors list-none">
                                <span>What is Audit Documentation Support?</span>
                                <span className="transition-transform group-open:rotate-180 text-primary-accent">▼</span>
                            </summary>
                            <p className="mt-3 text-boulder text-sm leading-relaxed">
                                Audit Documentation Support refers to professional assistance in organizing, reviewing, and maintaining financial, tax, and compliance records to ensure they are audit-ready. It includes gap identification, record structuring, and readiness assessment to support efficient audits and regulatory reviews.
                            </p>
                        </details>
                        <details className="group border-b border-white/10 pb-4 cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-white group-hover:text-primary-accent transition-colors list-none">
                                <span>Why is audit documentation important?</span>
                                <span className="transition-transform group-open:rotate-180 text-primary-accent">▼</span>
                            </summary>
                            <p className="mt-3 text-boulder text-sm leading-relaxed">
                                Audit documentation is the foundation of every successful audit. Well-organized records reduce audit delays, support compliance, identify risks early, and demonstrate transparency to auditors, regulators, and stakeholders. Poor documentation can lead to audit observations, penalties, and reputational damage.
                            </p>
                        </details>
                        <details className="group border-b border-white/10 pb-4 cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-white group-hover:text-primary-accent transition-colors list-none">
                                <span>How does documentation impact audit outcomes?</span>
                                <span className="transition-transform group-open:rotate-180 text-primary-accent">▼</span>
                            </summary>
                            <p className="mt-3 text-boulder text-sm leading-relaxed">
                                Complete and organized documentation enables auditors to conduct reviews efficiently, reduces the likelihood of adverse findings, and supports a smooth audit process. Incomplete or disorganized records often result in extended audit timelines, additional queries, and regulatory observations.
                            </p>
                        </details>
                        <details className="group border-b border-white/10 pb-4 cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-white group-hover:text-primary-accent transition-colors list-none">
                                <span>What documents are typically reviewed during audits?</span>
                                <span className="transition-transform group-open:rotate-180 text-primary-accent">▼</span>
                            </summary>
                            <p className="mt-3 text-boulder text-sm leading-relaxed">
                                Auditing typically reviews financial statements, supporting ledgers, tax returns, GST filings, invoices, bank statements, contracts, statutory registers, board minutes, internal control documentation, and regulatory compliance records. The exact scope depends on the type of audit and regulatory framework.
                            </p>
                        </details>
                        <details className="group border-b border-white/10 pb-4 cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-white group-hover:text-primary-accent transition-colors list-none">
                                <span>How can businesses improve audit readiness?</span>
                                <span className="transition-transform group-open:rotate-180 text-primary-accent">▼</span>
                            </summary>
                            <p className="mt-3 text-boulder text-sm leading-relaxed">
                                Businesses can improve audit readiness by maintaining organized financial records, conducting periodic documentation reviews, addressing gaps proactively, ensuring compliance with statutory requirements, and engaging professional audit readiness support services to identify and resolve issues before the audit.
                            </p>
                        </details>
                        <details className="group border-b border-white/10 pb-4 cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-white group-hover:text-primary-accent transition-colors list-none">
                                <span>How can professional documentation support reduce audit risks?</span>
                                <span className="transition-transform group-open:rotate-180 text-primary-accent">▼</span>
                            </summary>
                            <p className="mt-3 text-boulder text-sm leading-relaxed">
                                Professional documentation support helps identify gaps, organize records, and ensure compliance with audit and regulatory expectations. This reduces the risk of audit observations, penalties, and delays, while strengthening governance and stakeholder confidence.
                            </p>
                        </details>
                    </div>
                </div>
            </>
        )
    },
    'rectification-audit-queries': {
        title: 'Rectification of Audit Queries',
        seoTitle: 'Audit Query Resolution and Rectification Services',
        seoDescription: 'Expert assistance in resolving and rectifying complex audit queries raised by statutory or tax auditors.',
        keywords: 'audit queries, audit objections, finding rectification, accounting correction, compliance fix',
        icon: 'fa-clipboard-check',
        content: (
            <>
                <p className="mb-4">
                    Receiving a long list of audit observations or queries can be overwhelming. Some queries may stem from valid errors, while others may be due to a lack of explanation. We help you systematically address, rectify, and reply to audit queries to close the audit cleanly.
                </p>
                <h3 className="text-xl font-bold text-white mb-3">Our Approach</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                    <li><strong>Root Cause Analysis:</strong> Understanding why the query was raised—is it a process gap, a documentation miss, or an accounting error?</li>
                    <li><strong>Corrective Action:</strong> Passing necessary rectification entries in the books to fix financial errors.</li>
                    <li><strong>Justification Preparation:</strong> Drafting technical replies citing relevant accounting standards or tax laws to justify your position.</li>
                    <li><strong>Process Improvement:</strong> Suggesting controls to ensure the same observation does not recur in future audits.</li>
                </ul>
                <p>
                    We ensure that your audit report is as clean as possible, devoid of serious qualifications or adverse remarks.
                </p>
            </>
        )
    }
};

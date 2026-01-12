export const gstServices = {
    // ==========================================
    // 1. REGISTRATION & PROFILE MANAGEMENT (Hub)
    // ==========================================
    'registration-profile-management': {
        title: 'GST Registration & Profile Management',
        seoTitle: 'GST Registration, Amendment & Cancellation Services in Kerala',
        seoDescription: 'Complete GST profile management: New Registration, Amendments (Address/Partners), Cancellation, Revocation, and Migration services.',
        keywords: 'gst registration, gst amendment, gst cancellation, revocation of gst, gst migration, additional place of business',
        icon: 'fa-id-card',
        content: (
            <>
                <p className="mb-4">
                    Managing your GST profile is a lifecycle process—from the day you start business to the day you wind up or expand. We handle all interaction with the GST portal regarding your registration status.
                </p>
            </>
        ),
        subServices: [
            { title: 'GST Registration (Regular/Composition)', slug: 'gst-registration-regular', desc: 'New registration for Proprietors, Partnerships, and Companies.' },
            { title: 'Additional Place of Business', slug: 'additional-place-of-business', desc: 'Adding godowns, branches, or new offices to your GSTIN.' },
            { title: 'GST Amendment', slug: 'gst-amendment-details', desc: 'Updating Address, Mobile, Bank Account, or Partners.' },
            { title: 'Migration to Regular Scheme', slug: 'composition-to-regular', desc: 'Switching from Composition to Regular scheme for ITC benefits.' },
            { title: 'Cancellation & Revocation', slug: 'gst-cancellation-service', desc: 'Surrender of GSTIN or restoring cancelled registration.' }
        ]
    },
    // --- Sub-Services for Registration ---
    'gst-registration-regular': {
        title: 'GST Registration (Regular / Composition)',
        seoTitle: 'New GST Registration Services | Regular vs Composition Scheme',
        seoDescription: 'Expert support for new GST registration. We help you choose between Regular and Composition schemes based on your business model.',
        keywords: 'gst registration online, new gst registration, composition scheme eligibility, regular gst registration',
        icon: 'fa-user-plus',
        content: (
            <>
                <p className="mb-4">Getting a GST identification number (GSTIN) is mandatory for businesses with turnover above ₹40 Lakhs (Goods) or ₹20 Lakhs (Services), or for those selling inter-state.</p>
                <h3 className="text-xl font-bold text-white mb-3">Which Scheme to Choose?</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                    <li><strong>Regular Scheme:</strong> Best for B2B businesses. You can collect tax and claim Input Tax Credit (ITC). Tax rates vary (5%, 12%, 18%, 28%).</li>
                    <li><strong>Composition Scheme:</strong> Best for B2C retailers/traders with turnover &lt; ₹1.5 Cr. Pay a flat low rate (1%) on turnover but cannot collect tax or claim ITC.</li>
                </ul>
            </>
        )
    },
    'additional-place-of-business': {
        title: 'Additional Place of Business',
        seoTitle: 'Register Additional Place of Business in GST | Godown Registration',
        seoDescription: 'Add new branches, godowns, or warehouses to your existing GST registration compliant with e-way bill rules.',
        keywords: 'add godown in gst, additional place of business, gst branch registration, warehouse registration gst',
        icon: 'fa-warehouse',
        content: (
            <>
                <p className="mb-4">If you store goods in a godown or open a new branch within the same state, you must declare it as an 'Additional Place of Business' (APOB) in your GST registration.</p>
                <p className="mb-4"><strong>Why it matters?</strong> If a vehicle is intercepted and the destination (your new godown) is not updated in GST, the goods can be seized, and heavy penalties imposed (200% of tax).</p>
            </>
        )
    },
    'gst-amendment-details': {
        title: 'GST Amendment Services',
        seoTitle: 'Update GST Registration Details | Address & Partner Change',
        seoDescription: 'Modify your GST details quickly. Core amendments (Name, Address) and Non-Core amendments (Mobile, Email, Bank).',
        keywords: 'gst amendment core field, change gst address, change partner in gst, update bank account gst',
        icon: 'fa-edit',
        content: (
            <>
                <p className="mb-4">Business details change, and your GST profile must reflect reality. We handle both types of amendments:</p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                    <li><strong>Core Fields (Requires Approval):</strong> Changing Trade Name, Principal Place of Business, or Addition/Retirement of Partners.</li>
                    <li><strong>Non-Core Fields (Auto-Approval):</strong> Updating Authorized Signatory details, Mobile/Email, Bank Accounts, or HSN codes.</li>
                </ul>
            </>
        )
    },
    'composition-to-regular': {
        title: 'Migration: Composition to Regular',
        seoTitle: 'Migrate from Composition to Regular GST Scheme',
        seoDescription: 'Assistance in switching from Composition to Regular scheme. Claim ITC on opening stock via ITC-01.',
        keywords: 'composition to regular migration, itc-01 filing, switch gst scheme, claim itc on stock',
        icon: 'fa-exchange-alt',
        content: (
            <>
                <p className="mb-4">Growing businesses often outgrow the Composition Scheme (Turnover limit ₹1.5 Cr) or need to switch to Regular Scheme to serve B2B clients.</p>
                <h3 className="text-xl font-bold text-white mb-3">Key Requirement: ITC-01</h3>
                <p className="mb-4">When you switch, you are entitled to claim Input Tax Credit on the stock held on the day immediately preceding the switch. We assist in filing <strong>Form ITC-01</strong> to ensure you don't lose money on your existing inventory.</p>
            </>
        )
    },
    'gst-cancellation-service': {
        title: 'GST Cancellation & Revocation',
        seoTitle: 'Surrender GST & Revoke Cancelled GSTIN',
        seoDescription: 'Properly close your GST registration or restore a cancelled GSTIN. We handle REG-16 and REG-21 filings.',
        keywords: 'surrender gst, cancel gst registration, revoke gst cancellation, reg-21 application, reg-16 filing',
        icon: 'fa-ban',
        content: (
            <>
                <h3 className="text-xl font-bold text-white mb-3">Cancellation (Surrender)</h3>
                <p className="mb-4">Closing business? You must file for cancellation. Crucially, you must reverse ITC on closing stock and capital goods in the Final Return (GSTR-10).</p>
                <h3 className="text-xl font-bold text-white mb-3">Revocation (Restoration)</h3>
                <p className="mb-4">If your GST was cancelled suo-moto for non-filing, you have a limited window to apply for revocation. We help file all pending returns, pay dues, and present a case to the officer for restoration.</p>
            </>
        )
    },

    // ==========================================
    // 2. RETURN FILING & COMPLIANCE (Hub)
    // ==========================================
    'return-filing-compliance': {
        title: 'GST Return Filing & Periodic Compliance',
        seoTitle: 'Monthly GST Return Filing & GSTR-9 Annual Return Services',
        seoDescription: 'Expert filing of GSTR-1, GSTR-3B, Nil Returns, and Annual Returns (GSTR-9/9C). Accurate, timely, and notice-free compliance.',
        keywords: 'gst return filing, gstr 1, gstr 3b, gstr 9 annual return, gstr 9c audit, nil gst return',
        icon: 'fa-calendar-check',
        content: (
            <>
                <p className="mb-4">
                    Timely filing is the heart of GST compliance. Delays lead to late fees, interest, and credit blockage for your customers. We ensure your returns are filed accurately and on time.
                </p>
            </>
        ),
        subServices: [
            { title: 'Monthly/Quarterly Filing', slug: 'monthly-quarterly-filing', desc: 'End-to-end filing management for Regular & QRMP taxpayers.' },
            { title: 'GSTR-1 (Outward Supplies)', slug: 'gstr-1-filing-service', desc: 'Detailed B2B and B2C sales reporting.' },
            { title: 'GSTR-3B (Summary Return)', slug: 'gstr-3b-filing-service', desc: 'Tax calculation, ITC offset, and payment.' },
            { title: 'Nil GST Return', slug: 'nil-gst-return', desc: 'Mandatory filing for zero turnover months.' },
            { title: 'GSTR-9 (Annual Return)', slug: 'gstr-9-annual', desc: 'Consolidated annual return for the financial year.' },
            { title: 'GSTR-9C (Reconciliation)', slug: 'gstr-9c-reconciliation', desc: 'Self-certified reconciliation statement.' }
        ]
    },
    // --- Sub-Services for Returns ---
    'monthly-quarterly-filing': {
        title: 'Monthly / Quarterly Return Filing',
        seoTitle: 'GST Filing Services | Regular & QRMP Scheme Support',
        seoDescription: 'We manage your complete GST filing calendar. Choose between Monthly filing or Quarterly Return Monthly Payment (QRMP) scheme.',
        keywords: 'monthly gst filing, qrmp scheme, iff facility, gst compliance calendar',
        icon: 'fa-calendar-alt',
        content: (
            <>
                <p className="mb-4">We assess your turnover and cash flow needs to recommend the best filing frequency. For small taxpayers (Turnover &lt; ₹5 Cr), the <strong>QRMP Scheme</strong> allows quarterly filing (reducing compliance cost) while allowing monthly tax payment.</p>
            </>
        )
    },
    'gstr-1-filing-service': {
        title: 'GSTR-1 (Outward Supplies)',
        seoTitle: 'GSTR-1 Filing Service | B2B & B2C Invoice Reporting',
        seoDescription: 'Accurate GSTR-1 filing to ensure your customers receive Input Tax Credit. We handle B2B, B2C Large, and Credit Notes.',
        keywords: 'gstr-1 filing, gst sales return, b2b invoice upload, credit note reporting',
        icon: 'fa-file-invoice',
        content: (
            <>
                <p className="mb-4">GSTR-1 is your declaration of sales. Accuracy here is critical because what you report here auto-populates in your customer's GSTR-2B.</p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                    <li><strong>B2B Invoices:</strong> Invoice-wise reporting for valid ITC to buyers.</li>
                    <li><strong>B2C Others:</strong> State-wise summary for retail sales.</li>
                    <li><strong>Credit/Debit Notes:</strong> Adjusting tax liability for returns and corrections.</li>
                </ul>
            </>
        )
    },
    'gstr-3b-filing-service': {
        title: 'GSTR-3B (Summary Return)',
        seoTitle: 'GSTR-3B Filing & Tax Payment Service',
        seoDescription: 'Preparation and filing of GSTR-3B. We calculate tax liability, validate eligible ITC, and generate challans.',
        keywords: 'gstr-3b filing, gst tax payment, input tax credit claim, gst offset rules',
        icon: 'fa-file-contract',
        content: (
            <>
                <p className="mb-4">GSTR-3B is where actual tax is paid. Use of Input Tax Credit (ITC) to pay tax is governed by strict rules (IGST first, then CGST/SGST).</p>
                <p>We ensure you maximize ITC utilization to minimize cash outflow, while strictly adhering to Rule 36(4) and Section 17(5) to avoid excess claims.</p>
            </>
        )
    },
    'nil-gst-return': {
        title: 'Nil GST Return Filing',
        seoTitle: 'File Nil GST Return Online | Avoid Late Fees',
        seoDescription: 'Quick filing for Nil GSTR-1 and GSTR-3B. Mandatory compliance even with zero sales or purchases.',
        keywords: 'nil return gst, zero turnover return, gstr-1 nil, gstr-3b nil',
        icon: 'fa-minus-circle',
        content: (
            <>
                <p className="mb-4">Many businesses make the mistake of ignoring GST filings when they have no business. This leads to:</p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                    <li>Late fees of up to ₹50/day.</li>
                    <li>Blocking of E-way bill generation.</li>
                    <li>Suo-moto cancellation of registration.</li>
                </ul>
                <p>We offer a nominal fee service to keep your compliance green even during dormant periods.</p>
            </>
        )
    },
    'gstr-9-annual': {
        title: 'GSTR-9 (Annual Return)',
        seoTitle: 'GSTR-9 Annual Return Filing Services',
        seoDescription: 'Consolidated annual return filing. Match your monthly returns with your financial statements.',
        keywords: 'gstr-9 filing, annual return gst, gst consolidation, annual tax summary',
        icon: 'fa-book',
        content: (
            <>
                <p className="mb-4">GSTR-9 is a compilation of all 12/4 monthly returns filed. It is the last opportunity to declare any sales missed in monthly returns or reverse excessive ITC claimed.</p>
                <p>Reporting incorrect data in GSTR-9 can trigger departmental audits. We verify your books vs. filed returns before submission.</p>
            </>
        )
    },
    'gstr-9c-reconciliation': {
        title: 'GSTR-9C (Reconciliation)',
        seoTitle: 'GSTR-9C Self-Certified Reconciliation Service',
        seoDescription: 'Preparation of GSTR-9C reconciliation statement matching audted financials with GST returns.',
        keywords: 'gstr-9c filing, gst audit reconciliation, form 9c, gst reconciliation statement',
        icon: 'fa-check-circle',
        content: (
            <>
                <p className="mb-4">For taxpayers with turnover &gt; ₹5 Cr, filing a self-certified Reconciliation Statement (GSTR-9C) is mandatory.</p>
                <p>This form reconciles the Gross Turnover and Taxable Turnover as per your Audited Financial Statements with the figures reported in GSTR-9, explaining every ruin of difference.</p>
            </>
        )
    },

    // ==========================================
    // 3. RECONCILIATION & REVIEW (Hub)
    // ==========================================
    'reconciliation-review': {
        title: 'GST Reconciliation & Review',
        seoTitle: 'GST Reconciliation Services | GSTR-2B ITC Matching & Validation',
        seoDescription: 'Eliminate GST notices with our deep-dive reconciliations. Sales vs GSTR-1, Purchase vs GSTR-2B, and ITC eligibility review.',
        keywords: 'gst reconciliation, gstr 2b matching, itc validation, vendor compliance, books vs gst return',
        icon: 'fa-check-double',
        content: (
            <>
                <p className="mb-4">
                    Mismatches between your books and the GST portal are the #1 cause of tax notices. Our multi-level reconciliation process protects you from excess payments and litigation.
                </p>
            </>
        ),
        subServices: [
            { title: 'Sales vs GSTR-1', slug: 'sales-vs-gstr1', desc: 'Ensuring all sales invoices are reported to avoid penalties.' },
            { title: 'Purchase vs GSTR-2B', slug: 'purchase-vs-gstr2b', desc: 'Maximizing ITC claim by matching purchase register with portal.' },
            { title: 'ITC Eligibility & Review', slug: 'itc-eligibility-review', desc: 'Filtering blocked credits (Sec 17(5)) to avoid interest.' },
            { title: 'Vendor Compliance', slug: 'vendor-compliance-tracking', desc: 'Identify non-compliant vendors blocking your credit.' },
            { title: 'Books vs Returns', slug: 'books-vs-returns-rec', desc: 'Year-end financial statement alignment.' }
        ]
    },
    // --- Sub-Services for Reconciliation ---
    'sales-vs-gstr1': {
        title: 'Sales vs GSTR-1 Reconciliation',
        seoTitle: 'Sales Register vs GSTR-1 Reconciliation',
        seoDescription: 'Detect unfiled invoices and mismatches between your Sales Ledger and GSTR-1 data.',
        keywords: 'sales reconciliation, gstr-1 matching, turnover mismatch, gst liability check',
        icon: 'fa-file-export',
        content: (
            <>
                <p className="mb-4">Under-reporting sales leads to tax evasion notices. Over-reporting leads to excess tax payment. We match every invoice in your Sales Register with the GSTR-1 data to ensure 100% accuracy in reported turnover.</p>
            </>
        )
    },
    'purchase-vs-gstr2b': {
        title: 'Purchase vs GSTR-2B Reconciliation',
        seoTitle: 'GSTR-2B vs Purchase Register Matching Tool',
        seoDescription: 'Ensure you only claim ITC available in GSTR-2B. Avoid 100% penalties for excess claims.',
        keywords: 'gstr-2b reconciliation, purchase matching, itc claim check, input tax credit comparison',
        icon: 'fa-file-import',
        content: (
            <>
                <p className="mb-4">You cannot claim ITC unless it appears in your GSTR-2B (auto-generated from your supplier's GSTR-1). We perform line-item matching to tell you exactly which invoices are missing, allowing you to follow up with vendors before filing GSTR-3B.</p>
            </>
        )
    },
    'itc-eligibility-review': {
        title: 'ITC Eligibility & Blocked Credit',
        seoTitle: 'Input Tax Credit Eligibility & Section 17(5) Review',
        seoDescription: 'Review of ITC claims to filter out ineligible credits on cars, food, construction, etc.',
        keywords: 'blocked input tax credit, section 17(5) gst, ineligible itc, reversal of itc',
        icon: 'fa-ban',
        content: (
            <>
                <p className="mb-4">Just because tax is paid, doesn't mean credit is available. Section 17(5) blocks credit on items like passenger vehicles, food & beverages, and construction of buildings. We review your purchase ledger to filter these out, preventing future demand notices with 24% interest.</p>
            </>
        )
    },
    'vendor-compliance-tracking': {
        title: 'Vendor Compliance Tracking',
        seoTitle: 'Vendor GST Compliance Monitoring Service',
        seoDescription: 'Track which vendors are filing on time and which are defaulting. Protect your Input Tax Credit.',
        keywords: 'vendor compliance, supplier gst filing status, compliant vendor list, itc loss prevention',
        icon: 'fa-users-slash',
        content: (
            <>
                <p className="mb-4">Your ITC depends on your vendor's behaviour. If they don't file, you lose money. We generate monthly reports highlighting "Defaulter Vendors" so you can hold their payments until they comply.</p>
            </>
        )
    },
    'books-vs-returns-rec': {
        title: 'Books of Accounts vs GST Returns',
        seoTitle: 'Financial Statements vs GST Returns Reconciliation',
        seoDescription: 'Year-end reconciliation of Audited Financials with GSTR-9. Identify gaps before tax authorities do.',
        keywords: 'books vs gstr-9, financial statement reconciliation, turnonver mismatch audit, gst annual check',
        icon: 'fa-balance-scale',
        content: (
            <>
                <p className="mb-4">Before finalizing your Balance Sheet, it is vital to ensure that the Turnover and Tax Liability matches your GST Returns. We identify timing differences and rectification entries needed to align both records.</p>
            </>
        )
    },

    // ==========================================
    // 4. COMPLIANCE & ADVISORY (Hub)
    // ==========================================
    'compliance-advisory': {
        title: 'GST Compliance & Advisory',
        seoTitle: 'GST Advisory Services | HSN Codes, RCM & E-Invoicing',
        seoDescription: 'Professional advice on safe GST practices. Classify goods correctly, handle RCM, and implement E-Invoicing and E-Way Bills.',
        keywords: 'gst advisory, hsn code classification, gst rate advisory, rcm compliance, e-invoicing, e-way bill',
        icon: 'fa-gavel',
        content: (
            <>
                <p className="mb-4">
                    The complexity of GST lies in its interpretation. Correct classification and process adherence prevent future liabilities.
                </p>
            </>
        ),
        subServices: [
            { title: 'GST Health Check', slug: 'gst-health-check', desc: 'Comprehensive diagnostic review of your compliance.' },
            { title: 'Classification (HSN/SAC)', slug: 'hsn-sac-classification', desc: 'Correct tax rate determination.' },
            { title: 'Place of Supply', slug: 'place-of-supply', desc: 'IGST vs CGST/SGST determination logic.' },
            { title: 'RCM Compliance', slug: 'rcm-compliance', desc: 'Reverse Charge Mechanism liability handling.' },
            { title: 'E-Invoicing & E-Way Bill', slug: 'e-invoicing-advisory', desc: 'Implementation for turnover > ₹5 Cr.' }
        ]
    },
    // --- Sub-Services for Advisory ---
    'gst-health-check': {
        title: 'GST Compliance Health Check',
        seoTitle: 'GST Compliance Health Check & Audit',
        seoDescription: 'A mock audit of your GST records to identify risks, exposure, and process gaps.',
        keywords: 'gst health check, mock gst audit, compliance review, tax risk assessment',
        icon: 'fa-heartbeat',
        content: (
            <>
                <p className="mb-4">Prevention is better than cure. Our Health Check is a diagnostic review of your returns, internal controls, and documentation. We highlight red flags that could trigger a departmental audit, giving you time to fix them voluntarily.</p>
            </>
        )
    },
    'hsn-sac-classification': {
        title: 'Classification (HSN / SAC)',
        seoTitle: 'GST HSN and SAC Code Classification Service',
        seoDescription: 'Expert opinion on correct HSN codes for goods and SAC codes for services to determine accurate tax rates.',
        keywords: 'hsn code search, sac code, gst classification, gst tax rate dispute',
        icon: 'fa-list-ol',
        content: (
            <>
                <p className="mb-4">Applying a 5% rate on an item that actually attracts 18% is a massive risk. We provide technical opinions on classification based on the Customs Tariff Act and recent Advance Ruling judgments.</p>
            </>
        )
    },
    'place-of-supply': {
        title: 'Place of Supply Determination',
        seoTitle: 'Place of Supply Advisory | IGST vs CGST',
        seoDescription: 'Determine whether to charge IGST or CGST/SGST. Complex rules for "Bill To - Ship To" and service exports.',
        keywords: 'place of supply rules, igst vs cgst, bill to ship to model, gst on exports',
        icon: 'fa-map-marker-alt',
        content: (
            <>
                <p className="mb-4">Charging IGST instead of CGST/SGST (or vice versa) is considered an incorrect payment. The rules are complex for services (e.g., training, events, cargo). We analyze your transaction flows to set the correct tax type.</p>
            </>
        )
    },
    'rcm-compliance': {
        title: 'Reverse Charge Mechanism (RCM)',
        seoTitle: 'RCM Compliance & Payment Advisory',
        seoDescription: 'Identify RCM liabilities on GTA, Legal Services, and Imports. Self-invoice and pay tax to claim credit.',
        keywords: 'reverse charge mechanism, gst on lawyer fees, gst on transport, rcm section 9(3)',
        icon: 'fa-retweet',
        content: (
            <>
                <p className="mb-4">Under RCM, the receiver pays the tax. Common misses include Legal Fees, Goods Transport Agency (GTA) payments, and Security Services. We help you identify these expenses, pay the tax in cash, and claim it back as credit.</p>
            </>
        )
    },
    'e-invoicing-advisory': {
        title: 'E-Invoicing & E-Way Bill',
        seoTitle: 'E-Invoicing Implementation & E-Way Bill Support',
        seoDescription: 'Advisory for E-Invoicing mandates (Turnover > 5 Cr) and E-Way bill generation rules.',
        keywords: 'e-invoice implementation, e-way bill rules, gst api integration, e-invoice portal',
        icon: 'fa-qrcode',
        content: (
            <>
                <p className="mb-4">E-Invoicing is now mandatory for B2B supplies if turnover exceeds ₹5 Cr. Non-compliance means your invoice is invalid and your buyer loses ITC. We guide you on selecting software and integrating with the IRP portal.</p>
            </>
        )
    },

    // ==========================================
    // 5. SPECIALIZED SERVICES (Hub)
    // ==========================================
    'specialized-gst-services': {
        title: 'Specialized GST Services',
        seoTitle: 'Industry Specific GST Services | Startups, Construction & Exporters',
        seoDescription: 'Tailored GST solutions for specific industries including Real Estate, E-Commerce, Exporters, and Startups.',
        keywords: 'gst for startups, ecommerce gst compliance, works contract gst, export gst zero rated, composition dealers',
        icon: 'fa-industry',
        content: (
            <>
                <p className="mb-4">
                    One size does not fit all. Different sectors have unique notifications and exemptions.
                </p>
            </>
        ),
        subServices: [
            { title: 'Startups & New Business', slug: 'gst-startups', desc: 'Guidance on voluntary registration and initial compliance.' },
            { title: 'E-Commerce Sellers', slug: 'gst-ecommerce', desc: 'TCS compliance for Amazon/Flipkart sellers.' },
            { title: 'Exporters', slug: 'gst-exporters', desc: 'Zero-rated supplies, LUT, and Refund management.' },
            { title: 'Works Contract', slug: 'gst-works-contract', desc: 'Complex valuation and rates for construction.' },
            { title: 'Service Providers', slug: 'gst-service-providers', desc: 'Compliance for consultants, freelancers, and IT firms.' }
        ]
    },
    // --- Sub-Services for Specialized ---
    'gst-startups': {
        title: 'GST for Startups',
        seoTitle: 'GST Registration & Compliance for Startups',
        seoDescription: 'Strategic GST planning for startups. Save cash flow and ensure investor due diligence readiness.',
        keywords: 'startup gst, gst exemption limit, voluntary registration benefits, dpiit startup gst',
        icon: 'fa-rocket',
        content: (
            <>
                <p className="mb-4">Startups often burn cash. We help you decide whether to register voluntarily to pass on credit or wait until you hit the threshold. We also ensure your books are investor-ready from day one.</p>
            </>
        )
    },
    'gst-ecommerce': {
        title: 'GST for E-Commerce Sellers',
        seoTitle: 'GST Compliance for Amazon & Flipkart Sellers',
        seoDescription: 'Handling multi-state registrations, TCS credits, and high-volume return filing for e-commerce sellers.',
        keywords: 'ecommerce gst, amazon seller gst, tcs credit gst, multi-state gst',
        icon: 'fa-shopping-cart',
        content: (
            <>
                <p className="mb-4">Selling online mandates GST registration regardless of turnover. We handle the complexities of Tax Collected at Source (TCS) claims and help you manage Principal Place of Business requirements for Virtual Warehouses (FBA).</p>
            </>
        )
    },
    'gst-exporters': {
        title: 'GST for Exporters',
        seoTitle: 'GST Export Compliance | LUT & Refunds',
        seoDescription: 'Export goods/services without tax (LUT) or claim refund of IGST. Essential for IT firms and goods exporters.',
        keywords: 'export gst rules, zero rated supply, lut filing, gst refund for exporters',
        icon: 'fa-plane',
        content: (
            <>
                <p className="mb-4">Exports are "Zero-Rated Supplies". You have two options: Export without payment of tax (under LUT) or Export on payment of IGST and claim refund. We advise on the cash-flow optimal route.</p>
            </>
        )
    },
    'gst-works-contract': {
        title: 'GST for Works Contract',
        seoTitle: 'GST Services for Contractors & Real Estate',
        seoDescription: 'Handling complex GST rates for government contracts, residential projects, and sub-contracts.',
        keywords: 'works contract gst, construction gst rate, real estate gst, itc on construction',
        icon: 'fa-hard-hat',
        content: (
            <>
                <p className="mb-4">Construction and Works Contract involves complex rates (12% for Govt projects, 18% others) and restrictions on ITC. We help contractors maintain project-wise accounts and bill correctly.</p>
            </>
        )
    },
    'gst-service-providers': {
        title: 'GST for Service Providers',
        seoTitle: 'GST Compliance for Freelancers & Consultants',
        seoDescription: 'Simplified compliance for IT freelancers, consultants, and professionals. Export of services rules.',
        keywords: 'freelancer gst, consultant gst, export of service compliance, gst registration threshold services',
        icon: 'fa-laptop-code',
        content: (
            <>
                <p className="mb-4">Service providers with foreign clients (Export of Services) must meet specific "receipt of convertible forex" conditions to be GST-exempt. We ensure your FIRC documentation is in place to prove export status.</p>
            </>
        )
    },

    // ==========================================
    // 6. REFUNDS & OPTIMIZATION (Hub)
    // ==========================================
    'refunds-optimization': {
        title: 'Refunds & Optimization',
        seoTitle: 'GST Refund Filing & Tax Optimization Services',
        seoDescription: 'Unlock your working capital with GST refunds. We handle Export refunds, Inverted Duty refunds, and ITC optimization.',
        keywords: 'gst refund filing, export refund, inverted duty structure, gst optimization, lut filing, gst due diligence',
        icon: 'fa-hand-holding-usd',
        content: (
            <>
                <p className="mb-4">
                    Don't let inefficiency eat into your margins. We help you recover stuck funds and structure your transactions efficiently.
                </p>
            </>
        ),
        subServices: [
            { title: 'GST Refund Filing', slug: 'gst-refund-filing', desc: 'Claiming accumulated ITC or excess cash.' },
            { title: 'LUT Filing', slug: 'lut-filing-service', desc: 'Letter of Undertaking for tax-free exports.' },
            { title: 'ITC Optimization', slug: 'itc-optimization', desc: 'Maximizing legal credit to reduce cash payout.' },
            { title: 'Due Diligence', slug: 'gst-due-diligence', desc: 'Pre-audit or pre-merger risk assessment.' }
        ]
    },
    // --- Sub-Services for Refunds ---
    'gst-refund-filing': {
        title: 'GST Refund Filing',
        seoTitle: 'GST Refund Consultants | RFD-01 Filing',
        seoDescription: 'Expert filing of GST Refund applications for Exports, Inverted Duty Structure, and Excess Balance.',
        keywords: 'gst refund consultant, rfd-01, inverted duty refund, export itc refund',
        icon: 'fa-money-bill-wave',
        content: (
            <>
                <p className="mb-4">We handle the entire lifecycle of a refund: from filing RFD-01, replying to deficiency memos, to following up with the officer. We assist in:</p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                    <li><strong>Refund on Exports:</strong> Without payment of tax.</li>
                    <li><strong>Inverted Duty Structure:</strong> When input tax rate &gt; output tax rate (common in textiles/footwear).</li>
                    <li><strong>Excess Payment:</strong> Wrong head payment or double payment.</li>
                </ul>
            </>
        )
    },
    'lut-filing-service': {
        title: 'LUT Filing (Letter of Undertaking)',
        seoTitle: 'Online LUT Filing Services for Exporters',
        seoDescription: 'File your GST LUT instantly. Export goods and services without paying IGST upfront.',
        keywords: 'lut filing online, letter of undertaking gst, export compliance, rfd-11',
        icon: 'fa-globe',
        content: (
            <>
                <p className="mb-4">An LUT allows you to export without blocking working capital in taxes. It is valid for one financial year and must be renewed every March. We ensure your renewal is timely so your shipments never stop.</p>
            </>
        )
    },
    'itc-optimization': {
        title: 'Input Tax Credit Optimization',
        seoTitle: 'GST ITC Optimization & Planning',
        seoDescription: 'Analyze your procurement to maximize ITC claims. Reduce tax cost by identifying missed credits.',
        keywords: 'itc optimization, gst tax planning, input tax credit maximization, reduce gst liability',
        icon: 'fa-chart-line',
        content: (
            <>
                <p className="mb-4">Many businesses lose 5-10% of their margins by not claiming eligible credits or dealing with non-compliant vendors. We analyze your expense ledgers to identify missed opportunities for credit (e.g., bank charges, insurance, office setup).</p>
            </>
        )
    },
    'gst-due-diligence': {
        title: 'GST Due Diligence',
        seoTitle: 'GST Due Diligence & Impact Analysis',
        seoDescription: 'Thorough GST review for mergers, acquisitions, or departmental audits. Identify liabilities early.',
        keywords: 'gst due diligence, gst audit, business acquisition tax check, gst risk report',
        icon: 'fa-search',
        content: (
            <>
                <p className="mb-4">Buying a business? Ensure you aren't inheriting their tax liabilities. Our Due Diligence covers valid registrations, filed returns, pending litigations, and unreconciled tax dues.</p>
            </>
        )
    }
};

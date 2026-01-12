export const mcaServices = {
    // ==========================================
    // 1. COMPANY FORMATION & REGISTRATION (Hub)
    // ==========================================
    'company-formation': {
        title: 'Company Formation & Registration',
        seoTitle: 'Company Registration Services in Kerala | Pvt Ltd, LLP, OPC',
        seoDescription: 'Expert assistance for new company registration. Private Limited, LLP, One Person Company, Section 8, and Nidhi Company registration services.',
        keywords: 'company registration, pvt ltd registration, llp registration, opc registration, section 8 company, nidhi company registration',
        icon: 'fa-building',
        content: (
            <>
                <p className="mb-4">
                    Turning your business idea into a legal entity is the first step towards credibility and growth. We guide you through the entire incorporation process—from name approval to getting your Certificate of Incorporation.
                </p>
            </>
        ),
        subServices: [
            { title: 'Private Limited Company', slug: 'pvt-ltd-registration', desc: 'The most popular structure for startups and growing businesses.' },
            { title: 'One Person Company (OPC)', slug: 'opc-registration', desc: 'For solo entrepreneurs who want limited liability.' },
            { title: 'Limited Liability Partnership', slug: 'llp-registration', desc: 'Hybrid structure combining flexibility of partnership with limited liability.' },
            { title: 'Public Limited Company', slug: 'public-ltd-registration', desc: 'For large-scale businesses planning to raise public funds.' },
            { title: 'Section 8 (NGO)', slug: 'section-8-registration', desc: 'For non-profit organizations promoting art, science, or charity.' },
            { title: 'Nidhi Company', slug: 'nidhi-company-registration', desc: 'For non-banking financial entities focused on lending within members.' },
            { title: 'Producer Company', slug: 'producer-company-registration', desc: 'For farmers and agricultural producers.' }
        ]
    },
    // --- Sub-Services for Formation ---
    'pvt-ltd-registration': {
        title: 'Private Limited Company Registration',
        seoTitle: 'Register Private Limited Company Online | Pvt Ltd Registration',
        seoDescription: 'Online Private Limited Company registration service. We handle name approval (RUN), SPICe+ filing, MoA, AoA, and PAN/TAN.',
        keywords: 'pvt ltd registration, private limited company, online company registration, spice+ form',
        icon: 'fa-building',
        content: (
            <>
                <p className="mb-4">A Private Limited Company is the gold standard for startups in India. It offers limited liability regarding personal assets and restricts the right to transfer shares.</p>
                <h3 className="text-xl font-bold text-white mb-3">Registration Package Includes:</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                    <li>Digital Signature Certificate (DSC) for Directors.</li>
                    <li>Director Identification Number (DIN).</li>
                    <li>Name Reservation (RUN).</li>
                    <li>Drafting of MOA & AOA.</li>
                    <li>Certificate of Investigation (COI), PAN, & TAN.</li>
                </ul>
            </>
        )
    },
    'opc-registration': {
        title: 'One Person Company (OPC) Registration',
        seoTitle: 'One Person Company Registration | OPC Incorporation',
        seoDescription: 'Register your One Person Company (OPC) easily. Enjoy limited liability with full control as a single director.',
        keywords: 'opc registration, one person company, solo entrepreneur company, single director company',
        icon: 'fa-user-tie',
        content: (
            <>
                <p className="mb-4">An OPC allows a single entrepreneur to operate a corporate entity with limited liability protection. It has fewer compliance requirements than a Pvt Ltd but similar legal standing.</p>
                <p><strong>Note:</strong> An OPC must have a nominee director to ensure continuity.</p>
            </>
        )
    },
    'llp-registration': {
        title: 'Limited Liability Partnership (LLP)',
        seoTitle: 'LLP Registration Services | Limited Liability Partnership',
        seoDescription: 'Register your LLP online. A flexible business structure with lower compliance costs and limited liability for partners.',
        keywords: 'llp registration, limited liability partnership, partnership with limited liability, llp agreement',
        icon: 'fa-handshake',
        content: (
            <>
                <p className="mb-4">LLP is ideal for professional firms (Lawyers, CAs, Architects) and small businesses. It combines the flexibility of a partnership with the benefits of limited liability. No statutory audit is required unless turnover exceeds ₹40 Lakhs.</p>
            </>
        )
    },
    'public-ltd-registration': {
        title: 'Public Limited Company Registration',
        seoTitle: 'Public Limited Company Registration Services',
        seoDescription: 'Incorporation of Public Limited Companies. Ideal for large businesses planning IPO or raising capital from the public.',
        keywords: 'public limited company, plc registration, ipo ready company, 7 shareholders company',
        icon: 'fa-city',
        content: (
            <>
                <p className="mb-4">A Public Limited Company requires a minimum of 7 shareholders and 3 directors. It differs from a Pvt Ltd as it can invite the public to subscribe to its shares (IPO).</p>
            </>
        )
    },
    'section-8-registration': {
        title: 'Section 8 (NGO) Registration',
        seoTitle: 'Section 8 Company Registration | NGO Incorporation',
        seoDescription: 'Register a Section 8 Company for non-profit/charitable purposes. Get clear guidance on MCA compliance and license.',
        keywords: 'section 8 company, ngo registration, non profit company, charitable trust company',
        icon: 'fa-heart',
        content: (
            <>
                <p className="mb-4">Section 8 Companies are established for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, protection of environment, etc. Profits must be applied towards these objectives.</p>
            </>
        )
    },
    'nidhi-company-registration': {
        title: 'Nidhi Company Registration',
        seoTitle: 'Nidhi Company Registration Services',
        seoDescription: 'Start your Nidhi Company for lending business. We handle incorporation and NDH-4 compliance.',
        keywords: 'nidhi company, mutual benefit funds, lending company registration, ndh-4',
        icon: 'fa-piggy-bank',
        content: (
            <>
                <p className="mb-4">Nidhi Companies are NBFCs that borrow and lend money only amongst their members. They are easy to register as they don't need RBI approval for incorporation, but must follow Nidhi Rules 2014.</p>
            </>
        )
    },
    'producer-company-registration': {
        title: 'Producer Company Registration',
        seoTitle: 'Producer Company Registration for Farmers',
        seoDescription: 'Incorporation services for Producer Companies. Empowering farmers and agriculturalists through corporate structure.',
        keywords: 'producer company, farmer producer organization, fpo registration, agriculture company',
        icon: 'fa-tractor',
        content: (
            <>
                <p className="mb-4">A Producer Company can be formed by 10 or more individuals (producers) or 2 or more producer institutions. It works for the benefit of members engaged in primary production (Agriculture, Handloom, etc.).</p>
            </>
        )
    },


    // ==========================================
    // 2. ANNUAL & PERIODIC MCA COMPLIANCES (Hub)
    // ==========================================
    'annual-mca-compliances': {
        title: 'Annual & Periodic MCA Compliances',
        seoTitle: 'Annual MCA Compliance Services | AOC-4, MGT-7 & LLP Filing',
        seoDescription: 'Mandatory annual filing services for Pvt Ltd, LLP, and OPC. We handle AOC-4, MGT-7, Form 8, and Compliance Calendars.',
        keywords: 'annual return filing, mca compliance, aoc-4 filing, mgt-7 filing, llp annual filing, statutory register',
        icon: 'fa-calendar-check',
        content: (
            <>
                <p className="mb-4">
                    Once incorporated, a company is a separate legal entity that must file periodic updates with the ROC. Missing these deadlines leads to heavy additional fees and potential director disqualification.
                </p>
            </>
        ),
        subServices: [
            { title: 'Annual Return (MGT-7/AOC-4)', slug: 'annual-return-filing', desc: 'Filing of Financial Statements and Annual Returns.' },
            { title: 'LLP Annual Filings', slug: 'llp-annual-filing', desc: 'Form 8 (Accounts) and Form 11 (Annual Return).' },
            { title: 'Director KYC (DIR-3)', slug: 'director-kyc-filing', desc: 'Mandatory annual KYC for every DIN holder.' },
            { title: 'Statutory Registers', slug: 'statutory-register-maintenance', desc: 'Maintenance of MGT-1, MGT-2, and Board Minutes.' }
        ]
    },
    // --- Sub-Services for Annual Compliance ---
    'annual-return-filing': {
        title: 'Annual Return Filing (AOC-4 & MGT-7)',
        seoTitle: 'AOC-4 & MGT-7 Filing Services | Company Annual Return',
        seoDescription: 'Expert filing of Form AOC-4 (Financial Statements) and MGT-7 (Annual Return). XBRL filing support available.',
        keywords: 'aoc-4 filing, mgt-7 filing, company annual return, xbrl filing, roc annual compliance',
        icon: 'fa-file-invoice',
        content: (
            <>
                <p className="mb-4">Every company must file its financial statements (Form AOC-4) within 30 days of the AGM and its Annual Return (Form MGT-7) within 60 days. We ensure your data is error-free and filed on time.</p>
            </>
        )
    },
    'llp-annual-filing': {
        title: 'LLP Annual Filings (Form 8 & 11)',
        seoTitle: 'LLP Annual Compliance | Form 8 & Form 11 Filing',
        seoDescription: 'File LLP Form 11 by May 30th and Form 8 by Oct 30th. Avoid ₹100/day penalties with our timely service.',
        keywords: 'llp form 11, llp form 8, llp annual return, statement of accounts llp',
        icon: 'fa-file-contract',
        content: (
            <>
                <p className="mb-4">LLP compliance is time-critical. Late filing penalties are ₹100 per day with no upper cap. We handle Form 11 (Partners details) and Form 8 (Solvency & Accounts) well before the deadline.</p>
            </>
        )
    },
    'director-kyc-filing': {
        title: 'Director KYC Filing (DIR-3 KYC)',
        seoTitle: 'DIR-3 KYC Filing Online | Director Verification',
        seoDescription: 'File DIR-3 KYC for directors. Reactivate deactivated DINs. Mandatory compliance for all DIN holders.',
        keywords: 'dir-3 kyc, director kyc, din reactivation, kyc web service',
        icon: 'fa-id-badge',
        content: (
            <>
                <p className="mb-4">Every person holding a DIN must file KYC annually. Non-filing deactivates the DIN, disqualifying the person from being a director. We handle both Web-KYC (OTP based) and Form-KYC (Document based).</p>
            </>
        )
    },
    'statutory-register-maintenance': {
        title: 'Statutory Register Maintenance',
        seoTitle: 'Statutory Register & Minute Book Maintenance',
        seoDescription: 'Drafting and updating mandatory registers (Members, Directors, Charges) and Board Meeting Minutes.',
        keywords: 'statutory registers, minute book, register of members, board resolution drafting',
        icon: 'fa-book-open',
        content: (
            <>
                <p className="mb-4">Maintaining physical or electronic registers (Register of Members, Director Shareholding, Board Minutes) is mandatory under the Companies Act. We keep these records updated and audit-ready.</p>
            </>
        )
    },

    // ==========================================
    // 3. DIRECTOR & SHAREHOLDER COMPLIANCES (Hub)
    // ==========================================
    'director-shareholder-compliances': {
        title: 'Director & Shareholder Compliances',
        seoTitle: 'Director Appointment & Shareholder Compliance Services',
        seoDescription: 'Manage board changes and shareholder relations. DIN application, Director appointment/resignation, and Shareholder resolutions.',
        keywords: 'director appointment, din application, shareholder resolution, removal of director, pas-3',
        icon: 'fa-users',
        content: (
            <>
                <p className="mb-4">
                    The Board of Directors and Shareholders are the pillars of a company. We manage the legal formalities related to their appointment, resignation, and decision-making powers.
                </p>
            </>
        ),
        subServices: [
            { title: 'DIN Services', slug: 'din-services', desc: 'Application for new DIN or Reactivation of old DIN.' },
            { title: 'Director Changes', slug: 'director-appointment-resignation', desc: 'Appoint or accept resignation of directors (DIR-12).' },
            { title: 'Shareholder Resolutions', slug: 'shareholder-resolutions', desc: 'Drafting Ordinary and Special resolutions.' },
            { title: 'Meeting Documentation', slug: 'meeting-documentation', desc: 'Notices and Minutes for Valid Board/General Meetings.' }
        ]
    },
    // --- Sub-Services for Directors ---
    'din-services': {
        title: 'DIN Application & Reactivation',
        seoTitle: 'Apply for Director Identification Number (DIN)',
        seoDescription: 'Get a new DIN (Form DIR-3) or reactivate a deactivated DIN. Essential requirement for becoming a company director.',
        keywords: 'apply for din, dir-3 form, reactivate din, director id',
        icon: 'fa-id-card',
        content: (
            <>
                <p className="mb-4">A DIN is a unique ID for a director. We assist individuals in obtaining a fresh DIN or restoring a DIN deactivated due to non-compliance of KYC.</p>
            </>
        )
    },
    'director-appointment-resignation': {
        title: 'Director Appointment / Resignation',
        seoTitle: 'Add or Remove Company Directors | DIR-12 Filing',
        seoDescription: 'Legal procedure for appointing an Additional Director or accepting resignation. We handle DIR-12 filing and Board Resolutions.',
        keywords: 'appoint director, resign director, dir-12 filing, change director designation',
        icon: 'fa-user-plus',
        content: (
            <>
                <p className="mb-4">Changing the board composition requires filing Form DIR-12 within 30 days. We draft the appointment letter, consent (DIR-2), and resignation notice (DIR-11) to ensure legal validity.</p>
            </>
        )
    },
    'shareholder-resolutions': {
        title: 'Shareholder Resolutions & ROC Filings',
        seoTitle: 'Drafting Shareholder Resolutions | MGT-14 Filing',
        seoDescription: 'Drafting Ordinary and Special Resolutions for corporate actions. Filing MGT-14 with ROC for special resolutions.',
        keywords: 'shareholder resolution, special resolution drafting, mgt-14, egm notice',
        icon: 'fa-file-signature',
        content: (
            <>
                <p className="mb-4">Major decisions (like name change, capital increase) require Shareholder approval via Special Resolution. We draft the resolution and explanatory statement, and file Form MGT-14 with the ROC.</p>
            </>
        )
    },
    'meeting-documentation': {
        title: 'Board & General Meeting Documentation',
        seoTitle: 'Board Meeting Minutes & AGM Documentation',
        seoDescription: 'Professional drafting of Notices, Agenda, and Minutes for Board Meetings and Annual General Meetings (AGM).',
        keywords: 'board meeting minutes, agm notice, egm documentation, secretarial standards',
        icon: 'fa-clipboard-list',
        content: (
            <>
                <p className="mb-4">As per Secretarial Standards (SS-1 & SS-2), every meeting must have a proper notice, agenda, and recorded minutes. We prepare these documents to protect the directors from liability.</p>
            </>
        )
    },

    // ==========================================
    // 4. COMPANY CHANGE & EVENT-BASED FILINGS (Hub)
    // ==========================================
    'company-changes': {
        title: 'Company Change & Event-Based Filings',
        seoTitle: 'Company Changes & ROC Event Based Filing Services',
        seoDescription: 'Modify your company structure. Change Name, Address, Capital, or Object Clause. We verify feasibility and file forms.',
        keywords: 'change company name, change registered office, increase authorized capital, share allotment pas-3, share transfer',
        icon: 'fa-exchange-alt',
        content: (
            <>
                <p className="mb-4">
                    Businesses evolve. Whether you are rebranding, moving offices, or raising funds, we handle the complex ROC forms required to update your company's master data.
                </p>
            </>
        ),
        subServices: [
            { title: 'Change Business Address', slug: 'change-registered-office', desc: 'Shift office within city, state, or interstate.' },
            { title: 'Change Company Name', slug: 'change-company-name', desc: 'Rebranding procedure with Central Govt approval.' },
            { title: 'Capital & Shares', slug: 'capital-share-changes', desc: 'Increase Auth Capital, Allotment (PAS-3), and Transfer.' },
            { title: 'Change Object Clause', slug: 'moa-object-change', desc: 'Amending MOA to start new business activities.' }
        ]
    },
    // --- Sub-Services for Changes ---
    'change-registered-office': {
        title: 'Change In Registered Office',
        seoTitle: 'Change Company Registered Office Address',
        seoDescription: 'Shift your registered office within the same city, state, or to another state. Filing INC-22, MGT-14, and RD petitions.',
        keywords: 'change registered office, inc-22, shift office interstate, rd approval office shift',
        icon: 'fa-map-marker-alt',
        content: (
            <>
                <p className="mb-4">Shifting office within the same city is simple (Board Resolution + INC-22). However, shifting between states involves a lengthy process of Regional Director (RD) approval. We manage both seamlessly.</p>
            </>
        )
    },
    'change-company-name': {
        title: 'Change In Company Name',
        seoTitle: 'Company Name Change Services',
        seoDescription: 'Procedure to change company name: Name reservation (RUN), Special Resolution, and fresh Certificate of Incorporation.',
        keywords: 'change company name, inc-24, rename company, name change resolution',
        icon: 'fa-tag',
        content: (
            <>
                <p className="mb-4">Rebranding? We check name availability, pass the Special Resolution, and file form INC-24 to obtain a fresh Certificate of Incorporation reflecting the new name.</p>
            </>
        )
    },
    'capital-share-changes': {
        title: 'Capital Increase & Share Allotment',
        seoTitle: 'Increase Authorized Capital & Share Allotment (PAS-3)',
        seoDescription: 'Increase authorized capital (SH-7) and report share allotment (PAS-3). Handle share transfers (SH-4).',
        keywords: 'increase authorized capital, pas-3 filing, share allotment, share transfer deed',
        icon: 'fa-coins',
        content: (
            <>
                <p className="mb-4">To raise funds, you may need to increase your Authorized Capital (Form SH-7). Once money is received, shares must be allotted and reported via Form PAS-3 within 30 days. We handle the entire funding compliance compliance cycle.</p>
            </>
        )
    },
    'moa-object-change': {
        title: 'Change in Object Clause',
        seoTitle: 'MOA Amendment | Change Company Business Activity',
        seoDescription: 'Amend your Memorandum of Association (MOA) to add or remove business activities. MGT-14 filing services.',
        keywords: 'change object clause, amend moa, mgt-14 object change, alter main objects',
        icon: 'fa-bullseye',
        content: (
            <>
                <p className="mb-4">If you venture into a new business line not covered by your MOA, you must amend the Object Clause. This requires shareholder approval and ROC filing to be valid.</p>
            </>
        )
    },

    // ==========================================
    // 5. LLP-SPECIFIC COMPLIANCES (Hub)
    // ==========================================
    'llp-compliances': {
        title: 'LLP-Specific Compliances',
        seoTitle: 'LLP Compliance Services | Partner Admission & Agreement Change',
        seoDescription: 'Specialized services for Limited Liability Partnerships. Add/Remove partners, change LLP agreement, and closure.',
        keywords: 'llp compliance, add partner llp, change llp agreement, close llp, llp strike off',
        icon: 'fa-handshake',
        content: (
            <>
                <p className="mb-4">
                    LLPs are flexible, but any change in the partnership structure requires immediate reporting. We draft the supplementary deeds and file the necessary forms.
                </p>
            </>
        ),
        subServices: [
            { title: 'Partner Admission/Resignation', slug: 'llp-partner-changes', desc: 'Add new partners or accept resignations.' },
            { title: 'LLP Agreement Change', slug: 'llp-agreement-change', desc: 'Change profit ratio, capital, or terms.' },
            { title: 'LLP Closure', slug: 'llp-strike-off', desc: 'Winding up an defunct LLP (Form 24).' }
        ]
    },
    // --- Sub-Services for LLP ---
    'llp-partner-changes': {
        title: 'LLP Partner Admission / Resignation',
        seoTitle: 'Add or Remove Partner in LLP | Form 3 & 4',
        seoDescription: 'Drafting Supplementary LLP Agreement for admission or retirement of partners. Filing Form 3 and Form 4.',
        keywords: 'add partner llp, resign partner llp, llp form 3, llp form 4',
        icon: 'fa-user-friends',
        content: (
            <>
                <p className="mb-4">When a partner joins or leaves, the LLP Agreement must be amended. We draft the Deed of Admission/Retirement and file Form 4 (Notice of appointment/cessation) and Form 3 (Information with regard to LLP agreement).</p>
            </>
        )
    },
    'llp-agreement-change': {
        title: 'LLP Agreement Drafting & Filing',
        seoTitle: 'Change LLP Agreement | Profit Ratio & Capital',
        seoDescription: 'Amend your LLP Agreement terms. Change profit sharing ratio, capital contribution, or rights of partners.',
        keywords: 'change profit sharing ratio llp, amend llp agreement, llp deed drafting, form 3 filing',
        icon: 'fa-file-signature',
        content: (
            <>
                <p className="mb-4">Any change in internal terms—like profit sharing ratio or capital contribution—must be reported to the ROC within 30 days via Form 3. We ensure your deed is legally sound and compliant.</p>
            </>
        )
    },
    'llp-strike-off': {
        title: 'LLP Closure & Strike Off',
        seoTitle: 'Close LLP | LLP Strike Off Services',
        seoDescription: 'Legally close your inactive LLP using Form 24. Hassle-free winding up services.',
        keywords: 'close llp, llp strike off, form 24 llp, wind up llp',
        icon: 'fa-ban',
        content: (
            <>
                <p className="mb-4">If your LLP has been inactive for over a year, you can apply for 'Strike Off' using Form 24. This is a faster and cheaper alternative to formal liquidation.</p>
            </>
        )
    },

    // ==========================================
    // 6. NIDHI COMPANY COMPLIANCES (Hub)
    // ==========================================
    'nidhi-compliances': {
        title: 'Nidhi Company Compliances',
        seoTitle: 'Nidhi Company Compliance Services | NDH-1, NDH-3, NDH-4',
        seoDescription: 'Complete compliance management for Nidhi Companies. Filing of NDH-1, NDH-2, and NDH-3 forms. Statutory audit support.',
        keywords: 'nidhi company compliance, ndh-1, ndh-3, nidhi rules 2014, nidhi audit',
        icon: 'fa-piggy-bank',
        content: (
            <>
                <p className="mb-4">
                    Nidhi Companies handle public money and are strictly regulated. We ensure you meet the 'Net Owned Funds' criteria and file the mandatory NDH forms on time.
                </p>
            </>
        ),
        subServices: [
            { title: 'NDH Filings', slug: 'ndh-filings', desc: 'NDH-1 (Statutory), NDH-2 (Extension), NDH-3 (Half-Yearly).' },
            { title: 'Statutory Compliance', slug: 'nidhi-statutory-review', desc: 'Review of deposits, members, and liquidity ratio.' },
            { title: 'RBI & MCA Advisory', slug: 'nidhi-advisory', desc: 'Guidance on Nidhi Rules 2014 updates.' }
        ]
    },
    // --- Sub-Services for Nidhi ---
    'ndh-filings': {
        title: 'NDH-1, NDH-2 & NDH-3 Filings',
        seoTitle: 'Nidhi Company NDH Filing Services',
        seoDescription: 'File NDH-1 (Return of Statutory Compliances), NDH-2 (Extension), and NDH-3 (Half-yearly Return) accurately.',
        keywords: 'ndh-1 filing, ndh-3 return, nidhi forms, mca nidhi compliance',
        icon: 'fa-file-invoice',
        content: (
            <>
                <p className="mb-4">Nidhis must file NDH-1 annually to prove they have 200 members and Net Owned Funds ratio of 1:20. NDH-3 is a half-yearly return detailing deposits and loans. We manage these critical filings.</p>
            </>
        )
    },
    'nidhi-statutory-review': {
        title: 'Nidhi Statutory Compliance Review',
        seoTitle: 'Nidhi Company Member & Deposit Compliance',
        seoDescription: 'Audit of Nidhi Company membership limits, deposit caps, and unencumbered term deposits.',
        keywords: 'nidhi membership limit, nidhi deposit rules, unencumbered term deposit, nidhi audit',
        icon: 'fa-search',
        content: (
            <>
                <p className="mb-4">We review your books to ensure you maintain the 10% unencumbered term deposit rule and do not exceed the deposit ceiling, keeping you safe from penalties.</p>
            </>
        )
    },
    'nidhi-advisory': {
        title: 'RBI & MCA Advisory for Nidhi',
        seoTitle: 'Nidhi Company Advisory Services',
        seoDescription: 'Expert advisory on Nidhi Rules 2014 and RBI exemptions. Guidance on loan rates and branch expansion.',
        keywords: 'nidhi rules advisory, rbi nidhi regulations, nidhi loan interest rates, nidhi branch opening',
        icon: 'fa-gavel',
        content: (
            <>
                <p className="mb-4">Nidhi rules change frequently. We advise directors on maximum loan amounts, interest rate caps, and restrictions on opening branches to ensure 100% adherence to the law.</p>
            </>
        )
    },

    // ==========================================
    // 7. CORPORATE RESTRUCTURING & CLOSURE (Hub)
    // ==========================================
    'restructuring-closure': {
        title: 'Corporate Restructuring, Conversion & Closure',
        seoTitle: 'Company Strike Off, Revival & Conversion Services',
        seoDescription: 'End-to-end restructuring solutions. Convert Proprietorship to Pvt Ltd, Strike Off defunct companies, or Revive struck-off entities.',
        keywords: 'company strike off, stk-2, company revival, convert proprietorship to pvt ltd, dormant company',
        icon: 'fa-random',
        content: (
            <>
                <p className="mb-4">
                    Sometimes the best way forward is a change in structure. We assist in closing defunct entities, reviving struck-off ones, or converting your business type.
                </p>
            </>
        ),
        subServices: [
            { title: 'Company Strike Off', slug: 'company-strike-off', desc: 'Fast track exit (STK-2) for inactive companies.' },
            { title: 'Company Revival', slug: 'company-revival', desc: 'Restoration of name via NCLT order.' },
            { title: 'Conversion Services', slug: 'business-conversion', desc: 'Proprietorship/Partnership to Pvt Ltd/LLP.' },
            { title: 'Dormant Company', slug: 'dormant-status', desc: 'Maintaining inactive status legally (MSC-1).' }
        ]
    },
    // --- Sub-Services for Restructuring ---
    'company-strike-off': {
        title: 'Company Strike Off (STK-2)',
        seoTitle: 'Close Private Limited Company | Fast Track Exit',
        seoDescription: 'File Form STK-2 to close your company under Fast Track Exit mode. Complete winding up service.',
        keywords: 'stk-2 filing, close company online, fast track exit, wind up pvt ltd',
        icon: 'fa-power-off',
        content: (
            <>
                <p className="mb-4">If your company has zero assets and liabilities and hasn't done business for 2 years, we can close it using Form STK-2. This is faster and simpler than liquidation.</p>
            </>
        )
    },
    'company-revival': {
        title: 'Company Revival',
        seoTitle: 'Revive Struck Off Company | NCLT Restoration',
        seoDescription: 'Restore a company struck off by ROC. We handle the NCLT petition and legal representation.',
        keywords: 'revive company, nclt restoration petition, restore struck off company, roc revival',
        icon: 'fa-trash-restore',
        content: (
            <>
                <p className="mb-4">Did the ROC strike off your company name? We file a petition with the National Company Law Tribunal (NCLT) to restore your company, enabling you to recover assets or continue business.</p>
            </>
        )
    },
    'business-conversion': {
        title: 'Conversion Services',
        seoTitle: 'Convert Proprietorship to Pvt Ltd or LLP',
        seoDescription: 'Upgrade your business structure. Convert Sole Proprietorship or Firm into Private Limited Company or LLP.',
        keywords: 'convert proprietorship to pvt ltd, partnership to llp conversion, business conversion services',
        icon: 'fa-level-up-alt',
        content: (
            <>
                <p className="mb-4">Scaling up? We manage the legal takeover of your proprietorship/firm by a new Pvt Ltd or LLP, ensuring tax neutrality (capital gains exemption) and seamless asset transfer.</p>
            </>
        )
    },
    'dormant-status': {
        title: 'Dormant Company Status',
        seoTitle: 'Apply for Dormant Company Status | Form MSC-1',
        seoDescription: 'Pause your compliance by applying for Dormant Status. Useful for companies holding IP or land but no operations.',
        keywords: 'dormant company application, msc-1, inactive company status, pause mca compliance',
        icon: 'fa-bed',
        content: (
            <>
                <p className="mb-4">If you want to hold a registered company for a future project without annual filing hassles, we can apply for 'Dormant Status' (Form MSC-1), reducing your compliance burden significantly.</p>
            </>
        )
    },

    // ==========================================
    // 8. SECRETARIAL & COMPLIANCE SUPPORT (Hub)
    // ==========================================
    'secretarial-support': {
        title: 'Secretarial & Compliance Support',
        seoTitle: 'Company Secretarial Services & ROC Notice Handling',
        seoDescription: 'Ongoing secretarial support. We handle ROC notices, penalty compounding, and secretarial compliance checks.',
        keywords: 'secretarial services, roc notice reply, compounding of offences, secretarial audit',
        icon: 'fa-briefcase',
        content: (
            <>
                <p className="mb-4">
                    Compliance isn't just filing forms; it's about governance. We act as your extended secretarial team, handling notices and audits.
                </p>
            </>
        ),
        subServices: [
            { title: 'Secretarial Compliance Check', slug: 'compliance-check', desc: 'Mock audit of your records.' },
            { title: 'ROC Notice Handling', slug: 'roc-notice-reply', desc: 'Drafting replies to Adjudication Notices.' },
            { title: 'Compounding of Offences', slug: 'compounding-offences', desc: 'Legal route to settle defaults.' }
        ]
    },
    'compliance-check': {
        title: 'Secretarial Compliance Check',
        seoTitle: 'Secretarial Compliance Health Check',
        seoDescription: 'Review of your statutory registers, minutes, and filings to ensure readiness for due diligence or inspection.',
        keywords: 'secretarial health check, compliance review, statutory record audit',
        icon: 'fa-clipboard-check',
        content: (
            <>
                <p className="mb-4">We verify if your board minutes, registers, and ROC filings are in sync. This "Mock Audit" helps identifying gaps before they turn into penalties.</p>
            </>
        )
    },
    'roc-notice-reply': {
        title: 'ROC Notice Handling & Reply',
        seoTitle: 'Reply to ROC Notices | Adjudication Support',
        seoDescription: 'Expert drafting of replies to ROC Show Cause Notices and Adjudication Orders.',
        keywords: 'roc notice reply, adjudication notice response, mca notice help',
        icon: 'fa-envelope-open-text',
        content: (
            <>
                <p className="mb-4">Received a Show Cause Notice? We interpret the allegation, draft a legally sound reply citing relevant sections, and represent you if required, to drop or minimize the penalty.</p>
            </>
        )
    },
    'compounding-offences': {
        title: 'Compounding of Offences',
        seoTitle: 'Compounding of Offences under Companies Act',
        seoDescription: 'Settle past non-compliances legally. Application for Compounding of Offences to RD/NCLT.',
        keywords: 'compounding of offences, settle mca default, form gnl-1, rd compounding',
        icon: 'fa-gavel',
        content: (
            <>
                <p className="mb-4">If you missed a critical filing (like AGM or Board Report), "Compounding" is a legal way to admit the mistake and pay a reduced penalty, avoiding prosecution.</p>
            </>
        )
    },

    // ==========================================
    // 9. REGULATORY & ADVISORY (Hub)
    // ==========================================
    'regulatory-advisory': {
        title: 'Regulatory & Advisory Support',
        seoTitle: 'Corporate Regulatory Advisory Services',
        seoDescription: 'General corporate advisory. Due diligence, startup compliance, and interpreting complex MCA circulars.',
        keywords: 'corporate advisory, mca advisory, startup compliance, due diligence',
        icon: 'fa-balance-scale',
        content: (
            <>
                <p className="mb-4">
                    The corporate regulatory landscape is vast. We provide expert opinions and general guidance on the Companies Act, 2013 and allied laws.
                </p>
            </>
        ),
        subServices: [
            { title: 'Compliance Health Check', slug: 'compliance-health-check', desc: 'Overall entity health assessment.' },
            { title: 'Due Diligence', slug: 'corporate-due-diligence', desc: 'Investigation for investors/buyers.' },
            { title: 'Startup & SME Advisory', slug: 'startup-advisory', desc: 'Structuring and scale-up advice.' }
        ]
    },
    'corporate-due-diligence': {
        title: 'Due Diligence for Companies & LLPs',
        seoTitle: 'Legal & Financial Due Diligence Services',
        seoDescription: 'Comprehensive due diligence reports for M&A, investment, or bank loans. Cover Legal, Tax, and Financial aspects.',
        keywords: 'due diligence report, legal due diligence, financial due diligence, startup investment check',
        icon: 'fa-search-dollar',
        content: (
            <>
                <p className="mb-4">Before an investment or merger, we dig deep into the target company's records. We check for hidden liabilities, pending litigations, and compliance history to protect your interest.</p>
            </>
        )
    },
    'startup-advisory': {
        title: 'Startup & SME Compliance Advisory',
        seoTitle: 'Compliance Advisory for Startups & SMEs',
        seoDescription: 'Tailored compliance roadmap for startups. ESOPs, Cap Table management, and fundraising compliance.',
        keywords: 'startup legal advisory, esop planning, cap table management, fundraising compliance',
        icon: 'fa-rocket',
        content: (
            <>
                <p className="mb-4">Startups move fast. We ensure your compliance keeps up. We advise on issuing ESOPs, managing your Cap Table, and filing the necessary forms (PAS-3, MGT-14) during funding rounds.</p>
            </>
        )
    },
    'compliance-health-check': {
        title: 'Compliance Health Check',
        seoTitle: 'Corporate Compliance Health Check Service',
        seoDescription: 'A 360-degree review of your entity\'s standing with MCA, Income Tax, and GST authorities.',
        keywords: 'compliance health check, corporate status check, regulatory gap analysis',
        icon: 'fa-user-md',
        content: (
            <>
                <p className="mb-4">Is your company fully compliant? Our Health Check reviews your status across MCA, GST, and Income Tax to give you a single "Compliance Scorecard" and a roadmap to fix gaps.</p>
            </>
        )
    }
};

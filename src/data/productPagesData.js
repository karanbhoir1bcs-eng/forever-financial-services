export const productPagesData = {
  'car-loan': {
    badge: '🚗 Drive Your Dream Car',
    title: 'Car Loan',
    subtitle: 'Up to ₹1 Crore',
    desc: 'Finance your new or used car with the lowest interest rates, up to 100% on-road funding, and quick disbursal.',
    bgImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '7.5%', label: 'STARTING RATE P.A.' },
      { value: '₹1 Cr', label: 'MAX AMOUNT' },
      { value: '24 hrs', label: 'DISBURSAL TIME' }
    ],
    details: {
      overview: {
        title: 'Car Loan Up to ₹1 Crore',
        desc: 'Finance your new or used car with the lowest interest rates, up to 100% on-road funding, and quick disbursal.',
        cards: [
          { value: '7.5%', label: 'STARTING RATE P.A.' },
          { value: '₹1 Cr', label: 'MAX AMOUNT' },
          { value: '24 hrs', label: 'DISBURSAL TIME' }
        ]
      },
      features: {
        title: 'Why Choose Us?',
        items: [
          { icon: '🚗', title: 'New & Used Cars', desc: 'Finance both new and pre-owned vehicles from any brand.' },
          { icon: '💯', title: 'Up to 100% Funding', desc: 'Get up to 100% on-road price for new cars.' },
          { icon: '📅', title: '7-Year Tenure', desc: 'Comfortable EMIs spread over up to 7 years.' },
          { icon: '⚡', title: 'Quick Disbursal', desc: 'Loan disbursed within 24 hours of approval.' }
        ]
      },
      rates: {
        title: 'Rates & Fee Structure',
        table: [
          { label: 'Interest Rate', value: '7.5% - 15% p.a.' },
          { label: 'Processing Fee', value: '0.5% - 1% of loan amount' },
          { label: 'Prepayment Charges', value: '2% - 5% of outstanding' },
          { label: 'Late Payment Fee', value: '2% per month on overdue' },
          { label: 'Loan Tenure', value: 'Up to 7 years' }
        ]
      },
      calculator: {
        title: 'Calculate Your Monthly EMI',
        defaultAmount: 800000,
        minAmount: 100000,
        maxAmount: 10000000,
        defaultRate: 8.7,
        minRate: 7.5,
        maxRate: 15,
        defaultTenure: 60,
        minTenure: 12,
        maxTenure: 84
      },
      eligibility: {
        title: 'Who Can Apply?',
        cards: [
          { icon: '🎂', title: '21 - 65 years', subtitle: 'Age Requirement', desc: 'Salaried or Self-employed applicants' },
          { icon: '💳', title: 'Stable income', subtitle: 'Income', desc: 'Stable income & repayment capacity required' },
          { icon: '📊', title: 'Good score', subtitle: 'Credit Score', desc: 'Good credit score required' },
          { icon: '🆔', title: 'KYC & Income', subtitle: 'Documents', desc: 'Basic KYC & income documents required' }
        ],
        checks: [
          'Age: 21-65 years',
          'Salaried or Self-employed',
          'Stable income & repayment capacity',
          'Good credit score',
          'Basic KYC & income documents'
        ],
        info: 'Eligibility criteria may vary across banks and NBFCs based on loan scheme, applicant profile, and lending policies. The above details are indicative and subject to change.'
      },
      documents: {
        title: "What You'll Need",
        items: [
          'PAN & Aadhaar Card',
          '3 Months Salary Slips',
          '6 Months Bank Statement',
          'Car Proforma Invoice',
          'Driving Licence',
          'Passport Size Photo'
        ]
      },
      financers: {
        title: 'Trusted Lending Partners',
        desc: "We partner with India's top banks and NBFCs to get you the best rates and fastest approvals.",
        stats: [
          { value: '18+', label: 'PARTNERS' },
          { value: '₹500Cr+', label: 'DISBURSED' },
          { value: '98%', label: 'APPROVAL RATE' }
        ],
        partners: [
          { name: 'State Bank of India', color: '#b91c1c' },
          { name: 'HDFC Bank', color: '#b45309' },
          { name: 'ICICI Bank', color: '#15803d' },
          { name: 'Axis Bank', color: '#166534' },
          { name: 'Bank of Baroda', color: '#0369a1' },
          { name: 'Punjab National Bank', color: '#1d4ed8' },
          { name: 'Canara Bank', color: '#7e22ce' },
          { name: 'Union Bank of India', color: '#be185d' },
          { name: 'Bank of India', color: '#c2410c' },
          { name: 'UCO Bank', color: '#a16207' },
          { name: 'IDBI Bank', color: '#16a34a' },
          { name: 'Indian Overseas Bank', color: '#0f766e' },
          { name: 'Federal Bank', color: '#0369a1' },
          { name: 'Kotak Mahindra Bank', color: '#4338ca' },
          { name: 'IDFC FIRST Bank', color: '#a21caf' },
          { name: 'Tata Capital', color: '#e11d48' },
          { name: 'Mahindra Finance', color: '#d97706' },
          { name: 'Bajaj Finance', color: '#65a30d' }
        ]
      },
      whyChoose: {
        title: 'Why Choose This Loan',
        items: [
          { title: 'High Funding on On-Road Price', desc: "Typically finance 80%-90% (sometimes up to 100%) of the car's value." },
          { title: 'Attractive Interest Rates', desc: 'Starting approx. 7.6%-9% onwards, depending on profile and lender.' },
          { title: 'Flexible Repayment Tenure', desc: 'Loan tenure generally ranges from 1 to 7 years, making EMIs affordable.' },
          { title: 'Quick & Digital Loan Processing', desc: 'Instant approvals, pre-approved offers, and minimal paperwork available online.' },
          { title: 'Secured Loan (Car as Collateral)', desc: 'The vehicle itself acts as security, reducing risk and interest rates.' },
          { title: 'Eligibility for Salaried & Self-Employed', desc: 'Available for both income segments with flexible criteria.' },
          { title: 'Prepayment & Foreclosure Options', desc: 'Many lenders allow part-payment or foreclosure (some with low/zero charges).' },
          { title: 'Covers Additional Costs', desc: 'Loan may include insurance, registration, accessories, and extended warranty.' }
        ]
      },
      howToApply: {
        title: 'Apply in 4 Simple Steps',
        steps: [
          { num: '01', title: 'Fill the Form', desc: 'Share your basic details online. Takes less than 2 minutes.', color: '#00C853' },
          { num: '02', title: 'Get a Call Back', desc: 'Our expert calls you within 30 minutes to discuss options.', color: '#3b82f6' },
          { num: '03', title: 'Submit Documents', desc: 'Upload your documents digitally. No physical visits needed.', color: '#f97316' },
          { num: '04', title: 'Get Your Loan', desc: 'Money credited to your bank account within 24-72 hours.', color: '#a855f7' }
        ]
      },
      faqs: {
        title: 'Common Questions',
        items: [
          { q: 'Can I get a loan for a used car?', a: 'Yes, most lenders provide loans for used cars, typically covering up to 80% of the valuation amount. The interest rates may be slightly higher than for new cars.' },
          { q: 'What is the maximum LTV for car loans?', a: 'For new cars, lenders can offer up to 90% to 100% of the on-road price. For used cars, the LTV is usually capped at 80% of the car\'s market valuation.' },
          { q: 'Is a guarantor required?', a: 'Generally, a guarantor is not required for a car loan since the car itself acts as collateral. However, if your income or credit score doesn\'t meet the criteria, a co-applicant or guarantor may be requested.' },
          { q: 'Can I prepay my car loan?', a: 'Yes, most banks allow prepayment or foreclosure after 6 to 12 months. Prepayment charges typically range from 2% to 5% of the outstanding principal amount, depending on the lender.' }
        ]
      },
      cta: {
        title: 'Drive Home Your Dream Car',
        subtitle: 'Best car loan rates from 20+ lenders. Free consultation.',
        buttonText: "Apply Now — It's Free →"
      }
    }
  },
  'car-refinance': {
    badge: '🔄 Lower Your Car EMI',
    title: 'Car Refinance Loan',
    subtitle: 'Save More Every Month',
    desc: 'Refinance your existing car loan at a lower interest rate and reduce your monthly EMI. Get a top-up cash option too.',
    bgImage: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '8%', label: 'STARTING RATE P.A.' },
      { value: '₹50L', label: 'MAX AMOUNT' },
      { value: '7 Days', label: 'TRANSFER TIME' }
    ],
    details: {
      overview: {
        title: 'Car Refinance Loan Save More Every Month',
        desc: 'Refinance your existing car loan at a lower interest rate and reduce your monthly EMI. Get a top-up cash option too.',
        cards: [
          { value: '8%', label: 'STARTING RATE P.A.' },
          { value: '₹50L', label: 'MAX AMOUNT' },
          { value: '7 Days', label: 'TRANSFER TIME' }
        ]
      },
      features: {
        title: 'Why Choose Us?',
        items: [
          { icon: '📉', title: 'Lower Your EMI', desc: 'Switch to a lower rate and save thousands every month.' },
          { icon: '💰', title: 'Top-Up Cash Option', desc: "Get additional cash over your car's current value." },
          { icon: '🚗', title: 'All Car Brands', desc: 'Refinance any car brand — hatchback to luxury.' },
          { icon: '📄', title: 'Minimal Docs', desc: 'Simple documentation — mostly existing loan papers.' }
        ]
      },
      rates: {
        title: 'Rates & Fee Structure',
        table: [
          { label: 'Interest Rate', value: '8% - 14% p.a.' },
          { label: 'Processing Fee', value: '0.5% - 1% of loan amount' },
          { label: 'Prepayment Charges', value: '2% - 4% of outstanding' },
          { label: 'Late Payment Fee', value: '2% per month on overdue' },
          { label: 'Loan Tenure', value: 'Up to 7 years' }
        ]
      },
      calculator: {
        title: 'Calculate Your Monthly EMI',
        defaultAmount: 500000,
        minAmount: 100000,
        maxAmount: 5000000,
        defaultRate: 10.0,
        minRate: 8,
        maxRate: 16,
        defaultTenure: 48,
        minTenure: 12,
        maxTenure: 84
      },
      eligibility: {
        title: 'Who Can Apply?',
        cards: [
          { icon: '📋', title: '12+ EMIs', subtitle: 'EMIs Paid', desc: 'Minimum 12 EMIs paid on existing car loan' },
          { icon: '🚗', title: 'Under 10 years', subtitle: 'Car Age', desc: 'Car should not be older than 10 years' },
          { icon: '📊', title: '700 & above', subtitle: 'Credit Score', desc: 'No defaults in last 12 months' },
          { icon: '📄', title: 'RC & Insurance', subtitle: 'Documents', desc: 'Valid RC book and car insurance required' }
        ],
        checks: [
          'Existing car loan with minimum 12 EMIs paid',
          'Car not older than 10 years',
          'No defaults in last 12 months',
          'CIBIL score of 700 or above',
          'Valid RC and insurance'
        ],
        info: 'Eligibility criteria may vary across banks and NBFCs based on loan scheme, applicant profile, and lending policies. The above details are indicative and subject to change.'
      },
      documents: {
        title: "What You'll Need",
        items: [
          'PAN & Aadhaar Card',
          'Existing Loan Statement',
          'RC Book',
          'Car Insurance',
          '6 Months Bank Statement',
          'Salary Slips / ITR'
        ]
      },
      howToApply: {
        title: 'Apply in 4 Simple Steps',
        steps: [
          { num: '01', title: 'Fill the Form', desc: 'Share your basic details online. Takes less than 2 minutes.', color: '#00C853' },
          { num: '02', title: 'Get a Call Back', desc: 'Our expert calls you within 30 minutes to discuss options.', color: '#3b82f6' },
          { num: '03', title: 'Submit Documents', desc: 'Upload your documents digitally. No physical visits needed.', color: '#f97316' },
          { num: '04', title: 'Get Your Loan', desc: 'Money credited to your bank account within 24-72 hours.', color: '#a855f7' }
        ]
      },
      faqs: {
        title: 'Common Questions',
        items: [
          { q: 'When should I refinance my car loan?', a: 'You should consider refinancing if interest rates have dropped since you took your original loan, your credit score has improved significantly, or you want to extend your tenure to lower your monthly EMI.' },
          { q: 'Can I get cash along with refinancing?', a: 'Yes! Many lenders offer a "Top-up" loan option. If your car\'s current market value is higher than your outstanding loan amount, you can borrow that extra amount in cash.' },
          { q: 'Do I need to submit the car again for valuation?', a: 'Generally, the new lender will perform a quick valuation of your car to determine the maximum loan amount they can offer you.' },
          { q: 'What happens to my old loan?', a: 'The new lender will pay off your existing loan balance directly to your old lender, and your new loan will begin with the new terms and EMI.' }
        ]
      },
      cta: {
        title: 'Start Saving on Your Car EMI',
        subtitle: 'Free refinance analysis. No obligation.',
        buttonText: "Apply Now — It's Free →"
      }
    }
  },
  'commercial-vehicle-loan': {
    badge: '🚛 Finance Your Fleet',
    title: 'Commercial Vehicle Loan',
    subtitle: 'Up to ₹5 Crore',
    desc: 'Finance new or used trucks, buses, tippers, trailers, taxis and fleet vehicles with competitive rates and flexible repayment options tailored for transport operators.',
    bgImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '8.5%', label: 'STARTING RATE P.A.' },
      { value: '₹5 Cr', label: 'MAX AMOUNT' },
      { value: '100%', label: 'FUNDING ON NEW CV' }
    ],
    details: {
      overview: {
        title: 'Commercial Vehicle Loan Up to ₹5 Crore',
        desc: 'Finance new or used trucks, buses, tippers, trailers, taxis and fleet vehicles with competitive rates and flexible repayment options tailored for transport operators.',
        cards: [
          { value: '8.5%', label: 'STARTING RATE P.A.' },
          { value: '₹5 Cr', label: 'MAX AMOUNT' },
          { value: '100%', label: 'FUNDING ON NEW CV' }
        ]
      },
      features: {
        title: 'Why Choose Us?',
        items: [
          { icon: '🚛', title: 'All Vehicle Types', desc: 'Trucks, buses, tippers, trailers, pickups, taxis, tempo, LCVs, HCVs and fleet vehicles.' },
          { icon: '💯', title: 'Up to 100% Funding', desc: 'Up to 100% of vehicle cost for new CVs; up to 90% valuation for used vehicles.' },
          { icon: '📅', title: 'Flexible Tenure', desc: 'Up to 84 months for new CVs and up to 60 months for used commercial vehicles.' },
          { icon: '🔄', title: 'Seasonal Repayment', desc: 'Step-up or seasonal repayment options available with select lenders.' }
        ]
      },
      rates: {
        title: 'Rates & Fee Structure',
        table: [
          { label: 'Interest Rate', value: '8.5% - 18% p.a.' },
          { label: 'Processing Fee', value: '1% - 2% of loan amount' },
          { label: 'Stamp Duty', value: 'As applicable by state' },
          { label: 'Foreclosure / Prepayment', value: 'Varies by lender' },
          { label: 'Late Payment Charges', value: 'Penal interest as per lender policy' },
          { label: 'Loan Tenure (New CV)', value: '12 - 60 months' },
          { label: 'Loan Tenure (Used CV)', value: '12 - 60 months' }
        ]
      },
      calculator: {
        title: 'Calculate Your Monthly EMI',
        defaultAmount: 2000000,
        minAmount: 200000,
        maxAmount: 50000000,
        defaultRate: 12.0,
        minRate: 8.5,
        maxRate: 18,
        defaultTenure: 48,
        minTenure: 12,
        maxTenure: 84
      },
      eligibility: {
        title: 'Who Can Apply?',
        cards: [
          { icon: '🏢', title: 'Individual / Business', subtitle: 'Applicant Type', desc: 'Individuals, proprietorships, partnerships, companies & transport operators' },
          { icon: '🚚', title: 'New or Used', subtitle: 'Vehicle Type', desc: 'New CVs up to 100% funding; used CVs up to 90% of valuation' },
          { icon: '📊', title: 'Good CIBIL', subtitle: 'Credit Profile', desc: 'Good credit score and repayment history required' },
          { icon: '🏦', title: 'Stable business', subtitle: 'Business Vintage', desc: 'Stable business income and banking profile preferred' }
        ],
        checks: [
          'Individual applicants (salaried or self-employed)',
          'Proprietorship firms, partnerships, and companies',
          'Transport operators and fleet owners',
          'First-time buyers (select lenders)',
          'Existing vehicle owners / operators',
          'Good credit score and repayment history',
          'Stable business income and banking profile'
        ],
        info: 'Eligibility criteria may vary across banks and NBFCs based on loan scheme, applicant profile, and lending policies. The above details are indicative and subject to change.'
      },
      documents: {
        title: "What You'll Need",
        items: [
          'PAN Card',
          'Aadhaar Card / Address Proof',
          'Passport-size photographs',
          '6-12 Months Bank Statement',
          'Income Proof / ITR (if required)',
          'Business Proof / GST Registration',
          'Quotation / Proforma Invoice (new vehicle)',
          'RC Copy & Insurance (used vehicle)'
        ]
      },
      financers: {
        title: 'Trusted Lending Partners',
        desc: "We partner with India's top banks and NBFCs to get you the best rates and fastest approvals.",
        stats: [
          { value: '22+', label: 'PARTNERS' },
          { value: '₹500Cr+', label: 'DISBURSED' },
          { value: '98%', label: 'APPROVAL RATE' }
        ],
        partners: [
          { name: 'State Bank of India', color: '#b91c1c' },
          { name: 'HDFC Bank', color: '#b45309' },
          { name: 'ICICI Bank', color: '#15803d' },
          { name: 'Axis Bank', color: '#166534' },
          { name: 'Bank of Baroda', color: '#0369a1' },
          { name: 'Punjab National Bank', color: '#1d4ed8' },
          { name: 'Union Bank of India', color: '#be185d' },
          { name: 'Canara Bank', color: '#7e22ce' },
          { name: 'IndusInd Bank', color: '#a16207' },
          { name: 'Kotak Mahindra Bank', color: '#4338ca' },
          { name: 'IDFC FIRST Bank', color: '#16a34a' },
          { name: 'Federal Bank', color: '#0369a1' },
          { name: 'Yes Bank', color: '#0284c7' },
          { name: 'Tata Capital', color: '#e11d48' },
          { name: 'Mahindra Finance', color: '#d97706' },
          { name: 'Bajaj Finance', color: '#65a30d' },
          { name: 'Shriram Finance', color: '#b45309' },
          { name: 'Cholamandalam Finance', color: '#16a34a' },
          { name: 'HDB Financial Services', color: '#1d4ed8' },
          { name: 'IIFL Finance', color: '#a16207' },
          { name: 'Poonawalla Fincorp', color: '#be185d' },
          { name: 'Aditya Birla Finance', color: '#7e22ce' }
        ]
      },
      whyChoose: {
        title: 'Why Choose This Loan',
        items: [
          { title: 'High LTV on New Vehicles', desc: 'Finance up to 100% of the vehicle cost for new CVs, including body-building in select cases.' },
          { title: 'Wide Vehicle Coverage', desc: 'Covers all commercial vehicle types — LCVs, HCVs, buses, tippers, taxis, trailers and fleet vehicles.' },
          { title: 'Flexible Repayment Structures', desc: 'Monthly, quarterly, step-up, or seasonal repayment options to match your business cash flow.' },
          { title: 'Suitable for All Business Types', desc: 'Available for individuals, proprietors, partnerships, companies, and transport fleet operators.' },
          { title: 'First-Time Buyer Friendly', desc: 'Select lenders offer CV loans to first-time buyers based on income and credit profile.' },
          { title: 'Quick Approval & Disbursal', desc: 'Streamlined process with minimal documentation for faster loan sanction and disbursal.' },
          { title: 'Competitive Interest Rates', desc: 'Rates depend on vehicle type, credit profile, business vintage, and lender policy.' }
        ]
      },
      howToApply: {
        title: 'Apply in 4 Simple Steps',
        steps: [
          { num: '01', title: 'Fill the Form', desc: 'Share your basic details online. Takes less than 2 minutes.', color: '#00C853' },
          { num: '02', title: 'Get a Call Back', desc: 'Our expert calls you within 30 minutes to discuss options.', color: '#3b82f6' },
          { num: '03', title: 'Submit Documents', desc: 'Upload your documents digitally. No physical visits needed.', color: '#f97316' },
          { num: '04', title: 'Get Your Loan', desc: 'Money credited to your bank account within 24-72 hours.', color: '#a855f7' }
        ]
      },
      faqs: {
        title: 'Common Questions',
        items: [
          { q: 'What types of commercial vehicles are eligible?', a: 'Loans are available for a wide range of commercial vehicles including Light Commercial Vehicles (LCVs), Heavy Commercial Vehicles (HCVs), buses, trucks, tippers, and taxis.' },
          { q: 'How much funding can I get on a new commercial vehicle?', a: 'You can get up to 100% funding on the chassis and up to 90% on body-building for new commercial vehicles, depending on your profile.' },
          { q: 'Can a first-time buyer apply?', a: 'Yes, many lenders offer commercial vehicle loans to first-time buyers provided they have a good credit score and stable income or a guarantor.' },
          { q: 'Are seasonal repayment options available?', a: 'Yes, we offer flexible repayment options including seasonal EMIs, step-up, and step-down plans to match your business cash flow.' },
          { q: 'Is insurance mandatory?', a: 'Yes, comprehensive vehicle insurance is mandatory for the entire loan tenure.' }
        ]
      },
      cta: {
        title: 'Finance Your Commercial Vehicle Today',
        subtitle: 'Best rates from 20+ lenders. Free consultation. No hidden charges.',
        buttonText: "Apply Now — It's Free →"
      }
    }
  },
  'personal-loan': {
    badge: '⚡ Instant Approval',
    title: 'Personal Loan',
    subtitle: 'Up to ₹10 Lakhs',
    desc: 'Get funds for any personal need — travel, wedding, medical, or home renovation. Minimal docs, fast disbursal, zero collateral.',
    bgImage: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '10.5%', label: 'STARTING RATE P.A.' },
      { value: '24 hrs', label: 'DISBURSAL TIME' },
      { value: '₹10L', label: 'MAX AMOUNT' }
    ],
    details: {
      overview: {
        title: 'Personal Loan Up to ₹10 Lakhs',
        desc: 'Get funds for any personal need — travel, wedding, medical, or home renovation. Minimal docs, fast disbursal, zero collateral.',
        cards: [
          { value: '10.5%', label: 'STARTING RATE P.A.' },
          { value: '24 hrs', label: 'DISBURSAL TIME' },
          { value: '₹10L', label: 'MAX AMOUNT' }
        ]
      },
      features: {
        title: 'Why Choose Us?',
        items: [
          { icon: '⚡', title: 'Instant Approval', desc: 'In-principle approval within 2 hours of application.' },
          { icon: '📄', title: 'Minimal Docs', desc: 'Just PAN + Aadhaar + 3 months salary slip.' },
          { icon: '🔓', title: 'No Collateral', desc: '100% unsecured loan — no asset required.' },
          { icon: '📅', title: 'Flexible Tenure', desc: 'Choose repayment from 12 to 60 months.' }
        ]
      },
      rates: {
        title: 'Rates & Fee Structure',
        table: [
          { label: 'Interest Rate', value: '10.5% - 24% p.a.' },
          { label: 'Processing Fee', value: '1% - 3% of loan amount' },
          { label: 'Prepayment Charges', value: 'Nil after 6 EMIs' },
          { label: 'Late Payment Fee', value: '2% per month on overdue' },
          { label: 'Loan Tenure', value: '12 - 60 months' }
        ]
      },
      calculator: {
        title: 'Calculate Your Monthly EMI',
        defaultAmount: 300000,
        minAmount: 50000,
        maxAmount: 1000000,
        defaultRate: 12.0,
        minRate: 10.5,
        maxRate: 24,
        defaultTenure: 36,
        minTenure: 12,
        maxTenure: 60
      },
      eligibility: {
        title: 'Who Can Apply?',
        items: [
          { icon: '🎂', title: '21 - 60 years', subtitle: 'Age Requirement', desc: 'Salaried or Self-employed applicants' },
          { icon: '💳', title: '₹25,000+/month', subtitle: 'Minimum Income', desc: 'Minimum stable income preferred' },
          { icon: '📊', title: '700+', subtitle: 'Credit Score', desc: 'Good credit score required' },
          { icon: '💼', title: '1-2 years', subtitle: 'Work Experience', desc: 'Minimum 1-2 years work experience' }
        ],
        checklist: [
          'Age: 21-60 years',
          'Salaried or Self-employed',
          'Minimum stable income (₹25,000+ preferred)',
          'Good credit score (700+)',
          'Minimum 1-2 years work experience'
        ],
        note: {
          title: 'Important Information',
          desc: 'Eligibility criteria may vary across banks and NBFCs based on loan scheme, applicant profile, and lending policies. The above details are indicative and subject to change.'
        }
      },
      documents: {
        title: "What You'll Need",
        items: [
          'PAN Card',
          'Aadhaar Card',
          '3 Months Salary Slips',
          '6 Months Bank Statement',
          'Employment Letter',
          'Passport Size Photo'
        ]
      },
      financers: {
        title: 'Trusted Lending Partners',
        subtitle: 'We partner with India’s top banks and NBFCs to get you the best rates and fastest approvals.',
        stats: [
          { value: '29+', label: 'PARTNERS' },
          { value: '₹500Cr+', label: 'DISBURSED' },
          { value: '98%', label: 'APPROVAL RATE' }
        ],
        note: 'All partners are RBI-regulated. Rates vary by lender and applicant profile.',
        partners: [
          { name: 'HDFC Bank', color: '#dc2626' },
          { name: 'ICICI Bank', color: '#ea580c' },
          { name: 'Axis Bank', color: '#16a34a' },
          { name: 'Kotak Mahindra Bank', color: '#16a34a' },
          { name: 'IndusInd Bank', color: '#2563eb' },
          { name: 'IDFC FIRST Bank', color: '#7e22ce' },
          { name: 'Yes Bank', color: '#7e22ce' },
          { name: 'RBL Bank', color: '#dc2626' },
          { name: 'Federal Bank', color: '#ea580c' },
          { name: 'Bandhan Bank', color: '#ca8a04' },
          { name: 'Bajaj Finance', color: '#16a34a' },
          { name: 'Tata Capital', color: '#0d9488' },
          { name: 'Aditya Birla Finance', color: '#2563eb' },
          { name: 'Piramal Finance', color: '#7e22ce' },
          { name: 'Mahindra Finance', color: '#7e22ce' },
          { name: 'Poonawalla Fincorp', color: '#dc2626' },
          { name: 'IIFL Finance', color: '#ea580c' },
          { name: 'HDB Financial Services', color: '#16a34a' },
          { name: 'SMFG India Credit', color: '#16a34a' },
          { name: 'Fullerton India', color: '#0d9488' },
          { name: 'MoneyView', color: '#2563eb' },
          { name: 'Fibe (EarlySalary)', color: '#7e22ce' },
          { name: 'KreditBee', color: '#db2777' },
          { name: 'CASHe', color: '#dc2626' },
          { name: 'PaySense (LazyPay)', color: '#ca8a04' },
          { name: 'Navi', color: '#16a34a' },
          { name: 'Upwards', color: '#0d9488' },
          { name: 'Finnable', color: '#0d9488' },
          { name: 'Faircent (P2P)', color: '#2563eb' }
        ]
      },
      whyChoose: {
        title: 'Why Choose This Loan',
        items: [
          { title: 'No Collateral Required', desc: 'Personal loans are unsecured — no asset pledge needed.' },
          { title: 'Fast Approval & Disbursal', desc: 'Many lenders offer approval within minutes and disbursal within hours.' },
          { title: '100% Digital Process', desc: 'End-to-end online journey (e-KYC, minimal paperwork).' },
          { title: 'Flexible Eligibility Norms', desc: 'Available for salaried + self-employed + even moderate credit profiles.' },
          { title: 'Customizable EMI & Tenure', desc: 'Repayment options typically range from 6 months to 5+ years.' },
          { title: 'Multipurpose Usage', desc: 'Can be used for medical, travel, wedding, education, or debt consolidation.' },
          { title: 'Wide Loan Range', desc: 'From small-ticket (~₹5,000) to large loans (₹25-50 lakh+).' }
        ]
      },
      howToApply: {
        title: 'Apply in 4 Simple Steps',
        steps: [
          { num: '01', title: 'Fill the Form', desc: 'Share your basic details online. Takes less than 2 minutes.', color: '#00C853' },
          { num: '02', title: 'Get a Call Back', desc: 'Our expert calls you within 30 minutes to discuss options.', color: '#3b82f6' },
          { num: '03', title: 'Submit Documents', desc: 'Upload your documents digitally. No physical visits needed.', color: '#f97316' },
          { num: '04', title: 'Get Your Loan', desc: 'Money credited to your bank account within 24-72 hours.', color: '#a855f7' }
        ]
      },
      faqs: {
        title: 'Common Questions',
        items: [
          { q: 'What is the maximum loan amount?', a: 'You can get a personal loan up to ₹10 Lakhs depending on your income and credit profile.' },
          { q: 'How long does disbursal take?', a: 'Disbursal typically happens within 24 hours of loan approval.' },
          { q: 'Is there a prepayment penalty?', a: 'Prepayment charges vary by lender. Some lenders allow prepayment with nil charges after 6 EMIs.' },
          { q: 'Can I apply with a low CIBIL score?', a: 'While a score of 700+ is preferred, some lenders may approve loans for lower scores with adjusted interest rates or terms.' }
        ]
      },
      cta: {
        title: 'Ready to Get Your Personal Loan?',
        subtitle: 'Join 50,000+ happy customers. Instant approval. Money in 24 hours.',
        buttonText: "Apply Now — It's Free →"
      }
    }
  },
  'home-loan': {
    badge: '🏠 Dream Home Awaits',
    title: 'Home Loan',
    subtitle: 'Up to ₹2 Crore',
    desc: 'Make your dream home a reality with the lowest interest rates, flexible tenure up to 30 years, and doorstep service.',
    bgImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '8.5%', label: 'STARTING RATE P.A.' },
      { value: '7 Days', label: 'DISBURSAL TIME' },
      { value: '₹2 Cr', label: 'MAX AMOUNT' }
    ],
    details: {
      overview: {
        title: 'Home Loan Up to ₹2 Crore',
        desc: 'Make your dream home a reality with the lowest interest rates, flexible tenure up to 30 years, and doorstep service.',
        cards: [
          { value: '8.5%', label: 'STARTING RATE P.A.' },
          { value: '7 Days', label: 'DISBURSAL TIME' },
          { value: '₹2 Cr', label: 'MAX AMOUNT' }
        ]
      },
      features: {
        title: 'Why Choose Us?',
        items: [
          { icon: '📉', title: 'Lowest Rates', desc: 'Starting at 8.5% p.a. — compare across 20+ lenders instantly.' },
          { icon: '🗓️', title: '30-Year Tenure', desc: 'Spread repayment up to 30 years for comfortable EMIs.' },
          { icon: '🏛️', title: 'High LTV', desc: 'Get up to 90% of property value as loan amount.' },
          { icon: '💰', title: 'Tax Benefits', desc: 'Save tax under Section 80C & 24(b) of Income Tax Act.' }
        ]
      },
      rates: {
        title: 'Rates & Fee Structure',
        table: [
          { label: 'Interest Rate', value: '8.5% - 12% p.a.' },
          { label: 'Processing Fee', value: '0.25% - 1% of loan amount' },
          { label: 'Prepayment Charges', value: 'Nil for floating rate loans' },
          { label: 'Late Payment Fee', value: '2% per month on overdue' },
          { label: 'Loan Tenure', value: 'Up to 30 years' }
        ]
      },
      calculator: {
        title: 'Calculate Your Monthly EMI',
        defaultAmount: 3000000,
        minAmount: 500000,
        maxAmount: 20000000,
        defaultRate: 9.0,
        minRate: 8.5,
        maxRate: 14,
        defaultTenure: 240,
        minTenure: 12,
        maxTenure: 360
      },
      eligibility: {
        title: 'Who Can Apply?',
        items: [
          { icon: '🎂', title: '21 – 65 years', subtitle: 'Age Requirement', desc: 'Salaried or Self-employed applicants' },
          { icon: '💳', title: 'Stable income', subtitle: 'Income', desc: 'Stable income & low existing liabilities' },
          { icon: '📊', title: '725+ preferred', subtitle: 'Credit Score', desc: 'Credit score preferably 725+' },
          { icon: '🏡', title: 'Bank criteria', subtitle: 'Property', desc: 'Property must meet bank criteria' }
        ],
        checklist: [
          'Age: 21-65 years',
          'Salaried / Self-employed',
          'Stable income & low existing liabilities',
          'Credit score preferably 725+',
          'Property must meet bank criteria'
        ],
        note: {
          title: 'Important Information',
          desc: 'Eligibility criteria may vary across banks and NBFCs based on loan scheme, applicant profile, and lending policies. The above details are indicative and subject to change.'
        }
      },
      documents: {
        title: "What You'll Need",
        items: [
          'PAN & Aadhaar Card',
          '6 Months Bank Statement',
          'Salary Slips (3 months)',
          'Property Documents',
          'ITR (2 years)',
          'Passport Size Photo'
        ]
      },
      financers: {
        title: 'Trusted Lending Partners',
        subtitle: 'We partner with India’s top banks and NBFCs to get you the best rates and fastest approvals.',
        stats: [
          { value: '19+', label: 'PARTNERS' },
          { value: '₹500Cr+', label: 'DISBURSED' },
          { value: '98%', label: 'APPROVAL RATE' }
        ],
        note: 'All partners are RBI-regulated. Rates vary by lender and applicant profile.',
        partners: [
          { name: 'State Bank of India', color: '#dc2626' },
          { name: 'HDFC Bank', color: '#ca8a04' },
          { name: 'ICICI Bank', color: '#16a34a' },
          { name: 'Axis Bank', color: '#16a34a' },
          { name: 'Kotak Mahindra Bank', color: '#0d9488' },
          { name: 'Bank of Baroda', color: '#2563eb' },
          { name: 'Punjab National Bank', color: '#7e22ce' },
          { name: 'Union Bank of India', color: '#dc2626' },
          { name: 'Canara Bank', color: '#ea580c' },
          { name: 'IDFC FIRST Bank', color: '#ca8a04' },
          { name: 'LIC Housing Finance', color: '#16a34a' },
          { name: 'PNB Housing Finance', color: '#16a34a' },
          { name: 'Bajaj Housing Finance', color: '#2563eb' },
          { name: 'Tata Capital Housing Finance', color: '#7e22ce' },
          { name: 'Aditya Birla Housing Finance', color: '#db2777' },
          { name: 'Aavas Financiers', color: '#dc2626' },
          { name: 'Home First Finance Company', color: '#ea580c' },
          { name: 'Piramal Housing Finance', color: '#16a34a' },
          { name: 'Indiabulls Housing Finance', color: '#16a34a' }
        ]
      },
      whyChoose: {
        title: 'Why Choose This Loan',
        items: [
          { title: 'High Loan Amount Eligibility', desc: 'Funding up to 75-90% of property value, enabling home ownership.' },
          { title: 'Long Repayment Tenure', desc: 'Flexible tenure up to 20-30 years, making EMIs affordable.' },
          { title: 'Competitive Interest Rates', desc: 'Lower rates compared to unsecured loans due to secured nature.' },
          { title: 'Secured Loan Advantage', desc: 'Loan backed by property, enabling better pricing and higher eligibility.' },
          { title: 'Flexible Repayment Options', desc: 'EMI, step-up EMI, balance transfer, and top-up loan facilities.' },
          { title: 'Tax Benefits', desc: 'Principal & interest deductions under applicable income tax sections.' },
          { title: 'Multipurpose Property Financing', desc: 'Purchase, construction, renovation, or balance transfer.' },
          { title: 'Improving Digital Experience', desc: 'Faster approvals with online processing and document verification.' }
        ]
      },
      howToApply: {
        title: 'Apply in 4 Simple Steps',
        steps: [
          { num: '01', title: 'Fill the Form', desc: 'Share your basic details online. Takes less than 2 minutes.', color: '#00C853' },
          { num: '02', title: 'Get a Call Back', desc: 'Our expert calls you within 30 minutes to discuss options.', color: '#3b82f6' },
          { num: '03', title: 'Submit Documents', desc: 'Upload your documents digitally. No physical visits needed.', color: '#f97316' },
          { num: '04', title: 'Get Your Loan', desc: 'Money credited to your bank account within 24-72 hours.', color: '#a855f7' }
        ]
      },
      faqs: {
        title: 'Common Questions',
        items: [
          { q: 'What is the maximum home loan amount?', a: 'You can get a home loan up to ₹2 Crore based on your income and property value.' },
          { q: 'Can I get a home loan for under-construction property?', a: 'Yes, you can get a home loan for under-construction properties.' },
          { q: 'What is the processing fee?', a: 'Processing fee varies between 0.25% - 1% of the loan amount.' }
        ]
      },
      cta: {
        title: 'Your Dream Home is One Step Away',
        subtitle: 'Get the best home loan rates from 20+ banks. Free consultation.',
        buttonText: "Apply Now — It's Free →"
      }
    }
  },
  'unsecured-business-loan': {
    badge: '🏢 Grow Your Business',
    title: 'Unsecured Business Loan',
    subtitle: 'Up to ₹50 Lakhs',
    desc: 'Fuel your business growth with collateral-free loans. Quick approval, minimal documentation, and flexible repayment options.',
    bgImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '12%', label: 'STARTING RATE P.A.' },
      { value: '₹50L', label: 'MAX AMOUNT' },
      { value: '48 hrs', label: 'DISBURSAL TIME' }
    ],
    details: {
      overview: {
        title: 'Unsecured Business Loan Up to ₹50 Lakhs',
        desc: 'Fuel your business growth with collateral-free loans. Quick approval, minimal documentation, and flexible repayment options.',
        cards: [
          { value: '12%', label: 'STARTING RATE P.A.' },
          { value: '₹50L', label: 'MAX AMOUNT' },
          { value: '48 hrs', label: 'DISBURSAL TIME' }
        ]
      },
      features: {
        title: 'Why Choose Us?',
        items: [
          { icon: '🔓', title: 'No Collateral', desc: 'Fully unsecured — no property or asset pledge required.' },
          { icon: '⚡', title: 'Quick Disbursal', desc: 'Funds in your account within 48 hours of approval.' },
          { icon: '📅', title: 'Flexible Tenure', desc: 'Repayment options from 12 to 60 months.' },
          { icon: '🏢', title: 'All Business Types', desc: 'Sole proprietors, partnerships, Pvt. Ltd., LLPs all eligible.' }
        ]
      },
      rates: {
        title: 'Rates & Fee Structure',
        table: [
          { label: 'Interest Rate', value: '12% - 24% p.a.' },
          { label: 'Processing Fee', value: '1% - 2% of loan amount' },
          { label: 'Prepayment Charges', value: 'Nil after 6 months' },
          { label: 'Late Payment Fee', value: '2% per month on overdue' },
          { label: 'Loan Tenure', value: '12 - 60 months' }
        ]
      },
      calculator: {
        title: 'Calculate Your Monthly EMI',
        defaultAmount: 1000000,
        minAmount: 100000,
        maxAmount: 5000000,
        defaultRate: 15.0,
        minRate: 12,
        maxRate: 24,
        defaultTenure: 36,
        minTenure: 12,
        maxTenure: 60
      },
      eligibility: {
        title: 'Who Can Apply?',
        items: [
          { icon: '🏢', title: '1-3 years', subtitle: 'Business Vintage', desc: 'Minimum 1-3 years business vintage required' },
          { icon: '💰', title: 'Stable & profitable', subtitle: 'Turnover', desc: 'Stable turnover & profitability required' },
          { icon: '📊', title: 'Good profile', subtitle: 'Credit Score', desc: 'Good credit profile required' },
          { icon: '📋', title: 'Financial docs', subtitle: 'Documents', desc: 'Proper financial documents required' }
        ],
        checklist: [
          'Self-employed / Business owner / Professionals',
          'Business vintage: Minimum 1-3 years',
          'Stable turnover & profitability',
          'Good credit profile',
          'Proper financial documents'
        ],
        note: {
          title: 'Important Information',
          desc: 'Eligibility criteria may vary across banks and NBFCs based on loan scheme, applicant profile, and lending policies. The above details are indicative and subject to change.'
        }
      },
      documents: {
        title: "What You'll Need",
        items: [
          'PAN Card (Business & Owner)',
          'Aadhaar Card',
          'GST Registration Certificate',
          '12 Months Bank Statement',
          'ITR (2 years)',
          'Business Proof / Incorporation Certificate'
        ]
      },
      financers: {
        title: 'Trusted Lending Partners',
        subtitle: 'We partner with India’s top banks and NBFCs to get you the best rates and fastest approvals.',
        stats: [
          { value: '26+', label: 'PARTNERS' },
          { value: '₹500Cr+', label: 'DISBURSED' },
          { value: '98%', label: 'APPROVAL RATE' }
        ],
        note: 'All partners are RBI-regulated. Rates vary by lender and applicant profile.',
        partners: [
          { name: 'HDFC Bank', color: '#dc2626' },
          { name: 'ICICI Bank', color: '#16a34a' },
          { name: 'Axis Bank', color: '#16a34a' },
          { name: 'Kotak Mahindra Bank', color: '#16a34a' },
          { name: 'IndusInd Bank', color: '#0d9488' },
          { name: 'IDFC FIRST Bank', color: '#2563eb' },
          { name: 'Yes Bank', color: '#7e22ce' },
          { name: 'RBL Bank', color: '#db2777' },
          { name: 'Federal Bank', color: '#ea580c' },
          { name: 'State Bank of India', color: '#ca8a04' },
          { name: 'Bajaj Finance', color: '#16a34a' },
          { name: 'Tata Capital', color: '#0d9488' },
          { name: 'Aditya Birla Finance', color: '#0d9488' },
          { name: 'Piramal Finance', color: '#2563eb' },
          { name: 'Mahindra Finance', color: '#db2777' },
          { name: 'Poonawalla Fincorp', color: '#dc2626' },
          { name: 'IIFL Finance', color: '#ca8a04' },
          { name: 'HDB Financial Services', color: '#16a34a' },
          { name: 'SMFG India Credit', color: '#16a34a' },
          { name: 'Lendingkart', color: '#0d9488' },
          { name: 'FlexiLoans', color: '#2563eb' },
          { name: 'Indifi', color: '#7e22ce' },
          { name: 'NeoGrowth', color: '#db2777' },
          { name: 'Navi', color: '#dc2626' },
          { name: 'ZipLoan', color: '#ca8a04' },
          { name: 'KreditBee', color: '#16a34a' }
        ]
      },
      whyChoose: {
        title: 'Why Choose This Loan',
        items: [
          { title: 'Unsecured / Minimal Collateral Options', desc: 'Many lenders offer collateral-free loans, especially for MSMEs and SMEs.' },
          { title: 'Fast Approval & Disbursal', desc: 'Loan approval within hours to a few days, ensuring working capital continuity.' },
          { title: 'Digital & Paperless Journey', desc: 'Online application, GST/bank statement-based assessment, minimal documentation.' },
          { title: 'Cash Flow-Based Lending', desc: 'Eligibility driven by business turnover, bank transactions, or GST data instead of only balance sheets.' },
          { title: 'Flexible Loan Structures', desc: 'Options like term loans, working capital loans, overdraft, and line of credit.' },
          { title: 'Wide Ticket Size Range', desc: 'Loans from ₹50,000 up to several crores depending on lender and profile.' },
          { title: 'Multipurpose Usage', desc: 'Inventory purchase, expansion, machinery, working capital, or cash flow management.' }
        ]
      },
      howToApply: {
        title: 'Apply in 4 Simple Steps',
        steps: [
          { num: '01', title: 'Fill the Form', desc: 'Share your basic details online. Takes less than 2 minutes.', color: '#00C853' },
          { num: '02', title: 'Get a Call Back', desc: 'Our expert calls you within 30 minutes to discuss options.', color: '#3b82f6' },
          { num: '03', title: 'Submit Documents', desc: 'Upload your documents digitally. No physical visits needed.', color: '#f97316' },
          { num: '04', title: 'Get Your Loan', desc: 'Money credited to your bank account within 24-72 hours.', color: '#a855f7' }
        ]
      },
      faqs: {
        title: 'Common Questions',
        items: [
          { q: 'Do I need collateral for a business loan?', a: 'Most business loans we offer are unsecured and do not require any collateral.' },
          { q: 'What is the minimum business age required?', a: 'Most lenders require a minimum business vintage of 1-3 years.' },
          { q: 'Can startups apply?', a: 'Some lenders offer specialized loans for startups, but generally, 1 year of business operations is preferred.' }
        ]
      },
      cta: {
        title: 'Ready to Grow Your Business?',
        subtitle: 'Get the best business loan rates. Free consultation.',
        buttonText: "Apply Now — It's Free →"
      }
    }
  },
  'working-capital-loan': {
    badge: '⚙️ Keep Business Running',
    title: 'Working Capital Loan',
    subtitle: 'Up to ₹1 Crore',
    desc: 'Manage day-to-day operations, inventory, and cash flow gaps with flexible working capital solutions.',
    bgImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '11%', label: 'STARTING RATE P.A.' },
      { value: '₹1 Cr', label: 'MAX AMOUNT' },
      { value: '72 hrs', label: 'DISBURSAL TIME' }
    ],
    details: {
      overview: {
        title: 'Working Capital Loan Up to ₹1 Crore',
        desc: 'Manage day-to-day operations, inventory, and cash flow gaps with flexible working capital solutions.',
        cards: [
          { value: '11%', label: 'STARTING RATE P.A.' },
          { value: '₹1 Cr', label: 'MAX AMOUNT' },
          { value: '72 hrs', label: 'DISBURSAL TIME' }
        ]
      },
      features: {
        title: 'Why Choose Us?',
        items: [
          { icon: '🔄', title: 'Revolving Credit', desc: 'Draw and repay as needed — pay interest only on what you use.' },
          { icon: '🗓️', title: 'Seasonal Flexibility', desc: 'Ideal for businesses with seasonal cash flow patterns.' },
          { icon: '💸', title: 'Low Processing Fee', desc: 'Minimal processing charges with transparent pricing.' },
          { icon: '⚡', title: 'Fast Approval', desc: 'In-principle approval within 24 hours.' }
        ]
      },
      rates: {
        title: 'Rates & Fee Structure',
        table: [
          { label: 'Interest Rate', value: '11% - 22% p.a.' },
          { label: 'Processing Fee', value: '1% - 2% of limit' },
          { label: 'Renewal Charges', value: '0.5% - 1% annually' },
          { label: 'Late Payment Fee', value: '2% per month on overdue' },
          { label: 'Facility Type', value: 'Revolving credit line' }
        ]
      },
      calculator: {
        title: 'Calculate Your Monthly EMI',
        defaultAmount: 2000000,
        minAmount: 500000,
        maxAmount: 10000000,
        defaultRate: 14.0,
        minRate: 11,
        maxRate: 22,
        defaultTenure: 24,
        minTenure: 12,
        maxTenure: 60
      },
      eligibility: {
        title: 'Who Can Apply?',
        items: [
          { icon: '🏢', title: '1+ year', subtitle: 'Business Vintage', desc: 'Business should be operational for at least 1 year' },
          { icon: '💰', title: '₹20 Lakhs+', subtitle: 'Annual Turnover', desc: 'Minimum annual turnover required' },
          { icon: '📊', title: '650 & above', subtitle: 'Credit Score', desc: 'Positive cash flow in last 6 months' },
          { icon: '📋', title: 'Required', subtitle: 'GST Registration', desc: 'Valid GST registration mandatory' }
        ],
        checklist: [
          'Business vintage of minimum 1 year',
          'Annual turnover of ₹20 Lakhs or more',
          'Valid GST registration',
          'CIBIL score of 650 or above',
          'Positive cash flow in last 6 months'
        ],
        note: {
          title: 'Important Information',
          desc: 'Eligibility criteria may vary across banks and NBFCs based on loan scheme, applicant profile, and lending policies. The above details are indicative and subject to change.'
        }
      },
      documents: {
        title: "What You'll Need",
        items: [
          'PAN Card',
          'Aadhaar Card',
          'GST Returns (1 year)',
          '12 Months Bank Statement',
          'ITR (2 years)',
          'Business Proof'
        ]
      },
      howToApply: {
        title: 'Apply in 4 Simple Steps',
        steps: [
          { num: '01', title: 'Fill the Form', desc: 'Share your basic details online. Takes less than 2 minutes.', color: '#00C853' },
          { num: '02', title: 'Get a Call Back', desc: 'Our expert calls you within 30 minutes to discuss options.', color: '#3b82f6' },
          { num: '03', title: 'Submit Documents', desc: 'Upload your documents digitally. No physical visits needed.', color: '#f97316' },
          { num: '04', title: 'Get Your Loan', desc: 'Money credited to your bank account within 24-72 hours.', color: '#a855f7' }
        ]
      },
      faqs: {
        title: 'Common Questions',
        items: [
          { q: 'What is a working capital loan?', a: 'A working capital loan is taken to finance a company\'s everyday operations, such as payroll, rent, and inventory.' },
          { q: 'Is it a revolving credit line?', a: 'Yes, you can draw funds up to your approved limit, repay, and draw again. Interest is charged only on the utilized amount.' }
        ]
      },
      cta: {
        title: 'Keep Your Business Moving',
        subtitle: 'Get working capital approved in 72 hours. Free consultation.',
        buttonText: "Apply Now — It's Free →"
      }
    }
  },
  'balance-transfer': {
    badge: '🔄 Lower Your EMI',
    title: 'Balance Transfer',
    subtitle: 'Save on Interest',
    desc: 'Transfer your existing high-interest loan to a lower rate lender and reduce your monthly EMI significantly.',
    bgImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '8.9%', label: 'STARTING RATE P.A.' },
      { value: '₹0', label: 'FORECLOSURE PENALTY' },
      { value: '7 Days', label: 'TRANSFER TIME' }
    ],
    details: {
      overview: {
        title: 'Balance Transfer Save on Interest',
        desc: 'Transfer your existing high-interest loan to a lower rate lender and reduce your monthly EMI significantly.',
        cards: [
          { value: '8.9%', label: 'STARTING RATE P.A.' },
          { value: '₹0', label: 'FORECLOSURE PENALTY' },
          { value: '7 Days', label: 'TRANSFER TIME' }
        ]
      },
      features: {
        title: 'Why Choose Us?',
        items: [
          { icon: '📉', title: 'Lower Your EMI', desc: 'Reduce your monthly outgo by switching to a lower interest rate.' },
          { icon: '💰', title: 'Top-Up Available', desc: 'Get additional funds over your existing loan balance.' },
          { icon: '📄', title: 'Minimal Paperwork', desc: 'Simple documentation — mostly your existing loan statements.' },
          { icon: '⚡', title: 'Quick Processing', desc: 'Transfer completed within 7 working days.' }
        ]
      },
      rates: {
        title: 'Rates & Fee Structure',
        table: [
          { label: 'Interest Rate', value: '8.9% - 18% p.a.' },
          { label: 'Processing Fee', value: '0.5% - 1% of loan amount' },
          { label: 'Foreclosure Penalty', value: 'Nil' },
          { label: 'Late Payment Fee', value: '2% per month on overdue' },
          { label: 'Transfer Time', value: '7 working days' }
        ]
      },
      calculator: {
        title: 'Calculate Your Monthly EMI',
        defaultAmount: 1000000,
        minAmount: 100000,
        maxAmount: 10000000,
        defaultRate: 11.0,
        minRate: 8.9,
        maxRate: 20,
        defaultTenure: 60,
        minTenure: 12,
        maxTenure: 240
      },
      eligibility: {
        title: 'Who Can Apply?',
        items: [
          { icon: '📋', title: '6-12 months', subtitle: 'Repayment Track', desc: 'Existing loan with good repayment track' },
          { icon: '📊', title: 'Good score', subtitle: 'Credit Score', desc: 'Good credit score required' },
          { icon: '💼', title: 'Salaried / Self-employed', subtitle: 'Employment', desc: 'Eligible for higher loan based on income' },
          { icon: '🏦', title: 'Home / Personal / Business', subtitle: 'Loan Type', desc: 'Existing home, personal, or business loan eligible' }
        ],
        checklist: [
          'Existing loan with good repayment track',
          'Minimum 6-12 months repayment history',
          'Eligible for higher loan based on income',
          'Good credit score'
        ],
        note: {
          title: 'Important Information',
          desc: 'Eligibility criteria may vary across banks and NBFCs based on loan scheme, applicant profile, and lending policies. The above details are indicative and subject to change.'
        }
      },
      documents: {
        title: "What You'll Need",
        items: [
          'PAN & Aadhaar Card',
          'Existing Loan Statement (12 months)',
          'Foreclosure Letter from Current Lender',
          '6 Months Bank Statement',
          'Salary Slips / ITR',
          'Property Documents (for home loan BT)'
        ]
      },
      howToApply: {
        title: 'Apply in 4 Simple Steps',
        steps: [
          { num: '01', title: 'Fill the Form', desc: 'Share your basic details online. Takes less than 2 minutes.', color: '#00C853' },
          { num: '02', title: 'Get a Call Back', desc: 'Our expert calls you within 30 minutes to discuss options.', color: '#3b82f6' },
          { num: '03', title: 'Submit Documents', desc: 'Upload your documents digitally. No physical visits needed.', color: '#f97316' },
          { num: '04', title: 'Get Your Loan', desc: 'Money credited to your bank account within 24-72 hours.', color: '#a855f7' }
        ]
      },
      faqs: {
        title: 'Common Questions',
        items: [
          { q: 'When should I consider a balance transfer?', a: 'Consider a balance transfer if you can get a significantly lower interest rate that reduces your EMI and overall interest burden, outweighing any transfer costs.' },
          { q: 'Are there any charges for balance transfer?', a: 'Yes, there may be processing fees by the new lender and sometimes foreclosure charges by the existing lender, though many loans like home loans have nil foreclosure charges.' },
          { q: 'Can I get a top-up with balance transfer?', a: 'Yes, most lenders offer an additional top-up loan on top of the balance transfer amount, subject to your eligibility and property value.' }
        ]
      },
      cta: {
        title: 'Start Saving on Your EMI Today',
        subtitle: 'Get your balance transfer approved quickly. Free consultation.',
        buttonText: "Apply Now — It's Free →"
      }
    }
  },
  'loan-for-professionals': {
    badge: '💼 For Professionals',
    title: 'Loan for',
    subtitle: 'Professionals',
    desc: 'Exclusive loan products for doctors, CAs, lawyers, architects, and other licensed professionals. Higher limits, lower rates.',
    bgImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '10%', label: 'STARTING RATE P.A.' },
      { value: '₹30L', label: 'MAX AMOUNT' },
      { value: '24 hrs', label: 'APPROVAL TIME' }
    ],
    details: {
      overview: {
        title: 'Loan for Professionals',
        desc: 'Exclusive loan products for doctors, CAs, lawyers, architects, and other licensed professionals. Higher limits, lower rates.',
        cards: [
          { value: '10%', label: 'STARTING RATE P.A.' },
          { value: '₹30L', label: 'MAX AMOUNT' },
          { value: '24 hrs', label: 'APPROVAL TIME' }
        ]
      },
      features: {
        title: 'Why Choose Us?',
        items: [
          { icon: '👨‍⚕️', title: 'Doctors, CAs, Lawyers', desc: 'Tailored products for licensed professionals across all fields.' },
          { icon: '🔓', title: 'No Collateral', desc: 'Unsecured loans based on your professional credentials.' },
          { icon: '⚡', title: 'Instant Approval', desc: 'In-principle approval within 24 hours.' },
          { icon: '🗓️', title: 'Flexible Tenure', desc: 'Repayment from 12 to 84 months.' }
        ]
      },
      rates: {
        title: 'Rates & Fee Structure',
        table: [
          { label: 'Interest Rate', value: '10% - 18% p.a.' },
          { label: 'Processing Fee', value: '1% - 2% of loan amount' },
          { label: 'Prepayment Charges', value: 'Nil after 6 months' },
          { label: 'Late Payment Fee', value: '2% per month on overdue' },
          { label: 'Loan Tenure', value: '12 - 84 months' }
        ]
      },
      calculator: {
        title: 'Calculate Your Monthly EMI',
        defaultAmount: 1000000,
        minAmount: 100000,
        maxAmount: 3000000,
        defaultRate: 12.0,
        minRate: 10,
        maxRate: 18,
        defaultTenure: 48,
        minTenure: 12,
        maxTenure: 84
      },
      eligibility: {
        title: 'Who Can Apply?',
        items: [
          { icon: '🎓', title: 'Qualified professionals', subtitle: 'Profession', desc: 'Doctor, CA, Architect, Lawyer, Engineer etc.' },
          { icon: '🗓️', title: '1-3 years', subtitle: 'Practice Duration', desc: 'Minimum 1-3 years of active practice required' },
          { icon: '💳', title: 'Stable income', subtitle: 'Income', desc: 'Stable income / turnover required' },
          { icon: '📊', title: 'Good history', subtitle: 'Credit Score', desc: 'Good credit history required' }
        ],
        checklist: [
          'Qualified professionals with valid degree',
          'Minimum 1-3 years practice',
          'Stable income / turnover',
          'Good credit history'
        ],
        note: {
          title: 'Important Information',
          desc: 'Eligibility criteria may vary across banks and NBFCs based on loan scheme, applicant profile, and lending policies. The above details are indicative and subject to change.'
        }
      },
      documents: {
        title: "What You'll Need",
        items: [
          'PAN & Aadhaar Card',
          'Professional Registration Certificate',
          '6 Months Bank Statement',
          'ITR (2 years)',
          'Degree Certificate',
          'Passport Size Photo'
        ]
      },
      howToApply: {
        title: 'Apply in 4 Simple Steps',
        steps: [
          { num: '01', title: 'Fill the Form', desc: 'Share your basic details online. Takes less than 2 minutes.', color: '#00C853' },
          { num: '02', title: 'Get a Call Back', desc: 'Our expert calls you within 30 minutes to discuss options.', color: '#3b82f6' },
          { num: '03', title: 'Submit Documents', desc: 'Upload your documents digitally. No physical visits needed.', color: '#f97316' },
          { num: '04', title: 'Get Your Loan', desc: 'Money credited to your bank account within 24-72 hours.', color: '#a855f7' }
        ]
      },
      faqs: {
        title: 'Common Questions',
        items: [
          { q: 'Which professions are eligible?', a: 'Doctors (MBBS/MD/BDS), CAs, Architects, and Company Secretaries with valid practice certificates are eligible.' },
          { q: 'Can I use the loan for clinic setup?', a: 'Yes, you can use the loan for clinic expansion, equipment purchase, or working capital needs.' }
        ]
      },
      cta: {
        title: 'Exclusive Loans for Professionals',
        subtitle: 'Better rates, higher limits. Free consultation.',
        buttonText: "Apply Now — It's Free →"
      }
    }
  },
  'loan-against-property': {
    badge: '🏘️ Unlock Your Property\'s Value',
    title: 'Loan Against',
    subtitle: 'Property',
    desc: 'Leverage your residential or commercial property to get high-value funds at low interest rates. Flexible tenure, minimal documentation, and quick disbursal.',
    bgImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '8.75%', label: 'STARTING RATE P.A.' },
      { value: '₹5 Cr', label: 'MAX LOAN AMOUNT' },
      { value: '15 Yrs', label: 'MAX TENURE' }
    ],
    details: {
      overview: {
        title: 'Loan Against Property',
        desc: 'Leverage your residential or commercial property to get high-value funds at low interest rates. Flexible tenure, minimal documentation, and quick disbursal.',
        cards: [
          { value: '8.75%', label: 'STARTING RATE P.A.' },
          { value: '₹5 Cr', label: 'MAX LOAN AMOUNT' },
          { value: '15 Yrs', label: 'MAX TENURE' }
        ]
      },
      features: {
        title: 'Why Choose Us?',
        items: [
          { icon: '💰', title: 'High Loan Value', desc: "Get up to 70% of your property's market value as loan amount." },
          { icon: '📉', title: 'Low Interest Rates', desc: 'Starting at 8.75% p.a. — significantly lower than personal loans.' },
          { icon: '🗓️', title: 'Flexible Tenure', desc: 'Repay comfortably over up to 15 years with easy EMIs.' },
          { icon: '🏗️', title: 'Residential & Commercial', desc: 'Both residential and commercial properties accepted as collateral.' }
        ]
      },
      rates: {
        title: 'Rates & Fee Structure',
        table: [
          { label: 'Interest Rate', value: '8.75% - 14% p.a.' },
          { label: 'Processing Fee', value: '0.5% - 1.5% of loan amount' },
          { label: 'Prepayment Charges', value: 'Nil for floating rate' },
          { label: 'Late Payment Fee', value: '2% per month on overdue' },
          { label: 'Loan Tenure', value: 'Up to 15 years' }
        ]
      },
      calculator: {
        title: 'Calculate Your Monthly EMI',
        defaultAmount: 5000000,
        minAmount: 500000,
        maxAmount: 50000000,
        defaultRate: 10.0,
        minRate: 8.75,
        maxRate: 14,
        defaultTenure: 120,
        minTenure: 12,
        maxTenure: 180
      },
      eligibility: {
        title: 'Who Can Apply?',
        items: [
          { icon: '🏠', title: 'Residential/Commercial', subtitle: 'Property Owner', desc: 'Property owner (residential/commercial)' },
          { icon: '💳', title: 'Stable source', subtitle: 'Income', desc: 'Stable income source required' },
          { icon: '📊', title: 'Good score', subtitle: 'Credit Score', desc: 'Good credit score required' },
          { icon: '🏡', title: 'Legally clear', subtitle: 'Property Title', desc: 'Property must be legally clear' }
        ],
        checklist: [
          'Property owner (residential/commercial)',
          'Stable income source',
          'Good repayment capacity',
          'Property must be legally clear',
          'Good credit score'
        ],
        note: {
          title: 'Important Information',
          desc: 'Eligibility criteria may vary across banks and NBFCs based on loan scheme, applicant profile, and lending policies. The above details are indicative and subject to change.'
        }
      },
      documents: {
        title: "What You'll Need",
        items: [
          'PAN & Aadhaar Card',
          '6 Months Bank Statement',
          'Salary Slips / ITR (2 years)',
          'Property Title Deed',
          'Property Valuation Report',
          'Encumbrance Certificate',
          'Passport Size Photo',
          'Business Proof (if self-employed)'
        ]
      },
      financers: {
        title: 'Trusted Lending Partners',
        desc: "We partner with India's top banks and NBFCs to get you the best rates and fastest approvals.",
        stats: [
          { value: '23+', label: 'PARTNERS' },
          { value: '₹500Cr+', label: 'DISBURSED' },
          { value: '98%', label: 'APPROVAL RATE' }
        ],
        partners: [
          { name: 'State Bank of India', color: '#b91c1c' },
          { name: 'Axis Bank', color: '#15803d' },
          { name: 'IDFC FIRST Bank', color: '#6b21a8' },
          { name: 'Punjab National Bank', color: '#ca8a04' },
          { name: 'Aditya Birla Finance', color: '#7e22ce' },
          { name: 'IIFL Finance', color: '#dc2626' },
          { name: 'PNB Housing Finance', color: '#16a34a' },
          { name: 'Aditya Birla Housing Finance', color: '#6b21a8' },
          { name: 'HDFC Bank', color: '#ca8a04' },
          { name: 'Kotak Mahindra Bank', color: '#0d9488' },
          { name: 'Yes Bank', color: '#db2777' },
          { name: 'Bajaj Finance', color: '#16a34a' },
          { name: 'Piramal Finance', color: '#3730a3' },
          { name: 'HDB Financial Services', color: '#ea580c' },
          { name: 'Bajaj Housing Finance', color: '#0d9488' },
          { name: 'Piramal Housing Finance', color: '#be185d' },
          { name: 'ICICI Bank', color: '#ea580c' },
          { name: 'IndusInd Bank', color: '#312e81' },
          { name: 'Bank of Baroda', color: '#f97316' },
          { name: 'Tata Capital', color: '#14b8a6' },
          { name: 'Poonawalla Fincorp', color: '#9333ea' },
          { name: 'LIC Housing Finance', color: '#15803d' },
          { name: 'Tata Capital Housing Finance', color: '#1e40af' }
        ]
      },
      whyChoose: {
        title: 'WHY CHOOSE THIS LOAN',
        items: [
          { title: 'Secured Loan with Property Collateral', desc: 'Loan is given against residential/commercial property, reducing lender risk.' },
          { title: 'High Loan Amount Eligibility', desc: 'Funding up to 50%-85% of property value depending on profile.' },
          { title: 'Multi-purpose Usage (No End-Use Restriction)', desc: 'Can be used for business, education, medical, or personal needs.' },
          { title: 'Balance Transfer Facility Available', desc: 'Option to shift existing LAP to another lender for better rates/top-up.' },
          { title: 'Lower Interest Rates vs Personal Loans', desc: 'Typically starts around ~8-10% p.a., making it cheaper than unsecured loans.' },
          { title: 'Long Repayment Tenure', desc: 'Flexible tenure up to 15-20 years (or more in some cases).' },
          { title: 'Overdraft / Flexi Loan Option', desc: 'Pay interest only on utilized amount (similar to OD facility).' },
          { title: 'Continue Using Your Property', desc: 'Even after mortgaging, you retain ownership and usage rights.' }
        ]
      },
      howToApply: {
        title: 'Apply in 4 Simple Steps',
        steps: [
          { num: '01', title: 'Fill the Form', desc: 'Share your basic details online. Takes less than 2 minutes.', color: '#00C853' },
          { num: '02', title: 'Get a Call Back', desc: 'Our expert calls you within 30 minutes to discuss options.', color: '#3b82f6' },
          { num: '03', title: 'Submit Documents', desc: 'Upload your documents digitally. No physical visits needed.', color: '#f97316' },
          { num: '04', title: 'Get Your Loan', desc: 'Money credited to your bank account within 24-72 hours.', color: '#a855f7' }
        ]
      },
      faqs: {
        title: 'Common Questions',
        items: [
          { q: 'What types of properties are accepted?', a: 'We accept residential, commercial, and industrial properties as collateral, provided they have clear, marketable titles.' },
          { q: 'How much loan can I get against my property?', a: "You can get up to 50%-85% of your property's current market value, depending on the property type and your credit profile." },
          { q: 'Can I use the loan for any purpose?', a: 'Yes, Loan Against Property is a multi-purpose loan with no end-use restriction. You can use it for business expansion, medical emergencies, education, or personal needs.' },
          { q: 'Will I lose my property if I default?', a: 'Yes, since this is a secured loan, the lender has the right to repossess and sell the property to recover the dues if you default on your payments. We always advise borrowing within your repayment capacity.' },
          { q: 'How long does disbursal take?', a: 'Once all property documents and legal checks are completed, the loan amount is typically disbursed within 7-14 working days.' }
        ]
      },
      cta: {
        title: "Unlock Your Property's True Value",
        subtitle: 'Get the best LAP rates from 20+ lenders. Free consultation.',
        buttonText: "Apply Now — It's Free →"
      }
    }
  }
};

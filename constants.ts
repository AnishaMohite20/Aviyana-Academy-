export interface InstallmentPlan {
    count: number;
    amount: number;
    interval: string;
}

export interface CourseLevel {
    level: string;
    fee: number;
    originalFee?: number;
    duration: string;
    syllabus?: string[];
    installments?: InstallmentPlan;
}

export interface Course {
    id: string;
    title: string;
    description: string;
    levels: CourseLevel[];
}

export const COURSES: Course[] = [
    {
        id: "digital-marketing",
        title: "Certificate Course in Digital Marketing",
        description: "Master online marketing, from SEO and social media to content strategy and analytics.",
        levels: [
            { level: "Beginner", fee: 25000, originalFee: 30000, duration: "3 Months", syllabus: ["Introduction to Digital Marketing", "SEO Fundamentals", "Social Media Marketing Basics", "Content Creation"] },
            { level: "Intermediate", fee: 32000, originalFee: 38000, duration: "4 Months", syllabus: ["Advanced SEO Strategies", "Pay-Per-Click (PPC) Advertising", "Email Marketing & Automation", "Web Analytics"] },
            { 
                level: "Advanced", 
                fee: 40000, 
                originalFee: 45000, 
                duration: "5 Months", 
                syllabus: ["Growth Hacking", "Conversion Rate Optimization (CRO)", "Advanced Marketing Analytics", "Digital Marketing Strategy"],
                installments: { count: 2, amount: 21000, interval: 'monthly' }
            },
        ]
    },
    {
        id: "advanced-excel",
        title: "Advanced Excel Training & Certification",
        description: "Unlock Excel's full potential with advanced formulas, pivot tables, and data visualization.",
        levels: [
            { level: "Beginner", fee: 10000, originalFee: 12000, duration: "1 Month", syllabus: ["Basic Formulas & Functions", "Data Formatting", "Introduction to Charts"] },
            { level: "Intermediate", fee: 15000, originalFee: 18000, duration: "1.5 Months", syllabus: ["Pivot Tables & Slicers", "Advanced Charting", "Data Validation & Protection"] },
            { 
                level: "Advanced", 
                fee: 20000, 
                originalFee: 24000, 
                duration: "2 Months", 
                syllabus: ["Power Query & Power Pivot", "Macros & VBA Basics", "Complex Financial Modeling"],
                installments: { count: 2, amount: 10500, interval: 'monthly' }
            },
        ]
    },
    {
        id: "formula-expert",
        title: "Formula Expert",
        description: "Text, Lookup, Date & Time, Logical Functions & Formulas - Total 75 formulas covered.",
        levels: [
            { level: "Standard", fee: 9000, originalFee: 11000, duration: "1 Month", syllabus: ["Core Text Functions", "VLOOKUP/HLOOKUP", "Conditional Logic (IF, AND, OR)", "Date & Time Calculations"] }
        ]
    },
    {
        id: "retail-operations",
        title: "Certificate Course in Retail Operations",
        description: "Gain essential skills in retail management, inventory control, customer service, and store operations.",
        levels: [
            { 
                level: "Standard", 
                fee: 18000, 
                originalFee: 22000, 
                duration: "2 Months", 
                syllabus: ["Retail Fundamentals", "Inventory Management", "Customer Relationship Management", "Visual Merchandising"],
                installments: { count: 2, amount: 9500, interval: 'monthly' }
            }
        ]
    },
    {
        id: "big-data",
        title: "Certificate Course in Big Data Analytics",
        description: "Learn to analyze large datasets to uncover insights and drive business decisions using modern data tools.",
        levels: [
            { 
                level: "Standard", 
                fee: 35000, 
                originalFee: 40000, 
                duration: "4 Months", 
                syllabus: ["Introduction to Big Data", "Hadoop Ecosystem", "Data Warehousing", "Machine Learning Concepts"],
                installments: { count: 2, amount: 18000, interval: 'monthly' }
            }
        ]
    },
    {
        id: "cyber-security",
        title: "Certificate Course in Cyber Intelligence & Cyber Security",
        description: "Develop expertise in protecting digital assets, understanding threats, and implementing robust security measures.",
        levels: [
            { 
                level: "Beginner", 
                fee: 40000, 
                originalFee: 45000, 
                duration: "4 Months", 
                syllabus: ["Intro to Cyber Security", "Network Security", "Common Threats & Malware"],
                installments: { count: 2, amount: 21000, interval: 'monthly' }
            },
            { 
                level: "Advanced", 
                fee: 55000, 
                originalFee: 60000, 
                duration: "6 Months", 
                syllabus: ["Ethical Hacking", "Digital Forensics", "Cryptography", "Cloud Security"],
                installments: { count: 3, amount: 20000, interval: 'monthly' }
            },
        ]
    },
    {
        id: "office-secretary",
        title: "Certificate Course for Office Secretary",
        description: "Enhance your administrative skills with training in office management, communication, and essential software.",
        levels: [
            { level: "Standard", fee: 12000, originalFee: 15000, duration: "2 Months" }
        ]
    },
    {
        id: "tally",
        title: "Tally Certification",
        description: "Become proficient in Tally ERP 9 for accounting, inventory, and payroll management.",
        levels: [
            { level: "Standard", fee: 8000, originalFee: 10000, duration: "1.5 Months" }
        ]
    },
    {
        id: "erp",
        title: "ERP Certification",
        description: "Understand Enterprise Resource Planning systems to streamline business processes across various departments.",
        levels: [
            { 
                level: "Standard", 
                fee: 30000, 
                originalFee: 35000, 
                duration: "3 Months",
                installments: { count: 2, amount: 15500, interval: 'monthly' }
            }
        ]
    },
    {
        id: "finance-non-finance",
        title: "Certificate Course in Finance for Non-Finance Managers",
        description: "Grasp key financial concepts to make informed business decisions without a formal finance background.",
        levels: [
            { 
                level: "Standard", 
                fee: 22000, 
                originalFee: 25000, 
                duration: "2 Months",
                installments: { count: 2, amount: 11500, interval: 'monthly' }
            }
        ]
    },
    {
        id: "six-sigma",
        title: "Six Sigma Training",
        description: "Learn methodologies to improve business processes, reduce defects, and enhance overall quality control.",
        levels: [
            { 
                level: "Standard", 
                fee: 28000, 
                originalFee: 32000, 
                duration: "3 Months",
                installments: { count: 2, amount: 14500, interval: 'monthly' }
            }
        ]
    },
    {
        id: "iso-auditor",
        title: "ISO Auditor Certification",
        description: "Become a certified auditor for ISO standards, ensuring quality management systems are effectively implemented.",
        levels: [
            { 
                level: "Standard", 
                fee: 32000, 
                originalFee: 36000, 
                duration: "3 Months",
                installments: { count: 2, amount: 16500, interval: 'monthly' }
            }
        ]
    },
    {
        id: "corporate-grooming",
        title: "Corporate Grooming Skills Certificate",
        description: "An 8-week course for freshers ensuring job aspirant fitment to enter the industry. Covers communication, etiquette, CV building, and social media presence, with 100% placement assistance. Special Attractions: Expert faculties, Practical learning, Opportunity to work with brands across sectors/industries.",
        levels: [
            {
                level: "Standard",
                fee: 15000,
                originalFee: 18000,
                duration: "8 Weeks",
                syllabus: [
                    "Week 1: Communications Skills",
                    "Week 2: Communications Skills",
                    "Week 3: Communications Skills",
                    "Week 4: Communications Skills",
                    "Week 5: Etiquettes",
                    "Week 6: CV Preparation/Correction",
                    "Week 7: Social Profile (www.linkedin.com, www.facebook.com)",
                    "Week 8: Grading, Assessment & Certification",
                ]
            }
        ]
    },
    {
        id: "entrepreneurship-coaching",
        title: "Entrepreneurship Skills Coaching",
        description: "Handholding from conceptualization to execution. Special Attractions: Opportunity to start and get mentored by the best in industry. Financial Assistance support from Angel Investors, Venture Capitalists, and Bank Funding as required.",
        levels: [
            {
                level: "Standard",
                fee: 50000,
                originalFee: 60000,
                duration: "16 Weeks",
                syllabus: [
                    "Week 1: Understanding Entrepreneurship & your interest and funding resources. Setting the Business Philosophy, Vision, Mission, Goals & Objectives.",
                    "Week 2: Preparing Business Report for Selecting Business Self Brand or Franchisee.",
                    "Week 3: Business Plan & Space Selection Exercise.",
                    "Week 4: Company Registration Process: Sole Proprietor, Partnership, LLP, Pvt. Ltd.",
                    "Week 5: Manpower Planning, JDs & Selection Process Exercise.",
                    "Week 6: Competition and go-to-market strategy.",
                    "Week 7: As name approval is received (if Pvt. Ltd. or LLP), applying for TIN, GSTIN (if applicable), Shop & Establishment License, branding of space, Bank Account.",
                    "Week 8: Manpower Induction, Service/Product Training & launch of business.",
                    "Week 9-16: Mentoring with Evaluation of start-up challenges and helping to solve them."
                ],
                installments: { count: 2, amount: 26000, interval: 'monthly' }
            }
        ]
    },
    {
        id: "corporate-excellence-coaching",
        title: "Corporate Excellence Skill Coaching",
        description: "A focused 4-week program for experienced professionals seeking job changes, providing critical evaluation and guidance for corporate success. Features one-on-one coaching with industry experts and 100% placement assistance.",
        levels: [
            {
                level: "Standard",
                fee: 20000,
                originalFee: 25000,
                duration: "4 Weeks",
                syllabus: [
                    "Week 1: Understanding your present role with challenges faced and honest evaluation of need to change or not.",
                    "Week 2: Organisation Politics and how to handle to its advantage.",
                    "Week 3: Social Profile (www.linkedin.com, www.facebook.com) & networking how it matters.",
                    "Week 4: CV Preparation and Suggesting the job suitability and role to look for as required."
                ],
                installments: { count: 2, amount: 10500, interval: 'monthly' }
            }
        ]
    }
];

export const CLIENTS = [
    { name: "Change Networks", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWFcmu-WrGO18hJbEhLi8x0G6NX4tfykjzw&s" },
    { name: "Zynara Healthcare", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9vHsG-N1yEsgY4OM3eTCVELmE3EBl578rw&s" },
    { name: "Indus Eximtech Pvt Ltd", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOUz4dqQL4lwq0e8ANQzsCVGDmkUGgcdm1g&s" },
    { name: "Goel Trading Company", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaz_a2hzvBf2VUCpy-Vn3uVFbyo1JYe34TmA&s" },
];

export const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
    { name: "Enquiry", href: "#enquiry" },
    { name: "Contact", href: "#contact" },
];

export const FOOTER_LEGAL_LINKS = [
    { name: "Privacy Policy", href: "#privacy-policy" },
    { name: "Terms of Service", href: "#terms-of-service" },
];

export const TESTIMONIALS = [
    {
        name: "Priya Sharma",
        course: "Certificate Course in Digital Marketing",
        testimonial: "The Digital Marketing course was incredibly comprehensive. The instructors were knowledgeable and the hands-on projects helped me build a solid portfolio. I landed a job as a social media manager just a month after completion!",
        image: "https://i.pravatar.cc/150?img=1"
    },
    {
        name: "Rahul Verma",
        course: "Advanced Excel Training & Certification",
        testimonial: "I thought I knew Excel, but this course took my skills to a whole new level. The advanced functions and data visualization techniques I learned are invaluable in my current role as a data analyst. Highly recommended.",
        image: "https://i.pravatar.cc/150?img=3"
    },
    {
        name: "Anjali Singh",
        course: "Certificate Course in Cyber Intelligence & Cyber Security",
        testimonial: "Aviyana Academy provided a deep dive into the world of cyber security. The curriculum is up-to-date with current threats and technologies. The career assistance was also fantastic in helping me prepare for interviews.",
        image: "https://i.pravatar.cc/150?img=5"
    },
    {
        name: "Vikram Reddy",
        course: "Six Sigma Training",
        testimonial: "The Six Sigma training has been a game-changer for my career in operations management. The practical approach and real-world case studies made complex concepts easy to understand and apply.",
        image: "https://i.pravatar.cc/150?img=7"
    }
];

export const PAYMENT_DETAILS = {
    VPA: '9324190698@icici',
    MERCHANT_NAME: 'Aviyana Ventures Pvt. Ltd.',
};

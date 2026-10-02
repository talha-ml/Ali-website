// Factually accurate portfolio data extracted strictly from APP.pdf and CV.pdf
// Confidential IDs, private phone numbers, and street addresses are omitted for public safety.

export const PERSONAL_INFO = {
  name: "Ahmad Ali",
  title: "Physician • Medical Researcher • Community Advocate",
  degree: "M.B.,B.S.",
  medicalSchool: "Services Institute of Medical Sciences (SIMS)",
  gradYear: "2023",
  location: "Lahore & Muzaffargarh, Pakistan | United States",
  pronouns: "He/Him/His",
  tagline: "Bridging evidence-based clinical medicine, multi-institutional meta-research, and compassionate care for underserved populations.",
  summary: "Internal Medicine residency applicant with comprehensive clinical internship experience at a 1,200-bed teaching hospital, U.S. clinical observership training in Level 1 & Level 2 Trauma Centers, extensive multi-institutional systematic review and meta-analysis experience resulting in 18 scholarly works, and a proven dedication to rural community health and student leadership.",
  impactfulQuote: "Growing up in a village of 400 people with no nearby hospital or school taught me the true cost of health inequity. Seeing my father skip his own insulin doses to afford my education instilled a lifelong commitment to resilience, humility, and serving every patient with unyielding empathy.",
  heroStats: [
    { label: "Scholarly Works", value: "18", description: "Meta-analyses, papers & abstracts" },
    { label: "Clinical Rotations", value: "12 Mos", description: "Inpatient, Emergency, ICU & IM" },
    { label: "U.S. Observerships", value: "2", description: "Lehigh Valley & Forrest General" },
    { label: "Community Drives", value: "6+ Yrs", description: "Medical camps, relief & outreach" }
  ]
};

export const CLINICAL_EXPERIENCES = [
  {
    id: "nisar-clinic",
    role: "Medical Officer",
    organization: "Nisar Clinic",
    location: "Chak no 581 TDA, Pakistan (Hometown Village)",
    dates: "07/2024 – Present",
    type: "Work / Clinical Practice",
    setting: "Rural / Resource-Limited",
    badge: "Rural Primary Care",
    keyCharacteristic: "Resilience & Adaptability",
    highlights: [
      "Serving as a primary care physician in a resource-limited village setting, managing diverse acute and chronic patient presentations.",
      "Organized weekly free Sunday medical camps providing screening for Hepatitis B/C, diabetes, hypertension, and preventive health counseling.",
      "Conducted health awareness campaigns in local community gathering spaces to address healthcare taboos, particularly surrounding women's access to medical services.",
      "Coordinated local resources for comprehensive care and referral pathways for HIV and tuberculosis patients.",
      "Partnered with local pharmaceutical distributors to negotiate reduced medication costs for impoverished patients."
    ]
  },
  {
    id: "lvhn-observer",
    role: "U.S. Clinical Observer",
    organization: "Lehigh Valley Hospital – Cedar Crest",
    location: "Allentown, PA, United States",
    dates: "09/2026",
    type: "Education / Training",
    setting: "Suburban/Urban (877-bed Level 1 Trauma Center)",
    badge: "U.S. Clinical Exposure",
    keyCharacteristic: "Empathy & Compassion",
    highlights: [
      "Shadowed hospitalist attendings at an 877-bed Level 1 Trauma Center, observing 20–25 floor patients daily from early-morning Epic pre-rounds to physical rounds.",
      "Analyzed interprofessional workflows across Epic EMR, emphasizing prompt team communication and discharge planning with social workers and case managers.",
      "Participated in daily 10 AM multidisciplinary team huddles reviewing patient progress, care trajectories, and post-discharge follow-up needs.",
      "Observed clinical case presentations, patient interviews under direct supervision, and patient de-escalation/empathy techniques.",
      "Studied U.S. health insurance networks and reimbursement models with a focus on care delivery for vulnerable populations.",
      "Most Meaningful Learning: Observed an attending physician kneel beside an agitated patient to soothe them, taking extra time to listen to their story before medical discussions—a practice of compassionate care Dr. Ali vows to emulate."
    ]
  },
  {
    id: "fgh-observer",
    role: "U.S. Clinical Observer",
    organization: "Forrest General Hospital",
    location: "Hattiesburg, MS, United States",
    dates: "09/2026",
    type: "Education / Training",
    setting: "Suburban/Urban (547-bed Level II Trauma Center)",
    badge: "U.S. Clinical Exposure",
    keyCharacteristic: "Critical Thinking & Problem Solving",
    highlights: [
      "Shadowed hospitalist physicians across floor and emergency units at a 547-bed Level II Trauma Center and regional flagship facility.",
      "Followed full inpatient care trajectories from pre-rounds to multidisciplinary team rounds and discharge execution.",
      "Engaged preceptors on recent clinical trial findings, updated clinical practice guidelines, and evidence-based medicine applications.",
      "Gained hands-on familiarity with Epic EMR navigation, case presentation structuring, and cultural competency with regional patient demographics.",
      "Investigated strategies within the U.S. healthcare delivery system for optimizing effective care in underserved rural/suburban cohorts."
    ]
  },
  {
    id: "sims-internship",
    role: "Clinical Intern / House Officer",
    organization: "Services Hospital Lahore",
    location: "Lahore, Pakistan",
    dates: "06/2023 – 06/2024",
    type: "Work / Internship",
    setting: "Urban (1,200-bed Tertiary Care Teaching Hospital)",
    badge: "12-Month House Job",
    keyCharacteristic: "Reliability & Dependability",
    highlights: [
      "Completed a comprehensive 12-month clinical internship at a premier 1,200-bed tertiary care teaching hospital.",
      "Completed 6 dedicated months in Internal Medicine (including Endocrinology & Metabolism), alongside rotations in General Surgery and Anesthesia.",
      "Rotated through inpatient wards, outpatient clinics, emergency department, and intensive care units (ICU).",
      "Conducted patient histories, detailed physical examinations, lab interpretation, and case presentations during daily attending rounds.",
      "Assisted with invasive clinical procedures: nasogastric (NG) tube placement, urinary catheterization, PICC line placement, endoscopies, and colonoscopies.",
      "Counseled families of critically ill patients on treatment prognosis, end-of-life care, and clinical empathy.",
      "Contributed to data collection for hospital clinical research projects."
    ]
  }
];

export const RESEARCH_EXPERIENCE = {
  affiliation: {
    role: "Student Researcher",
    organization: "Meta Analysis Academy",
    location: "Lahore, Pakistan (Virtual Collaborative)",
    dates: "12/2025 – 06/2026",
    description: "Conducted multi-institutional systematic reviews and meta-analyses under expert research mentorship. Managed full project cycles: topic selection, building search strings (PubMed, Embase, Cochrane), title/abstract screening, Excel data extraction, and statistical analyses in R and RevMan Studio. Coordinated collaborative author teams and prepared manuscripts for high-impact peer-reviewed journals."
  },
  categories: [
    { id: "all", label: "All Scholarly Works" },
    { id: "journal-article", label: "Peer-Reviewed Articles" },
    { id: "journal-abstract", label: "Conference Abstracts" },
    { id: "poster", label: "Poster Presentations" }
  ],
  publications: [
    {
      id: "pub-1",
      category: "journal-article",
      type: "Journal Article (Peer-Reviewed)",
      title: "CagriSema versus Semaglutide 2.4mg monotherapy for weight management in adults with overweight or obesity, with or without type 2 diabetes: a systematic review, meta-analysis, and trial sequential analysis",
      journal: "Frontiers in Endocrinology",
      authors: "Rasool ZK, Shah R, Batool AEZ, Shah R, Khachatryan M, Bhardwaj S, Ali AG, Atta M, Bakthavatchalam P, Khawar MMH, Khawar M",
      date: "September 2026",
      status: "Accepted/In-Press",
      statusBadge: "success",
      url: null
    },
    {
      id: "pub-2",
      category: "journal-article",
      type: "Journal Article (Peer-Reviewed)",
      title: "Cardiovascular Outcomes with Non Statin LDL Lowering Therapies: An Updated Meta Analysis of Randomized Controlled Trials Including VESALIUS-CVW",
      journal: "Circulation: Population Health and Outcomes",
      authors: "Hassan MM, Magsi N, Ali A, Rukh M, Batool A, Rasheed M, Hamzah A, Nadeem H, Aziz R, Hamza M, Siddique MU, Khalid M, Ashraf DA, Mentz RJ",
      date: "September 2026",
      status: "Submitted",
      statusBadge: "warning",
      url: null
    },
    {
      id: "pub-3",
      category: "journal-article",
      type: "Journal Article (Peer-Reviewed)",
      title: "Neoadjuvant chemotherapy versus upfront surgery in locally advanced colon cancer: a meta-analysis and trial sequential analysis of randomized trials",
      journal: "Science Progress Journal",
      authors: "Heo J, Daniyal AMB, Said A, Shahid R, Ali A, Kim G, Kim H, Khan R, Park J, Abid MH, Safi SU, Khawar M, Khawar MMH",
      date: "August 2026",
      status: "Submitted",
      statusBadge: "warning",
      url: null
    },
    {
      id: "pub-4",
      category: "journal-article",
      type: "Journal Article (Peer-Reviewed)",
      title: "Oral versus Intravenous Paclitaxel in Metastatic or Recurrent Breast Cancer: A Systematic Review and Meta-Analysis with GRADE Assessment",
      journal: "Frontiers in Medicine",
      authors: "Khawar M, Nyirahabimana D, Ali AG, Nemani RR, Lacej D, Adnan S, Tariq MU, Kolnikaj TS, Pradhan B, Tarko K, Bakthavatchalam P, Khawar MMH",
      date: "May 2026",
      status: "Submitted",
      statusBadge: "warning",
      url: null
    },
    {
      id: "abs-1",
      category: "journal-abstract",
      type: "Journal Abstract (Peer-Reviewed)",
      title: "Catheter Ablation versus Medical Therapy for Atrial Fibrillation Across Heart Failure Phenotypes: A Reconstructed Individual-Patient-Data Meta-Analysis and Contemporary GDMT-Era Meta-Regression",
      journal: "AHA Scientific Sessions (Chicago, IL)",
      authors: "Hassan MM, Magsi N, Nadeem H, MahRukh, Hassan T, Hamza M, Ahmad M, Ali A, Siddique MU, Khalid M, MuhayyuDin G, Fatima M, Ashraf DA, Mentz RJ",
      date: "November 2026 (Accepted Aug 2026)",
      status: "Accepted/In-Press",
      statusBadge: "success",
      url: null
    },
    {
      id: "abs-2",
      category: "journal-abstract",
      type: "Journal Abstract (Peer-Reviewed)",
      title: "Safety and Hemodynamic Effects of Sotatercept in WHO Group 1 Pulmonary Arterial Hypertension and Group 2 CpcPH-HFpEF: A Systematic Review and Meta-Analysis of Randomized Controlled Trials",
      journal: "AHA Scientific Sessions (Chicago, IL)",
      authors: "Hassan MM, Magsi N, Rukh M, Aziz R, Hamza M, Batool A, Khalid M, Hasanat A, Siddique MU, Nadeem H, Ali A, Fatima M, Ashraf DA, Mentz RJ",
      date: "November 2026 (Accepted Aug 2026)",
      status: "Accepted/In-Press",
      statusBadge: "success",
      url: null
    },
    {
      id: "abs-3",
      category: "journal-abstract",
      type: "Journal Abstract (Peer-Reviewed)",
      title: "Comparative Efficacy and Safety of Early Adjunctive Antiplatelet Therapy Following Intravenous Thrombolysis in Acute Ischemic Stroke: A Network Meta-Analysis of Randomized Controlled Trials",
      journal: "AHA Scientific Sessions (Chicago, IL)",
      authors: "Hassan MM, Magsi N, Siddique MU, Rukh M, Hassan T, Rasheed M, Zahid I, Aziz R, Hamza M, Khalid M, Ali A, Ashraf DA, Mentz RJ",
      date: "November 2026 (Accepted Aug 2026)",
      status: "Accepted/In-Press",
      statusBadge: "success",
      url: null
    },
    {
      id: "abs-4",
      category: "journal-abstract",
      type: "Journal Abstract (Peer-Reviewed)",
      title: "Cardiovascular Outcomes with Non Statin LDL Lowering Therapies: An Updated Meta Analysis of Randomized Controlled Trials Including VESALIUS-CVW",
      journal: "AHA Scientific Sessions (Chicago, IL)",
      authors: "Hassan MM, Magsi N, Ali A, MahRukh, Batool A, Rasheed M, Hamzah A, Nadeem H, Aziz R, Hamza M, Siddiquie MU, Khalid M, Ashraf DA, Mentz RJ",
      date: "November 2026 (Accepted Aug 2026)",
      status: "Accepted/In-Press (Most Meaningful)",
      statusBadge: "featured",
      url: null
    },
    {
      id: "abs-5",
      category: "journal-abstract",
      type: "Journal Abstract (Peer-Reviewed)",
      title: "Catheter Based Reperfusion versus Anticoagulation Alone in Intermediate Risk Pulmonary Embolism: A systematic Review and Meta Analysis of Five Randomized Controlled Trials in the HI-PEITHO Era",
      journal: "AHA Scientific Sessions (Chicago, IL)",
      authors: "Magsi N, Rukh M, Afaq M, Hassam MM, Ali A, Ahmad M, Zahra E, Sultana S, Naseem A, Hasanat A, Iqbal MT, Aslam M, Fatima M",
      date: "November 2026 (Accepted Aug 2026)",
      status: "Accepted/In-Press",
      statusBadge: "success",
      url: null
    },
    {
      id: "abs-6",
      category: "journal-abstract",
      type: "Journal Abstract (Peer-Reviewed)",
      title: "MM-1599: Temporal Trends and Demographic Disparities in Mortality From Multiple Myeloma With Coexisting Heart Failure in the United States, 1999–2024",
      journal: "Clinical Lymphoma, Myeloma and Leukemia (Vol 26, Supp 1)",
      authors: "Zafar F, Daim SUR, Ali A, Ahmed RU, MM-1599",
      date: "August 2026",
      status: "Published",
      statusBadge: "published",
      url: "https://www.clinical-lymphoma-myeloma-leukemia.com/article/S2152-2650(26)03074-0/abstract"
    },
    {
      id: "abs-7",
      category: "journal-abstract",
      type: "Journal Abstract (Peer-Reviewed)",
      title: "Neoadjuvant chemotherapy versus upfront surgery in locally advanced colon cancer: a meta-analysis and trial sequential analysis of randomized trials",
      journal: "ESMO Congress 2026 (Madrid, Spain)",
      authors: "Heo J, Daniyal AMB, Said A, Shahid R, Ali A, Kim G, Kim H, Khan R, Park J, Abid MH, Safi SU, Khawar M, Khawar MMH",
      date: "October 2026 (Accepted July 2026)",
      status: "Accepted/In-Press",
      statusBadge: "success",
      url: null
    },
    {
      id: "abs-8",
      category: "journal-abstract",
      type: "Journal Abstract (Peer-Reviewed)",
      title: "Safety And Efficacy Of Glucagon-like Peptide-1 Receptor Agonists in Liver Transplant Recipients: A Systematic Review And Meta-Analysis",
      journal: "ACG Annual Scientific Meeting 2026 (Nashville, TN)",
      authors: "Ijaz H, Chopra P, Ali A, Saeed A, Oktaei H, Tombazzi C",
      date: "October 2026 (Accepted July 2026)",
      status: "Accepted/In-Press (Most Meaningful)",
      statusBadge: "featured",
      url: null
    },
    {
      id: "abs-9",
      category: "journal-abstract",
      type: "Journal Abstract (Peer-Reviewed)",
      title: "Temporal Racial Disparities in Pancreatic Cancer Mortality Across Rural and Urban Populations in the United States, 1999 to 2020",
      journal: "ACG Annual Scientific Meeting 2026 (Nashville, TN)",
      authors: "Zafar F, Daim SUR, Fazal MI, Zain A, Ijaz H, Safdar MA, Ali A, Khalid M",
      date: "October 2026 (Accepted July 2026)",
      status: "Accepted/In-Press",
      statusBadge: "success",
      url: null
    },
    {
      id: "abs-10",
      category: "journal-abstract",
      type: "Journal Abstract (Peer-Reviewed)",
      title: "Temporal Trends and Demographic Disparities in Esophageal Cancer Mortality Among individuals With Tobacco Use Disorder in the United States: A Retrospective Analysis, 2005 to 2024",
      journal: "ACG Annual Scientific Meeting 2026 (Nashville, TN)",
      authors: "Zafar F, Fazal MI, Zain A, Ali A, Nawaz I",
      date: "October 2026 (Accepted July 2026)",
      status: "Accepted/In-Press",
      statusBadge: "success",
      url: null
    },
    {
      id: "abs-11",
      category: "journal-abstract",
      type: "Journal Abstract (Peer-Reviewed)",
      title: "Nephrotic Syndrome Outcomes in Teaching Hospitals: NIS 2017-2018",
      journal: "American Society of Nephrology (ASN Kidney Week 2026, Denver, CO)",
      authors: "Zafar MU, Ali A, Zaidi SHM",
      date: "October 2026 (Accepted July 2026)",
      status: "Accepted/In-Press (Most Meaningful)",
      statusBadge: "featured",
      url: null
    },
    {
      id: "abs-12",
      category: "journal-abstract",
      type: "Journal Abstract (Peer-Reviewed)",
      title: "Long-term trends and demographic disparities in renal cell carcinoma mortality in the United States, 1968–2023",
      journal: "Journal of Clinical Oncology (Vol 44, 16_suppl)",
      authors: "Zafar F, Nawaz I, Khalid M, Fazal MI, Manan MR, Ali A",
      date: "May 2026",
      status: "Published",
      statusBadge: "published",
      url: "https://ascopubs.org/doi/pdf/10.1200/JCO.2026.44.16_suppl.e16541"
    },
    {
      id: "poster-1",
      category: "poster",
      type: "Poster Presentation",
      title: "Cardiovascular Outcomes with Non Statin LDL Lowering Therapies: An Updated Meta Analysis of Randomized Controlled Trials Including VESALIUS-CVW",
      journal: "AHA Scientific Sessions 2026 (Chicago, IL)",
      authors: "Hassan MM, Magsi N, Ali A, MahRukh, Batool A, Rasheed M, Hamzah A, Nadeem H, Aziz R, Hamza M, Siddiquie MU, Khalid M, Ashraf DA, Mentz RJ",
      date: "November 2026",
      status: "Poster Presented",
      statusBadge: "poster",
      url: null
    },
    {
      id: "poster-2",
      category: "poster",
      type: "Poster Presentation",
      title: "Catheter-Based Reperfusion Versus Anticoagulation Alone in Intermediate-Risk Pulmonary Embolism: A Systematic Review and Meta-Analysis of Five Randomized Controlled Trials in the HI-PEITHO Era",
      journal: "AHA Scientific Sessions 2026 (Chicago, IL)",
      authors: "Magsi N, Rukh M, Afaq M, Hassan MM, Ali A, Ahmad M, Zahra E, Sultana S, Naseem A, Hasanat A, Iqbal MT, Aslam M, Fatima M",
      date: "November 2026",
      status: "Poster Presented",
      statusBadge: "poster",
      url: null
    }
  ]
};

export const COMMUNITY_LEADERSHIP = [
  {
    id: "together-we-can",
    organization: "Together We Can",
    role: "Volunteer & Field Lead",
    dates: "07/2020 – 08/2024",
    location: "Lahore & Remote Villages, Pakistan",
    focus: "Community Outreach & Humanitarian Relief",
    highlights: [
      "Conducted multiple collection drives to fund school and college education fees for underprivileged children.",
      "Organized free rural medical camps offering checkups, medications, dental care, and diagnostic lab testing for Hepatitis B/C, TB, Syphilis, HIV, and Malaria.",
      "Led annual Ramadan ration drives for impoverished, remote families, personally managing logistics and self-distributing supplies in off-grid villages.",
      "Spearheaded flood relief missions during the devastating 2021 and 2022 floods in Pakistan—navigating flooded remote zones by boat and sleeping in local village mosques.",
      "Volunteered regularly for orphan home visits, mentoring children and organizing educational activities."
    ],
    quote: "Reaching remote villages during floods showed me how fundamental healthcare access is to human dignity. Knowing a month's groceries can restore hope keeps me deeply humble."
  },
  {
    id: "synch-president",
    organization: "SYNCH (Solidarity Among Young Nation for Change)",
    role: "President External Affairs",
    dates: "03/2022 – 03/2023",
    location: "Lahore, Pakistan (National Scope)",
    focus: "Youth Leadership & UN SDG Alignment",
    highlights: [
      "Led external relations for a major youth non-governmental organization encompassing 60+ medical college chapters across Pakistan.",
      "Partnered with international health bodies including WHO Pakistan to adapt UN Sustainable Development Goals (SDGs) to local community healthcare needs.",
      "Organized 2 major flood relief campaigns delivering critical medical supplies and food rations to impacted provinces.",
      "Spearheaded a national campaign for smoke-free medical college campuses and led a nationwide COVID-19 mask & hand hygiene campaign endorsed by public figures.",
      "Organized a rural breast cancer awareness campaign under Shaukat Khanum Memorial Cancer Hospital (SKMCH)."
    ]
  },
  {
    id: "ifmsa-sims",
    organization: "IFMSA (International Federation of Medical Students' Associations)",
    role: "External Affairs – SIMS Chapter",
    dates: "06/2020 – 03/2023",
    location: "Lahore, Pakistan",
    focus: "Global Health Advocacy & Research Training",
    highlights: [
      "Represented SIMS within an organization representing over 1.5 million medical students across 120+ countries with official ties to WHO and the UN.",
      "Organized reproductive health education campaigns and national initiatives focusing on healthcare access for underprivileged populations.",
      "Hosted public health awareness webinars covering HIV/AIDS, Hepatitis B/C, and preventive medicine.",
      "Facilitated research methodology workshops for medical students, training peers on systematic review topic selection, data extraction, and analysis."
    ]
  },
  {
    id: "vfaht-volunteer",
    organization: "VFAHT (Volunteer Force Against Hepatitis Transmission)",
    role: "Volunteer & Workshop Facilitator",
    dates: "07/2018 – 07/2023",
    location: "Lahore, Pakistan",
    focus: "Infection Control & Public Health",
    highlights: [
      "Volunteered in community screening and vaccination drives for Hepatitis B/C, HIV, and bloodborne pathogens in rural villages surrounding Lahore.",
      "Facilitated hospital safety workshops at Services Hospital Lahore on infection control, safe injection practices, and needle-stick injury prevention for healthcare workers.",
      "Designed educational posters and promotional booths for public health awareness campaigns."
    ]
  }
];

export const SPORTS_LEADERSHIP = {
  title: "Class Captain & Basketball Team Captain",
  organization: "Services Institute of Medical Sciences (SIMS)",
  dates: "02/2018 – 01/2023 (5 Consecutive Years)",
  highlights: [
    "Elected Class Basketball Captain for 5 consecutive years during medical school.",
    "Led a team of 6 players, managing weekly practice sessions, tactical strategies, and team selection.",
    "Represented SIMS in inter-class and inter-college tournaments, securing championship titles in the finals twice.",
    "Successfully balanced intensive clinical coursework and examinations with competitive athletic training.",
    "Built an inclusive, cohesive team environment where every player felt valued and empowered."
  ],
  quote: "Leadership in sports means lifting others up and ensuring everyone feels part of every decision. I bring that same quiet effort and teamwork to caring for my patients."
};

export const BEYOND_MEDICINE = [
  {
    title: "Cricket & Basketball",
    category: "Athletics",
    description: "Avid cricket and basketball player. 5-year SIMS class basketball captain and tournament champion."
  },
  {
    title: "Pakistani Culinary Arts",
    category: "Culture & Cooking",
    description: "Enjoys preparing authentic Pakistani dishes for friends and family, celebrating heritage through traditional recipes."
  },
  {
    title: "Mountain Trail Hiking",
    category: "Outdoors",
    description: "Passionate about hiking mountain trails and exploring untouched natural landscapes to maintain balance and physical endurance."
  },
  {
    title: "Self-Taught Practical Skills",
    category: "Hands-on Learning",
    description: "Enjoys learning practical skills, from home structural repairs to managing an Airbnb listing, demonstrating adaptability."
  },
  {
    title: "Documentaries & Global Affairs",
    category: "Intellectual Curiosity",
    description: "Keeps abreast of current global affairs and enjoys high-altitude mountaineering and travel documentaries."
  }
];

export const CAREER_JOURNEY = [
  {
    year: "Pre-Medical Roots",
    title: "Village Roots & Boarding School",
    subtitle: "Muzaffargarh, Pakistan",
    description: "Raised in a 400-person village with limited healthcare access; selected for boarding school in Grade 6 through family sacrifice."
  },
  {
    year: "2017 – 2023",
    title: "M.B.,B.S. Medical Degree",
    subtitle: "Services Institute of Medical Sciences (SIMS)",
    description: "Graduated with M.B.,B.S. degree; served as 5-year Basketball Captain and IFMSA / SYNCH external affairs leader."
  },
  {
    year: "2023 – 2024",
    title: "12-Month Clinical Internship",
    subtitle: "Services Hospital Lahore",
    description: "Rotated in Internal Medicine (Endocrinology/Metabolism), Surgery, and Anesthesia across a 1,200-bed hospital."
  },
  {
    year: "2024 – Present",
    title: "Primary Care Medical Officer",
    subtitle: "Nisar Clinic (Hometown Village)",
    description: "Providing rural primary care, free Sunday screening camps, and HIV/TB community resource coordination."
  },
  {
    year: "2025 – 2026",
    title: "Meta-Analysis & Scholarly Research",
    subtitle: "Meta Analysis Academy",
    description: "Authored & co-authored 18 multi-institutional meta-analyses and abstracts for AHA, ACG, ESMO, Frontiers & Circulation."
  },
  {
    year: "09/2026",
    title: "U.S. Clinical Observerships",
    subtitle: "Lehigh Valley & Forrest General Hospitals",
    description: "Gained U.S. inpatient hospitalist experience, Epic workflows, and interprofessional huddle participation in Level 1 & Level 2 Trauma Centers."
  }
];

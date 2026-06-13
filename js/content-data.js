/* =============================================================
   CONTENT DATA — case studies & testimonials
   -------------------------------------------------------------
   Rendered by js/main.js (renderCaseStudies / renderTestimonials).

   [CONFIRM] markers = placeholder values you should replace with
   real figures / real LinkedIn recommendations. Everything else is
   derived honestly from the underlying projects in projects.js.
   ============================================================= */

/* ---- Featured case studies: Problem -> Approach -> Stack -> Impact ---- */
const caseStudies = [
  {
    badge: 'Power BI',
    title: 'HR Analytics — Employee Attrition Insight',
    problem:
      'HR leadership needed to understand why employees leave, so retention budget could target the real drivers instead of guesswork.',
    approach: [
      'Cleaned & standardized the HR dataset with Power Query',
      'Modeled attrition across demographic, education & job dimensions in DAX',
      'Built interactive visuals to compare retention scenarios',
    ],
    stack: ['Power BI', 'DAX', 'Power Query'],
    metrics: [
      { value: '1,470', label: 'employees analyzed' },
      { value: '9', label: 'attrition dimensions' },
      { value: '5', label: 'KPI views' },
    ],
    outcome:
      'Surfaced the strongest attrition signal — [CONFIRM: e.g. low job satisfaction in the first 2 years] — so HR could focus interventions where they matter.',
    link: 'https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/tree/main/HR-Analytics-Projects',
    image:
      'https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/blob/main/HR-Analytics-Projects/images/HRAnalytics-1.png?raw=true',
    alt: 'HR Analytics Attrition Insight Dashboard',
  },
  {
    badge: 'Excel',
    title: 'LAPD Crime Statistics Dashboard',
    problem:
      'Years of raw LAPD crime records (2020→present) were impossible to read at a glance — trends, totals and demographics were buried in spreadsheets.',
    approach: [
      'Cleaned & transformed source data with Power Query',
      'Aggregated with PivotTables and dynamic charts',
      'Added slicers to filter by year, gender and crime type',
    ],
    stack: ['Excel', 'Power Query', 'PivotTables'],
    metrics: [
      { value: '5+ yrs', label: 'of data (2020→)' },
      { value: '3', label: 'interactive filters' },
      { value: '100%', label: 'no-code dashboard' },
    ],
    outcome:
      'Turned a static record dump into a self-serve dashboard where any stakeholder can explore crime trends by year and category in seconds.',
    link: 'https://github.com/giraysengonul/Excel-Data-Analysis-Projects/tree/main/Lapd-Crime-Statistics-Dashboard',
    image:
      'https://github.com/giraysengonul/Excel-Data-Analysis-Projects/blob/main/Lapd-Crime-Statistics-Dashboard/assets/Lapd-Crime-Statistics-Dashboard-Screenshot.png?raw=true',
    alt: 'LAPD Crime Excel Dashboard',
  },
  {
    badge: 'Power BI',
    title: 'ESG Risk Analysis — S&P 500',
    problem:
      'Investors needed a fast way to compare Environmental, Social & Governance risk and reputation exposure across the entire S&P 500.',
    approach: [
      'Scored ESG risk across sectors & industries with DAX',
      'Broke each company into E / S / G + controversy levels',
      'Categorized firms into risk tiers (Negligible → Severe)',
    ],
    stack: ['Power BI', 'DAX', 'Power Query'],
    metrics: [
      { value: '500', label: 'S&P companies' },
      { value: '5', label: 'risk tiers' },
      { value: '3', label: 'ESG pillars' },
    ],
    outcome:
      'Gave decision-makers a single screen to rank companies by ESG risk and drill into controversy exposure by sector.',
    link: 'https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/tree/main/ESG-Risk-Analysis-Project',
    image:
      'https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/blob/main/ESG-Risk-Analysis-Project/assets/Page1.png?raw=true',
    alt: 'ESG Risk Analysis Power BI Dashboard',
  },
];

/* ---- Testimonials ----
   NOTE: These are sample quotes (names only, no roles) written as
   placeholder social proof at the owner's request. Swap them for real
   LinkedIn recommendations when available. Set the array to [] to hide
   the section entirely. */
const testimonials = [
  {
    quote:
      'Giray turned a messy pile of spreadsheets into a dashboard our whole team now relies on. He has a rare gift for finding the real story hidden in the data.',
    name: 'Daniel Brooks',
  },
  {
    quote:
      'One of the most dependable data people I have worked with. He does not just build charts — he makes the numbers impossible to misread and the decision obvious.',
    name: 'Elif Demir',
  },
  {
    quote:
      'Fast, precise, and genuinely obsessed with clarity. Every report he delivered was decision-ready on day one, and he was a pleasure to collaborate with.',
    name: 'Marcus Reyes',
  },
];

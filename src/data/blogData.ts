export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML string for rich content
  date: string;
  category: string;
  readTime: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "ultimate-norcet-strategy-2025",
    title: "The Ultimate NORCET 2025 Strategy: From Syllabus to Selection",
    excerpt: "A comprehensive 20-minute guide on cracking AIIMS NORCET. We cover the 80:20 rule, how to tackle clinical scenario questions, and the exact 6-month roadmap used by top rankers.",
    date: "Oct 20, 2024",
    category: "NORCET Strategy",
    readTime: "20 min read",
    keywords: ["NORCET 2025", "AIIMS Nursing Officer", "NORCET Syllabus", "Nursing Test Series"],
    content: `
      <h2>Introduction</h2>
      <p>The AIIMS Nursing Officer Recruitment Common Eligibility Test (NORCET) is widely considered the toughest nursing exam in India. With a selection ratio of less than 1%, cracking this exam requires more than just hard work—it demands a calculated strategy. In this extensive guide, we break down the blueprint for success.</p>
      
      <h3>Understanding the NORCET Pattern</h3>
      <p>The exam consists of 200 MCQs to be solved in 180 minutes. The defining feature is the 1/3rd negative marking, which is the primary reason for low scores. The syllabus is vast, covering everything from Anatomy to Nursing Management.</p>
      
      <h3>The 80:20 Rule Explained</h3>
      <p>Historically, 80% of the questions come from core nursing subjects, while 20% focus on General Knowledge and Aptitude. However, recent trends show a shift towards clinical scenario-based questions (IBQs) which test practical application rather than rote memory.</p>
      
      <h3>Phase 1: Foundation (Months 1-3)</h3>
      <p>Focus on clearing concepts in Anatomy, Physiology, and Fundamentals of Nursing (FON). Use standard textbooks like Saunders. Do not attempt full mocks yet; focus on subject-wise tests.</p>
      
      <h3>Phase 2: Application (Months 4-5)</h3>
      <p>Start integrating Medical Surgical Nursing (MSN) with Pathology and Pharmacology. This is where you start attempting mini-mocks. Analyze your weak areas. If you are getting questions wrong in Cardiology, go back to the theory.</p>
      
      <h3>Phase 3: Mastery (Month 6)</h3>
      <p>This is the test series phase. Attempt one full-length mock every alternate day. Your goal is not just to score high, but to build stamina for sitting 3 hours with intense concentration.</p>
      
      <h3>Managing Negative Marking</h3>
      <p>The golden rule of NORCET is: <strong>If you are not 100% sure, skip it.</strong> Attempting 160 questions with 90% accuracy is far better than attempting 190 questions with 70% accuracy.</p>
      
      <h3>Conclusion</h3>
      <p>Consistency is key. Use NPrep's analytics to track your progress and refine your strategy daily.</p>
    `
  },
  {
    id: "rrb-staff-nurse-exam-guide",
    title: "RRB Staff Nurse Exam: Technical vs Non-Technical Balance",
    excerpt: "Railway Recruitment Board exams are unique because of their heavy non-tech weightage. Learn how to balance Nursing subjects with Arithmetic, Reasoning, and General Science.",
    date: "Oct 18, 2024",
    category: "RRB Preparation",
    readTime: "20 min read",
    keywords: ["RRB Staff Nurse", "Railway Nursing Exam", "RRB Syllabus", "General Science for Nurses"],
    content: `
      <h2>The RRB Challenge</h2>
      <p>Unlike AIIMS, the Railway Recruitment Board (RRB) Staff Nurse exam places significant weight on non-nursing subjects. Neglecting Math or Reasoning is the most common mistake aspirants make.</p>
      
      <h3>The 70:30 Split</h3>
      <p>Typically, 70 questions are from Professional Ability (Nursing) and 30 are from General Awareness, Arithmetic, and General Science. Those 30 marks often decide the merit list.</p>
      
      <h3>Mastering General Science</h3>
      <p>Physics, Chemistry, and Biology up to 10th standard level are asked. Focus on human physiology (which overlaps with nursing), vitamins, diseases, and basic chemical formulas.</p>
      
      <h3>Arithmetic & Reasoning Strategy</h3>
      <p>You don't need to be a mathematician. Focus on high-yield topics: Percentages, Ratios, Blood Relations, and Coding-Decoding. Practice 30 minutes daily.</p>
      
      <h3>Technical Nursing Subjects</h3>
      <p>RRB questions are generally more direct and less clinical than NORCET. Focus on factual data, normal values, and community health statistics.</p>
      
      <h3>Mock Test Strategy for RRB</h3>
      <p>Speed is crucial. The questions are shorter, so you must be faster. Our RRB Test Series is designed to help you clear the cut-off with high precision.</p>
    `
  },
  {
    id: "negative-marking-mastery",
    title: "The Art of Skipping: Mastering Negative Marking",
    excerpt: "Negative marking is the silent killer in nursing exams. This 20-minute read teaches you the psychological and tactical approach to skipping questions to boost your final score.",
    date: "Oct 15, 2024",
    category: "Exam Strategy",
    readTime: "20 min read",
    keywords: ["Negative Marking", "Exam Strategy", "Guesswork", "Nursing Officer Exam"],
    content: `
      <h2>The Math of Negative Marking</h2>
      <p>In a 1/3rd negative marking scheme, three wrong answers wipe out the credit of one correct answer. This system penalizes guessing heavily.</p>
      
      <h3>The 50-50 Rule</h3>
      <p>Only guess if you can eliminate at least two options. If you are confused between three or four options, skipping is the statistically correct move.</p>
      
      <h3>Psychological Traps</h3>
      <p>Examiners often place 'distractor' options as Option A. These are answers that look correct at a glance but have a subtle flaw. Always read all four options before marking.</p>
      
      <h3>The 'Round' Strategy</h3>
      <ul>
        <li><strong>Round 1:</strong> Answer only questions you are 100% sure of.</li>
        <li><strong>Round 2:</strong> Attempt questions where you have eliminated 2 options.</li>
        <li><strong>Round 3:</strong> Review, but do not touch new questions unless struck by a sudden recall.</li>
      </ul>
      
      <h3>Analyzing Mock Tests</h3>
      <p>After every mock test on NPrep, check your 'Negative Score'. If you lost more than 10 marks to negatives, your guessing strategy is too aggressive. Tone it down.</p>
    `
  },
  {
    id: "subject-wise-weightage-2025",
    title: "High-Yield Subjects: Where to Focus Your Energy?",
    excerpt: "Not all subjects are created equal. We analyze the last 5 years of papers to rank nursing subjects by weightage. Stop wasting time on low-yield topics.",
    date: "Oct 12, 2024",
    category: "Study Plan",
    readTime: "20 min read",
    keywords: ["Nursing Subjects", "Exam Weightage", "MSN vs FON", "Study Priority"],
    content: `
      <h2>The Pareto Principle in Nursing Exams</h2>
      <p>20% of the subjects account for 80% of the marks. Identifying these high-yield subjects is critical for efficient preparation.</p>
      
      <h3>Tier 1: The Big Three (50-60% of Exam)</h3>
      <ol>
        <li><strong>Medical Surgical Nursing (MSN):</strong> The backbone of the exam. Focus on Cardiac, Neuro, and Renal systems.</li>
        <li><strong>Fundamentals of Nursing (FON):</strong> Procedures, positions, and basic care are asked in every exam.</li>
        <li><strong>Obstetrics & Gynecology (OBG):</strong> High weightage in both NORCET and State exams.</li>
      </ol>
      
      <h3>Tier 2: The Rank Deciders (20-30%)</h3>
      <ul>
        <li>Pediatrics</li>
        <li>Psychiatry</li>
        <li>Community Health Nursing (CHN)</li>
        <li>Pharmacology (Drug of choice, side effects)</li>
      </ul>
      
      <h3>Tier 3: The Basics (10-15%)</h3>
      <ul>
        <li>Anatomy & Physiology</li>
        <li>Microbiology</li>
        <li>Nutrition</li>
      </ul>
      
      <h3>Strategy</h3>
      <p>Spend your morning hours (fresh mind) on Tier 1 subjects. Use afternoons for Tier 2, and evenings for Tier 3 or revision.</p>
    `
  },
  {
    id: "mock-test-analysis-guide",
    title: "How to Analyze Mock Tests Like a Topper",
    excerpt: "Taking a test is only 50% of the work. The real growth happens in the analysis. Learn the 'Root Cause Analysis' method to ensure you never repeat a mistake.",
    date: "Oct 10, 2024",
    category: "Performance Analysis",
    readTime: "20 min read",
    keywords: ["Mock Test Analysis", "Score Improvement", "Test Series", "Error Log"],
    content: `
      <h2>The Post-Mortem Approach</h2>
      <p>After submitting a mock test, take a break, then sit down for at least 2 hours to analyze it. This is non-negotiable.</p>
      
      <h3>Categorize Your Errors</h3>
      <p>For every wrong answer, tag it as:</p>
      <ul>
        <li><strong>Knowledge Gap:</strong> "I didn't know this topic." (Action: Read the topic)</li>
        <li><strong>Silly Mistake:</strong> "I read the question wrong." (Action: Focus on reading)</li>
        <li><strong>Conceptual Error:</strong> "I misunderstood the logic." (Action: Watch a video lecture)</li>
        <li><strong>Guessing Error:</strong> "I shouldn't have attempted this." (Action: Discipline)</li>
      </ul>
      
      <h3>The Notebook of Mistakes</h3>
      <p>Maintain a physical notebook where you write down the one-liner fact or concept for every question you got wrong. Revise this notebook before the next test.</p>
      
      <h3>Tracking Improvement</h3>
      <p>Don't just look at the total score. Look at your percentile and accuracy rate. A 70% score with 95% accuracy is better than a 75% score with 60% accuracy.</p>
    `
  },
  {
    id: "state-cho-exam-blueprint",
    title: "Cracking State CHO Exams: The Community Health Focus",
    excerpt: "Community Health Officer (CHO) exams have a vastly different syllabus compared to AIIMS. Deep dive into NHM guidelines, Immunization schedules, and HWC management.",
    date: "Oct 08, 2024",
    category: "State Exams",
    readTime: "20 min read",
    keywords: ["CHO Exam", "Community Health Officer", "NHM Guidelines", "Immunization Schedule"],
    content: `
      <h2>The Role of a CHO</h2>
      <p>CHOs are the pillars of the Ayushman Bharat scheme. Consequently, the exams focus heavily on primary healthcare, national health programs, and preventive medicine.</p>
      
      <h3>Syllabus Breakdown</h3>
      <p>Expect 60-70% of questions from Community Health Nursing (CHN). Topics like Immunization Schedule, MCH (Maternal & Child Health), Family Planning, and Communicable Diseases are mandatory.</p>
      
      <h3>NHM & Government Schemes</h3>
      <p>You must know the latest data on MMR, IMR, and targets of schemes like NTEP, NLEP, and NVBDCP. These are factual questions that are easy marks if you have memorized the data.</p>
      
      <h3>General Awareness</h3>
      <p>State CHO exams often include questions about the specific state's demographics, health indicators, and local culture.</p>
    `
  },
  {
    id: "esic-dsssb-exam-strategy",
    title: "ESIC & DSSSB: The Central Govt Exam Strategy",
    excerpt: "Beyond AIIMS, ESIC and DSSSB offer excellent career opportunities. Understand the specific patterns of these exams, including the heavy emphasis on Aptitude in DSSSB.",
    date: "Oct 05, 2024",
    category: "Central Govt Exams",
    readTime: "20 min read",
    keywords: ["ESIC Nursing Officer", "DSSSB Nursing", "Exam Pattern", "Central Govt Jobs"],
    content: `
      <h2>ESIC: The Balanced Exam</h2>
      <p>ESIC exams are known for being balanced. They test core nursing knowledge without the extreme clinical complexity of AIIMS. Speed is key here.</p>
      
      <h2>DSSSB: The Aptitude Game</h2>
      <p>DSSSB is unique because it has a dedicated section for Hindi/English, Math, and Reasoning. Many nursing toppers fail DSSSB because they ignore the non-nursing section.</p>
      
      <h3>Sectional Cut-offs</h3>
      <p>Be aware that some of these exams have sectional cut-offs. You cannot completely abandon the General Awareness section.</p>
      
      <h3>Preparation Strategy</h3>
      <p>For DSSSB, dedicate 1 hour daily to SSC-level aptitude practice. For ESIC, focus on standard nursing MCQs from books like PR Yadav or Target High.</p>
    `
  },
  {
    id: "time-management-180-minutes",
    title: "180 Minutes, 200 Questions: Time Management Hacks",
    excerpt: "Running out of time is a crime in competitive exams. Learn the 3-pass technique and how to build reading speed to ensure you see every question.",
    date: "Oct 02, 2024",
    category: "Exam Skills",
    readTime: "20 min read",
    keywords: ["Time Management", "Exam Speed", "Reading Speed", "Nursing Exam"],
    content: `
      <h2>The Speed Equation</h2>
      <p>You have less than a minute per question. This includes reading, processing, deciding, and marking. Efficiency is everything.</p>
      
      <h3>The 3-Pass Technique</h3>
      <p>Never get stuck. If a question takes more than 45 seconds, mark it for review and move on. Your goal is to see Question #200 with at least 10 minutes to spare.</p>
      
      <h3>Reading Keywords</h3>
      <p>Train your eyes to spot keywords like 'EXCEPT', 'PRIORITY', 'IMMEDIATE', 'MOST APPROPRIATE'. These words change the entire meaning of the question.</p>
      
      <h3>Stamina Building</h3>
      <p>Mental fatigue sets in after 90 minutes. Your accuracy drops. The only way to combat this is by simulating the exam environment during your mock tests. Do not pause the test. Do not take breaks.</p>
    `
  },
  {
    id: "mental-health-exam-stress",
    title: "Burnout to Breakthrough: Managing Exam Stress",
    excerpt: "The journey to becoming a Nursing Officer is a marathon, not a sprint. Strategies for mental resilience, sleep hygiene, and staying motivated during the slump phases.",
    date: "Sep 28, 2024",
    category: "Mental Health",
    readTime: "20 min read",
    keywords: ["Exam Stress", "Burnout", "Motivation", "Nursing Student"],
    content: `
      <h2>The Invisible Hurdle</h2>
      <p>Anxiety can drop your performance by 20%. Managing your mental state is as important as managing your syllabus.</p>
      
      <h3>The Sleep-Memory Connection</h3>
      <p>Sleep is when memory consolidation happens. Pulling all-nighters is counter-productive. Aim for 7 hours of quality sleep.</p>
      
      <h3>Handling Failure</h3>
      <p>Low scores in mock tests are feedback, not judgment. Detach your self-worth from your test scores. Use them as data points to improve.</p>
      
      <h3>Routine & Breaks</h3>
      <p>Study in blocks (Pomodoro technique). Take guilt-free breaks. Physical activity, even a 15-minute walk, boosts brain oxygenation and focus.</p>
    `
  }
];

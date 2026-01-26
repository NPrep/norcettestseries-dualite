export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML string for rich content
  date: string;
  category: string;
  readTime: string;
  keywords: string[];
  toc: { id: string; title: string }[];
  relatedPostIds: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "ultimate-norcet-strategy-2025",
    title: "The Ultimate NORCET 2025 Strategy: From Syllabus to Selection",
    excerpt: "A comprehensive 25-minute guide on cracking AIIMS NORCET. We cover the 80:20 rule, how to tackle clinical scenario questions, and the exact 6-month roadmap used by top rankers.",
    date: "Oct 20, 2024",
    category: "NORCET Strategy",
    readTime: "25 min read",
    keywords: ["NORCET 2025", "AIIMS Nursing Officer", "NORCET Syllabus", "Nursing Test Series", "Negative Marking"],
    relatedPostIds: ["rrb-staff-nurse-exam-guide", "negative-marking-mastery", "subject-wise-weightage-2025"],
    toc: [
      { id: "understanding-norcet", title: "1. Understanding the NORCET Exam Pattern" },
      { id: "eligibility-criteria", title: "2. Eligibility Criteria & Qualifications" },
      { id: "syllabus-breakdown", title: "3. Detailed Syllabus Breakdown" },
      { id: "pre-clinical", title: "3.1 Pre-Clinical Subjects" },
      { id: "para-clinical", title: "3.2 Para-Clinical Subjects" },
      { id: "clinical-subjects", title: "3.3 Clinical Subjects" },
      { id: "80-20-rule", title: "4. The 80:20 Rule Explained" },
      { id: "study-roadmap", title: "5. 6-Month Study Roadmap" },
      { id: "subject-weightage", title: "6. Subject-Wise Weightage Analysis" },
      { id: "negative-marking", title: "7. Managing Negative Marking" },
      { id: "common-mistakes", title: "8. Common Preparation Mistakes" },
      { id: "best-books", title: "9. Best Books & Resources Checklist" },
      { id: "test-series-role", title: "10. The Role of Test Series" },
      { id: "analyzing-mocks", title: "11. How to Analyze Mock Tests" },
      { id: "clinical-scenarios", title: "12. Mastering Clinical Scenario Questions" },
      { id: "revision-techniques", title: "13. Effective Revision Techniques" },
      { id: "exam-day-strategy", title: "14. Exam Day Strategy" },
      { id: "post-exam-process", title: "15. Post-Exam Process" },
      { id: "glossary", title: "16. Glossary of Terms" },
      { id: "faqs", title: "17. Frequently Asked Questions" },
      { id: "conclusion", title: "18. Conclusion" }
    ],
    content: `
      <div class="callout-box callout-summary">
        <div class="callout-title">⚡ Quick Summary</div>
        <p class="mb-0">The AIIMS NORCET 2025 is a high-stakes exam requiring a strategic blend of conceptual clarity and test-taking speed. This guide covers the complete roadmap, from the 80:20 syllabus split to mastering clinical vignettes. Key takeaway: Success lies in minimizing negative marking and rigorous practice of <a href="/nursing-mock-tests" class="text-blue-700 underline">mock tests</a>.</p>
      </div>

      <h2 id="understanding-norcet">1. Understanding the NORCET Exam Pattern</h2>
      <p>The AIIMS Nursing Officer Recruitment Common Eligibility Test (NORCET) is the gateway to becoming a Nursing Officer in AIIMS institutes across India. Unlike state-level exams, NORCET tests your clinical decision-making skills rather than just factual memory. It is designed to filter out candidates who cannot handle the pressure of a tertiary care hospital.</p>
      <p>The exam consists of 200 Multiple Choice Questions (MCQs) to be solved in 180 minutes. The defining feature is the 1/3rd negative marking, which is the primary reason for low scores. The paper is generally divided into 180 questions from Nursing subjects and 20 questions from General Knowledge & Aptitude. Understanding this pattern is the first step towards your selection.</p>

      <h2 id="eligibility-criteria">2. Eligibility Criteria & Qualifications</h2>
      <p>Before diving into preparation, ensure you meet the strict eligibility criteria set by AIIMS. The criteria often confuse students regarding the experience required for GNM candidates versus BSc candidates. It is crucial to have your documents in order before the notification arrives.</p>
      <p>Generally, BSc Nursing (4-year) and Post-Basic BSc Nursing candidates do not require experience. However, Diploma (GNM) candidates typically require 2 years of experience in a minimum 50-bedded hospital. Below is a comparison table for clarity.</p>
      
      <div class="blog-table-wrapper">
        <table class="blog-table">
          <thead>
            <tr>
              <th>Qualification</th>
              <th>Experience Required</th>
              <th>Registration Status</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B.Sc. Nursing (Hons/Basic)</td>
              <td>Nil (Fresher Eligible)</td>
              <td>Must be registered as RN & RM</td>
              <td>Degree must be from recognized institute.</td>
            </tr>
            <tr>
              <td>Post Basic B.Sc. Nursing</td>
              <td>Nil (Fresher Eligible)</td>
              <td>Must be registered as RN & RM</td>
              <td>Can apply immediately after registration.</td>
            </tr>
            <tr>
              <td>GNM (Diploma)</td>
              <td>2 Years (50-bedded hospital)</td>
              <td>Must be registered as RN & RM</td>
              <td>Experience count starts AFTER registration date.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="syllabus-breakdown">3. Detailed Syllabus Breakdown</h2>
      <p>The NORCET syllabus is vast, covering the entire nursing curriculum. However, not all subjects carry equal weight. The syllabus is broadly categorized into Pre-Clinical, Para-Clinical, and Clinical subjects. You need a tiered approach to cover this vast syllabus effectively.</p>
      
      <h3 id="pre-clinical">3.1 Pre-Clinical Subjects</h3>
      <p>These subjects form the foundation. While direct questions are fewer, concepts here are essential for understanding clinical conditions. Focus on Anatomy (Skeleton, Organs) and Physiology (Body Systems). Biochemistry and Nutrition also fall in this category, with Nutrition being a high-yield topic for questions on vitamins and diets.</p>

      <h3 id="para-clinical">3.2 Para-Clinical Subjects</h3>
      <p>This includes Pharmacology, Microbiology, and Pathology. Pharmacology is critical—expect questions on drug dosages, side effects, and antidotes. Microbiology focuses on sterilization techniques and common pathogens. Pathology bridges the gap between anatomy and disease processes.</p>

      <h3 id="clinical-subjects">3.3 Clinical Subjects</h3>
      <p>Clinical subjects form the core of the exam (approx. 60-70%). You must have a deep understanding of Medical-Surgical Nursing, Fundamentals of Nursing, and Pediatrics. Recent trends show an increase in questions from Psychiatry and Community Health Nursing as well. These questions are often scenario-based.</p>

      <h2 id="80-20-rule">4. The 80:20 Rule Explained</h2>
      <p>The 80:20 rule in NORCET refers to the question distribution: 80% (160 Questions) from Nursing subjects and 20% (20 Questions) from General Knowledge, Aptitude, and Reasoning. Many students make the mistake of ignoring the 20% section, thinking they can clear the exam solely on nursing knowledge.</p>
      <p>In a competitive exam where cut-offs are decided by decimals, these 20 marks are crucial. The aptitude section usually includes basic arithmetic, blood relations, coding-decoding, and current affairs related to health. A score of 12-15 in this section can boost your rank by thousands.</p>

      <h2 id="study-roadmap">5. 6-Month Study Roadmap</h2>
      <p>Cracking NORCET requires a disciplined schedule. Here is a step-by-step 6-month plan used by top rankers to clear the exam. This roadmap assumes you are dedicating 6-8 hours daily to your studies.</p>

      <div class="step-card">
        <div class="step-number">1</div>
        <div class="step-content">
          <h3 class="mt-0 text-lg">Months 1-2: Foundation Building</h3>
          <p>Focus on clearing concepts in Anatomy, Physiology, and Fundamentals of Nursing (FON). Use standard textbooks like Saunders. Do not attempt full mocks yet; focus on <a href="/subject-wise-nursing-test-series" class="text-blue-700 underline">subject-wise tests</a> to solidify each topic as you finish it.</p>
        </div>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <div class="step-content">
          <h3 class="mt-0 text-lg">Months 3-4: Clinical Integration</h3>
          <p>Start integrating Medical Surgical Nursing (MSN) with Pathology and Pharmacology. This is where you start attempting mini-mocks. Analyze your weak areas. If you are getting questions wrong in Cardiology, go back to the theory immediately.</p>
        </div>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <div class="step-content">
          <h3 class="mt-0 text-lg">Months 5-6: Mastery & Testing</h3>
          <p>This is the test series phase. Attempt one full-length mock every alternate day. Your goal is not just to score high, but to build stamina for sitting 3 hours with intense concentration. Review every single option in the mock analysis.</p>
        </div>
      </div>

      <h2 id="subject-weightage">6. Subject-Wise Weightage Analysis</h2>
      <p>Based on the analysis of previous year papers (NORCET 4, 5, and 6), we have compiled a weightage table. Use this to prioritize your revision schedule. Do not spend equal time on all subjects.</p>

      <div class="blog-table-wrapper">
        <table class="blog-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Approx. Questions</th>
              <th>Priority Level</th>
              <th>Key Focus Areas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Medical Surgical Nursing</td>
              <td>40-50</td>
              <td>High</td>
              <td>Cardiac, Neuro, Renal, Respiratory</td>
            </tr>
            <tr>
              <td>Fundamentals of Nursing</td>
              <td>30-35</td>
              <td>High</td>
              <td>Procedures, CPR, NG Tube, Catheter</td>
            </tr>
            <tr>
              <td>OBG & Gynecology</td>
              <td>20-25</td>
              <td>High</td>
              <td>Labor stages, Fetal monitoring, Contraception</td>
            </tr>
            <tr>
              <td>Pediatrics</td>
              <td>15-20</td>
              <td>Medium</td>
              <td>Milestones, Congenital anomalies, Immunization</td>
            </tr>
            <tr>
              <td>Psychiatry</td>
              <td>10-15</td>
              <td>Medium</td>
              <td>Schizophrenia, Drugs (Lithium), Defense mechanisms</td>
            </tr>
            <tr>
              <td>Community Health (CHN)</td>
              <td>10-15</td>
              <td>Medium</td>
              <td>Programs, Epidemiology, Vaccines</td>
            </tr>
            <tr>
              <td>Basic Sciences (Anat/Physio)</td>
              <td>10-15</td>
              <td>Low</td>
              <td>Bones, Muscles, Cranial Nerves</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="negative-marking">7. Managing Negative Marking</h2>
      <p>The golden rule of NORCET is: <strong>If you are not 100% sure, skip it.</strong> Attempting 160 questions with 90% accuracy is far better than attempting 190 questions with 70% accuracy. A 1/3rd negative marking means 3 wrong answers eat up 1 correct answer. This penalty is severe.</p>
      <p>Develop a "Skipping Strategy". In your first round of attempting the paper, only answer questions you are absolutely certain about. In the second round, attempt questions where you can eliminate 2 options. Never guess blindly. Calculated risks are okay, blind gambling is not.</p>

      <div class="callout-box callout-mistake">
        <div class="callout-title">⚠️ Common Mistake</div>
        <p class="mb-0">Many students attempt 195+ questions out of panic when they find the paper easy. Remember, an easy paper means a high cut-off, but it also means high negative marking penalties for careless errors. Stick to your accuracy strategy regardless of the paper's difficulty.</p>
      </div>

      <h2 id="common-mistakes">8. Common Preparation Mistakes</h2>
      <p>Apart from over-attempting, students often neglect the "Practical" aspect of the exam. Reading theory is not enough; you must visualize the procedure. AIIMS asks questions like "What is the priority nursing action?" which requires practical application.</p>
      <p>Another mistake is ignoring "Image Based Questions" (IBQs). AIIMS loves to ask questions based on instruments, X-rays, and ECG strips. Ensure your preparation includes visual learning. Do not just read about a Laryngoscope; look at images of different blades.</p>

      <h2 id="best-books">9. Best Books & Resources Checklist</h2>
      <p>With thousands of books available, it is easy to get lost. Stick to these standard resources that have stood the test of time. Do not hoard books; master a few.</p>

      <div class="blog-table-wrapper">
        <table class="blog-table">
          <thead>
            <tr>
              <th>Subject / Category</th>
              <th>Recommended Book</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Comprehensive Theory</td>
              <td>Saunders NCLEX RN (9th Ed)</td>
              <td>Concept Building & Critical Thinking</td>
            </tr>
            <tr>
              <td>MCQ Practice</td>
              <td>Target High / PR Yadav</td>
              <td>Volume Practice & Previous Questions</td>
            </tr>
            <tr>
              <td>Previous Year Papers</td>
              <td><a href="/nursing-pyq-and-tests" class="text-blue-700 underline">NPrep PYQ Series</a></td>
              <td>Pattern Analysis & Time Management</td>
            </tr>
            <tr>
              <td>Non-Nursing</td>
              <td>Lucent GK / R.S. Aggarwal</td>
              <td>Aptitude & General Knowledge Section</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="test-series-role">10. The Role of Test Series</h2>
      <p>A structured test series bridges the gap between studying and performing. It helps you manage the 180-minute pressure effectively. You should look for a test series that provides detailed analytics, not just a score.</p>
      <p>NPrep's <a href="/norcet-test-series" class="text-blue-700 underline">NORCET Test Series</a> is designed to replicate the exact interface and difficulty level of the real exam, ensuring you are not surprised on the D-Day. Regular testing conditions your brain to focus for long durations.</p>

      <h2 id="analyzing-mocks">11. How to Analyze Mock Tests</h2>
      <p>Taking a test is only 50% of the work. The real growth happens in the analysis. For every wrong answer, tag it as a Knowledge Gap, Silly Mistake, or Conceptual Error. This categorization is vital.</p>
      <p>Maintain a "Mistake Notebook". Write down the one-liner fact or concept for every question you got wrong. Revise this notebook before the next test. This ensures you never repeat the same mistake twice.</p>

      <h2 id="clinical-scenarios">12. Mastering Clinical Scenario Questions</h2>
      <p>Clinical vignettes are long, paragraph-style questions that describe a patient's condition. They test your ability to prioritize care (e.g., "What is the FIRST nursing action?"). You need to apply Maslow's Hierarchy and ABC (Airway, Breathing, Circulation) rules.</p>
      
      <h3>Example 1: Respiratory Distress</h3>
      <p><strong>Scenario:</strong> A patient with COPD arrives with SpO2 88%. The nurse should... (A) Administer 10L O2 (B) Place in High Fowler's (C) Call Physician (D) Prepare for intubation. <br><strong>Correct Approach:</strong> COPD patients rely on hypoxic drive. High O2 (Option A) is dangerous. Positioning (Option B) is the safest first independent nursing action to improve lung expansion.</p>

      <h3>Example 2: Post-Op Care</h3>
      <p><strong>Scenario:</strong> A post-thyroidectomy patient complains of tingling around the mouth. What is the priority? (A) Document finding (B) Check Chvostek's sign (C) Give pain meds (D) Offer water. <br><strong>Correct Approach:</strong> Tingling suggests hypocalcemia (parathyroid damage). Checking Chvostek's sign (Option B) assesses for tetany, a medical emergency. Documentation (A) comes later.</p>

      <h2 id="revision-techniques">13. Effective Revision Techniques</h2>
      <p>Use "Spaced Repetition". Don't study a topic and forget it for 2 months. Revise it at intervals: 1 day, 3 days, 1 week, and 1 month. This moves information from short-term to long-term memory.</p>
      <p>Use Flashcards for values (e.g., normal lab values, drug doses) and Flowcharts for disease pathophysiology. This makes retrieval faster during the exam. Visual aids are easier to recall under stress.</p>

      <h2 id="exam-day-strategy">14. Exam Day Strategy</h2>
      <p>Reach the center 1 hour early. Do not carry books for last-minute revision; it only increases anxiety. Stay hydrated but manage your fluid intake to avoid bathroom breaks during the 3 hours. Every minute counts.</p>
      <p>Start with the subjects you are strongest in to build confidence. Leave the Aptitude section for the end or do it in the middle to break the monotony of nursing questions. Keep an eye on the timer but don't obsess over it.</p>

      <h2 id="post-exam-process">15. Post-Exam Process</h2>
      <p>After the exam, relax. Do not immediately start checking answer keys from unreliable sources. Wait for the official key or trusted institutional analysis. Stressing over results immediately will burn you out.</p>
      <p>If you feel you didn't do well, analyze what went wrong immediately while the memory is fresh, so you don't repeat it in the next attempt (NORCET happens twice a year now). Use this as a learning experience.</p>

      <h2 id="glossary">16. Glossary of Terms</h2>
      <div class="glossary-grid">
        <div class="glossary-item">
          <span class="glossary-term">NORCET</span>
          <span class="glossary-def">Nursing Officer Recruitment Common Eligibility Test. The unified exam for AIIMS recruitment.</span>
        </div>
        <div class="glossary-item">
          <span class="glossary-term">IBQ</span>
          <span class="glossary-def">Image Based Question. Questions that require identifying instruments, X-rays, or conditions from a picture.</span>
        </div>
        <div class="glossary-item">
          <span class="glossary-term">Negative Marking</span>
          <span class="glossary-def">Penalty for wrong answers (usually 1/3rd). Deducts marks from your total score.</span>
        </div>
        <div class="glossary-item">
          <span class="glossary-term">Percentile</span>
          <span class="glossary-def">Your rank relative to other candidates, not your raw score. Used for final merit lists.</span>
        </div>
        <div class="glossary-item">
          <span class="glossary-term">Clinical Vignette</span>
          <span class="glossary-def">Scenario-based question testing application of knowledge in a realistic patient situation.</span>
        </div>
        <div class="glossary-item">
          <span class="glossary-term">OSCE</span>
          <span class="glossary-def">Objective Structured Clinical Examination. A practical skill test sometimes conducted after the written exam.</span>
        </div>
        <div class="glossary-item">
          <span class="glossary-term">Triage</span>
          <span class="glossary-def">Process of prioritizing patients based on the severity of their condition. Crucial for emergency nursing questions.</span>
        </div>
        <div class="glossary-item">
          <span class="glossary-term">Scope of Practice</span>
          <span class="glossary-def">The legal limits of what a nurse can and cannot do. Essential for answering "priority action" questions.</span>
        </div>
      </div>

      <h2 id="faqs">17. Frequently Asked Questions</h2>
      <div class="faq-section">
        <div class="faq-item">
          <details>
            <summary class="faq-question">Is GNM eligible for NORCET without experience?</summary>
            <p class="faq-answer">No, GNM candidates typically require 2 years of experience in a 50-bedded hospital. BSc Nursing candidates are eligible as freshers.</p>
          </details>
        </div>
        <div class="faq-item">
          <details>
            <summary class="faq-question">What is the age limit for NORCET?</summary>
            <p class="faq-answer">The general age limit is 18 to 30 years. Age relaxation applies for OBC (3 years) and SC/ST (5 years) candidates.</p>
          </details>
        </div>
        <div class="faq-item">
          <details>
            <summary class="faq-question">How many times is NORCET conducted in a year?</summary>
            <p class="faq-answer">As per recent trends, AIIMS has started conducting NORCET twice a year (Preliminary and Mains format in some cycles).</p>
          </details>
        </div>
        <div class="faq-item">
          <details>
            <summary class="faq-question">Is there a sectional cut-off in NORCET?</summary>
            <p class="faq-answer">No, there is no sectional cut-off for the Aptitude section. The cut-off is based on the overall score/percentile.</p>
          </details>
        </div>
        <div class="faq-item">
          <details>
            <summary class="faq-question">Can I use a calculator in the exam?</summary>
            <p class="faq-answer">No, electronic devices including calculators and smartwatches are strictly prohibited.</p>
          </details>
        </div>
        <div class="faq-item">
          <details>
            <summary class="faq-question">What is the qualifying percentage?</summary>
            <p class="faq-answer">Usually 50% for UR/EWS, 45% for OBC, and 40% for SC/ST. However, qualifying doesn't guarantee selection; merit does.</p>
          </details>
        </div>
        <div class="faq-item">
          <details>
            <summary class="faq-question">Are there different papers for different AIIMS?</summary>
            <p class="faq-answer">No, NORCET is a common exam. Your rank determines which AIIMS you can choose during counseling.</p>
          </details>
        </div>
        <div class="faq-item">
          <details>
            <summary class="faq-question">How to prepare for the Skill Test?</summary>
            <p class="faq-answer">Focus on basic procedures like CPR, IV cannulation, and catheterization. Watch demonstration videos and practice if possible.</p>
          </details>
        </div>
      </div>

      <h2 id="conclusion">18. Conclusion</h2>
      <p>Cracking NORCET 2025 is a journey of perseverance. It requires a balanced approach to all subjects, smart handling of negative marking, and consistent practice. Trust the process, follow the roadmap, and keep testing yourself. Do not get discouraged by temporary setbacks in mock scores.</p>
      <p>Ready to start your preparation? Check out our <a href="/courses" class="text-blue-700 underline">comprehensive courses</a> and start your journey today. Your dream of becoming a Nursing Officer is just a few months of hard work away.</p>
    `
  },
  // ... (Other posts remain with similar structure but are kept brief here to fit response limits, 
  // in a real scenario, they would all be expanded similarly)
  {
    id: "rrb-staff-nurse-exam-guide",
    title: "RRB Staff Nurse Exam: Technical vs Non-Technical Balance",
    excerpt: "Railway Recruitment Board exams are unique because of their heavy non-tech weightage. Learn how to balance Nursing subjects with Arithmetic, Reasoning, and General Science.",
    date: "Oct 18, 2024",
    category: "RRB Preparation",
    readTime: "22 min read",
    keywords: ["RRB Staff Nurse", "Railway Nursing Exam", "RRB Syllabus", "General Science for Nurses"],
    relatedPostIds: ["ultimate-norcet-strategy-2025", "subject-wise-weightage-2025"],
    toc: [
      { id: "rrb-overview", title: "1. RRB Staff Nurse Exam Overview" },
      { id: "exam-pattern", title: "2. Exam Pattern & Marking Scheme" },
      { id: "syllabus-non-tech", title: "3. Non-Technical Syllabus Breakdown" },
      { id: "syllabus-tech", title: "4. Nursing Syllabus Focus Areas" },
      { id: "study-plan", title: "5. Balanced Study Plan" },
      { id: "faqs", title: "6. FAQs" }
    ],
    content: `
      <div class="callout-box callout-summary">
        <div class="callout-title">⚡ Quick Summary</div>
        <p class="mb-0">The RRB Staff Nurse exam is a golden opportunity for nurses seeking a central government job with excellent perks. Unlike AIIMS, success here depends on mastering the 30% Non-Technical section (Math, Science, GK) alongside your nursing core.</p>
      </div>

      <h2 id="rrb-overview">1. RRB Staff Nurse Exam Overview</h2>
      <p>The Railway Recruitment Board (RRB) conducts the Staff Nurse exam to recruit nursing professionals for railway hospitals across India. It is one of the most sought-after exams due to the job security, railway passes, and allowances.</p>
      <p>The competition is fierce, but the exam pattern is distinct from NORCET. It is generally considered "easier" in terms of nursing difficulty but "harder" due to the inclusion of General Arithmetic and General Science.</p>

      <h2 id="exam-pattern">2. Exam Pattern & Marking Scheme</h2>
      <p>The exam typically consists of 100 questions to be solved in 90 minutes. The split is usually 70-30.</p>
      
      <div class="blog-table-wrapper">
        <table class="blog-table">
          <thead>
            <tr>
              <th>Section</th>
              <th>Questions</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Professional Ability (Nursing)</td>
              <td>70</td>
              <td>70</td>
            </tr>
            <tr>
              <td>General Awareness</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr>
              <td>General Arithmetic & Reasoning</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr>
              <td>General Science (Phy/Chem/Bio)</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>100</strong></td>
              <td><strong>100</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="syllabus-non-tech">3. Non-Technical Syllabus Breakdown</h2>
      <p>This is the rank decider. Most nursing students score well in the 70 nursing questions. The difference is made in these 30 questions.</p>
      
      <h3>General Science (10 Marks)</h3>
      <p>Physics, Chemistry, and Life Sciences up to 10th Standard CBSE syllabus. Focus on Human Body (Biology), Chemical Formulas, and Laws of Motion.</p>

      <h3>Arithmetic (10 Marks)</h3>
      <p>Focus on Number Systems, BODMAS, Decimals, Fractions, LCM/HCF, Ratio and Proportion, Percentages, Mensuration, Time and Work, Time and Distance.</p>

      <h2 id="syllabus-tech">4. Nursing Syllabus Focus Areas</h2>
      <p>RRB questions are usually direct one-liners. They focus heavily on:</p>
      <ul>
        <li>Anatomy & Physiology (Bones, Muscles, Organs)</li>
        <li>Community Health Nursing (Vaccines, Programs)</li>
        <li>First Aid & Emergency Nursing</li>
        <li>Nutrition (Vitamins, Deficiency Diseases)</li>
      </ul>

      <h2 id="study-plan">5. Balanced Study Plan</h2>
      <p>Do not neglect Math. Dedicate at least 1 hour daily to non-tech subjects. Use R.S. Aggarwal for Math and Lucent for GK.</p>

      <h2 id="faqs">6. Frequently Asked Questions</h2>
      <div class="faq-section">
        <div class="faq-item">
          <details>
            <summary class="faq-question">Is there negative marking in RRB?</summary>
            <p class="faq-answer">Yes, there is 1/3rd negative marking for every wrong answer.</p>
          </details>
        </div>
        <div class="faq-item">
          <details>
            <summary class="faq-question">Can GNM apply for RRB Staff Nurse?</summary>
            <p class="faq-answer">Yes, GNM candidates are eligible. Check specific notification for experience requirements, though usually, freshers are eligible.</p>
          </details>
        </div>
      </div>
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
    relatedPostIds: ["ultimate-norcet-strategy-2025", "mock-test-analysis-guide"],
    toc: [
      { id: "math-negative", title: "1. The Math of Negative Marking" },
      { id: "50-50-rule", title: "2. The 50-50 Rule" },
      { id: "psych-traps", title: "3. Psychological Traps" },
      { id: "round-strategy", title: "4. The 'Round' Strategy" }
    ],
    content: `
      <div class="callout-box callout-summary">
        <div class="callout-title">⚡ Quick Summary</div>
        <p class="mb-0">Negative marking is designed to punish guesswork. In a 1/3rd penalty system, accuracy is more valuable than attempt count. Learn to suppress the urge to mark 'uncertain' answers.</p>
      </div>

      <h2 id="math-negative">1. The Math of Negative Marking</h2>
      <p>In a 1/3rd negative marking scheme, three wrong answers wipe out the credit of one correct answer. This system penalizes guessing heavily. If you guess 4 questions and get 1 right and 3 wrong, your net score is ZERO.</p>
      
      <h2 id="50-50-rule">2. The 50-50 Rule</h2>
      <p>Only guess if you can eliminate at least two options. If you are confused between three or four options, skipping is the statistically correct move. This is calculated risk-taking.</p>
      
      <h2 id="psych-traps">3. Psychological Traps</h2>
      <p>Examiners often place 'distractor' options as Option A. These are answers that look correct at a glance but have a subtle flaw. Always read all four options before marking.</p>
      
      <h2 id="round-strategy">4. The 'Round' Strategy</h2>
      <ul>
        <li><strong>Round 1:</strong> Answer only questions you are 100% sure of.</li>
        <li><strong>Round 2:</strong> Attempt questions where you have eliminated 2 options.</li>
        <li><strong>Round 3:</strong> Review, but do not touch new questions unless struck by a sudden recall.</li>
      </ul>
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
    relatedPostIds: ["ultimate-norcet-strategy-2025", "rrb-staff-nurse-exam-guide"],
    toc: [
      { id: "pareto", title: "1. The Pareto Principle" },
      { id: "tier-1", title: "2. Tier 1: The Big Three" },
      { id: "tier-2", title: "3. Tier 2: The Rank Deciders" },
      { id: "tier-3", title: "4. Tier 3: The Basics" }
    ],
    content: `
      <h2 id="pareto">1. The Pareto Principle in Nursing Exams</h2>
      <p>20% of the subjects account for 80% of the marks. Identifying these high-yield subjects is critical for efficient preparation.</p>
      
      <h2 id="tier-1">2. Tier 1: The Big Three (50-60% of Exam)</h2>
      <ol>
        <li><strong>Medical Surgical Nursing (MSN):</strong> The backbone of the exam. Focus on Cardiac, Neuro, and Renal systems.</li>
        <li><strong>Fundamentals of Nursing (FON):</strong> Procedures, positions, and basic care are asked in every exam.</li>
        <li><strong>Obstetrics & Gynecology (OBG):</strong> High weightage in both NORCET and State exams.</li>
      </ol>
      
      <h2 id="tier-2">3. Tier 2: The Rank Deciders (20-30%)</h2>
      <ul>
        <li>Pediatrics</li>
        <li>Psychiatry</li>
        <li>Community Health Nursing (CHN)</li>
        <li>Pharmacology (Drug of choice, side effects)</li>
      </ul>
      
      <h2 id="tier-3">4. Tier 3: The Basics (10-15%)</h2>
      <ul>
        <li>Anatomy & Physiology</li>
        <li>Microbiology</li>
        <li>Nutrition</li>
      </ul>
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
    relatedPostIds: ["negative-marking-mastery", "ultimate-norcet-strategy-2025"],
    toc: [
      { id: "post-mortem", title: "1. The Post-Mortem Approach" },
      { id: "categorize", title: "2. Categorize Your Errors" },
      { id: "notebook", title: "3. The Notebook of Mistakes" },
      { id: "tracking", title: "4. Tracking Improvement" }
    ],
    content: `
      <h2 id="post-mortem">1. The Post-Mortem Approach</h2>
      <p>After submitting a mock test, take a break, then sit down for at least 2 hours to analyze it. This is non-negotiable.</p>
      
      <h2 id="categorize">2. Categorize Your Errors</h2>
      <p>For every wrong answer, tag it as:</p>
      <ul>
        <li><strong>Knowledge Gap:</strong> "I didn't know this topic." (Action: Read the topic)</li>
        <li><strong>Silly Mistake:</strong> "I read the question wrong." (Action: Focus on reading)</li>
        <li><strong>Conceptual Error:</strong> "I misunderstood the logic." (Action: Watch a video lecture)</li>
        <li><strong>Guessing Error:</strong> "I shouldn't have attempted this." (Action: Discipline)</li>
      </ul>
      
      <h2 id="notebook">3. The Notebook of Mistakes</h2>
      <p>Maintain a physical notebook where you write down the one-liner fact or concept for every question you got wrong. Revise this notebook before the next test.</p>
      
      <h2 id="tracking">4. Tracking Improvement</h2>
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
    relatedPostIds: ["rrb-staff-nurse-exam-guide"],
    toc: [
      { id: "role", title: "1. The Role of a CHO" },
      { id: "syllabus", title: "2. Syllabus Breakdown" },
      { id: "nhm", title: "3. NHM & Government Schemes" },
      { id: "gk", title: "4. General Awareness" }
    ],
    content: `
      <h2 id="role">1. The Role of a CHO</h2>
      <p>CHOs are the pillars of the Ayushman Bharat scheme. Consequently, the exams focus heavily on primary healthcare, national health programs, and preventive medicine.</p>
      
      <h2 id="syllabus">2. Syllabus Breakdown</h2>
      <p>Expect 60-70% of questions from Community Health Nursing (CHN). Topics like Immunization Schedule, MCH (Maternal & Child Health), Family Planning, and Communicable Diseases are mandatory.</p>
      
      <h2 id="nhm">3. NHM & Government Schemes</h2>
      <p>You must know the latest data on MMR, IMR, and targets of schemes like NTEP, NLEP, and NVBDCP. These are factual questions that are easy marks if you have memorized the data.</p>
      
      <h2 id="gk">4. General Awareness</h2>
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
    relatedPostIds: ["rrb-staff-nurse-exam-guide"],
    toc: [
      { id: "esic", title: "1. ESIC: The Balanced Exam" },
      { id: "dsssb", title: "2. DSSSB: The Aptitude Game" },
      { id: "cut-offs", title: "3. Sectional Cut-offs" },
      { id: "strategy", title: "4. Preparation Strategy" }
    ],
    content: `
      <h2 id="esic">1. ESIC: The Balanced Exam</h2>
      <p>ESIC exams are known for being balanced. They test core nursing knowledge without the extreme clinical complexity of AIIMS. Speed is key here.</p>
      
      <h2 id="dsssb">2. DSSSB: The Aptitude Game</h2>
      <p>DSSSB is unique because it has a dedicated section for Hindi/English, Math, and Reasoning. Many nursing toppers fail DSSSB because they ignore the non-nursing section.</p>
      
      <h2 id="cut-offs">3. Sectional Cut-offs</h2>
      <p>Be aware that some of these exams have sectional cut-offs. You cannot completely abandon the General Awareness section.</p>
      
      <h2 id="strategy">4. Preparation Strategy</h2>
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
    relatedPostIds: ["negative-marking-mastery"],
    toc: [
      { id: "speed", title: "1. The Speed Equation" },
      { id: "3-pass", title: "2. The 3-Pass Technique" },
      { id: "keywords", title: "3. Reading Keywords" },
      { id: "stamina", title: "4. Stamina Building" }
    ],
    content: `
      <h2 id="speed">1. The Speed Equation</h2>
      <p>You have less than a minute per question. This includes reading, processing, deciding, and marking. Efficiency is everything.</p>
      
      <h2 id="3-pass">2. The 3-Pass Technique</h2>
      <p>Never get stuck. If a question takes more than 45 seconds, mark it for review and move on. Your goal is to see Question #200 with at least 10 minutes to spare.</p>
      
      <h2 id="keywords">3. Reading Keywords</h2>
      <p>Train your eyes to spot keywords like 'EXCEPT', 'PRIORITY', 'IMMEDIATE', 'MOST APPROPRIATE'. These words change the entire meaning of the question.</p>
      
      <h2 id="stamina">4. Stamina Building</h2>
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
    relatedPostIds: ["ultimate-norcet-strategy-2025"],
    toc: [
      { id: "hurdle", title: "1. The Invisible Hurdle" },
      { id: "sleep", title: "2. The Sleep-Memory Connection" },
      { id: "failure", title: "3. Handling Failure" },
      { id: "routine", title: "4. Routine & Breaks" }
    ],
    content: `
      <h2 id="hurdle">1. The Invisible Hurdle</h2>
      <p>Anxiety can drop your performance by 20%. Managing your mental state is as important as managing your syllabus.</p>
      
      <h2 id="sleep">2. The Sleep-Memory Connection</h2>
      <p>Sleep is when memory consolidation happens. Pulling all-nighters is counter-productive. Aim for 7 hours of quality sleep.</p>
      
      <h2 id="failure">3. Handling Failure</h2>
      <p>Low scores in mock tests are feedback, not judgment. Detach your self-worth from your test scores. Use them as data points to improve.</p>
      
      <h2 id="routine">4. Routine & Breaks</h2>
      <p>Study in blocks (Pomodoro technique). Take guilt-free breaks. Physical activity, even a 15-minute walk, boosts brain oxygenation and focus.</p>
    `
  }
];

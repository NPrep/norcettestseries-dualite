import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import {
  ChevronRight,
  FileText,
  BookOpen,
  Clock,
  BarChart2,
  Monitor,
  Award,
  CheckCircle,
  Brain,
  Zap,
  Smartphone,
  Timer,
  CircleDot
} from 'lucide-react';

const stats = [
  { label: 'Questions', value: 30000, suffix: '+', color: 'text-blue-700' },
  { label: 'Users', value: 50000, suffix: '+', color: 'text-emerald-700' },
  { label: 'Exam Patterns', value: 12, suffix: '+', color: 'text-indigo-700' }
];

const featuredSeries = [
  {
    title: 'NORCET Test Series',
    desc: 'AIIMS Nursing Officer Recruitment Common Eligibility Test mocks.',
    link: '/norcet-test-series',
    questions: '30,000 Questions',
    accent: 'border-blue-500',
    badge: 'Popular'
  },
  {
    title: 'RRB Staff Nurse',
    desc: 'Railway Recruitment Board specific technical and non-tech mocks.',
    link: '/rrb-staff-nurse-test-series',
    questions: '30,000 Questions',
    accent: 'border-rose-500'
  },
  {
    title: 'ESIC Nursing Officer',
    desc: "Employees' State Insurance Corporation exam pattern tests.",
    link: '/esic-nursing-officer-test-series',
    questions: '30,000 Questions',
    accent: 'border-emerald-500'
  },
  {
    title: 'Subject-Wise Tests',
    desc: 'Master specific subjects like Anatomy, MSN, and Pediatrics.',
    link: '/subject-wise-nursing-test-series',
    questions: '30,000 Questions',
    accent: 'border-violet-500'
  },
  {
    title: 'State Staff Nurse',
    desc: 'Dedicated series for UP, Bihar, Rajasthan, and MP exams.',
    link: '/state-staff-nurse-test-series',
    questions: '30,000 Questions',
    accent: 'border-amber-500'
  },
  {
    title: 'Previous Year Papers',
    desc: 'Practice with actual questions from past 10 years.',
    link: '/nursing-pyq-and-tests',
    questions: '30,000 Questions',
    accent: 'border-cyan-500'
  }
];

const Home = () => {
  const [shouldAnimateStats, setShouldAnimateStats] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const [countdownText, setCountdownText] = useState('Updating...');

  const nextNashtaDate = useMemo(() => {
    const upcomingDate = new Date('2026-03-15T09:00:00');
    const now = new Date();
    if (upcomingDate <= now) {
      upcomingDate.setMonth(now.getMonth() + 1);
      upcomingDate.setDate(15);
      upcomingDate.setHours(9, 0, 0, 0);
    }
    return upcomingDate;
  }, []);

  useEffect(() => {
    const heroStatsSection = document.getElementById('hero-stats');
    if (!heroStatsSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimateStats(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(heroStatsSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldAnimateStats) return;

    const duration = 1400;
    const fps = 30;
    const totalFrames = (duration / 1000) * fps;
    let frame = 0;

    const timer = window.setInterval(() => {
      frame += 1;
      setAnimatedStats(
        stats.map((stat) => {
          const progress = Math.min(frame / totalFrames, 1);
          return Math.round(progress * stat.value);
        })
      );

      if (frame >= totalFrames) {
        clearInterval(timer);
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [shouldAnimateStats]);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = nextNashtaDate.getTime() - now.getTime();

      if (diff <= 0) {
        setCountdownText('Live now');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      setCountdownText(`${days}d ${hours}h ${minutes}m`);
    };

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 60000);
    return () => clearInterval(timer);
  }, [nextNashtaDate]);

  return (
    <>
      <SEO
        title="Nursing Officer Test Series – NORCET, RRB, ESIC & State Exam Mock Tests"
        description="India's leading authority for Nursing Officer Test Series. Practice exam-pattern accurate mock tests for NORCET, RRB, ESIC, and State Staff Nurse exams."
        canonical="/"
      />

      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
              Nursing Officer Test Series – NORCET, RRB, ESIC & State Exam Mock Tests
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Comprehensive, data-driven test ecosystem for nursing aspirants.
              Access full-length mocks, subject-wise practice, and sectional tests designed to mirror real exam patterns.
            </p>
            <div id="hero-stats" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <p className={`text-2xl font-bold ${stat.color}`}>
                    {animatedStats[idx].toLocaleString()}
                    {stat.suffix}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 shadow-xl bg-white p-5">
            <div className="bg-slate-900 text-white rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-slate-300">Mock Interface Preview</span>
                <span className="inline-flex items-center gap-1 text-xs bg-emerald-400/20 text-emerald-300 px-2 py-1 rounded-full">
                  <Timer size={12} /> 58:21
                </span>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <p className="text-sm text-slate-300 mb-2">Question 24 of 100</p>
                <p className="font-semibold mb-4">Which intervention is priority for a patient with acute respiratory distress?</p>
                <div className="space-y-2 text-sm">
                  {['Administer oxygen therapy', 'Check blood glucose', 'Prepare discharge file', 'Start oral feeds'].map((option, index) => (
                    <div key={option} className="flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2">
                      <CircleDot size={14} className={index === 0 ? 'text-cyan-300' : 'text-slate-500'} />
                      <span>{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-black mb-8 border-l-4 border-black pl-4">Featured Test Series</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {featuredSeries.map((item) => (
            <Link key={item.title} to={item.link} className={`group flex flex-col p-6 bg-white border ${item.accent} border-l-4 rounded-xl hover:shadow-md transition-all`}>
              <h3 className="text-lg font-bold text-black group-hover:text-blue-900 mb-2 flex items-center justify-between">
                {item.title}
                <ChevronRight size={16} className="text-gray-400 group-hover:text-black" />
              </h3>
              <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">{item.questions}</span>
                {item.badge ? <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">{item.badge}</span> : null}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Why Test Series are Critical for Nursing Exams</h2>
              <div className="prose text-gray-700">
                <p className="mb-4">
                  Success in nursing officer exams like NORCET and RRB is not just about knowledge; it is about speed, accuracy, and temperament. A structured test series bridges the gap between studying and performing.
                </p>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start">
                    <Clock className="flex-shrink-0 h-5 w-5 text-gray-500 mt-1 mr-3" />
                    <span><strong>Time Management:</strong> Real-time simulation helps you manage the 90-120 minute pressure effectively.</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="flex-shrink-0 h-5 w-5 text-gray-500 mt-1 mr-3" />
                    <span><strong>Pattern Familiarity:</strong> Our mocks replicate the exact question distribution of AIIMS and other boards.</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="flex-shrink-0 h-5 w-5 text-gray-500 mt-1 mr-3" />
                    <span><strong>Negative Marking Control:</strong> Regular practice reduces guesswork and improves your precision score.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Types of Tests Available</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '📝', type: 'Full-Length Mocks', focus: 'Complete exam simulation', ideal: 'Final revision phase' },
                  { icon: '📚', type: 'Subject Tests', focus: 'Topic mastery', ideal: 'Daily practice routines' },
                  { icon: '🔬', type: 'Sectional Tests', focus: 'Strength/weakness targeting', ideal: 'Focused score improvement' },
                  { icon: '📜', type: 'PYQ Tests', focus: 'Pattern recognition', ideal: 'Trend analysis & revision' }
                ].map((test) => (
                  <article key={test.type} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-2xl mb-2">{test.icon}</p>
                    <h3 className="font-bold text-black">{test.type}</h3>
                    <p className="text-sm text-gray-600 mt-1">{test.focus}</p>
                    <span className="inline-flex mt-4 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">Ideal for: {test.ideal}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-4">Why NPrep is the Most Trusted Platform for Nursing Exam Preparation</h2>
          <p className="text-lg text-gray-700">
            NPrep is not just another mock test portal. It is a complete exam readiness ecosystem for nursing aspirants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">30,000+ Questions</h3>
            <p className="text-gray-600">Largest QBank covering every topic from FON to MSN with detailed rationales.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Monitor className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Real Exam Interface</h3>
            <p className="text-gray-600">Designed to simulate CBT exam conditions including timer, navigation, and question marking.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <BarChart2 className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">AI Performance Analytics</h3>
            <p className="text-gray-600">Granular analysis of your strong & weak areas, time management, and accuracy.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-yellow-100 p-4 rounded-full mb-4">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">All India Ranking</h3>
            <p className="text-gray-600">Compete with 50,000+ aspirants and know your standing before the real exam.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-red-100 p-4 rounded-full mb-4">
              <Brain className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Clinical Scenarios</h3>
            <p className="text-gray-600">Special focus on new pattern clinical vignette questions asked in recent NORCETs.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 p-4 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Regular Practice</h3>
            <p className="text-gray-600">Consistent targets and tests to keep your preparation disciplined and on track.</p>
          </div>
        </div>
      </section>

      <section className="py-16 text-white bg-gradient-to-r from-[#1e3a5f] to-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center bg-yellow-500 text-black font-bold px-3 py-1 rounded mb-4 uppercase tracking-wide text-sm">
                <Zap className="h-4 w-4 mr-2" /> Exclusive Feature
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">NASHTA Series</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                NASHTA is a specialized, high-stakes mock test series designed by NPrep specifically for NORCET and nursing officer exam candidates.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                It simulates real exam conditions, providing AI-based performance analytics to help candidates assess their ranking, accuracy, and readiness for AIIMS-level questions.
              </p>
              <p className="text-sm text-gray-300 mb-8">
                Next NASHTA: <span className="font-semibold text-white">{nextNashtaDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span> · Countdown <span className="font-semibold text-yellow-300">{countdownText}</span>
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://qtestseries.nprep.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start NASHTA Series
                </a>
                <div className="flex items-center text-gray-300 text-sm font-medium">
                  <Smartphone className="h-5 w-5 mr-2 text-yellow-500" />
                  Available on NPrep App
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm bg-slate-950 rounded-[2.25rem] p-3 border border-slate-700 shadow-2xl">
                <div className="bg-slate-900 rounded-[1.8rem] p-4 border border-slate-700">
                  <div className="w-20 h-1 bg-slate-700 rounded mx-auto mb-4" />
                  <div className="bg-slate-800 rounded-xl p-4 space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>NASHTA Mock #27</span>
                      <span className="text-yellow-300">42:13</span>
                    </div>
                    <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm">
                      <p className="text-slate-300 mb-2">Q12. Priority action for post-op hypotension?</p>
                      <div className="space-y-2 text-xs text-slate-200">
                        <p className="rounded bg-slate-800 px-2 py-1">A. Administer IV fluids</p>
                        <p className="rounded bg-slate-800 px-2 py-1">B. Start oral rehydration</p>
                        <p className="rounded bg-slate-800 px-2 py-1">C. Discharge and review</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <p className="rounded-md bg-emerald-500/20 text-emerald-300 py-2">Accuracy 78%</p>
                      <p className="rounded-md bg-blue-500/20 text-blue-300 py-2">Rank #214</p>
                      <p className="rounded-md bg-violet-500/20 text-violet-300 py-2">Attempt 84</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="nprep-testimonial-cta">
            <h2 className="text-3xl font-semibold text-[var(--text-primary)]">Hear from real students</h2>
            <a className="cta" href="https://nprep.in/blogs?filter=NORCET+Success+Story" target="_blank" rel="noopener noreferrer">
              Read verified success stories on NPrep
            </a>
          </div>
        </div>
      </section>

      {/* Quick Exam Links Table */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-black mb-6">Quick Access: Nursing Officer Exams</h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div className="p-6 hover:bg-gray-50">
              <h3 className="font-bold text-lg mb-2">Central Govt</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/norcet-test-series" className="text-blue-700 hover:underline">AIIMS NORCET</Link></li>
                <li><Link to="/rrb-staff-nurse-test-series" className="text-blue-700 hover:underline">RRB Staff Nurse</Link></li>
                <li><Link to="/esic-nursing-officer-test-series" className="text-blue-700 hover:underline">ESIC Nursing Officer</Link></li>
                <li><Link to="/nursing-officer-exams-in-india" className="text-blue-700 hover:underline">DSSSB Nursing Officer</Link></li>
              </ul>
            </div>
            <div className="p-6 hover:bg-gray-50">
              <h3 className="font-bold text-lg mb-2">State Govt (North)</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/state-north/uppsc-staff-nurse" className="text-blue-700 hover:underline">UPPSC Staff Nurse</Link></li>
                <li><Link to="/state-north/rajasthan-cho" className="text-blue-700 hover:underline">Rajasthan CHO</Link></li>
                <li><Link to="/state-north/mp-vyapam-nurse" className="text-blue-700 hover:underline">MP Vyapam Nurse</Link></li>
                <li><Link to="/state-north/hssc-staff-nurse" className="text-blue-700 hover:underline">HSSC Staff Nurse</Link></li>
              </ul>
            </div>
            <div className="p-6 hover:bg-gray-50">
              <h3 className="font-bold text-lg mb-2">State Govt (South)</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/state-south/kerala-psc-nurse" className="text-blue-700 hover:underline">Kerala PSC Nurse</Link></li>
                <li><Link to="/state-south/tn-mrb-nurse" className="text-blue-700 hover:underline">TN MRB Nurse</Link></li>
                <li><Link to="/state-south/kpsc-staff-nurse" className="text-blue-700 hover:underline">KPSC Staff Nurse</Link></li>
                <li><Link to="/state-south/ap-mhsrb" className="text-blue-700 hover:underline">AP MHSRB</Link></li>
              </ul>
            </div>
            <div className="p-6 hover:bg-gray-50">
              <h3 className="font-bold text-lg mb-2">Specialized</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/specialized/mns-military-nursing" className="text-blue-700 hover:underline">MNS (Military Nursing)</Link></li>
                <li><Link to="/specialized/jipmer-nursing" className="text-blue-700 hover:underline">JIPMER Nursing</Link></li>
                <li><Link to="/specialized/pgimer-nursing" className="text-blue-700 hover:underline">PGIMER Nursing</Link></li>
                <li><Link to="/specialized/cho-exams" className="text-blue-700 hover:underline">CHO Exams</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

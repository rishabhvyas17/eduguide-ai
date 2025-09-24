import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LightRays from '../components/LightRays';
import VariableProximity from '../components/VariableProximity';
import ShinyText from '../components/ShinyText';
import MagicBento from '../components/MagicBento';

const Landing = () => {
  const heroTextRef = useRef(null);
  const navigate = useNavigate();
  
  const benefits = [
    { title: "Holistic Evaluation", desc: "Beyond marks - skills, interests, and potential", icon: "🌟" },
    { title: "Early Intervention", desc: "Detect and address learning gaps before they become problems", icon: "⚡" },
    { title: "NEP 2020 Aligned", desc: "Competency-based, continuous assessment framework", icon: "📚" },
    { title: "Parent Involvement", desc: "Transparent insights and regular communication", icon: "👨‍👩‍👧‍👦" }
  ];

  const DropdownMenu = ({ title, items }) => (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-[#E2E2B6]/80 hover:text-[#E2E2B6] transition-all duration-200 py-2 px-3 rounded-lg hover:bg-[#6EACDA]/10">
        <span>{title}</span>
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className="absolute top-full left-0 mt-2 w-56 bg-[#03346E]/90 backdrop-blur-lg border border-[#6EACDA]/30 rounded-xl shadow-2xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:scale-100 scale-95">
        <div className="py-2">
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-3 text-sm text-[#E2E2B6]/80 hover:text-[#E2E2B6] hover:bg-[#6EACDA]/10 transition-colors duration-150 rounded-md mx-2"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  const handleDevelopersClick = () => {
    navigate('/developers');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#021526] via-[#03346E] to-[#021526] text-[#E2E2B6]">
      {/* LightRays is now a fixed background for the whole page */}
      <div className="fixed inset-0 z-0">
        <LightRays
          raysColor="#6EACDA"
          className="w-full h-full"
          rayLength={3}
        />
      </div>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#6EACDA]/20 bg-[#021526]/70 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#6EACDA] to-[#E2E2B6] rounded-lg flex items-center justify-center">
                <span className="text-[#021526] font-bold text-sm">EG</span>
              </div>
              <span className="text-xl font-bold text-[#E2E2B6]">EduGuide AI</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-1">
              <DropdownMenu
                title="Product"
                items={["Overview", "Features", "Reports"]}
              />
              
              <DropdownMenu
                title="For Schools"
                items={["Pilot", "Onboarding", "Pricing"]}
              />
              
              <a href="#" className="text-[#E2E2B6]/80 hover:text-[#E2E2B6] transition-all duration-200 py-2 px-3 rounded-lg hover:bg-[#6EACDA]/10">
                For Parents
              </a>
              
              <a href="/student" className="text-[#E2E2B6]/80 hover:text-[#E2E2B6] transition-all duration-200 py-2 px-3 rounded-lg hover:bg-[#6EACDA]/10">
                For Students
              </a>
              
              <DropdownMenu
                title="Resources"
                items={["Docs", "Case Studies", "Blog"]}
              />
            </div>
            
            <div className="flex items-center">
              <button className="border border-[#6EACDA]/50 text-[#E2E2B6] px-6 py-2 rounded-lg hover:bg-[#6EACDA]/10 hover:border-[#6EACDA] hover:text-[#E2E2B6] transition-all duration-200">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Hero Text - Left Side (60%) */}
            <div className="space-y-8 lg:col-span-3" ref={heroTextRef}>
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <VariableProximity
                    label="Every child deserves the right guidance."
                    className="bg-gradient-to-r from-[#E2E2B6] to-[#6EACDA] bg-clip-text text-transparent"
                    fromFontVariationSettings="'wght' 400, 'opsz' 20"
                    toFontVariationSettings="'wght' 900, 'opsz' 40"
                    containerRef={heroTextRef}
                    radius={120}
                    falloff="linear"
                  />
                </h1>
                
                <div className="text-xl text-[#E2E2B6]/90 leading-relaxed">
                  <ShinyText 
                    text="EduGuide AI blends AI and human expertise to track progress and suggest the best career fit."
                    speed={4}
                    className="text-[#E2E2B6]/90"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#6EACDA] to-[#03346E] text-[#E2E2B6] px-8 py-4 rounded-lg text-lg font-semibold hover:from-[#6EACDA] hover:to-[#6EACDA] transition-all duration-200 transform hover:scale-105 shadow-xl">
                  Book Pilot
                </button>
                <button className="border-2 border-[#6EACDA]/50 text-[#E2E2B6] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#6EACDA]/10 hover:border-[#6EACDA] transition-all duration-200">
                  How it Works
                </button>
              </div>

              <div className="text-[#E2E2B6]/80 leading-relaxed max-w-2xl">
                <ShinyText 
                  text="EduGuide AI blends automated monthly aptitude tests, teacher-entered academics, and human counselor interviews to create action-ready growth plans and career-fit suggestions. Deliver reports by dashboard, PDF, or WhatsApp."
                  speed={6}
                  className="text-[#E2E2B6]/80"
                />
              </div>
            </div>

            {/* Hero Image - Right Side (40%) */}
            <div className="relative lg:col-span-2">
              <div className="flex items-center justify-center">
                <img 
                  src="/images/hero-illustration.png" 
                  alt="EduGuide AI Platform Dashboard" 
                  className="w-full h-auto max-w-md object-contain"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#6EACDA]/20 to-[#E2E2B6]/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#6EACDA]/30 to-[#03346E]/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="relative z-10 py-20 bg-[#03346E]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#E2E2B6] mb-4">Core Features</h2>
            <p className="text-xl text-[#E2E2B6]/80 max-w-3xl mx-auto">
              Comprehensive tools designed for modern educational assessment
            </p>
          </div>
          
          <MagicBento 
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={250}
            particleCount={8}
            glowColor="110, 172, 218"
          />
        </div>
      </section>

      {/* How It Works - 5 Step Workflow */}
      <section id="how-it-works" className="relative z-10 py-20 bg-[#021526]/40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#E2E2B6] mb-4">How It Works</h2>
            <p className="text-xl text-[#E2E2B6]/80 max-w-3xl mx-auto">
              Complete workflow for comprehensive student evaluation and career guidance
            </p>
          </div>
          
          {/* Desktop Horizontal Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between relative">
              {/* Step 1 */}
              <div className="flex-1 max-w-xs">
                <div className="bg-[#03346E]/70 backdrop-blur-sm border border-[#6EACDA]/30 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6EACDA] to-[#03346E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#E2E2B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="text-sm text-[#6EACDA] font-semibold mb-2">STEP 01</div>
                  <h3 className="text-lg font-semibold text-[#E2E2B6] mb-3">Onboard School</h3>
                  <p className="text-sm text-[#E2E2B6]/80">CSV or manual setup. Admin provisions accounts for students, teachers, and counselors.</p>
                </div>
              </div>
              
              {/* Arrow 1 */}
              <div className="flex-shrink-0 px-4">
                <svg className="w-8 h-6 text-[#6EACDA]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              {/* Step 2 */}
              <div className="flex-1 max-w-xs">
                <div className="bg-[#03346E]/70 backdrop-blur-sm border border-[#6EACDA]/30 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6EACDA] to-[#03346E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#E2E2B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="text-sm text-[#6EACDA] font-semibold mb-2">STEP 02</div>
                  <h3 className="text-lg font-semibold text-[#E2E2B6] mb-3">Monthly Tests & Scores</h3>
                  <p className="text-sm text-[#E2E2B6]/80">Students take aptitude tests; teachers enter academic marks and attendance data.</p>
                </div>
              </div>
              
              {/* Arrow 2 */}
              <div className="flex-shrink-0 px-4">
                <svg className="w-8 h-6 text-[#6EACDA]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              {/* Step 3 */}
              <div className="flex-1 max-w-xs">
                <div className="bg-[#03346E]/70 backdrop-blur-sm border border-[#6EACDA]/30 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6EACDA] to-[#03346E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#E2E2B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="text-sm text-[#6EACDA] font-semibold mb-2">STEP 03</div>
                  <h3 className="text-lg font-semibold text-[#E2E2B6] mb-3">AI Analysis & Scoring</h3>
                  <p className="text-sm text-[#E2E2B6]/80">AI model scores MCQs and short answers, assigns confidence scores for quality assurance.</p>
                </div>
              </div>
              
              {/* Arrow 3 */}
              <div className="flex-shrink-0 px-4">
                <svg className="w-8 h-6 text-[#6EACDA]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              {/* Step 4 */}
              <div className="flex-1 max-w-xs">
                <div className="bg-[#03346E]/70 backdrop-blur-sm border border-[#6EACDA]/30 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6EACDA] to-[#03346E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#E2E2B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-sm text-[#6EACDA] font-semibold mb-2">STEP 04</div>
                  <h3 className="text-lg font-semibold text-[#E2E2B6] mb-3">Counselor Review (PI)</h3>
                  <p className="text-sm text-[#E2E2B6]/80">Human rubric applied for low-confidence items and Personal Interview sessions.</p>
                </div>
              </div>
              
              {/* Arrow 4 */}
              <div className="flex-shrink-0 px-4">
                <svg className="w-8 h-6 text-[#6EACDA]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              {/* Step 5 */}
              <div className="flex-1 max-w-xs">
                <div className="bg-[#03346E]/70 backdrop-blur-sm border border-[#6EACDA]/30 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6EACDA] to-[#03346E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#E2E2B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="text-sm text-[#6EACDA] font-semibold mb-2">STEP 05</div>
                  <h3 className="text-lg font-semibold text-[#E2E2B6] mb-3">Holistic Report Delivery</h3>
                  <p className="text-sm text-[#E2E2B6]/80">Dashboard, PDF, and WhatsApp delivery with recommended actions and career guidance.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile/Tablet Vertical Flow */}
          <div className="lg:hidden space-y-6">
            {[
              {
                step: "01",
                title: "Onboard School",
                description: "CSV or manual setup. Admin provisions accounts for students, teachers, and counselors.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                )
              },
              {
                step: "02",
                title: "Monthly Tests & Scores",
                description: "Students take aptitude tests; teachers enter academic marks and attendance data.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                )
              },
              {
                step: "03",
                title: "AI Analysis & Scoring",
                description: "AI model scores MCQs and short answers, assigns confidence scores for quality assurance.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                )
              },
              {
                step: "04",
                title: "Counselor Review (PI)",
                description: "Human rubric applied for low-confidence items and Personal Interview sessions.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                )
              },
              {
                step: "05",
                title: "Holistic Report Delivery",
                description: "Dashboard, PDF, and WhatsApp delivery with recommended actions and career guidance.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                )
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#6EACDA] to-[#03346E] rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-[#E2E2B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {item.icon}
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-[#03346E]/70 backdrop-blur-sm border border-[#6EACDA]/30 rounded-xl p-4">
                      <div className="text-sm text-[#6EACDA] font-semibold mb-1">STEP {item.step}</div>
                      <h3 className="text-lg font-semibold text-[#E2E2B6] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#E2E2B6]/80">{item.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Connecting Line */}
                {index < 4 && (
                  <div className="flex justify-start ml-7 mt-4 mb-2" aria-hidden="true">
                    <svg className="w-6 h-8 text-[#6EACDA]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-based Highlights */}
      <section className="relative z-10 py-20 bg-[#03346E]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#E2E2B6] mb-4">Built for Every Role</h2>
            <p className="text-xl text-[#E2E2B6]/80 max-w-3xl mx-auto">
              Tailored experiences for students, teachers, parents, and administrators
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Students */}
            <div className="bg-[#03346E]/70 backdrop-blur-sm border border-[#6EACDA]/30 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-[#6EACDA] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-xl font-semibold text-[#E2E2B6]">Students</h3>
              </div>
              <ul className="space-y-2 text-[#E2E2B6]/80 text-sm mb-4">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#6EACDA] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  See Skill Radar and monthly progress tracking
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#6EACDA] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Action items with micro-learning suggestions
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#6EACDA] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Access to saved reports and career guidance
                </li>
              </ul>
              <div className="bg-[#6EACDA]/10 rounded-lg p-3">
                <p className="text-xs text-[#6EACDA] font-medium">Best for middle → secondary grades (NEP-aligned)</p>
              </div>
            </div>

            {/* Teachers */}
            <div className="bg-[#03346E]/70 backdrop-blur-sm border border-[#6EACDA]/30 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-[#6EACDA] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <h3 className="text-xl font-semibold text-[#E2E2B6]">Teachers</h3>
              </div>
              <ul className="space-y-2 text-[#E2E2B6]/80 text-sm mb-4">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#6EACDA] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Class overview with quick score-entry grid
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#6EACDA] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Student flags and intervention alerts
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#6EACDA] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  PTM report generator for parent meetings
                </li>
              </ul>
              <div className="bg-[#6EACDA]/10 rounded-lg p-3">
                <p className="text-xs text-[#6EACDA] font-medium">Best for middle → secondary grades (NEP-aligned)</p>
              </div>
            </div>

            {/* Parents */}
            <div className="bg-[#03346E]/70 backdrop-blur-sm border border-[#6EACDA]/30 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-[#6EACDA] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-[#E2E2B6]">Parents</h3>
              </div>
              <ul className="space-y-2 text-[#E2E2B6]/80 text-sm mb-4">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#6EACDA] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Child selector with latest holistic reports
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#6EACDA] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Simplified advice and next steps
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#6EACDA] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  WhatsApp link delivery for easy access
                </li>
              </ul>
              <div className="bg-[#6EACDA]/10 rounded-lg p-3">
                <p className="text-xs text-[#6EACDA] font-medium">Best for middle → secondary grades (NEP-aligned)</p>
              </div>
            </div>
          </div>

          {/* Admins/Counselors - Smaller Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#03346E]/70 backdrop-blur-sm border border-[#6EACDA]/30 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-[#6EACDA] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h3 className="text-xl font-semibold text-[#E2E2B6]">Admins / Counselors</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <ul className="space-y-2 text-[#E2E2B6]/80 text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#6EACDA] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    School analytics and performance insights
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#6EACDA] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    Audit logs and compliance tracking
                  </li>
                </ul>
                <ul className="space-y-2 text-[#E2E2B6]/80 text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#6EACDA] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    Prompt-version control for AI scoring
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#6EACDA] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    Counselor review queue management
                  </li>
                </ul>
              </div>
              <div className="bg-[#6EACDA]/10 rounded-lg p-3">
                <p className="text-xs text-[#6EACDA] font-medium">Best for middle → secondary grades (NEP-aligned)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 bg-[#021526]/40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#E2E2B6] mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-[#E2E2B6]/80">
              Common questions about EduGuide AI implementation and features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How long is the monthly test?",
                answer: "15–30 minutes depending on grade and test type."
              },
              {
                question: "Is student data secure?",
                answer: "Yes – TLS-in-transit, encrypted at rest, role-based access + RLS recommended."
              },
              {
                question: "Do parents need to install an app?",
                answer: "No – reports are shared via WhatsApp/PDF/email and via the web portal."
              },
              {
                question: "Can we run the system for only academics or only aptitude?",
                answer: "Flexible: run either or both."
              },
              {
                question: "Do you provide counselor training?",
                answer: "Yes – included in pilot (video + playbook)."
              },
              {
                question: "How do you ensure fair scoring?",
                answer: "AI scoring with confidence scores + human review for low-confidence items; prompt-version logging for audit."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#03346E]/50 backdrop-blur-sm border border-[#6EACDA]/20 rounded-xl p-6 hover:border-[#6EACDA]/40 transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#E2E2B6] mb-3">{faq.question}</h3>
                <p className="text-[#E2E2B6]/80 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-[#03346E]/80 to-[#6EACDA]/60">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4 text-[#E2E2B6]">Ready to Transform Student Assessment?</h2>
          <p className="text-xl mb-8 text-[#E2E2B6]/90">
            Join forward-thinking schools that are preparing students for the future with AI-powered holistic evaluation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#E2E2B6] text-[#03346E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#E2E2B6]/90 transition-all transform hover:scale-105 shadow-xl">
              Schedule Demo
            </button>
            <button className="border-2 border-[#E2E2B6]/50 text-[#E2E2B6] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#E2E2B6]/10 hover:border-[#E2E2B6] transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Meet Our Developers Button */}
      <section className="relative z-10 py-8 bg-[#021526]/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <button 
            onClick={handleDevelopersClick}
            className="text-[#E2E2B6]/60 hover:text-[#E2E2B6]/80 transition-all duration-300 text-sm font-medium underline underline-offset-4 hover:underline-offset-8 decoration-[#6EACDA]/40 hover:decoration-[#6EACDA]/60"
          >
            Meet Our Developers
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[#021526] border-t border-[#6EACDA]/20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#6EACDA] to-[#E2E2B6] rounded-lg flex items-center justify-center">
                  <span className="text-[#021526] font-bold text-sm">EG</span>
                </div>
                <span className="text-xl font-bold text-[#E2E2B6]">EduGuide AI</span>
              </div>
              <p className="text-[#E2E2B6]/80">
                Transforming education with AI-powered holistic student evaluation and career guidance.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#E2E2B6]">Features</h4>
              <ul className="space-y-2 text-[#E2E2B6]/80">
                <li>Academic Analysis</li>
                <li>Aptitude Testing</li>
                <li>Career Guidance</li>
                <li>Personal Interviews</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#E2E2B6]">Company</h4>
              <ul className="space-y-2 text-[#E2E2B6]/80">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#E2E2B6]">Contact</h4>
              <ul className="space-y-2 text-[#E2E2B6]/80">
                <li>hello@eduguideai.com</li>
                <li>+91 98765 43210</li>
                <li>Indore, Madhya Pradesh</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#6EACDA]/20 mt-8 pt-8 text-center text-[#E2E2B6]/70">
            <p>&copy; 2025 EduGuide AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
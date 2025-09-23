import React, { useRef } from 'react';
import LightRays from '../components/LightRays';
import VariableProximity from '../components/VariableProximity';
import ShinyText from '../components/ShinyText';
import MagicBento from '../components/MagicBento';

const Landing = () => {
  const heroTextRef = useRef(null);
  
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
              
              <a href="#" className="text-[#E2E2B6]/80 hover:text-[#E2E2B6] transition-all duration-200 py-2 px-3 rounded-lg hover:bg-[#6EACDA]/10">
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

      {/* Benefits Section */}
      <section id="benefits" className="relative z-10 py-20 bg-gradient-to-r from-[#021526]/80 to-[#03346E]/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#E2E2B6] mb-4">Why Choose EduGuide AI?</h2>
            <p className="text-xl text-[#E2E2B6]/80 max-w-3xl mx-auto">
              Transforming education with data-driven insights and personalized guidance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-[#03346E]/50 backdrop-blur-sm rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#6EACDA]/30">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-[#E2E2B6] mb-3">{benefit.title}</h3>
                <p className="text-[#E2E2B6]/80">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 py-20 bg-[#03346E]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#E2E2B6] mb-4">How It Works</h2>
            <p className="text-xl text-[#E2E2B6]/80 max-w-3xl mx-auto">
              Simple workflow for comprehensive student evaluation
            </p>
          </div>
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Data Collection",
                  desc: "Schools upload academic records, students take monthly aptitude tests, counselors conduct personal interviews",
                  icon: "📋"
                },
                {
                  step: "02", 
                  title: "AI Analysis",
                  desc: "Our AI processes academic performance, aptitude results, and personal insights to generate comprehensive profiles",
                  icon: "🤖"
                },
                {
                  step: "03",
                  title: "Career Guidance",
                  desc: "Receive personalized career recommendations through Career Fit Zone (AI) and Career Interest Zone (counselor)",
                  icon: "🚀"
                }
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-gradient-to-r from-[#6EACDA] to-[#03346E] text-[#E2E2B6] w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-[#E2E2B6] mb-3">{item.title}</h3>
                  <p className="text-[#E2E2B6]/80">{item.desc}</p>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#6EACDA]/30 to-[#6EACDA]/30 transform -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
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
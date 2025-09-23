import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

const EduGuideLanding = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);

  // Three.js scene setup
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(400, 300);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create 3D geometric shapes representing the three pillars
    const geometries = [
      new THREE.OctahedronGeometry(1, 0), // Academic Analysis
      new THREE.IcosahedronGeometry(1, 0), // Aptitude Testing  
      new THREE.DodecahedronGeometry(1, 0) // Personal Interview
    ];

    const materials = [
      new THREE.MeshPhongMaterial({ color: 0x4f46e5, wireframe: false, transparent: true, opacity: 0.8 }),
      new THREE.MeshPhongMaterial({ color: 0x059669, wireframe: false, transparent: true, opacity: 0.8 }),
      new THREE.MeshPhongMaterial({ color: 0xdc2626, wireframe: false, transparent: true, opacity: 0.8 })
    ];

    const meshes = [];
    geometries.forEach((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, materials[index]);
      mesh.position.x = (index - 1) * 3;
      mesh.position.y = 0;
      scene.add(mesh);
      meshes.push(mesh);
    });

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 8;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        mesh.position.y = Math.sin(Date.now() * 0.001 + index) * 0.5;
      });
      
      renderer.render(scene, camera);
    };

    animate();

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Cleanup
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const features = [
    {
      title: "Academic Analysis",
      icon: "📊",
      description: "Track subject-wise marks, identify strengths and weaknesses, monitor learning progress",
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      title: "Monthly Aptitude Test",
      icon: "🧠", 
      description: "AI-powered evaluation of logical reasoning, problem-solving, and creativity skills",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Personal Interviews",
      icon: "👥",
      description: "Human-led counseling to understand interests, passions, and career inclinations",
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Career Guidance",
      icon: "🎯",
      description: "AI + Human insights for personalized career fit and interest zone mapping",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const benefits = [
    { title: "Holistic Evaluation", desc: "Beyond marks - skills, interests, and potential", icon: "🌟" },
    { title: "Early Intervention", desc: "Detect and address learning gaps before they become problems", icon: "⚡" },
    { title: "NEP 2020 Aligned", desc: "Competency-based, continuous assessment framework", icon: "📚" },
    { title: "Parent Involvement", desc: "Transparent insights and regular communication", icon: "👨‍👩‍👧‍👦" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EG</span>
              </div>
              <span className="text-xl font-bold text-gray-900">EduGuide AI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#benefits" className="text-gray-700 hover:text-indigo-600 transition-colors">Benefits</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 transition-colors">How it Works</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                AI-Powered 
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Holistic Student
                </span>
                <br />Evaluation Platform
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Combining AI-driven assessments with human counseling to provide 
                comprehensive career guidance and personalized learning paths for K-12 students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-all transform hover:scale-105">
                  Schedule Demo
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-all">
                  Watch Video
                </button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>NEP 2020 Aligned</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>AI + Human Insights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Continuous Assessment</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">
                  Three Pillars of Assessment
                </h3>
                <div ref={mountRef} className="flex justify-center mb-6"></div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3">
                    <div className="w-4 h-4 bg-indigo-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm font-medium">Academic Analysis</p>
                  </div>
                  <div className="p-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm font-medium">Aptitude Testing</p>
                  </div>
                  <div className="p-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm font-medium">Personal Interview</p>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools for academic tracking, skill assessment, and career guidance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`${feature.color} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose EduGuide AI?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming education with data-driven insights and personalized guidance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  icon: "📝"
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
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 transform -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Student Assessment?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join forward-thinking schools that are preparing students for the future with AI-powered holistic evaluation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">EG</span>
                </div>
                <span className="text-xl font-bold">EduGuide AI</span>
              </div>
              <p className="text-gray-400">
                Transforming education with AI-powered holistic student evaluation and career guidance.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Academic Analysis</li>
                <li>Aptitude Testing</li>
                <li>Career Guidance</li>
                <li>Personal Interviews</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@eduguideai.com</li>
                <li>+91 98765 43210</li>
                <li>Indore, Madhya Pradesh</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EduGuide AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EduGuideLanding;
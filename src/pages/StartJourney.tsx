import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Play, BookOpen, Users, Zap, Shield, Globe, CheckCircle, Star, TrendingUp, ArrowDown, ChevronRight, Sparkles, Target, Rocket, Compass, Map, Flag, Building, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fadeInUp, staggerContainer, staggerItem, buttonHover, scaleIn } from "@/lib/animations";

const journeySteps = [
  {
    id: 1,
    title: "Discover Praxis",
    description: "Explore our comprehensive institutional digital asset platform",
    icon: Compass,
    duration: "5 min",
    color: "from-purple-500 to-blue-500",
    features: ["Platform overview", "Key features", "Use cases", "Architecture tour"]
  },
  {
    id: 2,
    title: "Choose Your Path",
    description: "Select the journey that matches your institutional needs",
    icon: Map,
    duration: "3 min",
    color: "from-blue-500 to-cyan-500",
    features: ["Asset management", "Compliance focus", "Integration options", "Custom solutions"]
  },
  {
    id: 3,
    title: "Interactive Demo",
    description: "Experience the platform hands-on with guided tutorials",
    icon: Play,
    duration: "10 min",
    color: "from-cyan-500 to-teal-500",
    features: ["Live platform access", "Step-by-step guidance", "Real scenarios", "Q&A sessions"]
  },
  {
    id: 4,
    title: "Connect with Experts",
    description: "Schedule personalized consultation with our team",
    icon: Users,
    duration: "15 min",
    color: "from-teal-500 to-green-500",
    features: ["1-on-1 consultation", "Technical deep dive", "Custom roadmap", "Pricing discussion"]
  }
];

const userTypes = [
  {
    title: "Financial Institution",
    description: "Banks, asset managers, and investment firms",
    icon: Building,
    benefits: ["Regulatory compliance", "Institutional custody", "Advanced reporting"]
  },
  {
    title: "Enterprise",
    description: "Corporations exploring digital asset solutions",
    icon: Globe,
    benefits: ["Treasury management", "Cross-border payments", "Supply chain finance"]
  },
  {
    title: "Asset Manager",
    description: "Professional managing digital asset portfolios",
    icon: TrendingUp,
    benefits: ["Portfolio optimization", "Risk management", "Performance analytics"]
  },
  {
    title: "Technology Partner",
    description: "Integrating Praxis into existing systems",
    icon: Zap,
    benefits: ["API access", "SDK support", "Technical documentation"]
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "Global Asset Management",
    content: "Praxis transformed how we handle digital assets. The compliance features are unmatched.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Digital Assets",
    company: "Institutional Bank",
    content: "The platform's security and integration capabilities exceeded our expectations.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Portfolio Manager",
    company: "Digital Investment Fund",
    content: "Finally, a platform built for institutions. The user experience is exceptional.",
    rating: 5
  }
];

const StartJourney = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedUserType, setSelectedUserType] = useState(null);
  const [email, setEmail] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleStepClick = (stepId) => {
    setCurrentStep(stepId);
  };

  const handleUserTypeSelect = (type) => {
    setSelectedUserType(type);
  };

  const handleStartJourney = () => {
    // Handle journey start logic
    console.log("Starting journey for:", selectedUserType, email);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900" />
          
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-500" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              ref={ref}
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 bg-gradient-to-br from-purple-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-8"
              >
                <Rocket size={40} className="text-white" />
              </motion.div>
              
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6 sm:mb-8 text-white">
                Start Your Journey
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-12 leading-relaxed font-serif italic max-w-3xl mx-auto">
                Begin your transformation into institutional digital asset excellence. 
                Your personalized path to regulated, secure, and scalable operations starts here.
              </p>

              {/* Quick Start CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button 
                  onClick={() => handleStepClick(1)}
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all transform hover:scale-105 flex items-center gap-3"
                >
                  <Sparkles size={20} />
                  Start Interactive Journey
                  <ArrowRight size={20} />
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all border border-white/30">
                  Watch Overview Video
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Journey Steps */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-6 text-slate-900">
                Your Journey Path
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Four simple steps to transform your institutional digital asset operations
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {journeySteps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;

                return (
                  <motion.div
                    key={step.id}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      isActive ? 'scale-105' : 'hover:scale-102'
                    }`}
                    variants={staggerItem}
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleStepClick(step.id)}
                  >
                    {/* Connection Line */}
                    {index < journeySteps.length - 1 && (
                      <motion.div 
                        className="absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-purple-200 to-transparent transform translate-x-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      />
                    )}

                    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 ${
                      isActive ? 'border-purple-500 ring-4 ring-purple-100' : 'border-slate-200'
                    }`}>
                      {/* Step Number */}
                      <motion.div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4 ${
                          isCompleted 
                            ? 'bg-green-500 text-white' 
                            : isActive 
                              ? 'bg-purple-500 text-white' 
                              : 'bg-slate-200 text-slate-600'
                        }`}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      >
                        <AnimatePresence mode="wait">
                          {isCompleted ? (
                            <motion.div
                              key="check"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <CheckCircle size={16} />
                            </motion.div>
                          ) : (
                            <motion.span
                              key="number"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              {step.id}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {/* Icon */}
                      <motion.div 
                        className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4`}
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ 
                          scale: isActive ? [1, 1.1, 1] : 1, 
                          rotate: 0,
                          boxShadow: isActive ? "0 0 20px rgba(147, 51, 234, 0.3)" : "none"
                        }}
                        transition={{ 
                          scale: { duration: 2, repeat: isActive ? Infinity : 0 },
                          rotate: { duration: 0.5, delay: index * 0.1 + 0.3 },
                          boxShadow: { duration: 0.3 }
                        }}
                      >
                        <IconComponent size={24} className="text-white" />
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-600 mb-3">{step.description}</p>
                      
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {step.duration}
                        </span>
                        {isActive && (
                          <span className="text-purple-600 font-semibold">Active</span>
                        )}
                      </div>

                      {/* Features */}
                      <div className="space-y-1">
                        {step.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                            <div className="w-1 h-1 bg-purple-400 rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {isActive && (
                        <motion.button
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                        >
                          Start Step
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            <ChevronRight size={16} />
                          </motion.div>
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* User Type Selection */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-purple-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-6 text-white">
                Who Are You?
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Select your role to get a personalized experience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {userTypes.map((type, index) => {
                const IconComponent = type.icon;
                const isSelected = selectedUserType === type.title;

                return (
                  <motion.div
                    key={type.title}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      isSelected ? 'scale-105' : 'hover:scale-102'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => handleUserTypeSelect(type.title)}
                  >
                    <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 h-full ${
                      isSelected ? 'border-purple-400 ring-4 ring-purple-400/30' : 'border-white/20 hover:border-white/40'
                    }`}>
                      {/* Icon */}
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <IconComponent size={24} className="text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
                      <p className="text-sm text-white/70 mb-4">{type.description}</p>
                      
                      {/* Benefits */}
                      <div className="space-y-2">
                        {type.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-white/60">
                            <CheckCircle size={12} className="text-green-400" />
                            {benefit}
                          </div>
                        ))}
                      </div>

                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center"
                        >
                          <CheckCircle size={16} className="text-white" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Email Signup */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-6 text-slate-900">
                Ready to Begin?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Enter your email to start your personalized journey
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent"
                />
                <button
                  onClick={handleStartJourney}
                  disabled={!email || !selectedUserType}
                  className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Start Journey
                  <ArrowRight size={20} />
                </button>
              </div>

              {selectedUserType && (
                <p className="mt-4 text-sm text-slate-600">
                  Journey configured for: <span className="font-semibold text-purple-600">{selectedUserType}</span>
                </p>
              )}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-6 text-slate-900">
                Join Industry Leaders
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                See how institutions are transforming with Praxis
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-slate-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                      <div className="text-xs text-purple-600">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8"
              >
                <Flag size={32} className="text-white" />
              </motion.div>
              
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-6 text-white">
                Your Journey Awaits
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Take the first step towards institutional digital asset excellence. 
                The future of finance is here.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all transform hover:scale-105">
                  Start Your Journey Now
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all border border-white/30">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StartJourney;

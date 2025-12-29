import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Search, Filter, Star, TrendingUp, Users, Globe, Shield, Zap, Database, Building, Eye, Sparkles, Target, Scale, Lock, CheckCircle, Coins, FileText, Link, Code } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Target,
    title: "Asset Origination",
    description: "Source and verify digital assets with institutional-grade due diligence",
    stats: "500+ Assets"
  },
  {
    icon: Scale,
    title: "Legal Frameworks",
    description: "Compliant legal structures for regulated digital asset operations",
    stats: "15+ Jurisdictions"
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Advanced privacy controls and data protection mechanisms",
    stats: "Military-grade"
  },
  {
    icon: Zap,
    title: "Instant Settlement",
    description: "Atomic settlement across assets and cash in real-time",
    stats: "< 1s Settlement"
  },
  {
    icon: Database,
    title: "Secure Custody",
    description: "Institutional-grade digital asset custody with advanced controls",
    stats: "99.9% Uptime"
  },
  {
    icon: Building,
    title: "Governance",
    description: "On-chain governance with off-chain legal enforceability",
    stats: "DAO Ready"
  }
];


const DiscoverPraxis = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              ref={ref}
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6 sm:mb-8 text-white">
                Discover Praxis
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-12 leading-relaxed font-serif italic max-w-3xl mx-auto">
                Explore the complete institutional digital asset platform built for regulated markets. 
                From origination to settlement, experience the future of finance.
              </p>
              
              {/* Search Bar */}
              <motion.div 
                className="max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
                  <input
                    type="text"
                    placeholder="Search features, use cases, or documentation..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                    Search
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
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
                Platform Capabilities
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive features designed for institutional digital asset operations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-purple-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">{feature.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-purple-600">{feature.stats}</span>
                        <ArrowRight size={16} className="text-purple-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-purple-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-6 text-white">
                Experience the Platform
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Interactive demos and guided tours of Praxis capabilities
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Start Options</h3>
                  
                  <div className="space-y-4">
                    {[
                      { title: "Live Demo", desc: "Interactive platform walkthrough", icon: Eye },
                      { title: "API Explorer", desc: "Test our APIs directly", icon: Code },
                      { title: "Documentation", desc: "Comprehensive developer guides", icon: FileText },
                      { title: "Case Studies", desc: "Real-world implementation examples", icon: Users }
                    ].map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <button
                          key={index}
                          className="w-full text-left p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-colors flex items-center gap-4 group"
                        >
                          <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                            <IconComponent size={18} className="text-purple-300" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-white">{item.title}</div>
                            <div className="text-sm text-white/60">{item.desc}</div>
                          </div>
                          <ArrowRight size={16} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <div className="aspect-video bg-white/5 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Sparkles size={48} className="text-purple-400 mx-auto mb-4" />
                      <p className="text-white/80">Interactive Demo Preview</p>
                      <p className="text-sm text-white/60 mt-2">Click to explore platform features</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-6 text-white">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join institutional leaders leveraging Praxis for regulated digital asset operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                  Schedule Demo
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors border border-white/30">
                  View Documentation
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

export default DiscoverPraxis;

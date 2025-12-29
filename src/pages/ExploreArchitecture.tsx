import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Target, Scale, Shield, CheckCircle, Coins, Lock, Building, Zap, Database, FileText, Link, Sparkles, Eye, ArrowRight, Search, Filter, ChevronDown, ChevronUp, Info, Layers, Network, Cpu, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const architectureLayers = [
  { 
    id: 1,
    title: "Asset Origination",
    description: "Source and verify digital assets with institutional-grade due diligence",
    color: "from-purple-500/20 to-pink-500/20",
    icon: Target,
    details: [
      "Asset verification protocols",
      "Institutional due diligence",
      "Multi-source asset integration",
      "Quality assurance frameworks"
    ],
    connections: [2, 3],
    category: "Foundation"
  },
  { 
    id: 2,
    title: "Legal Frameworks",
    description: "Compliant legal structures for regulated digital asset operations",
    color: "from-blue-500/20 to-cyan-500/20",
    icon: Scale,
    details: [
      "Regulatory compliance",
      "Legal entity structures",
      "Cross-border frameworks",
      "Smart contract legal enforceability"
    ],
    connections: [1, 3, 4],
    category: "Compliance"
  },
  { 
    id: 3,
    title: "IAM",
    description: "Identity and access management for enterprise security",
    color: "from-green-500/20 to-emerald-500/20",
    icon: Lock,
    details: [
      "Multi-factor authentication",
      "Role-based access control",
      "Enterprise SSO integration",
      "Audit trail management"
    ],
    connections: [1, 2, 4],
    category: "Security"
  },
  { 
    id: 4,
    title: "Compliance",
    description: "Automated regulatory compliance and reporting systems",
    color: "from-yellow-500/20 to-orange-500/20",
    icon: CheckCircle,
    details: [
      "Automated reporting",
      "Real-time monitoring",
      "Regulatory rule engine",
      "Compliance dashboards"
    ],
    connections: [2, 3, 5],
    category: "Compliance"
  },
  { 
    id: 5,
    title: "Tokenisation",
    description: "Convert real-world assets into compliant digital tokens",
    color: "from-red-500/20 to-rose-500/20",
    icon: Coins,
    details: [
      "Asset tokenization protocols",
      "Smart contract templates",
      "Token standards compliance",
      "Fractional ownership"
    ],
    connections: [4, 6, 7],
    category: "Core"
  },
  { 
    id: 6,
    title: "Privacy",
    description: "Advanced privacy controls and data protection mechanisms",
    color: "from-indigo-500/20 to-purple-500/20",
    icon: Shield,
    details: [
      "Zero-knowledge proofs",
      "Data encryption",
      "Privacy-preserving computations",
      "GDPR compliance"
    ],
    connections: [5, 7, 8],
    category: "Security"
  },
  { 
    id: 7,
    title: "Governance",
    description: "On-chain governance and off-chain legal enforceability",
    color: "from-teal-500/20 to-cyan-500/20",
    icon: Building,
    details: [
      "DAO governance models",
      "Voting mechanisms",
      "Proposal systems",
      "Legal framework integration"
    ],
    connections: [5, 6, 8, 9],
    category: "Governance"
  },
  { 
    id: 8,
    title: "Settlement",
    description: "Instant, atomic settlement across assets and cash",
    color: "from-orange-500/20 to-red-500/20",
    icon: Zap,
    details: [
      "Atomic settlement protocols",
      "Cross-chain interoperability",
      "Real-time gross settlement",
      "Liquidity optimization"
    ],
    connections: [6, 7, 9, 10],
    category: "Core"
  },
  { 
    id: 9,
    title: "Custody",
    description: "Secure digital asset custody with institutional controls",
    color: "from-violet-500/20 to-purple-500/20",
    icon: Database,
    details: [
      "Multi-sig custody",
      "Hardware security modules",
      "Institutional controls",
      "Insurance coverage"
    ],
    connections: [7, 8, 10, 11],
    category: "Security"
  },
  { 
    id: 10,
    title: "Audit",
    description: "Comprehensive audit trails and regulatory reporting",
    color: "from-emerald-500/20 to-green-500/20",
    icon: FileText,
    details: [
      "Transaction audit trails",
      "Regulatory reporting",
      "Compliance verification",
      "Forensic analysis tools"
    ],
    connections: [8, 9, 11, 12],
    category: "Compliance"
  },
  { 
    id: 11,
    title: "Integration",
    description: "Seamless integration with existing financial systems",
    color: "from-pink-500/20 to-rose-500/20",
    icon: Link,
    details: [
      "API connectivity",
      "Legacy system integration",
      "Third-party service connections",
      "Data synchronization"
    ],
    connections: [9, 10, 12],
    category: "Integration"
  },
  { 
    id: 12,
    title: "User Experience",
    description: "Intuitive interfaces for institutional digital asset workflows",
    color: "from-amber-500/20 to-yellow-500/20",
    icon: Sparkles,
    details: [
      "Institutional UI/UX",
      "Workflow automation",
      "Customizable dashboards",
      "Mobile accessibility"
    ],
    connections: [10, 11],
    category: "Interface"
  }
];

const categories = ["All", "Foundation", "Core", "Security", "Compliance", "Governance", "Integration", "Interface"];

const ExploreArchitecture = () => {
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [expandedLayer, setExpandedLayer] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid, network, layers
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const filteredLayers = architectureLayers.filter(layer => {
    const matchesCategory = selectedCategory === "All" || layer.category === selectedCategory;
    const matchesSearch = layer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         layer.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const LayerCard = ({ layer, index }) => {
    const IconComponent = layer.icon;
    const isExpanded = expandedLayer === layer.id;
    const isSelected = selectedLayer === layer.id;

    return (
      <motion.div
        key={layer.id}
        className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer ${
          isSelected ? 'border-purple-500 scale-105' : 'border-slate-200 hover:border-purple-300'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        onClick={() => setSelectedLayer(layer.id)}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${layer.color} rounded-2xl opacity-0 hover:opacity-10 transition-opacity`} />
        
        <div className="relative p-6">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${layer.color} rounded-xl flex items-center justify-center`}>
              <IconComponent size={24} className="text-white" />
            </div>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
              {layer.category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 mb-2">{layer.title}</h3>
          <p className="text-slate-600 text-sm mb-4 leading-relaxed">{layer.description}</p>
          
          <div className="flex items-center justify-between">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setExpandedLayer(isExpanded ? null : layer.id);
              }}
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700 text-sm font-semibold"
            >
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              {isExpanded ? "Show Less" : "Show Details"}
            </button>
            <ArrowRight size={16} className="text-purple-600" />
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 pt-4 border-t border-slate-200"
              >
                <h4 className="font-semibold text-slate-900 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {layer.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Connected Layers:</h4>
                  <div className="flex flex-wrap gap-2">
                    {layer.connections.map(connId => {
                      const connLayer = architectureLayers.find(l => l.id === connId);
                      return connLayer ? (
                        <span key={connId} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                          {connLayer.title}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };

  const NetworkView = () => (
    <div className="relative h-[600px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-8">
          {filteredLayers.map((layer, index) => {
            const IconComponent = layer.icon;
            const isSelected = selectedLayer === layer.id;
            
            return (
              <motion.div
                key={layer.id}
                className={`relative cursor-pointer transition-all duration-300 ${
                  isSelected ? 'scale-110 z-10' : 'hover:scale-105'
                }`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedLayer(layer.id)}
                style={{
                  gridColumn: (layer.id - 1) % 4 + 1,
                  gridRow: Math.floor((layer.id - 1) / 4) + 1
                }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${layer.color} rounded-2xl flex items-center justify-center shadow-lg ${isSelected ? 'ring-4 ring-purple-400' : ''}`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs font-semibold text-slate-700 bg-white px-2 py-1 rounded shadow">
                    {layer.title}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {selectedLayer && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-8 left-8 right-8 bg-white rounded-xl p-6 shadow-xl"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {architectureLayers.find(l => l.id === selectedLayer)?.title}
              </h3>
              <p className="text-slate-600">
                {architectureLayers.find(l => l.id === selectedLayer)?.description}
              </p>
            </div>
            <button
              onClick={() => setSelectedLayer(null)}
              className="text-slate-400 hover:text-slate-600"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900" />
          
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
                Explore Architecture
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-12 leading-relaxed font-serif italic max-w-3xl mx-auto">
                Dive deep into the Praxis 12-Layer Architecture. Discover how each component works together 
                to create a complete institutional digital asset platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Controls Section */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search architecture layers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Mode */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                    viewMode === "grid"
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Layers size={16} />
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("network")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                    viewMode === "network"
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Network size={16} />
                  Network
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {viewMode === "grid" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredLayers.map((layer, index) => (
                  <LayerCard key={layer.id} layer={layer} index={index} />
                ))}
              </div>
            ) : (
              <NetworkView />
            )}

            {filteredLayers.length === 0 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={32} className="text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">No layers found</h3>
                <p className="text-slate-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-purple-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-6 text-white">
                Architecture Overview
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Understanding the interconnected nature of the Praxis platform
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Cpu size={24} className="text-purple-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Core Processing</h3>
                <p className="text-white/70 leading-relaxed">
                  Tokenisation and Settlement layers form the core processing engine of the platform, 
                  handling all asset conversions and transfers.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Shield size={24} className="text-blue-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Security & Compliance</h3>
                <p className="text-white/70 leading-relaxed">
                  Multiple security and compliance layers ensure institutional-grade protection 
                  and regulatory adherence across all operations.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Globe size={24} className="text-green-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Integration & Interface</h3>
                <p className="text-white/70 leading-relaxed">
                  Seamless integration with existing systems and intuitive user interfaces 
                  make the platform accessible to institutional users.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ExploreArchitecture;

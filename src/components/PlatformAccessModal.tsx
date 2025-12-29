import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ArrowRight, CheckCircle, Clock, Users, Zap, Shield, Star } from "lucide-react";
import LoadingSpinner from "./LoadingSpinner";
import LoadingButton from "./LoadingButton";

interface PlatformAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PlatformAccessModal = ({ isOpen, onClose }: PlatformAccessModalProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    useCase: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      // Reset form after a delay to allow close animation
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          role: "",
          useCase: ""
        });
      }, 300);
    }
  };

  const benefits = [
    { icon: Shield, text: "Institutional-grade security" },
    { icon: Zap, text: "Lightning-fast settlements" },
    { icon: Users, text: "Expert support team" },
    { icon: Star, text: "Early access features" }
  ];

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl mx-auto pt-8 px-6 pb-6"
            onClick={(e) => e.stopPropagation()}
          >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-slate-100 via-gray-100 to-slate-100 border-b border-black p-8 text-black">
            <button
              onClick={handleClose}
              disabled={isSubmitting}
              className="absolute top-4 right-4 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/30 transition-colors disabled:opacity-50"
            >
              <X size={20} className="text-white" />
            </button>

            <div className="max-w-lg">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 bg-black/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6"
              >
                <Zap size={32} className="text-white" />
              </motion.div>

              <h2 className="text-3xl font-bold mb-4">
                {isSubmitted ? "You're on the List!" : "Get Early Access"}
              </h2>
              <p className="text-black/70 text-lg leading-relaxed">
                {isSubmitted 
                  ? "Thank you for joining our waitlist. We'll be in touch soon with exclusive access to Praxis."
                  : "Join the waitlist for early access to the institutional digital asset platform."
                }
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-8">
            {!isSubmitted ? (
              <>
                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <IconComponent size={20} className="text-purple-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-slate-700">{benefit.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent transition-all"
                      placeholder="Acme Corporation"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Role *
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select your role</option>
                      <option value="executive">C-Level Executive</option>
                      <option value="director">Director/VP</option>
                      <option value="manager">Manager</option>
                      <option value="analyst">Analyst/Associate</option>
                      <option value="technical">Technical Lead</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Primary Use Case *
                    </label>
                    <select
                      name="useCase"
                      value={formData.useCase}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select use case</option>
                      <option value="asset-management">Digital Asset Management</option>
                      <option value="settlement">Payment & Settlement</option>
                      <option value="compliance">Regulatory Compliance</option>
                      <option value="tokenization">Asset Tokenization</option>
                      <option value="integration">System Integration</option>
                      <option value="exploration">Exploration & Research</option>
                    </select>
                  </div>

                  {/* Waitlist Info */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Clock size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">Early Access Program</h4>
                        <p className="text-sm text-blue-700 leading-relaxed">
                          Join 500+ institutions waiting for access. Get priority onboarding and exclusive features.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <LoadingButton
                    type="submit"
                    isLoading={isSubmitting}
                    loadingText="Joining Waitlist..."
                    variant="secondary"
                    size="md"
                    spinnerColor="black"
                    className="w-full"
                  >
                    Join Waitlist
                    <ArrowRight size={20} />
                  </LoadingButton>
                </form>
              </>
            ) : (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8 px-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle size={40} className="text-green-600" />
                </motion.div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Welcome to the Waitlist!
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  You're now #{Math.floor(Math.random() * 500) + 1} on the list. 
                  We'll send you exclusive updates and early access opportunities.
                </p>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-purple-900 mb-2">What's Next?</h4>
                  <ul className="text-sm text-purple-700 space-y-1 text-left">
                    <li>• Confirmation email sent to {formData.email}</li>
                    <li>• Priority access to platform demos</li>
                    <li>• Exclusive webinar invitations</li>
                    <li>• Early feature previews</li>
                  </ul>
                </div>

                <LoadingButton
                  onClick={handleClose}
                  variant="secondary"
                  size="md"
                  spinnerColor="black"
                >
                  Got it, Thanks!
                </LoadingButton>
              </motion.div>
            )}
          </div>
        </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PlatformAccessModal;

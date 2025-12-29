import { Variants } from "framer-motion";

// Standard animation variants for consistent motion across the app
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

export const slideUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Modal animations
export const modalOverlay = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

export const modalContent = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 20 },
  transition: { duration: 0.3, ease: "easeOut" }
};

// Card animations
export const cardHover = {
  hover: { 
    scale: 1.05, 
    y: -4,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  tap: { scale: 0.98 }
};

export const cardEnter = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Button animations
export const buttonHover = {
  hover: { 
    scale: 1.05, 
    y: -2,
    transition: { duration: 0.3 }
  },
  tap: { scale: 0.98 }
};

// Hero section animations
export const heroTitle = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.1 }
};

export const heroSubtitle = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.2 }
};

export const heroButtons = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.3 }
};

// Section animations
export const sectionTitle = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const sectionContent = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.2 }
};

// Utility functions for common animation patterns
export const createStaggeredAnimation = (delay: number = 0.1) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: delay
    }
  }
});

export const createFadeInAnimation = (
  from: 'up' | 'down' | 'left' | 'right' = 'up',
  distance: number = 20
) => {
  const initialOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: -distance },
    right: { x: distance }
  };

  return {
    initial: { opacity: 0, ...initialOffset[from] },
    animate: { opacity: 1, y: 0, x: 0 },
    transition: { duration: 0.7 }
  };
};

// Responsive animation delays
export const getResponsiveDelay = (baseDelay: number, viewport: 'mobile' | 'tablet' | 'desktop') => {
  const multipliers = {
    mobile: 0.8,
    tablet: 1,
    desktop: 1.2
  };
  return baseDelay * multipliers[viewport];
};

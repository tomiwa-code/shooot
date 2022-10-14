export const floatNavFadeInUp = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      ease: "circOut",
    },
  },
};

export const slideAcross = {
  animate: {
    left: ["0%", "0%", "100%"],
    width: ["0%", "100%", "0%"],
    transition: {
      ease: "easeInOut",
      delay: 0.7,
    },
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: (custom) => ({
    opacity: 1,
    transition: {
      delay: custom * 1,
    },
  }),
};

export const fadeInUpDown = (down) => {
  return {
    initial: {
      y: down === "down" ? -60 : 10,
      opacity: 0,
    },
    animate: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        delay: custom * 1,
      },
    }),
  };
};

export const navVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      ease: "easeOut",
    },
  },
};

export const navWhileHover = {
  increase: {
    scale: 1.3,
  },
};

export const heroContainer = {
  initial: {},
  animate: {},
};

export const heroImages = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: custom * 1,
      stiffness: 120,
      duration: 1,
    },
  }),
};

export const bounce = {
  animate: (custom) => ({
    y: [10, 0, 10],
    transition: {
      duration: custom * 1,
      ease: "easeInOut",
      repeat: Infinity,
    },
  }),
};

export const whileInView = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      delay: custom * 1,
    },
  }),
};

export const rotateLayer = {
  animate: {
    rotate: [10, 90, 0, 10],
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const fadeInLeftRight = (right) => {
  return {
    initial: {
      x: right === "right" ? 100 : -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 5,
        type: "spring",
        stiffness: 120,
        delay: 0.3
      },
    },
  };
};

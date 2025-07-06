/**
 * motionPresets
 * - framer-motion을 활용한 애니메이션 프리셋 및 헬퍼 함수 모음
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
};

export const defaultTransition = { duration: 0.5 };

/**
 * getFadeIn
 * @param {number} delay - 애니메이션 딜레이
 * @returns {Object} framer-motion props
 */
export const getFadeIn = (delay = 0) => ({
  variants: fadeIn,
  initial: "initial",
  animate: "animate",
  transition: { ...defaultTransition, delay },
});

/**
 * getFadeInUp
 * @param {number} delay - 애니메이션 딜레이
 * @returns {Object} framer-motion props
 */
export const getFadeInUp = (delay = 0) => ({
  variants: fadeInUp,
  initial: "initial",
  animate: "animate",
  exit: "exit",
  transition: { ...defaultTransition, delay },
});

/**
 * getFadeInLeft
 * @param {number} delay - 애니메이션 딜레이
 * @returns {Object} framer-motion props
 */
export const getFadeInLeft = (delay = 0) => ({
  variants: fadeInLeft,
  initial: "initial",
  animate: "animate",
  transition: { ...defaultTransition, delay },
});

/**
 * getFadeInRight
 * @param {number} delay - 애니메이션 딜레이
 * @returns {Object} framer-motion props
 */
export const getFadeInRight = (delay = 0) => ({
  variants: fadeInRight,
  initial: "initial",
  animate: "animate",
  transition: { ...defaultTransition, delay },
});

/**
 * getScaleIn
 * @param {number} delay - 애니메이션 딜레이
 * @returns {Object} framer-motion props
 */
export const getScaleIn = (delay = 0) => ({
  variants: scaleIn,
  initial: "initial",
  animate: "animate",
  transition: { ...defaultTransition, delay },
});

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.5, ease: 'easeIn' },
  },
};

export const fadeInLeftToRight = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'linear' },
  },
};

export const fadeInRightToLeft = {
  hidden: { opacity: 0, x: 260 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'linear' },
  },
};

export const fadeInTopToBottom = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'linear' },
  },
};

export const fadeInBottomToTop = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'linear' },
  },
};

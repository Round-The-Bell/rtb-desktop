// src/components/AnimatedIcons.tsx
import { motion } from 'framer-motion';

export const AnimatedPaintBrush = () => {
  return (
    <motion.svg
      width="60"
      height="60"
      viewBox="0 0 100 100"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M70 30 Q70 10, 50 10 Q30 10, 30 30 L30 60 Q30 70, 40 70 L60 70 Q70 70, 70 60 Z"
        fill="currentColor"
        variants={{
          hidden: { pathLength: 0, fill: "rgba(59, 130, 246, 0)" },
          visible: {
            pathLength: 1,
            fill: "rgba(59, 130, 246, 1)",
            transition: {
              pathLength: { duration: 2, ease: "easeInOut" },
              fill: { duration: 1, delay: 1 }
            }
          }
        }}
      />
      <motion.rect
        x="45"
        y="70"
        width="10"
        height="20"
        fill="currentColor"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      />
      {/* Paint drips */}
      <motion.circle
        cx="50"
        cy="95"
        r="3"
        fill="currentColor"
        initial={{ scale: 0, y: -10 }}
        animate={{ scale: [0, 1, 0], y: [0, 10, 20] }}
        transition={{
          duration: 2,
          delay: 2,
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
    </motion.svg>
  );
};

export const AnimatedBell = () => {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      animate={{
        rotate: [-10, 10, -10],
      }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut"
      }}
    >
      <path d="M12 2C10.895 2 10 2.895 10 4C10 4.276 10.074 4.533 10.196 4.76C7.605 5.534 5.71 7.932 5.71 10.81V16.19L4 18V19H20V18L18.29 16.19V10.81C18.29 7.932 16.395 5.534 13.804 4.76C13.926 4.533 14 4.276 14 4C14 2.895 13.105 2 12 2Z" />
      <motion.path
        d="M12 22C13.105 22 14 21.105 14 20H10C10 21.105 10.895 22 12 22Z"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
      />
    </motion.svg>
  );
};
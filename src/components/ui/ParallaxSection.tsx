'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const ParallaxSection = ({ children, className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default ParallaxSection; 
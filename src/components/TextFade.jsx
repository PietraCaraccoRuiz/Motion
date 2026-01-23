
/* eslint-disable no-unused-vars */
'use client';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export function TextFade({
  direction,
  children,
  className = '',
  duration = 0.6,
  delay = 0,
  delayChildren = 0,
  staggerChildren = 0.1,
}) {
  const FADE_DOWN = {
    show: {
      opacity: 1, 
      y: 0, 
      transition: {
        duration,
        delay,
        ease: "easeOut"
      },
    },
    hidden: { opacity: 0, y: direction === 'down' ? -18 : 18 },
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-50px 0px -50px 0px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_DOWN}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}
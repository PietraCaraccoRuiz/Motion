import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export function WordFade({
  direction = 'up',
  children,
  className = '',
  duration = 0.6,
  delay = 0,
  delayChildren = 0,
  staggerChildren = 0.08,
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });

  const item = {
    hidden: {
      opacity: 0,
      y: direction === 'down' ? -18 : 18,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: 'easeOut',
      },
    },
  };

  // 🔥 função que quebra string em palavras
  const splitWords = (text) =>
    text.split(' ').map((word, i) => (
      <motion.span key={i} variants={item} className="inline-block mr-2">
        {word}
      </motion.span>
    ));

  // 🔥 função que processa cada filho
  const processChild = (child, key) => {
    if (typeof child === 'string') {
      return splitWords(child);
    } else if (React.isValidElement(child)) {
      // Se o elemento tem filhos que são texto, processa recursivamente
      const childProps = {
        ...child.props,
        children:
          typeof child.props.children === 'string'
            ? splitWords(child.props.children)
            : React.Children.map(child.props.children, (c, i) =>
                processChild(c, i)
              ),
      };
      return (
        <motion.div key={key} variants={item} className="inline-block">
          {React.cloneElement(child, childProps)}
        </motion.div>
      );
    }
    return null;
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={{
        show: {
          transition: {
            delay,
            delayChildren,
            staggerChildren,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child, index) =>
        processChild(child, index)
      )}
    </motion.div>
  );
}

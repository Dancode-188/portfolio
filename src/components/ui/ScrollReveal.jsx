import { motion } from 'framer-motion';

const ScrollReveal = ({ children, width = "100%" }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
import { motion } from "motion/react";
import { createPortal } from "react-dom";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.3 }}
        className="backdrop"
        onClick={onClose}
      />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 30, transition: { duration: 0.3 } },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal"),
  );
}

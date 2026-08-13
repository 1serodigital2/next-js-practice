import { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

const useAccordionContext = () => {
  const context = useContext();
  if (!context) {
    throw new Error(
      "Accordion-related components must be wrapped with <Accordion>",
    );
  }
  return context;
};

const Accordion = ({ children, className }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const openItem = (id) => {
    setOpenItemId(id);
  };

  const closeItem = () => {
    setOpenItemId(null);
  };

  const contextValue = {
    openItemId,
    openItem,
    closeItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};

export default Accordion;

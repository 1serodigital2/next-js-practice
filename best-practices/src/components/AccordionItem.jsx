import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

export const useAccordionItemContext = () => {
  const ctxt = useContext(AccordionItemContext);
  if (!ctxt) {
    throw new Error(
      "Accordion-Item related components must be wrapped with <Accordion.Item>",
    );
  }
  return ctxt;
};

const AccordionItem = ({ id, children, className }) => {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;

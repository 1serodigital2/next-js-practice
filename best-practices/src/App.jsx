import Accordion from "./components/Accordion";
import AccordionItem from "./components/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h1>Why work with us?</h1>
        <Accordion className="accordion">
          <AccordionItem
            className="accordion-item"
            title="We are working with local guides"
          >
            <article>
              <p>You cannot go wrong with us.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
                aliquid?
              </p>
            </article>
          </AccordionItem>
          <AccordionItem
            className="accordion-item"
            title="We are working with local guides efedfds"
          >
            <article>
              <p>You cannot go wrong with us sdfsdfsd.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
                aliquid?
              </p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;

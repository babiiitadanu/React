import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";

const questions = [
  {
    question: "What is the cost of an online course ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo hendrerit interdum. Pellentesque id elit ac lorem feugiat congue. Nam odio leo, viverra vitae libero quis, porttitor egestas ex.",
  },
  {
    question: "Do I need to visit any physical location?",
    answer:
      "No. You can attend the course online from a convenient location with an internet connection.",
  },
  {
    question: "What are the technology requirements?",
    answer:
      "You need a computer, tablet, or smartphone with a stable internet connection and an updated web browser.",
  },
  {
    question: "How can I ask questions or clear doubts?",
    answer:
      "You can ask questions through the course discussion area or contact your instructor.",
  },
];

function CustomToggle({ children, eventKey }) {
  const { activeEventKey } = useContext(AccordionContext);
  const toggle = useAccordionButton(eventKey);

  const isOpen = Array.isArray(activeEventKey)
    ? activeEventKey.includes(eventKey)
    : activeEventKey === eventKey;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-expanded={isOpen}
      className={`btn w-100 d-flex justify-content-between align-items-center text-start rounded-0 border-0 px-0 py-3 fw-bold fs-5 ${
        isOpen ? "text-primary" : "text-dark"
      }`}
    >
      <span>{children}</span>

      <span
        className={`rounded-circle border d-inline-flex justify-content-center align-items-center flex-shrink-0 ms-3 ${
          isOpen ? "border-primary text-primary" : "border-dark text-dark"
        }`}
        style={{ width: "28px", height: "28px", lineHeight: 1 }}
      >
        {isOpen ? "−" : "+"}
      </span>
    </button>
  );
}

function RBAccordion() {
  return (
    <div className="container-fluid bg-white px-4 py-3">
      <div className="row">
        <div className="col-12 col-lg-10">
          <Accordion defaultActiveKey="0" alwaysOpen flush>
            {questions.map((item, index) => (
              <div className="border-bottom" key={item.question}>
                <CustomToggle eventKey={String(index)}>
                  {item.question}
                </CustomToggle>

                <AccordionContext.Consumer>
                  {({ activeEventKey }) => {
                    const isOpen = Array.isArray(activeEventKey)
                      ? activeEventKey.includes(String(index))
                      : activeEventKey === String(index);

                    return (
                      <Collapse in={isOpen}>
                        <div>
                          <p className="fs-5 text-dark pt-0 pb-3 mb-0">
                            {item.answer}
                          </p>
                        </div>
                      </Collapse>
                    );
                  }}
                </AccordionContext.Consumer>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default RBAccordion;
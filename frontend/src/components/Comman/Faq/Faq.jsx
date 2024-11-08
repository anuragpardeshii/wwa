import React from "react";
import "./Faq.css";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import { FaqQuestions } from "../../../assets/lists/Faq";

export default function App() {
  return (
    <MDBContainer className="mb-5">
        <h1 className="text-center pb-4 mb-4">FAQs</h1>
      <MDBAccordion alwaysOpen initialActive={1}>
        {FaqQuestions.map((faq) => (
          <MDBAccordionItem collapseId={faq.id} headerTitle={faq.question} key={faq.id}>
            {faq.answer.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </MDBAccordionItem>
        ))}
      </MDBAccordion>
    </MDBContainer>
  );
}

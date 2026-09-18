export interface AccordionItem { id: string; question: string; answer: string; }

export default function Accordion({ items }: { items: AccordionItem[] }) {
  return <div className="accordion-list">{items.map((item, index) => <details key={item.id} id={`faq-${item.id}`} className="faq-details"><summary><span className="faq-index">0{index + 1}</span><span>{item.question}</span><b aria-hidden="true">+</b></summary><div className="faq-answer">{item.answer}</div></details>)}</div>;
}

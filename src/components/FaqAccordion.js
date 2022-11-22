import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import './styles/accordionStyles.css';

const FaqAccordion = ({ patients }) => {
  return (
    <Accordion allowZeroExpanded>
      {patients.faq.info.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionItemHeading>
            <AccordionItemButton>{item.question}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel
            dangerouslySetInnerHTML={{
              __html: item.answer,
            }}
          ></AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;

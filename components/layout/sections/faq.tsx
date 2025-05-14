import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What grades do you offer tuition for?",
    answer:
      "We provide tuition for students from Grade 4 to Grade 12 across various boards.",
    value: "item-1",
  },
  {
    question: "What subjects are covered in your tuition programs?",
    answer:
      "We offer tuition in core subjects like Mathematics, Science, English, Social Science, and optional subjects based on the grade and curriculum.",
    value: "item-2",
  },
  {
    question: "Are your tutors qualified?",
    answer:
      "Yes, all our tutors are well-qualified, experienced, and passionate about helping students succeed academically.",
    value: "item-3",
  },
  {
    question: "Do you offer online classes?",
    answer:
      "Yes, we offer both online and offline classes depending on the student’s preference and availability.",
    value: "item-4",
  },
  {
    question: "What is your fee structure?",
    answer:
      "Our fees vary depending on the grade and subjects chosen. Please contact us directly for a detailed fee structure customized to your needs.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQs
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions About Our Tuition
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

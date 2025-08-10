// src/components/FAQ.tsx
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';
import { motion } from 'framer-motion';
import type { FAQ as FAQModel } from '../types';

function FAQ() {
  const faqs: FAQModel[] = [
    {
      id: '1',
      question: 'What are your service areas?',
      answer: 'We proudly serve Raleigh and the surrounding areas in North Carolina. Contact us to see if we service your specific location.'
    },
    {
      id: '2',
      question: 'How do you determine pricing for your services?',
      answer: 'Our pricing is based on several factors including project size, materials needed, and complexity. We provide free estimates and transparent pricing with no hidden fees.'
    },
    {
      id: '3',
      question: 'How do I get in contact with you?',
      answer: 'You can reach us by calling ‪(919) 275-0763‬ or by filling out our estimate form. We typically respond within 24 hours.'
    },
    {
      id: '4',
      question: 'How long does a typical project take?',
      answer: 'Project duration varies based on scope and size. Most residential painting projects take 2-5 days, while larger renovations may take several weeks. We\'ll provide a timeline with your estimate.'
    },
    {
      id: '5',
      question: 'Do you offer warranties on your work?',
      answer: 'Yes! We stand behind our work with a comprehensive warranty. The specific terms depend on the type of service provided.'
    }
  ];

  const createSectionHeader = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
          Find answers to common questions about our services
        </p>
      </motion.div>
    );
  };

  const createAccordionPanel = (faq: FAQModel) => (
    <AccordionPanel key={faq.id}>
      <AccordionTitle>
        {faq.question}
      </AccordionTitle>
      <AccordionContent>
        <p className="text-neutral-gray">
          {faq.answer}
        </p>
      </AccordionContent>
    </AccordionPanel>
  );

  const createFAQItems = () => {
    return (
      <Accordion collapseAll>
        {faqs.map(faq => createAccordionPanel(faq))}
      </Accordion>
    );
  };

  return (
    <section id="faq" className="section bg-white">
      <div className="container mx-auto px-4">
        {createSectionHeader()}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {createFAQItems()}
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
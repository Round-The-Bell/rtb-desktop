// src/components/Specialties.tsx
import { motion } from 'framer-motion';
import { Card } from 'flowbite-react';
import { Specialty } from '../types';

function Specialties() {
  const specialties: Specialty[] = [
    {
      id: '1',
      title: 'Quality Work',
      description: 'We ensure top-quality results for every project we undertake, exceeding customer expectations.',
      icon: '⭐'
    },
    {
      id: '2',
      title: 'Customer Service',
      description: 'Our priority is to make our customers feel valued by providing exceptional service and communication.',
      icon: '🤝'
    },
    {
      id: '3',
      title: 'Integrity',
      description: 'We operate with great integrity, ensuring honesty and transparency in all our interactions.',
      icon: '✨'
    },
    {
      id: '4',
      title: 'Modern Approach',
      description: 'With a modern-day mindset, we bring innovation and efficiency to every project we handle.',
      icon: '🚀'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const createSpecialtyCards = () => {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {specialties.map((specialty) => (
          <motion.div
            key={specialty.id}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">{specialty.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {specialty.title}
                </h3>
                <p className="text-gray-600">
                  {specialty.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  const createSectionHeader = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Specialties
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          What sets us apart from the competition
        </p>
      </motion.div>
    );
  };

  return (
    <section id="specialties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {createSectionHeader()}
        {createSpecialtyCards()}
      </div>
    </section>
  );
}

export default Specialties;
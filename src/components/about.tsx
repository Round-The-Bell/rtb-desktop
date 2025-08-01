// src/components/About.tsx
import { motion } from 'framer-motion';
import type { CompanyInfo } from '@/types';
import { 
  HiOutlineSparkles, 
  HiOutlineShieldCheck, 
  HiOutlineClock,
  HiOutlineUserGroup 
} from 'react-icons/hi2';

interface AboutProps {
  companyInfo: CompanyInfo;
}

function About({ companyInfo }: AboutProps) {
  const features = [
    {
      icon: <HiOutlineShieldCheck className="w-8 h-8" />,
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your peace of mind"
    },
    {
      icon: <HiOutlineClock className="w-8 h-8" />,
      title: `${companyInfo.yearsOfExperience}+ Years Experience`,
      description: "Trusted expertise in painting and renovations"
    },
    {
      icon: <HiOutlineUserGroup className="w-8 h-8" />,
      title: "Family Owned",
      description: "Local business serving our community with pride"
    },
    {
      icon: <HiOutlineSparkles className="w-8 h-8" />,
      title: "Quality Guaranteed",
      description: "We stand behind every project we complete"
    }
  ];

  const createFeatureCards = () => {
    return features.map((feature, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white p-6 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 border border-neutral-light-gray"
      >
        <div className="text-accent mb-4">{feature.icon}</div>
        <h3 className="text-xl font-semibold text-primary-dark mb-2">{feature.title}</h3>
        <p className="text-neutral-gray">{feature.description}</p>
      </motion.div>
    ));
  };

  const createAboutContent = () => {
    return (
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-6">
            Your Vision, Our Expertise
          </h2>
          <p className="text-lg text-neutral-gray mb-6">
            {companyInfo.name} is a trusted and reputable construction and painting 
            company based in {companyInfo.address.city}, {companyInfo.address.state}. 
            We take pride in transforming spaces and bringing your vision to life.
          </p>
          <p className="text-lg text-neutral-gray mb-6">
            With over {companyInfo.yearsOfExperience} years of experience, we specialize 
            in both residential and commercial projects. Our dedicated team is committed 
            to delivering exceptional results with attention to detail and superior 
            craftsmanship.
          </p>
          <p className="text-lg text-neutral-gray mb-8">
            From a fresh coat of paint to complete renovations, we approach every project 
            with professionalism and expertise. Our goal is to exceed your expectations 
            while staying on time and within budget.
          </p>
          <motion.a
            href="#estimate"
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Decorative background element */}
          <div className="absolute inset-0 gradient-accent rounded-3xl transform rotate-6 opacity-10"></div>
          
          {/* Feature grid */}
          <div className="relative grid grid-cols-2 gap-6">
            {createFeatureCards()}
          </div>
        </motion.div>
      </div>
    );
  };

  const createStats = () => {
    const stats = [
      { number: "500+", label: "Projects Completed" },
      { number: "98%", label: "Customer Satisfaction" },
      { number: "24hr", label: "Response Time" },
      { number: companyInfo.yearsOfExperience.toString(), label: "Years in Business" }
    ];

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              {stat.number}
            </div>
            <div className="text-neutral-gray">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-neutral-off-white to-white">
      <div className="container mx-auto px-4">
        {createAboutContent()}
        {createStats()}
      </div>
    </section>
  );
}

export default About;
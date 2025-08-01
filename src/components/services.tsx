// src/components/Services.tsx
import { motion } from 'framer-motion';
import { 
  HiOutlinePaintBrush,
  HiOutlineHome,
  HiOutlineBuildingOffice2,
  HiOutlineWrenchScrewdriver,
  HiOutlineSparkles,
  HiOutlineCube,
  HiOutlineSquares2X2,
  HiOutlineBuildingOffice
} from 'react-icons/hi2';

interface Service {
  id: string;
  name: string;
  icon: React.ReactNode;
  value: string; // for form pre-fill
}
interface ServicesProps {
  onServiceSelect: (serviceId: string) => void;
}

export default function Services({ onServiceSelect }: ServicesProps) {
  const services: Service[] = [
    { 
      id: '1', 
      name: 'Interior Painting', 
      icon: <HiOutlinePaintBrush className="w-12 h-12" />, 
      value: 'interior-painting' 
    },
    { 
      id: '2', 
      name: 'Exterior Painting', 
      icon: <HiOutlineHome className="w-12 h-12" />, 
      value: 'exterior-painting' 
    },
    { 
      id: '3', 
      name: 'Renovations', 
      icon: <HiOutlineWrenchScrewdriver className="w-12 h-12" />, 
      value: 'renovations' 
    },
    { 
      id: '4', 
      name: 'Drywall Repair', 
      icon: <HiOutlineCube className="w-12 h-12" />, 
      value: 'drywall' 
    },
    { 
      id: '5', 
      name: 'Commercial Painting', 
      icon: <HiOutlineBuildingOffice2 className="w-12 h-12" />, 
      value: 'commercial' 
    },
    { 
      id: '6', 
      name: 'Residential Painting', 
      icon: <HiOutlineSparkles className="w-12 h-12" />, 
      value: 'residential' 
    },
    { 
      id: '7', 
      name: 'Interior Remodeling', 
      icon: <HiOutlineSquares2X2 className="w-12 h-12" />, 
      value: 'remodeling' 
    },
    { 
      id: '8', 
      name: 'Flooring', 
      icon: <HiOutlineBuildingOffice className="w-12 h-12" />, 
      value: 'flooring' 
    },
  ];

const handleServiceClick = (serviceId: string) => {
    // Update parent state
    onServiceSelect(serviceId);
    
    // Scroll to form
    const element = document.querySelector('#estimate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const createServiceItems = () => {
    return services.map((service, index) => (
      <motion.div
        key={service.id}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => handleServiceClick(service.value)}
        className="bg-white p-8 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden border border-neutral-light-gray hover:border-accent"
      >
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          <div className="flex justify-center mb-4 text-accent group-hover:text-accent-dark transition-colors duration-300">
            <div className="group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
          </div>
          <h3 className="text-lg font-semibold text-center text-primary-dark group-hover:text-accent-dark transition-colors duration-300">
            {service.name}
          </h3>
          <p className="text-sm text-center text-accent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Get Estimate →
          </p>
        </div>
      </motion.div>
    ));
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
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
          Services Offered
        </h2>
        <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
          Comprehensive painting, flooring, and renovation services for all your needs
        </p>
      </motion.div>
    );
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-neutral-off-white">
      <div className="container mx-auto px-4">
        {createSectionHeader()}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-0">
          {createServiceItems()}
        </div>
      </div>
    </section>
  );
}
 
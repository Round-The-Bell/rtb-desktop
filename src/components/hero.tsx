// src/components/Hero.tsx
import type { HeroProps } from '@/types';
import { motion } from 'framer-motion';

export default function Hero({ companyInfo }: HeroProps) {
  // Modern, bright construction image
  const heroImage = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=800&fit=crop&q=80';
  
  const createHeroContent = () => (
    <div className="relative z-10 text-center max-w-screen-xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-block mb-6"
      >
        <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
          🏆 Trusted by 50+ General Contractors
        </span>
      </motion.div>
      
      <motion.h1 
        className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {companyInfo.name}
      </motion.h1>
      
      <motion.p 
        className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {companyInfo.tagline}
      </motion.p>

      <motion.p
        className="text-lg md:text-xl text-white/80 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Professional Painting & Construction Services in {companyInfo.address.city}, {companyInfo.address.state}
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <a 
          href={`tel:${companyInfo.phone}`} 
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-accent rounded-lg hover:bg-accent-dark hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-t from-transparent via-transparent to-white"></span>
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
            />
          </svg>
          Call {companyInfo.phone}
        </a>
        
        <a 
          href="#estimate" 
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-dark transition-all duration-200 bg-white rounded-lg hover:bg-gray-50 hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-t from-transparent via-transparent to-gray-200"></span>
          Get Free Estimate →
        </a>
      </motion.div>

      {/* Trust indicators */}
      <motion.div 
        className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-3xl">⭐</span>
          <span className="text-sm">5.0 Google Rating</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-3xl">✅</span>
          <span className="text-sm">Licensed & Insured</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-3xl">🏠</span>
          <span className="text-sm">{companyInfo.yearsOfExperience}+ Years Experience</span>
        </div>
      </motion.div>
    </div>
  );

  const createBackgroundSection = () => (
    <>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-dark/90 via-primary-dark/80 to-accent-dark/70" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-coral/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
    </>
  );

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {createBackgroundSection()}
      {createHeroContent()}
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
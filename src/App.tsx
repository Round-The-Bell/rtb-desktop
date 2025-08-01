// src/App.tsx - Make sure header is visible
 import { useState } from 'react';
import About from './components/about';
import EstimateForm from './components/estimateForm';
import FAQ from './components/faq';
import Footer from './components/footer';
import GoogleReviews from './components/googleReview';
import Header from './components/header';
import Hero from './components/hero';
import Services from './components/services';
import Specialties from './components/specialties';
import { CompanyInfo } from './types';
 
function App() {
    const [selectedService, setSelectedService] = useState<string>('');

  const companyInfo: CompanyInfo = {
    name: 'Round The Bell Construction',
    tagline: 'Service that rings loud and clear',
    email:  'admin@roundthebell.com',
    phone: '(910) 759-9483',
    address: {
      city: 'Raleigh',
      state: 'NC',
      street: '421 Fayettevilee Street',
      zip: '27601'
    },
    yearsOfExperience: 8
  };

  return (
    <div className="min-h-screen bg-neutral-white">
      <Header companyInfo={companyInfo} />
      <main>
        <Hero companyInfo={companyInfo} />
        <Specialties />
      <Services onServiceSelect={setSelectedService} />
        <GoogleReviews />
        <About companyInfo={companyInfo} />
        <FAQ />
      <EstimateForm selectedService={selectedService} />
      </main>
      <Footer companyInfo={companyInfo} />
    </div>
  );
}

export default App;
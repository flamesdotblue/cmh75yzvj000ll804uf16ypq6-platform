import { useEffect } from 'react';
import Hero from './components/Hero';
import OverviewFeatures from './components/OverviewFeatures';
import BenefitsTestimonials from './components/BenefitsTestimonials';
import PricingCTAAndFooter from './components/PricingCTAAndFooter';

function App() {
  useEffect(() => {
    document.title = 'LabTasker — Laboratory Management System';
    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta(
      'description',
      'LabTasker is a comprehensive SaaS Laboratory Management System that streamlines research operations, project management, experiments, equipment, inventory, compliance, and collaboration.'
    );
    setMeta(
      'keywords',
      'Lab management software, Laboratory information management, LIMS, research project management, lab inventory, lab equipment, compliance, SOPs, experiments, analytics, SaaS'
    );
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white scroll-smooth">
      <Hero />
      <OverviewFeatures />
      <BenefitsTestimonials />
      <PricingCTAAndFooter />
    </div>
  );
}

export default App;

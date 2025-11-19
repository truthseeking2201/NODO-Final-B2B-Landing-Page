import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import CoreSystemModules from './components/sections/CoreSystemModules';
import AlertMonitoringSection from './components/sections/AlertMonitoringSection';
import UnifiedArchitectureSection from './components/sections/UnifiedArchitectureSection';
import SimpleDeploymentSection from './components/sections/SimpleDeploymentSection';
import BenchmarksSection from './components/sections/BenchmarksSection';
import PartnerWithNodoSection from './components/sections/PartnerWithNodoSection';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoreSystemModules />
        <AlertMonitoringSection />
        <UnifiedArchitectureSection />
        <SimpleDeploymentSection />
        <BenchmarksSection />
        <PartnerWithNodoSection />
      </main>
      <Footer />
    </>
  );
}

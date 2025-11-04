import DoxHero from '@/components/dox/DoxHero';
import DoxUSP from '@/components/dox/DoxUSP';
import DoxTeachers from '@/components/dox/DoxTeachers';
import DoxContent from '@/components/dox/DoxContent';
import DoxTarget from '@/components/dox/DoxTarget';
import DoxOffer from '@/components/dox/DoxOffer';
import DoxFooter from '@/components/dox/DoxFooter';

export default function Dox() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main>
        <DoxHero />
        <DoxUSP />
        <DoxTeachers />
        <DoxContent />
        <DoxTarget />
        <DoxOffer />
      </main>
      <DoxFooter />
    </div>
  );
}

import WaitlistHeader from '@/components/waitlist/WaitlistHeader';
import WaitlistHero from '@/components/waitlist/WaitlistHero';
import WaitlistBenefits from '@/components/waitlist/WaitlistBenefits';
import WaitlistUrgency from '@/components/waitlist/WaitlistUrgency';
import WaitlistAbout from '@/components/waitlist/WaitlistAbout';
import WaitlistForm from '@/components/waitlist/WaitlistForm';
import DoxFooter from '@/components/dox/DoxFooter';

export default function Waitlist() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <WaitlistHeader />
      <main>
        <WaitlistHero />
        <WaitlistBenefits />
        <WaitlistAbout />
        <WaitlistUrgency />
        <section className="py-16 md:py-20 bg-black" id="inscricao">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>
      <DoxFooter />
    </div>
  );
}

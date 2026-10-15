import Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';
import WhyChooseUs from '../components/WhyChooseUs';
import SpecialOffer from '../components/SpecialOffer';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import { destinations } from '../data/destinations';

function Home() {
  const popular = destinations.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <h2 className="section__title">Popular destinations</h2>
          <p className="section__intro">Places our travellers love most.</p>
          <div className="grid">
            {popular.map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <SpecialOffer />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default Home;
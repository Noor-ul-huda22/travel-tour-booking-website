import { Link } from 'react-router-dom';
import heroImg from '../assets/images/hero.jpg';

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__img"
        src={heroImg}
        alt="Turquoise lake surrounded by snowy mountains in northern Pakistan"
      />
      <div className="hero__overlay"></div>

      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">Discover the north, one valley at a time</h1>
          <p className="hero__text">
            Guided trips across mountains, beaches and historic cities, planned by local travel experts.
          </p>
          <div className="hero__actions">
            <Link to="/tours" className="btn btn--primary">Explore Tours</Link>
            <Link to="/booking" className="btn btn--light">Book a Trip</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
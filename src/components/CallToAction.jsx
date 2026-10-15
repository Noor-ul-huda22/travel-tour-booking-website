import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="section cta">
      <div className="container">
        <h2 className="section__title">Ready for your next journey?</h2>
        <p>Tell us where and when. We will take care of the rest.</p>
        <Link to="/booking" className="btn btn--primary">Book your trip</Link>
      </div>
    </section>
  );
}

export default CallToAction;
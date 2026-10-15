import { Link } from 'react-router-dom';

function SpecialOffer() {
  return (
    <section className="section">
      <div className="container">
        <div className="offer">
          <div>
            <span className="offer__badge">Autumn Offer</span>
            <h2>15% off Hunza and Skardu trips</h2>
            <p>Book before 30 November 2026 and enjoy golden-season valleys for less.</p>
          </div>
          <Link to="/booking" className="btn btn--light">Claim this offer</Link>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
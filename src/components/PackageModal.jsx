import { Link } from 'react-router-dom';

function PackageModal({ pkg, onClose }) {
  if (!pkg) return null; // nothing selected, nothing to show

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" aria-label="Close details" onClick={onClose}>
          ✕
        </button>

        <img src={pkg.image} alt={pkg.alt} />

        <div className="modal__body">
          <h2 id="modal-title">{pkg.title}</h2>
          <p className="card__price">
            Rs {pkg.price.toLocaleString()} per person · {pkg.days} days
          </p>

          <h3>Itinerary highlights</h3>
          <ul>
            {pkg.itinerary.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>

          <h3>What is included</h3>
          <ul>
            {pkg.inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Link to="/booking" className="btn btn--primary">Book Now</Link>
        </div>
      </div>
    </div>
  );
}

export default PackageModal;
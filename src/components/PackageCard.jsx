import { Link } from 'react-router-dom';

function PackageCard({ pkg, onViewDetails }) {
  return (
    <article className="card">
      <img className="card__img" src={pkg.image} alt={pkg.alt} loading="lazy" />
      <div className="card__body">
        <span className="card__tag">{pkg.category}</span>
        <h3>{pkg.title}</h3>

        <p className="card__row">
          <span>{pkg.days} days</span>
          <span>★ {pkg.rating}</span>
        </p>

        <p className="card__price">
          Rs {pkg.price.toLocaleString()} <small>per person</small>
        </p>

        <div className="card__actions">
          <button className="btn btn--outline" onClick={() => onViewDetails(pkg)}>
            View Details
          </button>
          <Link to="/booking" className="btn btn--primary">Book</Link>
        </div>
      </div>
    </article>
  );
}

export default PackageCard;
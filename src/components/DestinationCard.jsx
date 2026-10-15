import { Link } from 'react-router-dom';

function DestinationCard({ destination }) {
  const { name, region, category, image, alt, tagline } = destination;

  return (
    <article className="card">
      <img className="card__img" src={image} alt={alt} loading="lazy" />
      <div className="card__body">
        <span className="card__tag">{category}</span>
        <h3>{name}</h3>
        <p className="card__meta">{region}</p>
        <p>{tagline}</p>
        <div className="card__actions">
          <Link to="/booking" className="btn btn--outline">Plan this trip</Link>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
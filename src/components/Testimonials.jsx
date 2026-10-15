import { testimonials } from '../data/testimonials';

function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">What travellers say</h2>
        <p className="section__intro">Words from people who travelled with us.</p>

        <div className="grid">
          {testimonials.map((item) => (
            <article className="quote" key={item.id}>
              <p className="quote__stars" aria-label={`${item.rating} out of 5 stars`}>
                {'★'.repeat(item.rating)}
              </p>
              <p>{item.text}</p>
              <p className="quote__author">
                {item.name}
                <span>{item.city}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
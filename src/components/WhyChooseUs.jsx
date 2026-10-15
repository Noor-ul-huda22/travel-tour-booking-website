const points = [
  { id: 1, icon: '✓', title: 'Local experts', text: 'Guides born and raised in the regions you visit.' },
  { id: 2, icon: '★', title: 'Small groups', text: 'Never more than 12 travellers, so trips feel personal.' },
  { id: 3, icon: '₨', title: 'Clear pricing', text: 'What you see is what you pay. No hidden charges.' },
  { id: 4, icon: '☎', title: 'Support all trip', text: 'Our team is a phone call away, day and night.' },
];

function WhyChooseUs() {
  return (
    <section className="section why">
      <div className="container">
        <h2 className="section__title">Why travel with Safarnama</h2>
        <p className="section__intro">Four reasons our travellers keep coming back.</p>

        <div className="grid grid--4">
          {points.map((point) => (
            <article className="why__item" key={point.id}>
              <span className="why__icon" aria-hidden="true">{point.icon}</span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
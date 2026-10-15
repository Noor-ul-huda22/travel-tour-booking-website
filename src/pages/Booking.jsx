import BookingForm from '../components/BookingForm';

function Booking() {
  return (
    <section className="section container">
      <h1 className="section__title">Book or inquire</h1>
      <p className="section__intro">Fill in your details and we will reply within 24 hours.</p>

      <div className="booking">
        <BookingForm />

        <aside className="contact-card">
          <h2>Contact us</h2>
          <ul>
            <li>Email: hello@safarnama.example</li>
            <li>Phone: +92 300 0000000</li>
            <li>Office: 12 Mall Road, Lahore</li>
            <li>Hours: Mon to Sat, 9am to 6pm</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default Booking;
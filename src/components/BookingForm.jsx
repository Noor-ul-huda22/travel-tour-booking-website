import { useState } from 'react';
import { destinations } from '../data/destinations';

// the starting (empty) form
const emptyForm = {
  name: '',
  email: '',
  phone: '',
  destination: '',
  date: '',
  travellers: '1',
};

// checks every field and returns an object of error messages
function validate(values) {
  const errors = {};
  const today = new Date().toISOString().split('T')[0];

  if (values.name.trim().length < 3) {
    errors.name = 'Please enter your full name (at least 3 letters).';
  }
  if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Enter a valid email, like name@example.com.';
  }
  if (!/^[0-9+\s-]{10,15}$/.test(values.phone)) {
    errors.phone = 'Enter a valid phone number (10 to 15 digits).';
  }
  if (!values.destination) {
    errors.destination = 'Please choose a destination.';
  }
  if (!values.date) {
    errors.date = 'Please pick a travel date.';
  } else if (values.date < today) {
    errors.date = 'Travel date cannot be in the past.';
  }
  const count = Number(values.travellers);
  if (!Number.isInteger(count) || count < 1 || count > 20) {
    errors.travellers = 'Travellers must be a whole number from 1 to 20.';
  }

  return errors;
}

function BookingForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // one handler for all inputs: the input's name matches a key in values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate(values);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setValues(emptyForm);
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="success" role="status">
        <h2>Thank you, {values.name}!</h2>
        <p>
          Your inquiry for {values.destination} on {values.date} ({values.travellers} traveller/s)
          has been received. We will email you at {values.email} within 24 hours.
        </p>
        <button className="btn btn--outline" onClick={handleReset}>
          Make another inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className={`field ${errors.name ? 'field--error' : ''}`}>
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" value={values.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="form__row">
        <div className={`field ${errors.email ? 'field--error' : ''}`}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={values.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className={`field ${errors.phone ? 'field--error' : ''}`}>
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
      </div>

      <div className={`field ${errors.destination ? 'field--error' : ''}`}>
        <label htmlFor="destination">Destination</label>
        <select id="destination" name="destination" value={values.destination} onChange={handleChange}>
          <option value="">Select a destination</option>
          {destinations.map((d) => (
            <option key={d.id} value={d.name}>{d.name}</option>
          ))}
        </select>
        {errors.destination && <span className="error">{errors.destination}</span>}
      </div>

      <div className="form__row">
        <div className={`field ${errors.date ? 'field--error' : ''}`}>
          <label htmlFor="date">Travel date</label>
          <input id="date" name="date" type="date" value={values.date} onChange={handleChange} />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>

        <div className={`field ${errors.travellers ? 'field--error' : ''}`}>
          <label htmlFor="travellers">Number of travellers</label>
          <input id="travellers" name="travellers" type="number" min="1" max="20" value={values.travellers} onChange={handleChange} />
          {errors.travellers && <span className="error">{errors.travellers}</span>}
        </div>
      </div>

      <button type="submit" className="btn btn--primary">Send inquiry</button>
    </form>
  );
}

export default BookingForm;
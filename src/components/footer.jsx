import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <h3>Safarnama Tours</h3>
            <p>Thoughtful guided travel across Pakistan.</p>
            <p>hello@safarnama.example · +92 300 0000000</p>
            <div className="footer__social">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">FB</a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">YT</a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h3>Explore</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tours">Tours</Link></li>
              <li><Link to="/booking">Booking</Link></li>
            </ul>
          </nav>

          <div>
            <h3>Office</h3>
            <p>12 Mall Road, Lahore</p>
            <p>Mon to Sat, 9am to 6pm</p>
          </div>
        </div>
        <p className="footer__copy">© 2026 Safarnama Tours. A portfolio project. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
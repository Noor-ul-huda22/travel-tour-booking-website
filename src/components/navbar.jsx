import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  // false = menu closed, true = menu open
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
          Safarnama<span>Tours</span>
        </NavLink>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`navbar__links ${menuOpen ? 'is-open' : ''}`} aria-label="Main">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/tours" onClick={closeMenu}>Tours</NavLink>
          <NavLink to="/booking" onClick={closeMenu}>Booking</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// scrolls to the top every time the page (URL) changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
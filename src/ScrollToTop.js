import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init(); // Réinitialiser complètement AOS
  }, [pathname]);

  return null;
};

export default ScrollToTop;

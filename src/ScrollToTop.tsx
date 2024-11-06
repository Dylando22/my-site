// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * @Component ScrollToTop is used to scroll page to the top once navigated to from other pages
 * by the useNavigate() hook. 
 */
export default function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <></>
};
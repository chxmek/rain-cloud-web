"use client";

import { useEffect } from "react";

/**
 * Scrolls to top on initial page load and strips URL hash
 * so the browser doesn't auto-scroll to #contact on revisit.
 */
export default function ScrollToTop() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}

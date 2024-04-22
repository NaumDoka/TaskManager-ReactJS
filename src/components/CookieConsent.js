import React, { useState } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(
    Cookies.get("acceptedCookies")
  );

  const handleAcceptCookies = () => {
    Cookies.set("acceptedCookies", true);
    setAcceptedCookies(true);
  };

  const handleDeclineCookies = () => {
    Cookies.set("acceptedCookies", false);
    setAcceptedCookies(false);
  };

  const handleClosePopup = () => {
    Cookies.set("acceptedCookies", false);
    setAcceptedCookies(false);
  };

  if (acceptedCookies !== undefined && acceptedCookies !== "") {
    return null;
  }

  return (
    <div className="cookie-consent-container">
      <div className="cookie-consent">
        <p>
          We use cookies to enhance your browsing experience and provide
          personalized content. You can manage your cookie preferences by
          clicking "Cookie Settings.
        </p>
        <button onClick={handleAcceptCookies}>Accept</button>
        <button onClick={handleDeclineCookies}>Decline</button>
        <button className="cookie-close-button" onClick={handleClosePopup}>
          X
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;

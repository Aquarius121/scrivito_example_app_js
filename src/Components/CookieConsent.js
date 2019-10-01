import * as React from "react";
import * as Scrivito from "scrivito";
import ReactCookieConsent from "react-cookie-consent";
import cookieConsentIcon from "../assets/images/cookie_consent_icon.svg";

function CookieConsent() {
  const root = Scrivito.Obj.root();

  if (!root) {
    return null;
  }

  const cookieConsentLink = root.get("cookieConsentLink");

  if (!cookieConsentLink) {
    return null;
  }

  const cookieConsentLinkUrl = Scrivito.urlFor(cookieConsentLink);

  return (
    <ReactCookieConsent
      buttonText="accept"
      disableStyles
      containerClasses="cookie-box d-lg-flex d-sm-flex align-items-center"
      contentClasses="cookie-content d-flex align-items-center"
      buttonClasses="cookie-button btn btn-primary ml-auto"
    >
      <div>
        <div className="cookie-box-content">
          Barry og vores samarbejdspartnere bruger cookies til at måle trafik, markedsføre vores produkter og for at kunne optimere siden. <br/>
          Hvis du klikker videre på siden, accepterer du vores brug af cookies.<br/>
          Læs mere <a
            className="cookie-box-link"
            href={cookieConsentLinkUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            her
          </a> om vores brug af cookies, herunder hvordan du fravælger cookies igen.
        </div>
      </div>
    </ReactCookieConsent>
  );
}

export default Scrivito.connect(CookieConsent);

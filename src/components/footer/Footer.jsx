import React from "react";
import "./Footer.css";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Make a change, by being a part of Premanu Foundation
        </p>
        <p className="footer-subscription-text">
          Make a donation or intern with us
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Donate</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="white">
          <div>Head Office</div> <div>First Floor, divlot No. 2 Kh. No. 384/2,</div>{" "}
          <div>Ghitorni New Delhi</div>
          <div>South West Delhi DL 110030 IN</div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              PREMANU FOUNDATION
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">PREMANU FOUNDATION © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

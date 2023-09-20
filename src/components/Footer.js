import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { LibraryMusic } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Create custom playlists designed by you for you
        </p>
        <p className="footer-subscription-text">Start listening today</p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              MoodMusic&nbsp;
              <LibraryMusic color="white" fontSize="large" />
            </Link>
          </div>
          <small class="website-rights">MoodMusic © 2023</small>
          <div class="social-icons">
            <Link
              class="social-icon-link spotify"
              to="/"
              target="_blank"
              aria-label="Spotify"
            >
              <i class="fa-brands fa-spotify"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

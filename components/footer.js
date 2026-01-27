import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-root">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-column footer-brand-col">
                <h2 className="footer-brand-name">Dr. Jeremy E. Koenig</h2>
                <p className="section-content footer-description">
                  Exploring the intersection of genomics, systems thinking, and
                  human longevity. A platform for high-signal research and
                  intellectual inquiry.
                </p>
                <div className="footer-social-links">
                  <a
                    href="https://www.linkedin.com/in/dr-jeremy-koenig-551a4344/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      aria-label="LinkedIn"
                      className="footer-thq-footer-social-icon-elm1 footer-social-icon"
                    >
                      <svg
                        fill="none"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                        <circle r="2" cx="4" cy="4"></circle>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://twitter.com/drjeremykoenig"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      aria-label="Twitter"
                      className="footer-thq-footer-social-icon-elm2 footer-social-icon"
                    >
                      <svg
                        fill="none"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://www.youtube.com/@drjeremykoenig"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      aria-label="YouTube"
                      className="footer-thq-footer-social-icon-elm3 footer-social-icon"
                    >
                      <svg
                        fill="none"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                        <path d="m10 15l5-3l-5-3z"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/drjeremykoenig/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      aria-label="Instagram"
                      className="footer-thq-footer-social-icon-elm4 footer-social-icon"
                    >
                      <svg
                        fill="none"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                          width="20"
                          height="20"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-column">
                <h3 className="footer-heading">Explore</h3>
                <nav className="footer-nav">
                  <ul className="footer-list">
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>About</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>The DNA of Things Podcast</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>Notes &amp; Reflections</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>Speaking</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>Contact</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer-column footer-newsletter-col">
                <h3 className="footer-heading">The dna of things</h3>
                <p className="section-content footer-newsletter-text">
                  Monthly briefings on the biological and behavioral systems
                  shaping our collective future.
                </p>
                <form
                  id="newsletter-form"
                  action="/subscribe"
                  method="POST"
                  data-form-id="7af55a5c-d497-4e14-8a50-036d76a9348c"
                  className="footer-form"
                >
                  <div className="footer-input-wrapper">
                    <input
                      type="email"
                      id="thq_email_-N5S"
                      name="email"
                      required="true"
                      aria-label="Email address"
                      placeholder="Email address"
                      data-form-field-id="thq_email_-N5S"
                      className="footer-input"
                    />
                    <button
                      id="thq_button_XwHm"
                      name="button"
                      type="submit"
                      aria-label="Subscribe"
                      data-form-field-id="thq_button_XwHm"
                      className="footer-submit-btn"
                    >
                      <svg
                        fill="none"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                      </svg>
                    </button>
                  </div>
                  <div id="form-feedback" className="footer-feedback"></div>
                </form>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-legal">
                <span className="footer-copyright">
                  © 2026 Dr. Jeremy E. Koenig
                </span>
                <span aria-hidden="true" className="footer-divider">
                  |
                </span>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <span aria-hidden="true" className="footer-divider">
                  |
                </span>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Terms of Inquiry</span>
                  </div>
                </a>
              </div>
              <div className="footer-nickname">
                <span className="section-subtitle">“The DNA Guy”</span>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-newsletter">
(function(){
  const newsletterForm = document.getElementById("newsletter-form")
  const feedbackEl = document.getElementById("form-feedback")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      // We allow native submission but provide visual feedback
      // In a real production environment, this might be intercepted or handled by the action URL

      const emailInput = newsletterForm.querySelector('input[type="email"]')

      if (emailInput.checkValidity()) {
        feedbackEl.textContent = "Authenticating subscription..."
        feedbackEl.style.color = "var(--color-primary)"

        // Simulating the transition to success state after native POST would occur
        setTimeout(() => {
          feedbackEl.textContent = "Subscription confirmed. Welcome to the Axiom Report."
          feedbackEl.style.color = "#2ecc71" // Success green
          emailInput.value = ""
        }, 1000)
      }
    })

    // Real-time validation feedback
    const emailInput = newsletterForm.querySelector('input[type="email"]')
    emailInput.addEventListener("blur", function () {
      if (this.value && !this.checkValidity()) {
        feedbackEl.textContent = "Please provide a valid intellectual correspondence address."
        feedbackEl.style.color = "#e74c3c" // Error red
      } else {
        feedbackEl.textContent = ""
      }
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-thq-footer-social-icon-elm1 {
            text-decoration: none;
          }
          .footer-thq-footer-social-icon-elm2 {
            text-decoration: none;
          }
          .footer-thq-footer-social-icon-elm3 {
            text-decoration: none;
          }
          .footer-thq-footer-social-icon-elm4 {
            text-decoration: none;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer

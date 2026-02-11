import React from 'react'

import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav className="navigation-root">
          <div className="navigation-container">
            <a href="/">
              <div
                aria-label="Dr. Jeremy E. Koenig Home"
                className="navigation-logo-link"
              >
                <span className="section-title navigation-brand">
                  Dr. Jeremy E. Koenig
                </span>
              </div>
            </a>
            <div className="navigation-desktop-links">
              <a href="#about">
                <div className="navigation-link">
                  <span>About</span>
                </div>
              </a>
              <a href="#writing">
                <div className="navigation-link">
                  <span>Writing</span>
                </div>
              </a>
              <a href="#podcast">
                <div className="navigation-link">
                  <span>Podcast</span>
                </div>
              </a>
              <a href="#speaking">
                <div className="navigation-link">
                  <span>Speaking</span>
                </div>
              </a>
              <a href="#subscribe">
                <div className="btn btn-sm btn-primary">
                  <span>Subscribe</span>
                </div>
              </a>
            </div>
            <button
              id="navigationMobileOpen"
              aria-label="Open Menu"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 8h16M4 16h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <div
          id="navigationOverlay"
          aria-hidden="true"
          className="navigation-mobile-overlay"
        >
          <div className="navigation-overlay-header">
            <a href="/" id="navigationOverlayLogo">
              <div className="navigation-logo-link">
                <span className="section-title navigation-brand">
                  Dr. Jeremy E. Koenig
                </span>
              </div>
            </a>
            <button
              id="navigationMobileClose"
              aria-label="Close Menu"
              className="navigation-mobile-close"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 5h16M4 12h16M4 19h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-overlay-content">
            <ul className="navigation-mobile-list">
              <li>
                <a href="#about">
                  <div className="navigation-overlay-link">
                    <span>About</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#writing">
                  <div className="navigation-overlay-link">
                    <span>Writing</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#podcast">
                  <div className="navigation-overlay-link">
                    <span>Podcast</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#speaking">
                  <div className="navigation-overlay-link">
                    <span>Speaking</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#subscribe">
                  <div className="navigation-overlay-cta navigation-overlay-link">
                    <span>Subscribe</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <div
  dangerouslySetInnerHTML={{
    __html: `<script defer data-name="navigation-logic">
(function(){
  const navOpenBtn = document.getElementById("navigationMobileOpen")
  const navCloseBtn = document.getElementById("navigationMobileClose")
  const navOverlay = document.getElementById("navigationOverlay")
  const navLinks = document.querySelectorAll(".navigation-overlay-link")

  function openMenu() {
    navOverlay.classList.add("is-open")
    navOverlay.setAttribute("aria-hidden", "false")
    navOpenBtn.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  function closeMenu() {
    navOverlay.classList.remove("is-open")
    navOverlay.setAttribute("aria-hidden", "true")
    navOpenBtn.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  navOpenBtn.addEventListener("click", openMenu)
  navCloseBtn.addEventListener("click", closeMenu)

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navOverlay.classList.contains("is-open")) {
      closeMenu()
    }
  })
})()
</script>`
  }}
/>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation

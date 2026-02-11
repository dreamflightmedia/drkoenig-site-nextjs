import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>DNA - Edu / Lux</title>
          <meta property="og:title" content="DNA - Edu / Lux" />
          <link
            rel="canonical"
            href="https://wealthy-international-goldfinch-501pbm.teleporthq.app/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-section">
          <div className="home-thq-hero-container-elm hero-container">
            <div className="home-thq-hero-content-elm hero-content">
              <span className="hero-tag">
                Research &amp; Thought Leadership
              </span>
              <h1 className="home-hero-title hero-title">
                Biology. Belief. Becoming.
              </h1>
              <p className="hero-subtitle">
                <span>
                  {' '}
                  Dr. Jeremy E. Koenig — scientist, systems thinker, and
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-thq-hero-nickname-elm">
                  “The DNA Guy”
                </span>
                <span>
                  {' '}
                  — exploring how DNA, behavior, and meaning shape human
                  performance and longevity.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <div className="hero-actions">
                <a href="#writing">
                  <div className="btn btn-lg btn-primary">
                    <span>Explore the writing</span>
                  </div>
                </a>
                <a href="#podcast">
                  <div className="btn btn-outline btn-lg">
                    <span>Listen to the podcast</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="home-thq-hero-visual-elm hero-visual">
              <div className="hero-image-wrapper">
                <img
                  alt="Dr. Jeremy E. Koenig"
                  src="/jeremy_hero_square_1151-1500h.webp"
                  className="home-thq-hero-image-elm hero-image"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="intro-section">
          <div className="intro-container">
            <div className="intro-text-block">
              <h2 className="section-title">
                An Integrative Approach to Human Potential
              </h2>
              <p className="section-content">
                We are no longer passive observers of our genetic inheritance.
                In the intersection of genomics and behavior lies a profound
                opportunity for agency. Dr. Koenig’s work focuses on decoding
                the systemic relationships between our biological blueprint and
                the narratives we construct about our lives.
              </p>
              <p className="section-content">
                Through rigorous translational research and systems thinking, we
                move beyond the reductionist view of health toward a holistic
                understanding of performance that integrates the physical, the
                cognitive, and the existential.
              </p>
            </div>
            <div className="intro-quote-block">
              <blockquote className="intro-pull-quote">
                <span>
                  “DNA is not a fixed destiny, but a dynamic dialogue between
                  our biology and the choices we make every single day.”
                </span>
              </blockquote>
            </div>
          </div>
        </section>
        <section className="domains-section">
          <div className="domains-container">
            <div className="domains-header">
              <h2 className="section-title">Core Domains of Inquiry</h2>
              <p className="section-subtitle">
                A multidisciplinary framework for human performance
              </p>
            </div>
            <div className="domains-grid">
              <div className="domain-card">
                <div className="domain-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m10 16l1.5 1.5M14 8l-1.5-1.5M15 2c-1.798 1.998-2.518 3.995-2.807 5.993M16.5 10.5l1 1M17 6l-2.891-2.891M2 15c6.667-6 13.333 0 20-6m-2 0l.891.891M3.109 14.109L4 15m2.5-2.5l1 1M7 18l2.891 2.891M9 22c1.798-1.998 2.518-3.995 2.807-5.993"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="domain-title">Genomics</h3>
                <p className="section-content">
                  Decoding the intricate genetic markers that influence
                  metabolic response and cognitive resilience.
                </p>
              </div>
              <div className="domain-card">
                <div className="domain-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                      <path d="M3.22 13H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="domain-title">Longevity &amp; Resilience</h3>
                <p className="section-content">
                  Investigating the biological mechanisms of aging and the
                  protocols that extend healthspan.
                </p>
              </div>
              <div className="domain-card">
                <div className="domain-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                      <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                      <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                      <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                      <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                      <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="domain-title">Systems Health</h3>
                <p className="section-content">
                  Analyzing the interplay between behavioral patterns and
                  systemic physiological outcomes.
                </p>
              </div>
              <div className="domain-card">
                <div className="domain-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 18h8M3 22h18m-7 0a7 7 0 1 0 0-14h-1m-4 6h2m-2-2a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Zm3-6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="domain-title">Translational Research</h3>
                <p className="section-content">
                  Bridging the gap between clinical data and actionable
                  high-performance protocols.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="podcast" className="podcast-section">
          <div className="podcast-container">
            <div className="podcast-info">
              <img
                alt="image"
                src="/the_dna_of_things_logo_screenshot-300w.png"
                className="home-image"
              />
              <span className="section-subtitle"> Podcast</span>
              <h2 className="section-title">The DNA of Things</h2>
              <p className="section-content">
                A rigorous exploration of the invisible threads connecting our
                biology to our behavior. Dr. Koenig hosts conversations with
                leading researchers, philosophers, and systems thinkers to
                dissect the mechanics of human potential.
              </p>
              <div className="podcast-cta-group">
                <a
                  href="https://podcasts.apple.com/us/podcast/the-dna-of-things-with-dr-jeremy-koenig/id1738771019"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="home-thq-btn-elm3 btn btn-primary">
                    <span>Subscribe on Apple</span>
                  </div>
                </a>
                <a
                  href="https://open.spotify.com/show/5h43DIjrOclBF2sN9DosuZ"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="home-thq-btn-elm4 btn btn-outline">
                    <span>Spotify</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="podcast-episodes">
              <div className="episode-card">
                <span className="episode-number">093</span>
                <div className="episode-details">
                  <h4 className="episode-title">
                    From ICU to 100,000 Patients: Building the Future of
                    Personalized Medicine
                  </h4>
                  <p className="section-content">
                    Chris Spears, founder of OrderlyMeds, shares his
                    transformative journey from a catastrophic ICU experience to
                    building a human-centered medication management platform
                    that&apos;s revolutionizing personalized healthcare.
                  </p>
                  <a
                    href="https://open.spotify.com/episode/3sa9qIWuKuPYlw5fJQ1mo0?si=a1f49e254fda40b5"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div className="home-thq-btn-link-elm1 btn-link">
                      <span>Listen Now</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="episode-card">
                <span className="episode-number">092</span>
                <div className="episode-details">
                  <h4 className="episode-title">
                    From Monsanto to AI: Accelerating the Race Against Cancer
                    with Dr. Chadi Nabhan
                  </h4>
                  <p className="section-content">
                    Jeremy Koenig sits down with Dr. Chadi Nabhan, a
                    physician-scientist, oncologist, and healthcare innovator
                    who stands at the intersection of cancer care, precision
                    medicine, and artificial intelligence.
                  </p>
                  <a
                    href="https://open.spotify.com/episode/1N734jjrKevaof7C0jEmmf?si=MlQTwPTOSyW7TLpEiWVA8g"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div className="home-thq-btn-link-elm2 btn-link">
                      <span>Listen Now</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="writing" className="writing-section">
          <div className="writing-container">
            <div className="writing-header">
              <h2 className="section-title">
                Notes &amp; Reflections
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <a href="#">
                <div className="btn-link">
                  <span>View all writing</span>
                </div>
              </a>
            </div>
            <div className="writing-list">
              <article className="essay-card">
                <div className="essay-meta">
                  <time datetime="2024-03-15">August 1st, 2025</time>
                  <span className="essay-category">Systems Health</span>
                </div>
                <div className="essay-content">
                  <h3 className="essay-title">
                    A Frequency of Faith: What I Learned from a Scientist Who
                    Measures Vibes
                  </h3>
                  <p className="section-content">
                    Dr. Garret Yount, a molecular biologist-turned-consciousness
                    researcher, had placed Petri dishes filled with human cells
                    into a Faraday cage—a steel-walled room that blocks outside
                    electromagnetic interference. Then he invited in a healer to
                    “treat” the cells with nothing but intention.
                  </p>
                  <a href="#">
                    <div className="essay-link">
                      <span> Read Reflection</span>
                      <svg
                        fill="none"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14m-7-7 7 7-7 7"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </article>
              <article className="essay-card">
                <div className="essay-meta">
                  <time datetime="2024-02-28">July 15th, 2025</time>
                  <span className="essay-category">Systems Health</span>
                </div>
                <div className="essay-content">
                  <h3 className="essay-title">
                    The Microbial Mirror: What Babies, Athletes, and Astronauts
                    Reveal About Our Hidden Selves
                  </h3>
                  <p className="section-content">
                    I finished listening to my podcast with Dr. Heather
                    Armstrong. At the time of our recording, she was in San
                    Diego, fresh from the whirlwind of Digestive Disease Week—a
                    massive gathering of thousands of scientists debating the
                    very essence of our biology.
                  </p>
                  <a href="#">
                    <div className="essay-link">
                      <span>
                        {' '}
                        Read Reflection
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <svg
                        fill="none"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14m-7-7 7 7-7 7"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </article>
              <article className="essay-card">
                <div className="essay-meta">
                  <time datetime="2024-01-12">July 5th, 2025</time>
                  <span className="essay-category">
                    <span>Biology &amp; Meaning</span>
                    <br></br>
                    <span>Systems Thinking</span>
                    <br></br>
                  </span>
                </div>
                <div className="essay-content">
                  <h3 className="essay-title">
                    The Ghost in the Machine is a Garden: An Engineer&apos;s
                    Guide to Our Inner Ecosystem
                  </h3>
                  <p className="section-content">
                    As a young man, Omer Ozkan felt the future’s shadow. An
                    industrial engineer by training, he turned his
                    systems-thinking mind to the world’s most pressing external
                    problem: climate change. He founded Turkey’s first solar
                    energy company, building complex grids to harness the power
                    of the sun and save the planet from itself.
                  </p>
                  <a href="#">
                    <div className="essay-link">
                      <span>
                        {' '}
                        Read Reflection
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <svg
                        fill="none"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14m-7-7 7 7-7 7"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="speaking-section">
          <div className="speaking-container">
            <div className="speaking-intro">
              <h2 className="section-title">Speaking &amp; Keynotes</h2>
              <p className="section-content">
                Dr. Koenig delivers high-signal presentations for executive
                boards, research institutions, and global summits, translating
                complex genomics into actionable leadership frameworks.
              </p>
            </div>
            <div className="speaking-grid">
              <div className="speaking-topic">
                <h3 className="topic-title">The Biological Executive</h3>
                <p className="section-content">
                  Optimizing cognitive endurance through personalized genomic
                  protocols and circadian alignment.
                </p>
              </div>
              <div className="speaking-topic">
                <h3 className="topic-title">Future of Longevity</h3>
                <p className="section-content">
                  A roadmap for the next decade of translational research in
                  human healthspan extension.
                </p>
              </div>
              <div className="speaking-topic">
                <h3 className="topic-title">Meaning as Medicine</h3>
                <p className="section-content">
                  The systemic impact of purpose and narrative on physiological
                  resilience and immune function.
                </p>
              </div>
            </div>
            <div className="speaking-footer">
              <a href="#">
                <div className="btn btn-accent">
                  <span>Inquire about engagements</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="bio-section">
          <div className="bio-container">
            <div className="bio-visual">
              <img
                alt="Dr. Koenig in academic setting"
                src="/jeremey_your_story_small-1500w.webp"
                className="bio-image"
              />
            </div>
            <div className="bio-content">
              <h2 className="section-title">About Dr. Koenig</h2>
              <p className="section-content">
                Dr. Jeremy E. Koenig is a research scientist and systems thinker
                dedicated to the study of human potential. With a background in
                molecular biology and translational genomics, he has spent over
                two decades investigating the intersection of our biological
                hardware and our behavioral software.
              </p>
              <p className="section-content">
                He has held research affiliations with leading academic
                institutions and served as a strategic advisor to
                high-performance organizations globally. His work is
                characterized by a commitment to precision, intellectual
                integrity, and the belief that understanding our DNA is the
                first step toward true personal agency.
              </p>
              <div className="bio-links">
                <a href="#">
                  <div className="btn-link">
                    <span>View Full CV</span>
                  </div>
                </a>
                <a href="#">
                  <div className="btn-link">
                    <span>Research Publications</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="subscribe-section">
          <div className="subscribe-container">
            <div className="subscribe-card">
              <div className="subscribe-header">
                <h2 className="section-title">The DNA of Things</h2>
                <p className="section-subtitle">
                  Monthly dispatches on genomics, longevity, and systems health.
                </p>
              </div>
              <form
                action="#"
                method="POST"
                data-form-id="f53822eb-48bc-4557-a4a6-d13a8dda3535"
                className="subscribe-form"
              >
                <div className="form-group">
                  <input
                    type="email"
                    id="thq_textinput_T7xH"
                    name="textinput"
                    required="true"
                    aria-label="Email Address"
                    placeholder="Email Address"
                    data-form-field-id="thq_textinput_T7xH"
                    className="form-input"
                  />
                  <button
                    id="thq_button_HCAQ"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_HCAQ"
                    className="btn btn-primary"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="form-note">
                  Frequency: Once monthly. Privacy: Your data is never shared.
                  Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <div
  dangerouslySetInnerHTML={{
    __html: `<style>
section {
  padding: var(--spacing-3xl) 0;
  overflow: hidden;
}
</style>`
  }}
/>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <div
  dangerouslySetInnerHTML={{
    __html: `<script defer data-name="hero-scroll">
(function(){
  const heroImage = document.querySelector(".hero-image")

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY
    if (heroImage) {
      heroImage.style.transform = \`scale(\${1 + scroll * 0.0002})\`
    }
  })

  const cards = document.querySelectorAll(".domain-card, .essay-card, .episode-card")
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "all 0.6s ease-out"
    observer.observe(card)
  })
})()
</script>`
  }}
/>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home-thq-hero-container-elm {
            padding-top: var(--dl-layout-space-fourunits);
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .home-thq-hero-content-elm {
            padding-left: var(--dl-layout-space-halfunit);
          }
          .home-thq-hero-nickname-elm {
            color: var(--color-accent);
            font-style: italic;
          }
          .home-thq-hero-visual-elm {
            height: auto;
          }
          .home-thq-hero-image-elm {
            object-position: center;
          }
          .home-image {
            width: 220px;
            object-fit: cover;
            border-color: var(--color-on-surface);
            border-width: 1px;
            border-radius: 12px;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .home-thq-btn-elm3 {
            text-decoration: none;
          }
          .home-thq-btn-elm4 {
            text-decoration: none;
          }
          .home-thq-btn-link-elm1 {
            text-decoration: none;
          }
          .home-thq-btn-link-elm2 {
            text-decoration: none;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home

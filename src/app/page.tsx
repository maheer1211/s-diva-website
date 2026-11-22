import Image from "next/image";
import SiteHeader from "./components/SiteHeader";
import ScrollExperience from "./components/ScrollExperience";
import GoldSculpture from "./components/GoldSculpture";
import ServiceMenu from "./components/ServiceMenu";
import CopyrightYear from "./components/CopyrightYear";

const experiences = [
  {
    number: "01",
    label: "THE HAIR ATELIER",
    name: <>Artistry in <em>every detail.</em></>,
    detail: "From precision cuts and colour to deeply restorative hair rituals.",
    image: "/images/hair-ritual.webp",
    alt: "A relaxing head massage from the S DIVA service collection",
    className: "experience-hair",
  },
  {
    number: "02",
    label: "THE SKIN SANCTUARY",
    name: <>A glow that <em>feels like you.</em></>,
    detail: "Thoughtfully curated facials and skin treatments, made for your moment.",
    image: "/images/face-ritual.webp",
    alt: "A restorative facial massage from the S DIVA service collection",
    className: "experience-skin",
  },
  {
    number: "03",
    label: "THE BODY RITUALS",
    name: <>The luxury of <em>letting go.</em></>,
    detail: "Restorative body therapies that invite you to pause and reset.",
    image: "/images/massage-ritual.webp",
    alt: "A calming body massage from the S DIVA service collection",
    className: "experience-body",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "S DIVA Premium Salon & Spa",
  url: "https://sdivasalon.com/",
  image: "https://sdivasalon.com/images/spa-hero.webp",
  telephone: "+918249000620",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. HIG-15/2, Second Floor, Near Embassy Club, Chandrasekharpur",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    postalCode: "751016",
    addressCountry: "IN",
  },
};

export default function Home() {
  return (
    <main id="top" className="site-shell">
      <div className="reading-progress" aria-hidden="true" />
      <ScrollExperience />
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image-wrap" aria-hidden="true">
          <Image className="hero-image" src="/images/spa-hero.webp" alt="" fill sizes="(max-width: 760px) 100vw, 72vw" priority />
        </div>
        <div className="hero-veil" aria-hidden="true" />
        <div className="hero-outline" aria-hidden="true">S / D</div>
        <div className="hero-layout site-container">
          <div className="hero-copy">
            <p className="overline hero-kicker"><span className="small-spark" /> THE S DIVA EXPERIENCE <span className="kicker-divider" /> BHUBANESWAR</p>
            <h1 id="hero-title" className="hero-title">The art<br />of the <em>reset.</em></h1>
            <div className="hero-bottom-copy">
              <div className="hero-accent-line" aria-hidden="true" />
              <div>
                <p className="hero-lead">Your world can wait. <em>This moment is yours.</em></p>
                <p className="hero-description">A considered sanctuary for beautiful transformations, restorative rituals, and the feeling of being entirely yourself.</p>
                <div className="hero-links">
                  <a className="button-primary" href="#experiences"><span>Explore the experience</span><span className="button-arrow" aria-hidden="true">↗</span></a>
                  <a className="understated-link light-link" href="#services">View our menu <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom-bar site-container"><span>01 / THE BEGINNING</span><a href="#about" aria-label="Scroll to discover S DIVA">SCROLL TO DISCOVER <span aria-hidden="true">↓</span></a><span className="hero-bottom-end">CHANDRASEKHARPUR, ODISHA</span></div>
      </section>

      <div className="brand-marquee" aria-label="Hair artistry, skin rituals, body restoration and everyday luxury">
        <div className="marquee-track" aria-hidden="true">
          {Array.from({ length: 4 }).map((_, i) => <span className="marquee-set" key={i}><span>HAIR ARTISTRY</span><b>✳</b><span>SKIN RITUALS</span><b>✳</b><span>BODY RESTORATION</span><b>✳</b><span>EVERYDAY LUXURY</span><b>✳</b></span>)}
        </div>
      </div>

      <section id="about" className="about-section section-spacing" aria-labelledby="about-title">
        <div className="site-container">
          <div className="section-meta" data-reveal><span>THE PHILOSOPHY</span><span>02 / MORE THAN AN APPOINTMENT</span></div>
          <div className="about-headline" data-reveal>
            <h2 id="about-title" className="display-title">A little time<br />to feel <em>like you.</em></h2>
            <div className="intro-aside"><span className="intro-star" aria-hidden="true">✳</span><p>There is something extraordinary about making time for yourself. At S DIVA, every detail is considered so that all you have to do is arrive.</p></div>
          </div>
          <div className="about-editorial">
            <div className="about-photo photo-frame" data-reveal>
              <Image src="/images/scalp-ritual.webp" alt="An indulgent scalp and hair treatment" fill sizes="(max-width: 760px) 85vw, 49vw" data-parallax="0.12" />
              <div className="image-caption"><span>01 — THE ART OF CARE</span><span>✳ S DIVA</span></div>
            </div>
            <div className="about-note" data-reveal>
              <span className="outline-number" aria-hidden="true">S.</span>
              <p className="overline">CRAFTED AROUND YOU</p>
              <h3>Where beauty<br />meets <em>stillness.</em></h3>
              <p>Beyond the everyday appointment, discover a space where skilled artistry meets the quiet luxury of slowing down — from carefully considered hair services to restorative body therapies.</p>
              <a className="understated-link dark-link" href="#services">DISCOVER OUR SERVICES <span aria-hidden="true">↗</span></a>
            </div>
            <div className="about-detail-photo photo-frame" data-reveal>
              <Image src="/images/face-ritual.webp" alt="A facial ritual in progress" fill sizes="(max-width: 760px) 60vw, 25vw" />
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="experiences-section section-spacing" aria-labelledby="experiences-title">
        <div className="site-container">
          <div className="section-meta section-meta-light" data-reveal><span>MADE FOR YOUR MOMENT</span><span>03 / THE EXPERIENCES</span></div>
          <div className="experiences-intro" data-reveal>
            <h2 id="experiences-title" className="display-title">Choose your<br /><em>kind of glow.</em></h2>
            <p>From the everyday essential to a true moment of indulgence, explore the rituals worth making time for.</p>
          </div>
          <div className="experience-stack">
            {experiences.map((item) => <a className={`experience-feature ${item.className}`} key={item.number} href="#services" aria-label={`Explore ${item.label.toLowerCase()} in our service menu`}>
              <div className="experience-photo"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 72vw" data-parallax="0.16" /></div>
              <div className="experience-overlay" />
              <span className="experience-index">{item.number} <span>/ 03</span></span>
              <div className="experience-copy"><p className="overline">{item.label}</p><h3>{item.name}</h3><p className="experience-detail">{item.detail}</p><span className="experience-explore">DISCOVER THE RITUAL <span aria-hidden="true">↗</span></span></div>
            </a>)}
          </div>
        </div>
      </section>

      <section className="ritual-section" aria-labelledby="ritual-title">
        <div className="ritual-glow" aria-hidden="true" />
        <div className="ritual-orbit orbit-one" aria-hidden="true" />
        <div className="ritual-orbit orbit-two" aria-hidden="true" />
        <GoldSculpture />
        <div className="site-container ritual-inner">
          <div className="ritual-copy" data-reveal>
            <p className="overline ritual-overline">✳ AN INTERLUDE OF STILLNESS</p>
            <h2 id="ritual-title" className="display-title">The beauty<br />of <em>pausing.</em></h2>
            <p>Some moments are meant to be yours alone. Let everything else fall away.</p>
            <a className="understated-link light-link" href="#services">FIND YOUR MOMENT <span aria-hidden="true">↗</span></a>
          </div>
          <span className="ritual-corner" aria-hidden="true">S DIVA — A MOMENT TO YOURSELF</span>
        </div>
      </section>

      <section className="gallery-section section-spacing" aria-labelledby="gallery-title">
        <div className="site-container">
          <div className="section-meta" data-reveal><span>SMALL MOMENTS, DEEPLY FELT</span><span>04 / THE DETAILS</span></div>
          <div className="gallery-heading" data-reveal><h2 id="gallery-title" className="display-title">The feeling<br /><em>stays with you.</em></h2><p>A pause in the day. A little more ease. An experience to return to.</p></div>
          <div className="gallery-grid">
            <div className="gallery-image gallery-image-one photo-frame" data-reveal><Image src="/images/massage-ritual.webp" alt="A soothing body massage" fill sizes="(max-width: 760px) 85vw, 46vw" data-parallax="0.12" /><span>01 / UNWIND</span></div>
            <div className="gallery-image gallery-image-two photo-frame" data-reveal><Image src="/images/foot-ritual.webp" alt="A restorative foot spa ritual" fill sizes="(max-width: 760px) 45vw, 23vw" /><span>02 / RECHARGE</span></div>
            <div className="gallery-image gallery-image-three photo-frame" data-reveal><Image src="/images/spa-hero.webp" alt="Spa oils, candle and fresh towels" fill sizes="(max-width: 760px) 60vw, 31vw" /><span>03 / RETURN TO YOU</span></div>
          </div>
        </div>
      </section>

      <section id="services" className="menu-section section-spacing" aria-labelledby="menu-title">
        <div className="site-container">
          <div className="section-meta" data-reveal><span>THE SERVICE COLLECTION</span><span>05 / FIND YOUR RITUAL</span></div>
          <div className="menu-section-heading" data-reveal>
            <h2 id="menu-title" className="display-title">A menu of<br /><em>possibilities.</em></h2>
            <p>Every ritual begins with a choice. Explore the services and prices, then call our team to arrange your visit.</p>
          </div>
          <ServiceMenu />
          <div className="menu-pdf"><span>Something more specific in mind? View our original brochure.</span><a href="/menu/sdiva-services-menu.pdf" target="_blank" rel="noopener noreferrer">EXPLORE THE ORIGINAL MENU (PDF) ↗</a></div>
        </div>
      </section>

      <section className="closing-section" aria-label="Make your next appointment">
        <div className="closing-photo"><Image src="/images/spa-hero.webp" fill alt="Warm candlelight and spa essentials" sizes="100vw" /></div>
        <div className="closing-vignette" />
        <div className="site-container closing-inner" data-reveal>
          <p className="overline">YOUR MOMENT STARTS HERE</p>
          <h2 className="display-title">Come as you are.<br /><em>Leave renewed.</em></h2>
          <a href="tel:+918249000620" className="button-primary"><span>Call to book your visit</span><span className="button-arrow" aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section id="contact" className="contact-section section-spacing" aria-labelledby="contact-title">
        <div className="site-container">
          <div className="section-meta section-meta-light" data-reveal><span>COME FIND YOUR MOMENT</span><span>06 / VISIT S DIVA</span></div>
          <div className="contact-layout">
            <div className="contact-main" data-reveal><h2 id="contact-title" className="display-title">We&apos;ll be<br /><em>right here.</em></h2><p>Find us near Embassy Club in Chandrasekharpur, Bhubaneswar. Our reception team can help you plan your next visit.</p><a href="tel:+918249000620" className="button-primary"><span>Call S DIVA</span><span className="button-arrow" aria-hidden="true">↗</span></a></div>
            <div className="contact-info" data-reveal>
              <div><p className="overline">01 / FIND US</p><address>Plot No. HIG-15/2, Second Floor<br />Near Embassy Club, Chandrasekharpur<br />Bhubaneswar, Odisha 751016</address><a href="https://www.google.com/maps/search/?api=1&query=Plot+No+HIG-15%2F2+Near+Embassy+Club+Chandrasekharpur+Bhubaneswar" target="_blank" rel="noopener noreferrer">GET DIRECTIONS ↗</a></div>
              <div><p className="overline">02 / SAY HELLO</p><a className="contact-number" href="tel:+918249000620">+91 82490 00620</a><a className="contact-number" href="tel:+919692634778">+91 96926 34778</a><span className="contact-small">CALL FOR SERVICES, PRICES & AVAILABILITY</span></div>
            </div>
          </div>
          <div className="contact-wordmark" aria-hidden="true">S DIVA<span>✳</span></div>
        </div>
      </section>
      <footer className="site-footer"><div className="site-container footer-row"><span>© <CopyrightYear /> S DIVA PREMIUM SALON & SPA</span><span>MADE FOR MOMENTS THAT MATTER</span><a href="#top">BACK TO TOP ↑</a></div></footer>
      <div className="mobile-booking-bar"><a href="#services">THE MENU <span aria-hidden="true">↗</span></a><a href="tel:+918249000620">CALL TO BOOK <span aria-hidden="true">↗</span></a></div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </main>
  );
}

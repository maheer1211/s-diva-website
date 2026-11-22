import Image from "next/image";
import ServiceMenu from "./components/ServiceMenu";
import CopyrightYear from "./components/CopyrightYear";

const signatures = [
  {
    number: "01", name: "The Hair Atelier", label: "CUT · COLOUR · RESTORE",
    description: "From precision styling to deeply restorative hair rituals.",
    image: "/images/hair-ritual.webp", alt: "Relaxing hair treatment from the S DIVA menu", anchor: "women-hair",
  },
  {
    number: "02", name: "Skin, Reimagined", label: "FACIALS · GLOW · CARE",
    description: "Thoughtfully curated facials and skin treatments.",
    image: "/images/face-ritual.webp", alt: "Facial treatment photographed for the S DIVA menu", anchor: "face",
  },
  {
    number: "03", name: "A Moment of Stillness", label: "MASSAGE · BODY · RESET",
    description: "Restorative body therapies designed for your pause.",
    image: "/images/massage-ritual.webp", alt: "Body massage photographed for the S DIVA menu", anchor: "massage",
  },
];

export default function Home() {
  return (
    <main id="top" className="site-shell">
      <div className="top-note">
        <span>CHANDRASEKHARPUR · BHUBANESWAR</span>
        <a href="tel:+918249000620">CALL +91 82490 00620 <span aria-hidden="true">↗</span></a>
      </div>

      <header className="site-header">
        <div className="site-container header-inner">
          <a href="#top" className="brand" aria-label="S DIVA Premium Salon and Spa, go to homepage">
            <Image src="/images/sdiva-emblem.png" width={60} height={52} alt="S DIVA original gold emblem" className="brand-emblem" priority />
            <span className="brand-text"><strong>S DIVA</strong><small>PREMIUM SALON & SPA</small></span>
          </a>
          <nav aria-label="Main navigation" className="desktop-navigation">
            <a href="#about">Our story</a><a href="#experiences">Experiences</a><a href="#services">The menu</a><a href="#contact">Visit us</a>
          </nav>
          <a className="header-book" href="#services">BOOK AN APPOINTMENT <span aria-hidden="true">↗</span></a>
        </div>
        <nav className="mobile-navigation" aria-label="Mobile navigation">
          <a href="#about">Our story</a><a href="#experiences">Experiences</a><a href="#services">Menu & prices</a><a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" aria-label="Welcome to S DIVA">
        <div className="hero-photo">
          <Image src="/images/spa-hero.webp" fill alt="Spa oils, warm candle, rose and towels from S DIVA's service menu" priority sizes="(max-width: 900px) 100vw, 55vw" className="object-cover" />
        </div>
        <div className="hero-shade" />
        <div className="site-container hero-content">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="eyebrow-rule" /> THE S DIVA EXPERIENCE</p>
            <h1 className="hero-title">The Art<br />of the <em>Reset.</em></h1>
            <p className="hero-subtitle">You command your world;<br />let us curate your calm.</p>
            <p className="hero-description">A sanctuary for elevated beauty, restorative rituals and quiet moments that belong entirely to you.</p>
            <div className="hero-actions">
              <a className="button-gold" href="#services">Explore services & book <span aria-hidden="true">↗</span></a>
              <a className="hero-secondary-link" href="#about">Discover our story <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true"><span>01 / 04</span><span>BEAUTY IS A RITUAL</span></div>
      </section>

      <div className="values-ribbon" aria-label="S DIVA specialties"><span>HAIR ARTISTRY</span><span className="ribbon-star">✦</span><span>SKIN RITUALS</span><span className="ribbon-star">✦</span><span>BODY RESTORATION</span><span className="ribbon-star">✦</span><span>EVERYDAY LUXURY</span></div>

      <section id="about" className="section-about section-spacing">
        <div className="site-container about-grid">
          <div className="about-visual">
            <div className="about-image-frame"><Image src="/images/scalp-ritual.webp" fill alt="A soothing head massage from S DIVA's brochure" sizes="(max-width: 900px) 90vw, 37vw" className="object-cover" /></div>
            <div className="about-stamp" aria-hidden="true"><Image src="/images/sdiva-emblem.png" width={86} height={74} alt="" /></div>
          </div>
          <div className="about-copy">
            <p className="eyebrow text-[#a98953]">WELCOME TO S DIVA</p>
            <h2 className="section-heading text-[#30291f]">An invitation to<br /><em>feel like yourself.</em></h2>
            <div className="thin-line" />
            <p className="about-lead">Beyond an appointment, a considered experience.</p>
            <p className="about-body">Step into a sanctuary where high-performance artistry meets the quiet luxury of total restoration. From carefully considered hair services to restorative body therapies, every visit is an opportunity to pause and leave feeling renewed.</p>
            <p className="about-body">Discover your moment at S DIVA Premium Salon & Spa, near Embassy Club in Chandrasekharpur, Bhubaneswar.</p>
            <a className="text-arrow-link" href="#services">EXPLORE THE FULL MENU <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section id="experiences" className="experiences-section section-spacing">
        <div className="site-container">
          <div className="section-topline"><span className="eyebrow text-[#bd9c61]">CURATED FOR YOU</span><span className="mini-index">02 — THE EXPERIENCE</span></div>
          <div className="experiences-heading-row"><h2 className="section-heading text-[#f8f0e4]">Find your <em>ritual.</em></h2><p>From the everyday essential to the exceptional, explore services shaped around your own kind of radiance.</p></div>
          <div className="signature-grid">
            {signatures.map((item) => (
              <a key={item.number} href="#services" className="signature-card" aria-label={`Explore ${item.name} in the service menu`}>
                <div className="signature-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                <div className="signature-body">
                  <span className="signature-label">{item.label}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="signature-footer"><span>EXPLORE TREATMENTS</span><span aria-hidden="true">↗</span></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="menu-section section-spacing">
        <div className="site-container">
          <div className="menu-title-block">
            <p className="eyebrow text-[#997b4c]">THE FULL SERVICE COLLECTION</p>
            <h2 className="section-heading text-[#30291f]">A menu of <em>possibilities.</em></h2>
            <p>Explore our services and prices, then call our team to arrange your visit. The booking process is simple, personal and direct.</p>
          </div>
          <ServiceMenu />
          <div className="pdf-link-row">
            <span>Prefer to browse the original brochure?</span>
            <a href="/menu/sdiva-services-menu.pdf" target="_blank" rel="noopener noreferrer">VIEW ORIGINAL MENU (PDF) <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="closing-image-section" aria-label="Our philosophy">
        <div className="closing-image"><Image src="/images/foot-ritual.webp" fill alt="Restorative foot spa treatment from S DIVA's menu" sizes="100vw" className="object-cover" /></div>
        <div className="closing-overlay" />
        <div className="site-container closing-content"><p className="eyebrow text-[#e5c78a]">BEYOND OUR DOORS</p><h2>Carry the <em>radiance</em><br />with you.</h2><p>True beauty isn’t just a destination. It’s the energy you take back into the world.</p></div>
      </section>

      <section id="contact" className="contact-section section-spacing">
        <div className="site-container contact-grid">
          <div><p className="eyebrow text-[#a48956]">WE LOOK FORWARD TO WELCOMING YOU</p><h2 className="section-heading text-[#f4eee4]">Your sanctuary<br /><em>is waiting.</em></h2><p className="contact-intro">Your transformation is our inspiration. Find us in Chandrasekharpur and let our reception team help you plan your next visit.</p></div>
          <div className="contact-details">
            <div className="contact-detail"><span>VISIT US</span><p>Plot No. HIG-15/2, Second Floor<br />Near Embassy Club, Chandrasekharpur<br />Bhubaneswar, Odisha</p><a href="https://www.google.com/maps/search/?api=1&query=Plot+No+HIG-15%2F2+Near+Embassy+Club+Chandrasekharpur+Bhubaneswar" target="_blank" rel="noopener noreferrer">GET DIRECTIONS ↗</a></div>
            <div className="contact-detail"><span>CALL & BOOK</span><p><a href="tel:+918249000620">+91 82490 00620</a><br /><a href="tel:+919692634778">+91 96926 34778</a></p></div>
            <a className="button-gold mt-3 w-fit" href="tel:+918249000620">Call S DIVA to book <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <footer className="site-footer"><div className="site-container footer-inner"><a href="#top" className="footer-brand" aria-label="Back to top"><Image src="/images/sdiva-emblem.png" width={50} height={43} alt=""/><span>S DIVA</span></a><p>© <CopyrightYear /> S DIVA PREMIUM SALON & SPA</p><a href="#top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}

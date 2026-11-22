import CopyrightYear from "./components/CopyrightYear";
const services = [
  {
    title: "Full Body Spa",
    description: "Relax and refresh with our body spa services.",
  },
  {
    title: "Hair Spa & Treatments",
    description: "Explore hair spa, keratin, and specialized hair treatments.",
  },
  {
    title: "Facial & Skin Care",
    description: "Discover our range of facial and skin care services.",
  },
  {
    title: "Manicure & Pedicure",
    description: "Treat yourself to professional nail care services.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf6f3] text-[#292321]">
      <header className="flex items-center justify-between border-b border-[#e9dcd5] px-6 py-5 md:px-16">
        <a href="#" className="text-2xl font-bold tracking-widest">
          S DIVA
        </a>

        <nav className="flex gap-5 text-sm md:gap-8">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="flex min-h-[65vh] flex-col items-center justify-center bg-[#302021] px-6 py-20 text-center text-white">
        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#e4bca7]">
          Premium Salon & Spa
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
          Your Beauty. Your Moment.
        </h1>
        <p className="mt-7 max-w-xl text-lg text-[#e7d7d2]">
          Discover hair, beauty, and spa services at S DIVA
          in Chandrasekharpur, Bhubaneswar.
        </p>
        <a
          href="#services"
          className="mt-10 rounded-full bg-[#e4bca7] px-9 py-4 font-semibold text-[#302021] transition hover:bg-white"
        >
          Book an Appointment
        </a>
      </section>

      <section id="services" className="px-6 py-20 md:px-16">
        <div className="mb-12 text-center">
          <p className="uppercase tracking-widest text-[#9c7064]">
            What We Offer
          </p>
          <h2 className="mt-3 text-4xl font-semibold">
            Our Services
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-[#e9dcd5] bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-[#736862]">
                {service.description}
              </p>
            </article>
          ))}
        </div>

<div className="mt-12 text-center">
  <p className="mb-5 text-lg">
    To book your appointment, contact our salon directly.
  </p>

  <a
    href="tel:+918249000620"
    className="inline-block rounded-full bg-[#302021] px-9 py-4 font-semibold text-white hover:bg-[#593c3c]"
  >
    Call S DIVA: 82490 00620
  </a>
</div>

      </section>

      <section
        id="about"
        className="bg-[#f0e4de] px-6 py-20 text-center md:px-16"
      >
        <h2 className="text-4xl font-semibold">Welcome to S DIVA</h2>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#62534e]">
          Explore our selection of salon and spa services,
          including hair treatments, facials, body spa,
          and personal grooming in Bhubaneswar.
        </p>
      </section>

      <section id="contact" className="px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold">Visit S DIVA</h2>
        <p className="mt-5 text-[#736862]">
          Chandrasekharpur, near Embassy Club, Bhubaneswar
        </p>
        <a
          href="tel:+918249000620"
          className="mt-8 inline-block rounded-full bg-[#302021] px-9 py-4 font-semibold text-white hover:bg-[#593c3c]"
        >
          Call for an Appointment
        </a>
      </section>

      <footer className="bg-[#302021] px-6 py-8 text-center text-sm text-[#e7d7d2]">
  © <CopyrightYear /> S DIVA Premium Salon & Spa
</footer>
    </main>
  );
}

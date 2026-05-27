import { useEffect } from "react";

const stats = [
  { value: "14K+", label: "Instagram community" },
  { value: "2.5K", label: "YouTube subscribers" },
  { value: "5,000+", label: "Classes taught" },
  { value: "4+", label: "Years of practice" },
  { value: "10–20", label: "Guests per retreat" },
];

const experiences = [
  {
    tag: "International",
    title: "Cyprus — Ayia Napa Retreat",
    copy: "Curated and led a destination retreat in Cyprus, bringing 10 guests from Georgia for a week of practice, sea and slow rituals.",
  },
  {
    tag: "Hospitality",
    title: "Hotel Wellness Retreat",
    copy: "Sole instructor for a 3-day private hotel retreat hosting 20 guests — full programming, mornings to evenings.",
  },
  {
    tag: "Brand collaboration",
    title: "Fitpass × Aversi × Fitshop",
    copy: "Headlined a flagship outdoor wellness event in Mziuri Park, in partnership with three of Georgia's leading brands.",
  },
  {
    tag: "Nature",
    title: "Kiketi Farm Workshops",
    copy: "Intimate countryside workshops blending movement, breath and the quiet of a working Georgian farm.",
  },
  {
    tag: "International",
    title: "ALO Yoga — Rome",
    copy: "Invited to an international ALO Yoga gathering in Rome, representing the Georgian wellness scene abroad.",
  },
];

const deliverables = [
  "Real, paying group bookings — 10 to 20 guests",
  "Premium Instagram reels, stories and grid content",
  "A full YouTube retreat vlog hosted on our channel",
  "Professional editorial photography of the property",
  "Cinematic hotel film, usable across your own channels",
  "Long-term destination exposure to a wellness audience",
];

const partners = ["ALO Yoga", "Fitpass", "Aversi", "Fitshop", "Vortex Fitness", "TBC Concept"];

export default function RetreatsPartnership() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Doduka × Hotels — Wellness Retreat Partnerships in Georgia";
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? "";
    meta?.setAttribute(
      "content",
      "A private partnership proposal: premium wellness retreats and cinematic content collaborations with hotels in Georgia and beyond."
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => observer.observe(el));

    return () => {
      document.title = prev;
      meta?.setAttribute("content", prevDesc);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#0e0d0b] text-[#e8e4dc] antialiased selection:bg-[#c9a96a]/30 selection:text-[#f5f1e8]">
      <style>{`
        [data-reveal]{opacity:0;transform:translateY(24px);transition:opacity 1.1s cubic-bezier(.2,.7,.2,1),transform 1.1s cubic-bezier(.2,.7,.2,1);}
        [data-reveal].is-visible{opacity:1;transform:none;}
        html{scroll-behavior:smooth;}
        .serif{font-family:'Cormorant Garamond','Times New Roman',serif;font-weight:300;letter-spacing:-0.01em;}
        .mono{font-family:'JetBrains Mono',ui-monospace,Menlo,monospace;letter-spacing:.18em;text-transform:uppercase;font-size:11px;}
      `}</style>

      {/* Top bar */}
      <header className="absolute top-0 inset-x-0 z-20 px-6 sm:px-10 py-6 flex items-center justify-between">
        <span className="mono text-[#c9a96a]">Doduka × Hospitality</span>
        <span className="mono text-[#e8e4dc]/60 hidden sm:block">Private partnership · 2026</span>
      </header>

      {/* HERO */}
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=2400&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0d0b]/70 via-[#0e0d0b]/40 to-[#0e0d0b]" />
        </div>

        <div className="relative px-6 sm:px-10 pb-16 sm:pb-24 max-w-6xl" data-reveal>
          <p className="mono text-[#c9a96a] mb-8">A partnership proposal</p>
          <h1 className="serif text-[44px] leading-[1.02] sm:text-[88px] sm:leading-[0.98] text-[#f5f1e8]">
            We don't just bring guests.
            <br />
            <em className="not-italic text-[#c9a96a]">We create destination stories.</em>
          </h1>
          <p className="mt-8 max-w-xl text-[#e8e4dc]/75 text-lg leading-relaxed font-light">
            Doduka Gureshidze and Nika Shioshvili design private wellness retreats and cinematic
            content collaborations for a small selection of hospitality partners — intimate groups
            of 10 to 20 guests, told through editorial film and photography.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#partnership"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#f5f1e8] text-[#0e0d0b] mono hover:bg-[#c9a96a] transition-colors duration-500"
            >
              View partnership
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#e8e4dc]/30 text-[#f5f1e8] mono hover:border-[#c9a96a] hover:text-[#c9a96a] transition-colors duration-500"
            >
              Start collaboration
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-t border-[#e8e4dc]/10 px-6 sm:px-10 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto" data-reveal>
          <p className="mono text-[#c9a96a] mb-12">In numbers</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-[#e8e4dc]/15 pl-5">
                <div className="serif text-4xl sm:text-5xl text-[#f5f1e8]">{s.value}</div>
                <div className="mt-3 text-xs text-[#e8e4dc]/55 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="px-6 sm:px-10 py-24 sm:py-36 border-t border-[#e8e4dc]/10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-20" data-reveal>
            <p className="mono text-[#c9a96a] mb-6">Selected experiences</p>
            <h2 className="serif text-4xl sm:text-6xl leading-[1.05] text-[#f5f1e8]">
              Four years of retreats, residencies and brand collaborations — at home and abroad.
            </h2>
          </div>

          <div className="space-y-px bg-[#e8e4dc]/10">
            {experiences.map((e, i) => (
              <article
                key={e.title}
                data-reveal
                className="bg-[#0e0d0b] grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 group"
              >
                <div className="md:col-span-1 mono text-[#c9a96a]">0{i + 1}</div>
                <div className="md:col-span-3 mono text-[#e8e4dc]/55">{e.tag}</div>
                <h3 className="md:col-span-4 serif text-2xl sm:text-3xl text-[#f5f1e8] group-hover:text-[#c9a96a] transition-colors duration-500">
                  {e.title}
                </h3>
                <p className="md:col-span-4 text-[#e8e4dc]/70 font-light leading-relaxed">
                  {e.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT PARTNERSHIP */}
      <section
        id="partnership"
        className="relative px-6 sm:px-10 py-24 sm:py-36 border-t border-[#e8e4dc]/10 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.12] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0d0b] via-[#0e0d0b]/85 to-[#0e0d0b]" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5" data-reveal>
            <p className="mono text-[#c9a96a] mb-6">What hotels receive</p>
            <h2 className="serif text-4xl sm:text-5xl leading-[1.05] text-[#f5f1e8]">
              A full editorial campaign, hosted inside your property.
            </h2>
            <p className="mt-6 text-[#e8e4dc]/65 font-light leading-relaxed">
              Every retreat is also a production. You receive guests, content, and a long tail of
              destination exposure — all in one residency.
            </p>
          </div>

          <ul className="md:col-span-7 md:pl-10 md:border-l border-[#e8e4dc]/15 space-y-6" data-reveal>
            {deliverables.map((d, i) => (
              <li key={d} className="flex gap-6 items-baseline">
                <span className="mono text-[#c9a96a] w-8 shrink-0">0{i + 1}</span>
                <span className="serif text-xl sm:text-2xl text-[#f5f1e8]/90 leading-snug">
                  {d}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="px-6 sm:px-10 py-24 border-t border-[#e8e4dc]/10">
        <div className="max-w-6xl mx-auto" data-reveal>
          <p className="mono text-[#c9a96a] mb-12 text-center">Trusted by</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10">
            {partners.map((p) => (
              <div
                key={p}
                className="serif text-xl sm:text-2xl text-[#e8e4dc]/55 hover:text-[#f5f1e8] transition-colors duration-500 text-center"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section className="px-6 sm:px-10 py-24 sm:py-36 border-t border-[#e8e4dc]/10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-20" data-reveal>
            <p className="mono text-[#c9a96a] mb-6">Why this works</p>
            <h2 className="serif text-4xl sm:text-6xl leading-[1.05] text-[#f5f1e8]">
              A community, a film crew and a destination — aligned around one property.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#e8e4dc]/10">
            {[
              {
                k: "Doduka",
                t: "Brings the community",
                c: "A loyal audience of guests, students and followers who travel to practice with her — in Tbilisi, in Cyprus, in Rome.",
              },
              {
                k: "Nika",
                t: "Produces the story",
                c: "Cinematic photography and film, made on-site, delivered to both the hotel and our owned channels.",
              },
              {
                k: "Your hotel",
                t: "Becomes the destination",
                c: "Not a backdrop — the protagonist. The place a generation of wellness travellers learn to associate with the experience.",
              },
            ].map((b, i) => (
              <div key={b.k} data-reveal className="bg-[#0e0d0b] p-10 sm:p-12">
                <div className="mono text-[#c9a96a] mb-6">0{i + 1} · {b.k}</div>
                <h3 className="serif text-2xl sm:text-3xl text-[#f5f1e8] mb-4">{b.t}</h3>
                <p className="text-[#e8e4dc]/65 font-light leading-relaxed">{b.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="contact"
        className="relative px-6 sm:px-10 py-32 sm:py-44 border-t border-[#e8e4dc]/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0d0b] via-[#15130f] to-[#0e0d0b]" />
        <div className="relative max-w-4xl mx-auto text-center" data-reveal>
          <p className="mono text-[#c9a96a] mb-8">An invitation</p>
          <h2 className="serif text-5xl sm:text-7xl leading-[1.02] text-[#f5f1e8]">
            Tell us what your property can offer.
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-[#e8e4dc]/65 font-light text-lg leading-relaxed">
            We are currently selecting one hospitality partner in Georgia for our upcoming retreat
            series. Conversations are private and unhurried.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="mailto:dodukamoves@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#f5f1e8] text-[#0e0d0b] mono hover:bg-[#c9a96a] transition-colors duration-500"
            >
              Contact us
            </a>
            <a
              href="https://instagram.com/dodukamoves"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#e8e4dc]/30 mono hover:border-[#c9a96a] hover:text-[#c9a96a] transition-colors duration-500"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#e8e4dc]/30 mono hover:border-[#c9a96a] hover:text-[#c9a96a] transition-colors duration-500"
            >
              YouTube
            </a>
          </div>

          <a
            href="mailto:dodukamoves@gmail.com"
            className="mt-14 inline-block serif text-2xl sm:text-3xl text-[#c9a96a] hover:text-[#f5f1e8] transition-colors duration-500"
          >
            dodukamoves@gmail.com
          </a>
        </div>
      </section>

      <footer className="px-6 sm:px-10 py-10 border-t border-[#e8e4dc]/10 flex flex-col sm:flex-row justify-between gap-4 mono text-[#e8e4dc]/40">
        <span>© {new Date().getFullYear()} Doduka × Nika Shioshvili</span>
        <span>Tbilisi · Georgia</span>
      </footer>

      {/* Editorial fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=JetBrains+Mono:wght@400;500&display=swap"
      />
    </div>
  );
}

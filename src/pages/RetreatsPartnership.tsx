import { useEffect } from "react";

const BLUE = "#1A0099";
const ORANGE = "#FF5B39";
const CREAM = "#F7F0E9";
const GREEN = "#B7CF4F";

const stats = [
  { value: "14K+", label: "Instagram" },
  { value: "5,000+", label: "Classes taught" },
  { value: "10+", label: "Retreats hosted" },
  { value: "2.5K", label: "YouTube" },
  { value: "4 Yrs", label: "Of practice" },
];

const experiences = [
  {
    n: "01",
    tag: "International",
    title: "Cyprus Retreat",
    place: "Ayia Napa",
    copy: "A week of sea, silence and slow rituals — ten guests flown in from Tbilisi.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    accent: ORANGE,
  },
  {
    n: "02",
    tag: "Hospitality",
    title: "Hotel Retreat",
    place: "Private property",
    copy: "Three days, twenty guests, one instructor. Mornings to evenings, fully programmed.",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=80",
    accent: BLUE,
  },
  {
    n: "03",
    tag: "Brand",
    title: "Fitpass Event",
    place: "Mziuri Park, Tbilisi",
    copy: "Flagship outdoor session with Fitpass, Aversi and Fitshop — a city in movement.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
    accent: GREEN,
  },
  {
    n: "04",
    tag: "Nature",
    title: "Kiketi Workshops",
    place: "Georgian countryside",
    copy: "Intimate farm workshops — breath, movement and the quiet of working land.",
    img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1600&q=80",
    accent: ORANGE,
  },
  {
    n: "05",
    tag: "International",
    title: "ALO Rome",
    place: "Italy",
    copy: "Invited guest at ALO Yoga's Rome gathering — representing Georgia abroad.",
    img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=1600&q=80",
    accent: BLUE,
  },
];

const deliverables = [
  { k: "10–20", v: "Real, paying retreat guests inside your property" },
  { k: "Reels", v: "Premium Instagram reels, stories and grid content" },
  { k: "Vlog", v: "A full YouTube retreat vlog on our channel" },
  { k: "Photo", v: "Editorial photography of rooms, food and grounds" },
  { k: "Film", v: "Cinematic hotel film, yours to use forever" },
  { k: "Reach", v: "Long-term destination exposure to wellness travellers" },
];

export default function RetreatsPartnership() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Retreats — Doduka × Hospitality Partnerships";
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? "";
    meta?.setAttribute(
      "content",
      "A bright editorial proposal: luxury wellness retreats and cinematic content partnerships with boutique hotels in Georgia and the Mediterranean."
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => io.observe(el));

    return () => {
      document.title = prev;
      meta?.setAttribute("content", prevDesc);
      io.disconnect();
    };
  }, []);

  return (
    <div
      className="antialiased overflow-x-hidden"
      style={{ background: CREAM, color: BLUE }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300&family=Inter:wght@300;400;500&display=swap');
        .serif{font-family:'Fraunces',ui-serif,Georgia,serif;font-weight:300;letter-spacing:-0.035em;line-height:.92;}
        .sans{font-family:'Inter',ui-sans-serif,system-ui,sans-serif;}
        .mono-label{font-family:'Inter',sans-serif;font-size:11px;letter-spacing:.22em;text-transform:uppercase;font-weight:500;}
        html{scroll-behavior:smooth;}
        [data-reveal]{opacity:0;transform:translateY(28px);transition:opacity 1.1s cubic-bezier(.2,.7,.2,1),transform 1.1s cubic-bezier(.2,.7,.2,1);}
        [data-reveal].is-visible{opacity:1;transform:none;}
        .marquee{animation:marquee 38s linear infinite;}
        @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .grain{position:absolute;inset:0;pointer-events:none;opacity:.05;mix-blend-mode:multiply;background-image:radial-gradient(rgba(26,0,153,.6) 1px,transparent 1px);background-size:3px 3px;}
      `}</style>

      {/* Top bar */}
      <header className="absolute top-0 inset-x-0 z-30 px-5 sm:px-10 py-6 flex items-center justify-between">
        <span className="mono-label" style={{ color: BLUE }}>Doduka — Est. 2022</span>
        <span className="mono-label hidden sm:block" style={{ color: BLUE }}>Retreats · 2026</span>
      </header>

      {/* HERO */}
      <section className="relative min-h-[100svh] px-5 sm:px-10 pt-28 sm:pt-32 pb-12 overflow-hidden">
        <div className="grain" />

        {/* Floating tag */}
        <div className="absolute top-24 right-5 sm:top-28 sm:right-10 mono-label z-20" style={{ color: ORANGE }}>
          ✦ Summer Editorial · No. 01
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-6 items-start relative">
          {/* Headline */}
          <h1 className="col-span-12 md:col-span-8 serif relative z-10"
              style={{ fontSize: "clamp(64px,14vw,220px)" }}>
            <span className="block">RETREATS</span>
            <span className="block" style={{ paddingLeft: "0.18em" }}>THAT <em className="not-italic" style={{ color: ORANGE, fontStyle: "italic", fontFamily: "'Fraunces',serif", fontWeight: 300 }}><i>people</i></em></span>
            <span className="block">FEEL.</span>
          </h1>

          {/* Vertical image right */}
          <div
            className="hidden md:block md:col-span-4 relative aspect-[3/4] mt-6 rounded-sm overflow-hidden"
            data-reveal
          >
            <img
              src="https://images.unsplash.com/photo-1535262971677-2110a89d4ed5?auto=format&fit=crop&w=1200&q=80"
              alt="Mediterranean retreat morning light"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 mono-label" style={{ color: CREAM }}>
              Cyprus / 06:42
            </div>
          </div>
        </div>

        {/* Sub row */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 mt-10 sm:mt-16 relative">
          <div className="col-span-12 md:col-span-5 md:col-start-1 order-2 md:order-1" data-reveal>
            <div
              className="relative aspect-[5/4] sm:aspect-[5/3] rounded-sm overflow-hidden"
              style={{ background: BLUE }}
            >
              <img
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1600&q=80"
                alt="Coastal retreat practice"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-7 order-1 md:order-2 flex flex-col gap-6" data-reveal>
            <p className="sans text-base sm:text-lg leading-relaxed max-w-md" style={{ color: BLUE }}>
              Luxury wellness retreats, cinematic storytelling and hospitality
              partnerships — curated by <em className="not-italic" style={{ color: ORANGE }}>Doduka Gureshidze</em>.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#partnership"
                className="inline-flex items-center px-7 py-4 mono-label rounded-full transition-transform hover:-translate-y-0.5"
                style={{ background: BLUE, color: CREAM }}
              >
                View partnership →
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-4 mono-label rounded-full border-2 transition-colors"
                style={{ borderColor: BLUE, color: BLUE }}
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-6 overflow-hidden border-y-2" style={{ borderColor: BLUE, background: ORANGE }}>
        <div className="flex whitespace-nowrap marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10 pr-10 serif text-[44px] sm:text-[64px]" style={{ color: CREAM, fontStyle: "italic", fontWeight: 300 }}>
              <span>Tbilisi</span><span>✦</span>
              <span>Cyprus</span><span>✦</span>
              <span>Rome</span><span>✦</span>
              <span>Kiketi</span><span>✦</span>
              <span>Saburtalo</span><span>✦</span>
              <span>Mediterranean</span><span>✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="px-5 sm:px-10 py-24 sm:py-40 relative">
        <div className="grid grid-cols-12 gap-4 sm:gap-8">
          <div className="col-span-12 md:col-span-5 md:sticky md:top-20 md:self-start" data-reveal>
            <div className="mono-label mb-6" style={{ color: ORANGE }}>A — The Story</div>
            <h2 className="serif" style={{ fontSize: "clamp(48px,7vw,108px)", color: BLUE }}>
              She moves<br />
              a <em className="not-italic" style={{ color: GREEN }}><i>community</i></em>.
            </h2>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col gap-10" data-reveal>
            <p className="serif" style={{ fontSize: "clamp(22px,2.4vw,32px)", color: BLUE, lineHeight: 1.25 }}>
              Doduka Gureshidze is a Tbilisi-based instructor, retreat host and
              YouTube creator. Five thousand classes in, she has built one of
              Georgia's most loyal wellness audiences — people who travel to
              practice with her, from Tbilisi to Cyprus to Rome.
            </p>
            <p className="sans leading-relaxed" style={{ color: BLUE }}>
              Resident instructor at Vortex Fitness across Saburtalo, Dighomi and
              Gldani. Headline talent for Fitpass, Aversi, Fitshop and ALO Yoga.
              Producer Nika Shioshvili joins each retreat — photography,
              cinematography, the full story of a place.
            </p>

            <div className="grid grid-cols-2 gap-px" style={{ background: BLUE }}>
              {[
                ["5,000+", "Classes taught"],
                ["14K+", "Instagram"],
                ["2.5K", "YouTube"],
                ["Intl.", "Retreats"],
              ].map(([k, v]) => (
                <div key={k} className="p-5 sm:p-7" style={{ background: CREAM }}>
                  <div className="serif" style={{ fontSize: "clamp(34px,4vw,56px)", color: ORANGE }}>{k}</div>
                  <div className="mono-label mt-2" style={{ color: BLUE }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE GRID */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 relative" style={{ background: BLUE, color: CREAM }}>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 sm:mb-24" data-reveal>
          <h2 className="serif" style={{ fontSize: "clamp(48px,9vw,140px)", color: CREAM }}>
            Selected<br /><em className="not-italic" style={{ color: GREEN }}><i>experiences.</i></em>
          </h2>
          <div className="mono-label" style={{ color: ORANGE }}>B — Five chapters</div>
        </div>

        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {experiences.map((e, i) => {
            // asymmetric layout: alternate sizes & offsets
            const layouts = [
              "col-span-12 md:col-span-7",
              "col-span-12 md:col-span-5 md:mt-20",
              "col-span-12 md:col-span-5",
              "col-span-12 md:col-span-7 md:mt-16",
              "col-span-12 md:col-span-8 md:col-start-3",
            ];
            return (
              <article key={e.title} className={layouts[i]} data-reveal>
                <div className="relative overflow-hidden rounded-sm group">
                  <div className="aspect-[4/5] sm:aspect-[5/6] overflow-hidden">
                    <img
                      src={e.img}
                      alt={e.title}
                      className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="absolute top-4 left-4 mono-label px-3 py-1 rounded-full" style={{ background: e.accent, color: e.accent === GREEN ? BLUE : CREAM }}>
                    {e.n} · {e.tag}
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-6">
                  <h3 className="serif" style={{ fontSize: "clamp(32px,4vw,56px)", color: CREAM }}>
                    {e.title}
                  </h3>
                  <span className="mono-label shrink-0" style={{ color: GREEN }}>{e.place}</span>
                </div>
                <p className="sans mt-3 max-w-md leading-relaxed" style={{ color: CREAM, opacity: 0.78 }}>
                  {e.copy}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section id="partnership" className="px-5 sm:px-10 py-24 sm:py-40">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start">
          <div className="col-span-12 md:col-span-6" data-reveal>
            <div className="mono-label mb-6" style={{ color: ORANGE }}>C — The Partnership</div>
            <h2 className="serif" style={{ fontSize: "clamp(48px,8vw,128px)", color: BLUE }}>
              A campaign,<br />
              <em className="not-italic" style={{ color: ORANGE }}><i>hosted</i></em><br />
              inside your<br />
              property.
            </h2>
            <p className="sans mt-8 max-w-md leading-relaxed" style={{ color: BLUE }}>
              Every retreat is also a production. You receive guests, content
              and a long tail of destination exposure — one residency, one
              cinematic asset library, one new wave of travellers.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 md:pl-10">
            <ul className="space-y-px" style={{ background: BLUE }}>
              {deliverables.map((d) => (
                <li
                  key={d.k}
                  data-reveal
                  className="grid grid-cols-12 gap-4 items-baseline p-5 sm:p-7 transition-colors"
                  style={{ background: CREAM }}
                >
                  <span className="col-span-3 serif" style={{ fontSize: "clamp(28px,3vw,44px)", color: ORANGE }}>
                    {d.k}
                  </span>
                  <span className="col-span-9 sans leading-snug" style={{ color: BLUE, fontSize: "17px" }}>
                    {d.v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-16 sm:py-24 border-y-2 relative overflow-hidden" style={{ background: GREEN, borderColor: BLUE }}>
        <div className="px-5 sm:px-10 mono-label mb-10" style={{ color: BLUE }}>D — In numbers</div>
        <div className="px-5 sm:px-10 grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6">
          {stats.map((s, i) => (
            <div key={s.label} data-reveal className={i % 2 === 1 ? "md:mt-10" : ""}>
              <div className="serif" style={{ fontSize: "clamp(56px,8vw,128px)", color: BLUE }}>
                {s.value}
              </div>
              <div className="mono-label mt-2" style={{ color: BLUE }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="px-5 sm:px-10 py-32 sm:py-52 relative">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-10 md:col-start-2 text-center" data-reveal>
            <div className="mono-label mb-8" style={{ color: ORANGE }}>E — An invitation</div>
            <h2 className="serif" style={{ fontSize: "clamp(56px,11vw,180px)", color: BLUE }}>
              Tell us what<br />
              your <em className="not-italic" style={{ color: ORANGE }}><i>property</i></em><br />
              can offer.
            </h2>
            <p className="sans mt-10 max-w-xl mx-auto leading-relaxed" style={{ color: BLUE }}>
              We are currently selecting hospitality partners for upcoming
              retreat experiences. Conversations are private and unhurried.
            </p>

            <a
              href="mailto:dodukamoves@gmail.com"
              className="mt-12 inline-block serif underline decoration-2 underline-offset-[10px] hover:opacity-70 transition-opacity"
              style={{ fontSize: "clamp(28px,4.5vw,56px)", color: BLUE, textDecorationColor: ORANGE }}
            >
              dodukamoves@gmail.com
            </a>

            <div className="mt-14 flex flex-wrap gap-3 justify-center">
              <a
                href="https://instagram.com/dodukamoves"
                target="_blank" rel="noreferrer"
                className="px-6 py-3 mono-label rounded-full border-2"
                style={{ borderColor: BLUE, color: BLUE }}
              >
                Instagram ↗
              </a>
              <a
                href="https://youtube.com"
                target="_blank" rel="noreferrer"
                className="px-6 py-3 mono-label rounded-full"
                style={{ background: BLUE, color: CREAM }}
              >
                YouTube ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 sm:px-10 py-10 border-t-2 flex flex-col sm:flex-row justify-between gap-4 mono-label" style={{ borderColor: BLUE, color: BLUE }}>
        <span>© {new Date().getFullYear()} Doduka × Nika Shioshvili</span>
        <span>Tbilisi · Mediterranean · 2026</span>
      </footer>
    </div>
  );
}

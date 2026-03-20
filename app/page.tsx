import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

const missions = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Soins non programmés",
    description:
      "Garantir l'accès aux soins urgents et non programmés pour tous les habitants du territoire, en dehors des horaires habituels.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Prévention & promotion de la santé",
    description:
      "Développer des actions collectives de prévention, de dépistage et d'éducation à la santé adaptées aux besoins locaux.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Coordination des parcours",
    description:
      "Assurer la continuité et la fluidité des parcours de soins pour les patients, notamment les plus fragiles et les personnes âgées.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Amélioration des pratiques",
    description:
      "Favoriser l'amélioration continue des pratiques professionnelles grâce à des retours d'expérience et des protocoles partagés.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Protocoles de coopération",
    description:
      "Concevoir et déployer des protocoles de coopération entre professionnels de santé pour optimiser la prise en charge des patients.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Formation & recherche",
    description:
      "Soutenir la formation continue des professionnels et participer à des projets de recherche en santé primaire sur le territoire.",
  },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-gray-800" style={{ fontFamily: "var(--font-geist-sans, Arial, sans-serif)" }}>
      {/* ── HEADER ── */}
      <Header />

      {/* ── HERO ── */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.55 }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay to keep text readable */}
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#6B5B8E] text-xs font-semibold tracking-widest uppercase mb-4 border border-[#6B5B8E] rounded-full px-4 py-1">
            Communauté Professionnelle Territoriale de Santé
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Améliorons l'accès aux soins <span className="text-[#6B5B8E]">sur notre territoire</span>
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Professionnels de santé unis pour améliorer l&apos;accès aux soins, la prévention
            et la coordination des parcours de santé sur notre territoire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#qui-sommes-nous"
              className="bg-[#6B5B8E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a4a7a] transition-colors"
            >
              Découvrir la CPTS
            </a>
            <a
              href="https://www.helloasso.com/associations/cpts-porte-de-france-moselle/adhesions/adhesion-2026-cpts-porte-de-france-moselle"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#6B5B8E] text-[#6B5B8E] px-8 py-3 rounded-lg font-semibold hover:bg-[#6B5B8E] hover:text-white transition-colors"
            >
              Rejoindre la communauté
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section id="stats" className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { value: "207", label: "Professionnels de santé" },
            { value: "32", label: "Communes couvertes" },
            { value: "6", label: "Axes stratégiques" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-[#6B5B8E] border-opacity-20 rounded-2xl p-8"
              style={{ borderColor: "#6B5B8E33" }}
            >
              <p className="text-5xl font-bold text-[#6B5B8E] mb-2">{stat.value}</p>
              <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUI SOMMES-NOUS ── */}
      <section id="qui-sommes-nous" className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#6B5B8E] text-xs font-semibold tracking-widest uppercase">
              Notre identité
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
              Qui sommes-nous ?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              La CPTS Porte de France Moselle regroupe des professionnels de santé de ville —
              médecins, infirmiers, pharmaciens, kinésithérapeutes et bien d&apos;autres — engagés
              collectivement pour structurer l&apos;offre de soins de premier recours sur leur
              territoire.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Créée dans le cadre de la loi Ma Santé 2022, notre CPTS travaille en partenariat
              étroit avec l&apos;Assurance Maladie, l&apos;ARS Grand Est et les collectivités locales
              pour répondre aux défis de l&apos;accès aux soins dans un territoire rural et
              péri-urbain.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/carte.png"
              alt="Carte du territoire CPTS Porte de France Moselle"
              width={480}
              height={360}
              className="rounded-2xl object-contain w-full"
            />
            <p className="text-sm text-gray-500 leading-relaxed mt-4 text-center">
              La CPTS Porte de France Moselle regroupe plus de 207 professionnels de santé pour améliorer l&apos;accès aux soins et coordonner les parcours de santé sur 32 communes de Forbach et ses environs.
            </p>
          </div>
        </div>
      </section>

      {/* ── MISSIONS ── */}
      <section id="missions" className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#6B5B8E] text-xs font-semibold tracking-widest uppercase">
              Ce que nous faisons
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Nos 6 missions</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Chaque mission répond à un enjeu de santé identifié sur le territoire, en cohérence
              avec les orientations nationales du projet de santé CPTS.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission) => (
              <div
                key={mission.title}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-[#6B5B8E] mb-4">{mission.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{mission.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section id="contact" className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center" style={{ border: "2px solid #6B5B8E33", borderRadius: "1.5rem", padding: "3rem" }}>
          <div className="text-[#6B5B8E] mb-4 flex justify-center">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Rejoignez la CPTS</h2>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">
            Vous êtes professionnel de santé sur le territoire Porte de France Moselle ?
            Rejoignez notre communauté et participez à la construction d&apos;une offre de soins
            coordonnée et de qualité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@cptsportedefrancemoselle.fr"
              className="bg-[#6B5B8E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a4a7a] transition-colors"
            >
              Envoyer un e-mail
            </a>
            <a
              href="tel:+33675039027"
              className="border-2 border-[#6B5B8E] text-[#6B5B8E] px-8 py-3 rounded-lg font-semibold hover:bg-[#6B5B8E] hover:text-white transition-colors"
            >
              Nous appeler
            </a>
          </div>
        </div>
      </section>

      {/* ── PARTENAIRES ── */}
      <section className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-[#6B5B8E] text-xs font-semibold tracking-widest uppercase border border-[#6B5B8E] rounded-full px-4 py-1">
              Ils nous font confiance
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-4">Nos partenaires</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { src: "/partenaires/carte rose modifiée.jpg", alt: "Carte rose" },
              { src: "/partenaires/LOGOFCPTS-1.png", alt: "FCPTS" },
              { src: "/partenaires/depmoselle.png", alt: "Département Moselle" },
              { src: "/partenaires/asbh.png", alt: "ASBH" },
              { src: "/partenaires/avs.png", alt: "AVS" },
              { src: "/partenaires/logo_chic_landing.png", alt: "CHIC" },
              { src: "/partenaires/convergence.png", alt: "Convergence" },
              { src: "/partenaires/dac.png", alt: "DAC" },
              { src: "/partenaires/spicg.webp", alt: "SPICG" },
              { src: "/partenaires/logo-wads-standard-m6LZ5ML8lPFXRa1n.webp", alt: "WADS" },
              { src: "/partenaires/Logo_CA_Forbach_Porte_de_France.jpg", alt: "CA Forbach Porte de France" },
              { src: "/partenaires/logo_CC-Freyming-dark-768x285.png", alt: "CC Freyming" },
              { src: "/partenaires/logo cpam.png", alt: "CPAM" },
              { src: "/partenaires/logo ars GE.png", alt: "ARS Grand Est" },
              { src: "/partenaires/Logo_Saint_Avold_Synergie.png", alt: "Saint-Avold Synergie" },
            ].map((p) => (
              <div key={p.src} className="flex items-center justify-center">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={140}
                  height={70}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

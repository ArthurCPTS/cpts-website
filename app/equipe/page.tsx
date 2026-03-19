import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const equipe = [
  {
    nom: "Sophie Klein",
    poste: "Coordinatrice",
    photo: "/employe/Sophie.jpg",
  },
  {
    nom: "Arthur Comisso",
    poste: "Coordinateur",
    photo: "/employe/Arthur.JPG",
  },
  {
    nom: "Flore Nugara",
    poste: "Chargée de communication",
    photo: "/employe/Flore.jpg",
  },
];

export default function Equipe() {
  return (
    <div
      className="bg-white min-h-screen text-gray-800"
      style={{ fontFamily: "var(--font-geist-sans, Arial, sans-serif)" }}
    >
      <Header />

      {/* ── HERO ── */}
      <section className="py-16 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#6B5B8E] text-xs font-semibold tracking-widest uppercase border border-[#6B5B8E] rounded-full px-4 py-1 mb-4">
            Notre équipe
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">L&apos;équipe</h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
            Les salariés qui coordonnent et animent la CPTS Porte de France Moselle au quotidien.
          </p>
        </div>
      </section>

      {/* ── MEMBRES ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-10 justify-center items-stretch">
          {equipe.map((m) => (
            <div
              key={m.nom}
              className="flex-1 border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <div className="w-40 h-40 rounded-2xl overflow-hidden mb-5 flex-shrink-0">
                <Image
                  src={m.photo}
                  alt={m.nom}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-bold text-gray-900 text-base mb-1">{m.nom}</p>
              <span className="inline-block bg-[#6B5B8E]/10 text-[#6B5B8E] text-xs font-semibold px-3 py-1 rounded-full">
                {m.poste}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

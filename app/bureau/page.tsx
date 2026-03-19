import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const membres = [
  {
    nom: "Edwige Pesch-Caneau",
    role: "Pharmacienne",
    poste: "Co-Présidente",
    photo: "/bureau/edwige.webp",
  },
  {
    nom: "Dr Pierre-Emmanuel Stines",
    role: "Médecin généraliste",
    poste: "Co-Président",
    photo: "/bureau/Pierre Emmanuel.jpg",
  },
  {
    nom: "Laurence Killian",
    role: "Pharmacienne",
    poste: "Trésorière",
    photo: "/bureau/laurence-2-Y4LDlkKgM8HovZlp.webp",
  },
  {
    nom: "Laurence Laudwein",
    role: "Infirmière libérale",
    poste: "Vice-Trésorière",
    photo: null,
  },
  {
    nom: "Marion Koenigsecker",
    role: "Infirmière libérale",
    poste: "Secrétaire",
    photo: null,
  },
  {
    nom: "Jessica Tauty",
    role: "Infirmière libérale",
    poste: "Vice-Secrétaire",
    photo: null,
  },
  {
    nom: "Michel Reisdorf",
    role: "Masseur kinésithérapeute",
    poste: "Assesseur",
    photo: "/bureau/michel reisdorf.png",
  },
  {
    nom: "Christophe Rikenbach",
    role: "Infirmier libéral",
    poste: "Vice-Secrétaire",
    photo: null,
  },
  {
    nom: "Nadine Thil Stines",
    role: "Médecin",
    poste: "Assesseure",
    photo: null,
  },
];

function Initiales({ nom }: { nom: string }) {
  const parts = nom.replace(/^Dr\s+/, "").split(" ");
  const initiales = parts
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#6B5B8E]/10 rounded-2xl">
      <span className="text-3xl font-bold text-[#6B5B8E]">{initiales}</span>
    </div>
  );
}

export default function Bureau() {
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
            Gouvernance
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Le bureau</h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
            Les professionnels de santé élus pour piloter et animer la CPTS Porte de France Moselle.
          </p>
        </div>
      </section>

      {/* ── MEMBRES ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
          {membres.map((m) => (
            <div
              key={m.nom}
              className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              {/* Photo ou initiales */}
              <div className="w-40 h-40 rounded-2xl overflow-hidden mb-4 flex-shrink-0">
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={m.nom}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Initiales nom={m.nom} />
                )}
              </div>

              {/* Infos */}
              <p className="font-bold text-gray-900 text-sm leading-tight mb-1">{m.nom}</p>
              <p className="text-xs text-gray-500 mb-2">{m.role}</p>
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

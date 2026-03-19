import fs from "fs";
import path from "path";
import Header from "../components/Header";
import Footer from "../components/Footer";

function renderLegalContent(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Numbered sections like "1\. Title" or "1. Title"
    const numberedSection = trimmed.match(/^\d+\\?\.\s+(.+)$/);
    if (numberedSection) {
      elements.push(
        <h2 key={key++} className="text-xl font-bold text-gray-900 mt-10 mb-3 pt-6 border-t border-gray-100">
          {trimmed.replace(/\\/g, "")}
        </h2>
      );
      continue;
    }

    // Regular line
    elements.push(
      <p key={key++} className="text-gray-600 leading-relaxed my-2">
        {trimmed}
      </p>
    );
  }

  return elements;
}

export default function PolitiqueDeConfidentialite() {
  const filePath = path.join(process.cwd(), "content", "Declarationdeconfidentialite.md");
  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <div className="bg-white min-h-screen text-gray-800" style={{ fontFamily: "var(--font-geist-sans, Arial, sans-serif)" }}>
      <Header />

      {/* ── HERO ── */}
      <section className="py-16 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#6B5B8E] text-xs font-semibold tracking-widest uppercase border border-[#6B5B8E] rounded-full px-4 py-1 mb-4">
            Confidentialité
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Politique de confidentialité</h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
            Protection des données personnelles (RGPD)
          </p>
        </div>
      </section>

      {/* ── CONTENU ── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {renderLegalContent(content)}
        </div>
      </section>

      <Footer />
    </div>
  );
}

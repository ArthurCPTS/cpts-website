import fs from "fs";
import path from "path";
import Header from "../components/Header";
import Footer from "../components/Footer";

function renderLegalContent(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Numbered sections like "1. Title" or "1\. Title"
    const numberedSection = line.match(/^\d+\\?\.\s+(.+)$/);
    if (numberedSection) {
      elements.push(
        <h2 key={key++} className="text-xl font-bold text-gray-900 mt-10 mb-3 pt-6 border-t border-gray-100">
          {line.replace(/\\/g, "")}
        </h2>
      );
      continue;
    }

    // Short standalone lines = section headings (< 60 chars, not ending with punctuation typical of sentences)
    const isSectionTitle =
      line.length < 60 &&
      !line.endsWith(".") &&
      !line.endsWith(",") &&
      !line.startsWith("http") &&
      !line.startsWith("+33") &&
      !line.includes("@") &&
      i < lines.length - 1;

    if (isSectionTitle && line === line) {
      // Check if next non-empty line is longer (confirming it's a title)
      let nextNonEmpty = "";
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].trim()) { nextNonEmpty = lines[j].trim(); break; }
      }
      if (nextNonEmpty.length > line.length || line.length < 35) {
        elements.push(
          <h2 key={key++} className="text-xl font-bold text-gray-900 mt-8 mb-3">
            {line}
          </h2>
        );
        continue;
      }
    }

    // Regular paragraph
    elements.push(
      <p key={key++} className="text-gray-600 leading-relaxed my-2">
        {line}
      </p>
    );
  }

  return elements;
}

export default function MentionsLegales() {
  const filePath = path.join(process.cwd(), "content", "mentionslegales.md");
  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <div className="bg-white min-h-screen text-gray-800" style={{ fontFamily: "var(--font-geist-sans, Arial, sans-serif)" }}>
      <Header />

      {/* ── HERO ── */}
      <section className="py-16 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#6B5B8E] text-xs font-semibold tracking-widest uppercase border border-[#6B5B8E] rounded-full px-4 py-1 mb-4">
            Légal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mentions légales</h1>
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

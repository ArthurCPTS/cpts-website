import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllArticles, formatDate } from "../../lib/actualites";

export default function Actualites() {
  const articles = getAllArticles();

  return (
    <div className="bg-white min-h-screen text-gray-800" style={{ fontFamily: "var(--font-geist-sans, Arial, sans-serif)" }}>
      <Header />

      {/* ── HERO ── */}
      <section className="py-16 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#6B5B8E] text-xs font-semibold tracking-widest uppercase border border-[#6B5B8E] rounded-full px-4 py-1 mb-4">
            News
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Actualités</h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
            Retrouvez les dernières actions, événements et informations de la CPTS Porte de France Moselle.
          </p>
        </div>
      </section>

      {/* ── LISTE ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/actualites/${article.slug}`}
              className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Image */}
              {article.image && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.titre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Contenu */}
              <div className="p-6 flex flex-col flex-1">
                {article.categorie && (
                  <span className="inline-block text-[#6B5B8E] text-xs font-semibold tracking-widest uppercase mb-3">
                    {article.categorie}
                  </span>
                )}
                <h2 className="font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-[#6B5B8E] transition-colors">
                  {article.titre}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
                  {article.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{formatDate(article.date)}</span>
                  <span className="text-xs font-semibold text-[#6B5B8E]">Lire →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

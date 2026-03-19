import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getAllArticles, getArticleBySlug, formatDate } from "../../../lib/actualites";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

function renderMarkdown(md: string): string {
  return md
    // Titres
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-gray-900 mt-10 mb-4">$1</h1>')
    // Gras
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    // Listes à puces
    .replace(/^- (.+)$/gm, '<li class="ml-5 list-disc text-gray-600 leading-relaxed">$1</li>')
    .replace(/(<li[\s\S]*?<\/li>)/g, '<ul class="my-4 space-y-1">$1</ul>')
    // Tableaux markdown
    .replace(/^\|(.+)\|$/gm, (line) => {
      if (line.includes('---')) return '';
      const cells = line.split('|').filter(Boolean).map(c => c.trim());
      const isHeader = false;
      return `<tr>${cells.map(c => `<td class="border border-gray-200 px-4 py-2 text-sm text-gray-600">${c}</td>`).join('')}</tr>`;
    })
    // Paragraphes
    .replace(/^(?!<[hul]|<tr|<li)(.+)$/gm, '<p class="text-gray-600 leading-relaxed my-3">$1</p>')
    // Nettoyer les lignes vides
    .replace(/^\s*$/gm, '');
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <div className="bg-white min-h-screen text-gray-800" style={{ fontFamily: "var(--font-geist-sans, Arial, sans-serif)" }}>
      <Header />

      {/* ── IMAGE HEADER ── */}
      {article.image && (
        <div className="relative w-full h-72 md:h-96">
          <Image
            src={article.image}
            alt={article.titre}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/40" />
        </div>
      )}

      {/* ── ARTICLE ── */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Meta */}
        <div className="mb-6 flex items-center gap-4 flex-wrap">
          {article.categorie && (
            <span className="inline-block text-[#6B5B8E] text-xs font-semibold tracking-widest uppercase border border-[#6B5B8E] rounded-full px-3 py-1">
              {article.categorie}
            </span>
          )}
          <span className="text-sm text-gray-400">{formatDate(article.date)}</span>
          {article.auteur && (
            <span className="text-sm text-gray-400">par {article.auteur}</span>
          )}
        </div>

        {/* Titre */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
          {article.titre}
        </h1>

        {/* Contenu */}
        <div
          className="prose-cpts"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(article.contenu) }}
        />

        {/* Retour */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <a
            href="/actualites"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B5B8E] hover:text-[#5a4a7a] transition-colors"
          >
            ← Retour aux actualités
          </a>
        </div>
      </article>

      <Footer />
    </div>
  );
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DIR = path.join(process.cwd(), "content", "actualites");

export type Article = {
  slug: string;
  titre: string;
  date: string;
  image: string;
  description: string;
  categorie: string;
  auteur: string;
  contenu: string;
};

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(DIR, filename), "utf-8");
      const { data, content } = matter(raw);

      if (!data.titre) return null;

      return {
        slug,
        titre: data.titre,
        date: data.date ?? "",
        image: data.image ?? "",
        description: data.description ?? "",
        categorie: data.categorie ?? "",
        auteur: data.auteur ?? "",
        contenu: content,
      } as Article;
    })
    .filter((a): a is Article => a !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | null {
  const filepath = path.join(DIR, `${slug}.md`);
  if (!fs.existsSync(filepath)) return null;

  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    titre: data.titre ?? slug,
    date: data.date ?? "",
    image: data.image ?? "",
    description: data.description ?? "",
    categorie: data.categorie ?? "",
    auteur: data.auteur ?? "",
    contenu: content,
  };
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

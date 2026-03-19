# CLAUDE.md — CPTS Porte de France Moselle

## Contexte du projet

Site internet de la **CPTS Porte de France Moselle**, une association regroupant des professionnels de santé (médecins, infirmiers, pharmaciens, kinésithérapeutes, etc.) autour d'un territoire commun : **Forbach et ses environs, 32 communes, plus de 207 professionnels**.

La coordination est assurée par **Sophie** et **Arthur**.

### Fonctionnalités présentes ou à venir
- Page d'accueil institutionnelle (missions, identité, stats, contact)
- Annuaire des professionnels de santé
- Annuaire obésité
- Aides de nomenclature pour les professionnels
- Ressources utiles pour les professionnels de santé
- Actualités de la CPTS
- Adhésion à l'association (via HelloAsso)
- Chatbot Zapier intégré

### Contacts & liens importants
- Email : hello@cptsportedefrancemoselle.fr
- Téléphone : +33 6 75 03 90 27
- Adhésion : https://www.helloasso.com/associations/cpts-porte-de-france-moselle/adhesions/adhesion-2026-cpts-porte-de-france-moselle

---

## Stack technique

- **Framework** : Next.js (App Router)
- **Styles** : Tailwind CSS v4
- **Langue** : Français (tout le contenu visible est en français)
- **Polices** : Geist Sans / Geist Mono (Google Fonts via next/font)
- **Images** : next/image
- **Chatbot** : Zapier Interfaces (web component `<zapier-interfaces-chatbot-embed>`)

---

## Design System — Style CPTS

Ce style est la référence pour toutes les interfaces liées à la CPTS. Il doit être cohérent sur tout le site et réutilisable dans d'autres outils (outils internes, annuaires, apps coordinateurs, etc.).

### Couleurs

| Rôle | Valeur |
|---|---|
| Couleur primaire (violet CPTS) | `#6B5B8E` |
| Primaire hover / foncé | `#5a4a7a` |
| Fond principal | `#ffffff` (blanc pur) |
| Texte principal | `#1f2937` (gray-900) |
| Texte secondaire / descriptions | `#6b7280` (gray-500) |
| Texte très discret | `#9ca3af` (gray-400) |
| Bordures légères | `#f3f4f6` (gray-100) |
| Bordure accentuée (violet transparent) | `#6B5B8E33` (20% opacité) |

> Pas de dark mode. Le site est exclusivement en fond blanc.

### Typographie

- Police : Geist Sans (ou Arial en fallback)
- Corps de texte : `text-sm` ou `text-base`, `text-gray-500`, `leading-relaxed`
- Titres de section : `text-3xl font-bold text-gray-900`
- Titres de page (h1) : `text-4xl md:text-5xl font-bold text-gray-900`
- Sur-titres (labels de section) : `text-xs font-semibold tracking-widest uppercase text-[#6B5B8E]`
- Titres de cartes : `font-bold text-gray-900`

### Composants récurrents

**Bouton primaire (plein) :**
```
bg-[#6B5B8E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a4a7a] transition-colors
```

**Bouton secondaire (outline) :**
```
border-2 border-[#6B5B8E] text-[#6B5B8E] px-8 py-3 rounded-lg font-semibold hover:bg-[#6B5B8E] hover:text-white transition-colors
```

**Bouton compact (nav) :**
```
bg-[#6B5B8E] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#5a4a7a] transition-colors font-medium
```

**Carte (card) :**
```
border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow
```

**Carte avec bordure violette :**
```
border rounded-2xl p-8 (borderColor: "#6B5B8E33")
```

**Lien de navigation :**
```
text-sm text-gray-600 hover:text-[#6B5B8E] transition-colors font-medium
```

**Badge / étiquette de section :**
```
inline-block text-[#6B5B8E] text-xs font-semibold tracking-widest uppercase border border-[#6B5B8E] rounded-full px-4 py-1
```

**Header sticky :**
```
bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm
```

**Container standard :**
```
max-w-5xl mx-auto px-6   (ou max-w-4xl / max-w-6xl selon section)
```

**Dropdown hover (nav) :**
```
absolute top-full mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-lg
opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50
```

### Icônes

SVG inline, style `fill="none" stroke="currentColor"`, `strokeWidth={2}`, classes `w-8 h-8` (cartes) ou `w-10 h-10` (CTA). Couleur héritée via `text-[#6B5B8E]` sur le parent.

### Layout & espacements

- Sections : `py-20 px-6` (standard), `py-16 px-6` (compact)
- Grilles : `grid md:grid-cols-2 gap-12` ou `grid md:grid-cols-2 lg:grid-cols-3 gap-6`
- Séparateurs de sections : `border-t border-gray-100`

---

## Commandes

```bash
npm run dev      # Démarrage local
npm run build    # Build production
npm run lint     # Lint ESLint
```

---

## Règles & conventions

- **Tout le contenu visible est en français.**
- Pas de dark mode — fond blanc uniquement.
- Le violet `#6B5B8E` est la couleur identitaire de la CPTS, à utiliser systématiquement pour les accents, icônes, liens actifs, boutons primaires.
- Arrondi des coins : `rounded-lg` (boutons), `rounded-2xl` (cartes, images, blocs).
- Pas de bordures épaisses ni de couleurs vives autres que le violet CPTS.
- Le style doit rester **sobre, professionnel, médical** — pas de gradients complexes ni d'effets tape-à-l'œil.

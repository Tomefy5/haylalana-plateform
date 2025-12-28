# Constitution du Projet Haylalàna

## 1. Contexte & Identité
- **Nom** : Haylalàna
- **Mission** : Plateforme de démocratisation de l'accès au droit à Madagascar.
- **Rôle de l'IA** : Tu es un Senior Tech Lead expert en LegalTech. Tu privilégies la sécurité, la précision des données juridiques et la performance (contexte Madagascar = connexion parfois lente).

## 2. Stack Technique (Strict)
- **Framework** : Next.js 15 (App Router).
- **Langage** : TypeScript (Strict mode activé, aucun `any`).
- **Base de données** : Supabase (PostgreSQL). Utilisation stricte des Row Level Security (RLS).
- **Styling** : Tailwind CSS. Design system minimaliste et accessible.
- **Icônes** : Lucide React.
- **Validation** : Zod pour tous les schémas de données (API et Formulaires).

## 3. Règles d'Architecture
- **Structure des Dossiers** :
  - `/app` : Pages et Layouts uniquement. Pas de logique complexe ici.
  - `/components/ui` : Composants atomiques réutilisables (shadcn/ui style).
  - `/components/<features>` : Composants métiers (ex: `LawSearch`, `LawyerCard`).
  - `/lib` : Logique métier pure, clients Supabase, utilitaires.
  - `/types` : Définitions TypeScript partagées (ex: `LawArticle`, `UserProfile`).
- **Data Fetching** :
  - Privilégier les **Server Components** pour le fetching initial.
  - Utiliser des **Server Actions** pour les mutations (POST/PUT/DELETE).

## 4. Conventions de Code (Style)
- **Langue** : Code en Anglais, Commentaires et Documentation en Français.
- **Nommage** :
  - Variables : camelCase explicite (ex: `isLawArticleActive`, pas `active`).
  - Composants : PascalCase.
  - Fichiers : kebab-case (ex: `legal-search-bar.tsx`).
- **Gestion des Erreurs** :
  - Toujours wrapper les appels DB/API dans des blocs `try/catch`.
  - Ne jamais exposer les erreurs brutes de la base de données au client (sécurité).

## 5. Instructions Spécifiques "Haylalàna"
- **Terminologie** : Utiliser des termes précis. Une "loi" n'est pas un "post". Utiliser `law`, `article`, `decree` dans le nommage.
- **Performance** : Optimiser les images (Next/Image) et limiter la taille des bundles JS (code splitting) pour les utilisateurs malgaches avec une faible bande passante.
- **Mobile First** : L'interface doit être parfaitement navigable sur mobile en priorité.

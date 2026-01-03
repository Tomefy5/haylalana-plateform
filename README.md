<div align="center">
  <img src="public/haylalana-logo.png" alt="Haylalàna Logo" width="120" height="120" />
  
  # Haylalàna

  **La première plateforme malgache de démocratisation du droit**
  
  *"Je connais mes droits, j'ose les faire valoir"*

  [![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.1-61DAFB?style=flat-square&logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-Private-red?style=flat-square)]()

</div>

---

## 🎯 Vision

Être **la référence numérique du droit vulgarisé** à Madagascar, puis en Afrique francophone.

Un espace où chaque citoyen peut comprendre ses droits, ses devoirs, et les moyens d'agir.

## 🔥 Problèmes Résolus

| Problème | Impact | Solution Haylalàna |
|----------|--------|-------------------|
| **Inaccessibilité juridique** | Citoyens vulnérables | Contenus vulgarisés en français et malgache |
| **Coût des consultations** | Renoncement aux droits | Guides gratuits + annuaire transparent |
| **Manque de visibilité** | Marché fragmenté | Plateforme de mise en relation |
| **Déficit éducatif** | Abus non contestés | Éducation citoyenne gamifiée |

## ✨ Fonctionnalités

### 🏠 Pour les Citoyens
- **Dashboard personnalisé** avec système de progression et badges
- **Passeport Juridique** : suivi des apprentissages et compétences acquises
- **Conseiller IA** : assistant virtuel juridique disponible 24/7
- **Guide des Démarches** : accompagnement pas-à-pas avec cartes et horaires

### 🏢 Pour les Professionnels
- **Tableau de bord Pro** avec indicateur de santé juridique
- **Gestion des Obligations** : timeline des échéances fiscales et légales
- **Simulateur de Charges** : calculs automatisés (IRSA, CNAPS, etc.)
- **Générateur de Contrats** : templates légaux prêts à l'emploi

### 📚 Contenus Éducatifs
- Guides par profil : Enfants, Jeunes, Adultes, Startups
- Quiz interactifs avec système XP
- Articles de blog juridiques
- Textes de loi vulgarisés

## 🛠️ Stack Technique

```
Frontend
├── Next.js 15.5 (App Router)
├── React 19.1
├── TypeScript 5
├── TailwindCSS 4
└── Radix UI (Composants accessibles)

Fonctionnalités
├── next-intl (i18n - FR/MG)
├── next-pwa (Progressive Web App)
├── react-hook-form + zod (Formulaires)
└── lucide-react (Icônes)
```

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/Tomefy5/haylalana-plateform.git
cd haylalana-plateform

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

### Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | Vérification ESLint |

## 📁 Structure du Projet

```
src/
├── app/
│   └── [locale]/           # Routes internationalisées
│       ├── dashboard/      # Dashboards Citoyen & Pro
│       │   ├── citizen/    # Espace citoyen
│       │   ├── pro/        # Espace professionnel
│       │   ├── advisor/    # Conseiller IA
│       │   └── procedures/ # Guide des démarches
│       ├── login/          # Authentification
│       ├── register/       # Inscription
│       ├── contents/       # Contenus éducatifs
│       └── blog/           # Articles
├── components/
│   ├── ui/                 # Composants réutilisables
│   ├── auth/               # Formulaires d'auth
│   ├── dashboard/          # Sidebar, navigation
│   └── layout/             # Navbar, Footer
└── lib/                    # Utilitaires
```

## 🌍 Internationalisation

Le projet supporte deux langues :
- 🇫🇷 **Français** (par défaut)
- 🇲🇬 **Malgache**

Les fichiers de traduction sont dans `/locales/`.

## 💎 Valeurs

| Valeur | Description |
|--------|-------------|
| **Accessibilité** | Le droit à la portée de tous |
| **Connaissance** | Éducation utile, vivante et quotidienne |
| **Empowerment** | Le droit comme outil d'émancipation |
| **Impact Social** | Changement réel dans la société |
| **Équité** | Justice de l'information pour tous |

## 🤝 Contribution

Ce projet est actuellement en développement privé. Pour toute question ou proposition de collaboration, veuillez contacter l'équipe Haylalàna.

## 📄 Licence

Ce projet est propriétaire et privé. Tous droits réservés © 2026 Haylalàna.

---

<div align="center">
  <strong>Haylalàna</strong> — Démocratiser le droit, un citoyen à la fois.
</div>

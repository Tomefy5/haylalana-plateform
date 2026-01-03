<div align="center">
  <img src="public/haylalana-logo.png" alt="Haylalàna Logo" width="120" height="120" />
  
  # Haylalàna

  **The first Malagasy platform for democratizing law**
  
  *"I know my rights, I dare to assert them"*

  [![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.1-61DAFB?style=flat-square&logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-Proprietary-red?style=flat-square)]()

  🇫🇷 [Version Française](README.fr.md)

</div>

---

## 🎯 Vision

To become **the digital reference for accessible law** in Madagascar, then across French-speaking Africa.

A space where every citizen can understand their rights, duties, and means of action.

## 🔥 Problems We Solve

| Problem | Impact | Haylalàna Solution |
|---------|--------|-------------------|
| **Legal inaccessibility** | Vulnerable citizens | Simplified content in French & Malagasy |
| **Consultation costs** | Rights abandonment | Free guides + transparent directory |
| **Lack of visibility** | Fragmented market | Connection platform |
| **Education gap** | Unchallenged abuses | Gamified civic education |

## ✨ Features

### 🏠 For Citizens
- **Personalized dashboard** with progression system and badges
- **Legal Passport**: track learning and acquired skills
- **AI Advisor**: virtual legal assistant available 24/7
- **Procedures Guide**: step-by-step guidance with maps and schedules

### 🏢 For Professionals
- **Pro Dashboard** with legal health indicator
- **Obligations Management**: timeline of fiscal and legal deadlines
- **Charges Simulator**: automated calculations (IRSA, CNAPS, etc.)
- **Contract Generator**: ready-to-use legal templates

### 📚 Educational Content
- Guides by profile: Children, Youth, Adults, Startups
- Interactive quizzes with XP system
- Legal blog articles
- Simplified law texts

## 🛠️ Tech Stack

```
Frontend
├── Next.js 15.5 (App Router)
├── React 19.1
├── TypeScript 5
├── TailwindCSS 4
└── Radix UI (Accessible components)

Features
├── next-intl (i18n - FR/MG)
├── next-pwa (Progressive Web App)
├── react-hook-form + zod (Forms)
└── lucide-react (Icons)
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Tomefy5/haylalana-plateform.git
cd haylalana-plateform

# Install dependencies
npm install

# Run in development mode
npm run dev
```

The application will be available at `http://localhost:3000`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint check |

## 📁 Project Structure

```
src/
├── app/
│   └── [locale]/           # Internationalized routes
│       ├── dashboard/      # Citizen & Pro Dashboards
│       │   ├── citizen/    # Citizen space
│       │   ├── pro/        # Professional space
│       │   ├── advisor/    # AI Advisor
│       │   └── procedures/ # Procedures guide
│       ├── login/          # Authentication
│       ├── register/       # Registration
│       ├── contents/       # Educational content
│       └── blog/           # Articles
├── components/
│   ├── ui/                 # Reusable components
│   ├── auth/               # Auth forms
│   ├── dashboard/          # Sidebar, navigation
│   └── layout/             # Navbar, Footer
└── lib/                    # Utilities
```

## 🌍 Internationalization

The project supports two languages:
- 🇫🇷 **French** (default)
- 🇲🇬 **Malagasy**

Translation files are located in `/locales/`.

## 💎 Core Values

| Value | Description |
|-------|-------------|
| **Accessibility** | Law within everyone's reach |
| **Knowledge** | Useful, living, everyday education |
| **Empowerment** | Law as a tool for emancipation |
| **Social Impact** | Real change in society |
| **Equity** | Information justice for all |

## 🤝 Contributing

This project is currently in private development. For any questions or collaboration proposals, please contact the Haylalàna team.

## 📄 License

This project is under **Proprietary License**. All rights reserved © 2026 Haylalàna.

See the [LICENSE](LICENSE) file for more details.

---

<div align="center">
  <strong>Haylalàna</strong> — Democratizing law, one citizen at a time.
</div>

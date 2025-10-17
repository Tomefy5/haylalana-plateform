// src/lib/mock-data.ts (ajouter à la fin du fichier existant)

export type Guide = {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  downloadable: boolean;
  lastUpdated: string;
  icon: string;
  color: string;
  topics: string[];
};

export type GuideCategory = {
  id: string;
  name: string;
  icon: string;
  count: number;
};

// Catégories de guides
export const guideCategories: GuideCategory[] = [
  { id: 'all', name: 'Tous les guides', icon: '📚', count: 12 },
  { id: 'travail', name: 'Travail', icon: '💼', count: 3 },
  { id: 'famille', name: 'Famille', icon: '👨‍👩‍👧', count: 2 },
  { id: 'consommation', name: 'Consommation', icon: '🛒', count: 2 },
  { id: 'logement', name: 'Logement', icon: '🏠', count: 2 },
  { id: 'justice', name: 'Justice', icon: '⚖️', count: 2 },
  { id: 'sante', name: 'Santé', icon: '🏥', count: 1 },
];

// Données simulées pour les guides pratiques
export const mockGuides: Guide[] = [
  {
    id: '1',
    title: 'Guide complet du contrat de travail à Madagascar',
    description: 'Tout ce que vous devez savoir sur les contrats de travail : types, clauses obligatoires, période d\'essai, rupture du contrat, et vos recours en cas de litige.',
    category: 'travail',
    readTime: '15 min',
    difficulty: 'Intermédiaire',
    downloadable: true,
    lastUpdated: '15 Oct 2025',
    icon: '📋',
    color: 'bg-blue-500',
    topics: ['Contrat CDI/CDD', 'Période d\'essai', 'Démission', 'Licenciement'],
  },
  {
    id: '2',
    title: 'Vos droits en cas de harcèlement au travail',
    description: 'Identifiez les formes de harcèlement, comprenez vos droits, et découvrez les démarches à suivre pour vous protéger et obtenir réparation.',
    category: 'travail',
    readTime: '10 min',
    difficulty: 'Débutant',
    downloadable: true,
    lastUpdated: '12 Oct 2025',
    icon: '🛡️',
    color: 'bg-red-500',
    topics: ['Harcèlement moral', 'Harcèlement sexuel', 'Plainte', 'Preuves'],
  },
  {
    id: '3',
    title: 'Congés et temps de travail : vos droits',
    description: 'Guide détaillé sur les congés payés, congés maladie, maternité/paternité, heures supplémentaires et temps de repos selon le Code du Travail malgache.',
    category: 'travail',
    readTime: '12 min',
    difficulty: 'Débutant',
    downloadable: true,
    lastUpdated: '10 Oct 2025',
    icon: '📅',
    color: 'bg-green-500',
    topics: ['Congés payés', 'Congé maladie', 'Heures sup', 'Repos hebdomadaire'],
  },
  {
    id: '4',
    title: 'Divorce et séparation : procédures et droits',
    description: 'Les différents types de divorce à Madagascar, les démarches administratives, la garde des enfants, la pension alimentaire et le partage des biens.',
    category: 'famille',
    readTime: '20 min',
    difficulty: 'Avancé',
    downloadable: true,
    lastUpdated: '08 Oct 2025',
    icon: '💔',
    color: 'bg-purple-500',
    topics: ['Types de divorce', 'Garde d\'enfants', 'Pension', 'Partage des biens'],
  },
  {
    id: '5',
    title: 'Reconnaissance et autorité parentale',
    description: 'Comment reconnaître un enfant, établir l\'autorité parentale, et comprendre vos droits et devoirs en tant que parent selon la loi malgache.',
    category: 'famille',
    readTime: '8 min',
    difficulty: 'Débutant',
    downloadable: true,
    lastUpdated: '05 Oct 2025',
    icon: '👶',
    color: 'bg-pink-500',
    topics: ['Reconnaissance', 'Autorité parentale', 'Obligations', 'Droits'],
  },
  {
    id: '6',
    title: 'Droits des consommateurs : achats et garanties',
    description: 'Vos droits lors d\'un achat, les garanties légales, le droit de rétractation, et comment réclamer en cas de produit défectueux ou de service non conforme.',
    category: 'consommation',
    readTime: '10 min',
    difficulty: 'Débutant',
    downloadable: true,
    lastUpdated: '03 Oct 2025',
    icon: '🛍️',
    color: 'bg-orange-500',
    topics: ['Garantie légale', 'Retour produit', 'Réclamation', 'Remboursement'],
  },
  {
    id: '7',
    title: 'Crédit et endettement : se protéger',
    description: 'Comprendre les contrats de crédit, taux d\'intérêt légaux, surendettement, et vos droits face aux créanciers et aux sociétés de recouvrement.',
    category: 'consommation',
    readTime: '12 min',
    difficulty: 'Intermédiaire',
    downloadable: true,
    lastUpdated: '01 Oct 2025',
    icon: '💳',
    color: 'bg-yellow-500',
    topics: ['Crédit', 'Taux d\'intérêt', 'Surendettement', 'Recouvrement'],
  },
  {
    id: '8',
    title: 'Location : droits du locataire et du propriétaire',
    description: 'Tout sur le bail de location, le dépôt de garantie, les charges, les réparations, l\'expulsion, et comment résoudre les conflits locatifs.',
    category: 'logement',
    readTime: '18 min',
    difficulty: 'Intermédiaire',
    downloadable: true,
    lastUpdated: '28 Sep 2025',
    icon: '🔑',
    color: 'bg-indigo-500',
    topics: ['Bail', 'Loyer', 'Charges', 'Expulsion', 'Litiges'],
  },
  {
    id: '9',
    title: 'Achat immobilier et droits fonciers',
    description: 'Guide pour acheter un terrain ou une maison : vérifications à faire, titres fonciers, certificats, actes notariés, et protection contre les fraudes.',
    category: 'logement',
    readTime: '25 min',
    difficulty: 'Avancé',
    downloadable: true,
    lastUpdated: '25 Sep 2025',
    icon: '🏡',
    color: 'bg-teal-500',
    topics: ['Titre foncier', 'Acte notarié', 'Vérifications', 'Fraudes'],
  },
  {
    id: '10',
    title: 'Porter plainte : démarches et procédures',
    description: 'Comment et où porter plainte, les délais à respecter, la constitution de partie civile, et le suivi de votre plainte auprès des autorités.',
    category: 'justice',
    readTime: '10 min',
    difficulty: 'Débutant',
    downloadable: true,
    lastUpdated: '22 Sep 2025',
    icon: '📝',
    color: 'bg-red-600',
    topics: ['Plainte', 'Main courante', 'Partie civile', 'Délais'],
  },
  {
    id: '11',
    title: 'Aide juridictionnelle et accès à la justice',
    description: 'Bénéficiez de l\'aide juridictionnelle gratuite si vous avez des revenus modestes. Conditions, démarches et organismes qui peuvent vous assister.',
    category: 'justice',
    readTime: '8 min',
    difficulty: 'Débutant',
    downloadable: true,
    lastUpdated: '20 Sep 2025',
    icon: '🤝',
    color: 'bg-cyan-500',
    topics: ['Aide juridique', 'Gratuité', 'Conditions', 'Assistance'],
  },
  {
    id: '12',
    title: 'Droits des patients et accès aux soins',
    description: 'Vos droits en tant que patient : consentement éclairé, secret médical, accès au dossier médical, refus de soins, et recours en cas d\'erreur médicale.',
    category: 'sante',
    readTime: '12 min',
    difficulty: 'Intermédiaire',
    downloadable: true,
    lastUpdated: '18 Sep 2025',
    icon: '⚕️',
    color: 'bg-emerald-500',
    topics: ['Consentement', 'Secret médical', 'Dossier', 'Erreur médicale'],
  },
];

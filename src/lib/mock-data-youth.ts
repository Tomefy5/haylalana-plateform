// src/lib/mock-data.ts (ajouter à la fin du fichier existant)

export type Quiz = {
  id: string;
  title: string;
  description: string;
  questionsCount: number;
  duration: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  category: string;
  icon: string;
  points: number;
  color: string;
};

export type Capsule = {
  id: string;
  title: string;
  description: string;
  content: string;
  readTime: string;
  category: string;
  icon: string;
  gradient: string;
  tags: string[];
};

// Données simulées pour les quiz
export const mockQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'Teste tes connaissances sur le droit du travail',
    description: 'À partir de quel âge peut-on travailler à Madagascar ? Quels sont tes droits en tant que jeune travailleur ?',
    questionsCount: 10,
    duration: '5 min',
    difficulty: 'Moyen',
    category: 'Travail',
    icon: '💼',
    points: 100,
    color: 'bg-blue-500',
  },
  {
    id: '2',
    title: 'Quiz : Droits et réseaux sociaux',
    description: 'Liberté d\'expression, cyberharcèlement, vie privée... Connais-tu tes droits en ligne ?',
    questionsCount: 8,
    duration: '4 min',
    difficulty: 'Facile',
    category: 'Numérique',
    icon: '📱',
    points: 80,
    color: 'bg-purple-500',
  },
  {
    id: '3',
    title: 'Le droit à l\'éducation en question',
    description: 'Teste tes connaissances sur le droit fondamental à l\'éducation et ses implications',
    questionsCount: 12,
    duration: '6 min',
    difficulty: 'Moyen',
    category: 'Éducation',
    icon: '📚',
    points: 120,
    color: 'bg-green-500',
  },
  {
    id: '4',
    title: 'Quiz : Vie privée et données personnelles',
    description: 'Comment protéger tes données ? Qui a le droit de les utiliser ? Deviens un expert !',
    questionsCount: 10,
    duration: '5 min',
    difficulty: 'Difficile',
    category: 'Protection',
    icon: '🔒',
    points: 150,
    color: 'bg-red-500',
  },
  {
    id: '5',
    title: 'Droits et devoirs du citoyen',
    description: 'Un quiz complet sur tes droits ET tes responsabilités en tant que jeune citoyen',
    questionsCount: 15,
    duration: '8 min',
    difficulty: 'Difficile',
    category: 'Citoyenneté',
    icon: '🇲🇬',
    points: 200,
    color: 'bg-orange-500',
  },
  {
    id: '6',
    title: 'Quiz express : Égalité filles-garçons',
    description: 'Un quiz rapide pour tester tes connaissances sur l\'égalité des genres',
    questionsCount: 6,
    duration: '3 min',
    difficulty: 'Facile',
    category: 'Égalité',
    icon: '⚖️',
    points: 60,
    color: 'bg-pink-500',
  },
];

// Données simulées pour les capsules éducatives
export const mockCapsules: Capsule[] = [
  {
    id: '1',
    title: 'Le consentement, c\'est quoi exactement ?',
    description: 'Comprends l\'importance du consentement dans toutes les situations de ta vie',
    content: 'Le consentement est un accord libre, éclairé et révocable. Tu as toujours le droit de dire non et de changer d\'avis.',
    readTime: '2 min',
    category: 'Protection',
    icon: '✋',
    gradient: 'from-red-500 to-pink-500',
    tags: ['Respect', 'Limites', 'Sécurité'],
  },
  {
    id: '2',
    title: 'Harcèlement scolaire : Agir, pas subir',
    description: 'Que faire si tu es victime ou témoin de harcèlement ? Les bons réflexes à avoir',
    content: 'Le harcèlement n\'est jamais acceptable. Tu as le droit d\'être en sécurité à l\'école. Parle-en à un adulte de confiance.',
    readTime: '3 min',
    category: 'Sécurité',
    icon: '🛡️',
    gradient: 'from-blue-500 to-cyan-500',
    tags: ['École', 'Protection', 'Aide'],
  },
  {
    id: '3',
    title: 'Ton droit à la santé mentale',
    description: 'Ta santé mentale compte autant que ta santé physique. Apprends à en prendre soin',
    content: 'Il est normal de ne pas aller bien parfois. Demander de l\'aide est un signe de force, pas de faiblesse.',
    readTime: '3 min',
    category: 'Santé',
    icon: '🧠',
    gradient: 'from-purple-500 to-indigo-500',
    tags: ['Bien-être', 'Soutien', 'Santé'],
  },
  {
    id: '4',
    title: 'Droits d\'auteur et plagiat',
    description: 'Comprends comment protéger tes créations et respecter celles des autres',
    content: 'Tes créations (textes, photos, musiques) sont protégées dès leur création. Respecte aussi le travail des autres !',
    readTime: '2 min',
    category: 'Numérique',
    icon: '©️',
    gradient: 'from-orange-500 to-red-500',
    tags: ['Création', 'Respect', 'Loi'],
  },
  {
    id: '5',
    title: 'Liberté d\'expression : jusqu\'où ?',
    description: 'Tu as le droit de t\'exprimer, mais avec des limites. Lesquelles ?',
    content: 'La liberté d\'expression ne permet pas d\'insulter, diffamer ou inciter à la haine. Exprime-toi avec respect.',
    readTime: '3 min',
    category: 'Expression',
    icon: '💬',
    gradient: 'from-green-500 to-emerald-500',
    tags: ['Liberté', 'Limites', 'Respect'],
  },
  {
    id: '6',
    title: 'Travailler avant 18 ans : Ce que dit la loi',
    description: 'Âge minimum, horaires, interdictions... Tout ce qu\'il faut savoir',
    content: 'À Madagascar, l\'âge minimum légal pour travailler est 16 ans. Certains travaux dangereux sont interdits aux mineurs.',
    readTime: '4 min',
    category: 'Travail',
    icon: '⚠️',
    gradient: 'from-yellow-500 to-orange-500',
    tags: ['Emploi', 'Loi', 'Protection'],
  },
  {
    id: '7',
    title: 'Fake news : Comment les repérer ?',
    description: 'Développe ton esprit critique face aux informations sur internet',
    content: 'Vérifie toujours la source, croise les informations et méfie-toi des titres sensationnels.',
    readTime: '3 min',
    category: 'Numérique',
    icon: '🔍',
    gradient: 'from-cyan-500 to-blue-500',
    tags: ['Vérification', 'Internet', 'Critique'],
  },
  {
    id: '8',
    title: 'Le droit à l\'image expliqué',
    description: 'Qui peut publier ta photo ? Quand as-tu le droit de dire non ?',
    content: 'Personne ne peut publier ta photo sans ton accord (ou celui de tes parents si tu es mineur). Tu peux demander le retrait.',
    readTime: '2 min',
    category: 'Protection',
    icon: '📸',
    gradient: 'from-pink-500 to-rose-500',
    tags: ['Photo', 'Vie privée', 'Consentement'],
  },
];

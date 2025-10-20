export type Story = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  ageRange: string;
  duration: string;
  category: string;
  color: string;
};

export type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  category: string;
};

// Données simulées pour les histoires
export const mockStories: Story[] = [
  {
    id: '1',
    title: 'Koto et le droit à l\'éducation',
    description: 'Découvre avec Koto pourquoi tous les enfants ont le droit d\'aller à l\'école',
    thumbnail: '📚',
    ageRange: '6-8 ans',
    duration: '5 min',
    category: 'Éducation',
    color: 'bg-blue-500',
  },
  {
    id: '2',
    title: 'Ravo apprend à dire non',
    description: 'Une histoire sur le droit de protéger son corps et de refuser les contacts inappropriés',
    thumbnail: '🛡️',
    ageRange: '8-10 ans',
    duration: '7 min',
    category: 'Protection',
    color: 'bg-red-500',
  },
  {
    id: '3',
    title: 'Faly et sa famille',
    description: 'Comprends les droits des enfants dans leur famille avec Faly',
    thumbnail: '👨‍👩‍👧',
    ageRange: '6-9 ans',
    duration: '6 min',
    category: 'Famille',
    color: 'bg-green-500',
  },
  {
    id: '4',
    title: 'Le secret de Soa',
    description: 'Soa découvre son droit à la parole et à être écoutée par les adultes',
    thumbnail: '💬',
    ageRange: '9-12 ans',
    duration: '8 min',
    category: 'Expression',
    color: 'bg-purple-500',
  },
  {
    id: '5',
    title: 'Nary et le travail des enfants',
    description: 'Pourquoi les enfants ne doivent pas travailler ? Nary te l\'explique',
    thumbnail: '⚠️',
    ageRange: '10-12 ans',
    duration: '9 min',
    category: 'Travail',
    color: 'bg-orange-500',
  },
  {
    id: '6',
    title: 'Tous différents, tous égaux',
    description: 'Une belle histoire sur l\'égalité et le respect des différences',
    thumbnail: '🌈',
    ageRange: '7-11 ans',
    duration: '6 min',
    category: 'Égalité',
    color: 'bg-pink-500',
  },
];

// Données simulées pour les vidéos
export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'C\'est quoi un droit ? 🤔',
    description: 'Une vidéo simple pour comprendre ce qu\'est un droit',
    thumbnail: '🎬',
    duration: '3:24',
    views: '1.2K',
    category: 'Bases',
  },
  {
    id: '2',
    title: 'Les 10 droits essentiels des enfants',
    description: 'Découvre les droits les plus importants pour tous les enfants du monde',
    thumbnail: '🌍',
    duration: '8:15',
    views: '2.5K',
    category: 'Droits fondamentaux',
  },
  {
    id: '3',
    title: 'Que faire si on ne respecte pas tes droits ?',
    description: 'Apprends à qui parler et comment réagir',
    thumbnail: '🚨',
    duration: '5:30',
    views: '980',
    category: 'Action',
  },
  {
    id: '4',
    title: 'Le droit de jouer et de se reposer',
    description: 'Oui, jouer est un droit ! Découvre pourquoi c\'est important',
    thumbnail: '⚽',
    duration: '4:12',
    views: '1.8K',
    category: 'Loisirs',
  },
  {
    id: '5',
    title: 'Ton avis compte aussi !',
    description: 'Les adultes doivent écouter ce que tu penses. Comprends ce droit important',
    thumbnail: '🗣️',
    duration: '6:00',
    views: '1.5K',
    category: 'Participation',
  },
  {
    id: '6',
    title: 'Le droit à la santé expliqué simplement',
    description: 'Pourquoi tu as le droit d\'aller chez le docteur et d\'être soigné',
    thumbnail: '🏥',
    duration: '5:45',
    views: '1.1K',
    category: 'Santé',
  },
];

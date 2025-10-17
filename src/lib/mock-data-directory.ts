// src/lib/mock-data.ts (ajouter à la fin du fichier existant)

export type ProfessionalType = 'Avocat' | 'Notaire' | 'Huissier';

export type Province = 
  | 'Antananarivo' 
  | 'Fianarantsoa' 
  | 'Toamasina' 
  | 'Mahajanga' 
  | 'Toliara' 
  | 'Antsiranana';

export type Professional = {
  id: string;
  name: string;
  type: ProfessionalType;
  province: Province;
  city: string;
  address: string;
  phone: string;
  email?: string;
  specialties: string[];
  languages: string[];
  experience: string;
  available: boolean;
  photo?: string;
};

// Les 6 provinces de Madagascar
export const provinces: { id: Province; name: string; icon: string }[] = [
  { id: 'Antananarivo', name: 'Antananarivo', icon: '🏙️' },
  { id: 'Fianarantsoa', name: 'Fianarantsoa', icon: '🏔️' },
  { id: 'Toamasina', name: 'Toamasina', icon: '🌊' },
  { id: 'Mahajanga', name: 'Mahajanga', icon: '🌴' },
  { id: 'Toliara', name: 'Toliara', icon: '☀️' },
  { id: 'Antsiranana', name: 'Antsiranana', icon: '🏝️' },
];

// Données simulées des professionnels du droit
export const mockProfessionals: Professional[] = [
  // Avocats
  {
    id: '1',
    name: 'Maître Rakoto Jean',
    type: 'Avocat',
    province: 'Antananarivo',
    city: 'Antananarivo',
    address: 'Rue Rainandriamampandry, Analakely',
    phone: '+261 34 12 345 67',
    email: 'rakoto.jean@avocat.mg',
    specialties: ['Droit du travail', 'Droit commercial', 'Contentieux'],
    languages: ['Français', 'Malgache', 'Anglais'],
    experience: '15 ans',
    available: true,
    photo: '👨‍⚖️',
  },
  {
    id: '2',
    name: 'Maître Rasoamalala Marie',
    type: 'Avocat',
    province: 'Antananarivo',
    city: 'Antananarivo',
    address: 'Avenue de l\'Indépendance, Tsaralalana',
    phone: '+261 33 23 456 78',
    email: 'marie.rasoamalala@cabinet-avocat.mg',
    specialties: ['Droit de la famille', 'Divorce', 'Succession'],
    languages: ['Français', 'Malgache'],
    experience: '12 ans',
    available: true,
    photo: '👩‍⚖️',
  },
  {
    id: '3',
    name: 'Maître Andriamanantsoa Paul',
    type: 'Avocat',
    province: 'Fianarantsoa',
    city: 'Fianarantsoa',
    address: 'Lot II K 45, Tsianolondroa',
    phone: '+261 32 34 567 89',
    email: 'paul.andria@avocat-fianar.mg',
    specialties: ['Droit pénal', 'Droit foncier'],
    languages: ['Français', 'Malgache'],
    experience: '8 ans',
    available: true,
    photo: '👨‍⚖️',
  },
  {
    id: '4',
    name: 'Maître Ravelo Christine',
    type: 'Avocat',
    province: 'Toamasina',
    city: 'Toamasina',
    address: 'Boulevard Joffre, Centre-ville',
    phone: '+261 34 45 678 90',
    email: 'christine.ravelo@avocat-tana.mg',
    specialties: ['Droit maritime', 'Droit commercial', 'Import-Export'],
    languages: ['Français', 'Malgache', 'Anglais'],
    experience: '10 ans',
    available: true,
    photo: '👩‍⚖️',
  },
  {
    id: '5',
    name: 'Maître Randrianarisoa Michel',
    type: 'Avocat',
    province: 'Mahajanga',
    city: 'Mahajanga',
    address: 'Rue Gallieni, Mahabibo',
    phone: '+261 33 56 789 01',
    specialties: ['Droit immobilier', 'Droit des affaires'],
    languages: ['Français', 'Malgache'],
    experience: '20 ans',
    available: true,
    photo: '👨‍⚖️',
  },
  {
    id: '6',
    name: 'Maître Rabearivelo Aina',
    type: 'Avocat',
    province: 'Toliara',
    city: 'Toliara',
    address: 'Avenue Philibert Tsiranana',
    phone: '+261 32 67 890 12',
    email: 'aina.rabearivelo@avocat.mg',
    specialties: ['Droit environnemental', 'Droit du tourisme'],
    languages: ['Français', 'Malgache', 'Anglais'],
    experience: '7 ans',
    available: false,
    photo: '👩‍⚖️',
  },
  
  // Notaires
  {
    id: '7',
    name: 'Maître Raharison Claudine',
    type: 'Notaire',
    province: 'Antananarivo',
    city: 'Antananarivo',
    address: 'Rue Raveloson, Faravohitra',
    phone: '+261 34 78 901 23',
    email: 'claudine.raharison@notaire.mg',
    specialties: ['Ventes immobilières', 'Successions', 'Contrats'],
    languages: ['Français', 'Malgache'],
    experience: '18 ans',
    available: true,
    photo: '📝',
  },
  {
    id: '8',
    name: 'Maître Rakotonirina David',
    type: 'Notaire',
    province: 'Antananarivo',
    city: 'Antsirabe',
    address: 'Avenue de France, Centre-ville',
    phone: '+261 33 89 012 34',
    email: 'david.rakoto@notaire-antsirabe.mg',
    specialties: ['Actes authentiques', 'Donations', 'Mariages'],
    languages: ['Français', 'Malgache'],
    experience: '14 ans',
    available: true,
    photo: '📝',
  },
  {
    id: '9',
    name: 'Maître Razafy Sophie',
    type: 'Notaire',
    province: 'Fianarantsoa',
    city: 'Fianarantsoa',
    address: 'Rue du Commerce, Haute-Ville',
    phone: '+261 32 90 123 45',
    email: 'sophie.razafy@notaire.mg',
    specialties: ['Transactions immobilières', 'Testaments'],
    languages: ['Français', 'Malgache'],
    experience: '11 ans',
    available: true,
    photo: '📝',
  },
  {
    id: '10',
    name: 'Maître Andrianasolo Luc',
    type: 'Notaire',
    province: 'Toamasina',
    city: 'Toamasina',
    address: 'Boulevard de la Libération',
    phone: '+261 34 01 234 56',
    specialties: ['Droit des sociétés', 'Actes commerciaux'],
    languages: ['Français', 'Malgache'],
    experience: '16 ans',
    available: true,
    photo: '📝',
  },
  {
    id: '11',
    name: 'Maître Ramanantsoa Herinaina',
    type: 'Notaire',
    province: 'Antsiranana',
    city: 'Antsiranana (Diego-Suarez)',
    address: 'Rue Colbert, Centre',
    phone: '+261 33 12 345 67',
    email: 'herinaina@notaire-diego.mg',
    specialties: ['Immobilier', 'Successions', 'Contrats'],
    languages: ['Français', 'Malgache', 'Anglais'],
    experience: '9 ans',
    available: true,
    photo: '📝',
  },
  
  // Huissiers
  {
    id: '12',
    name: 'Maître Rasolonjatovo Henri',
    type: 'Huissier',
    province: 'Antananarivo',
    city: 'Antananarivo',
    address: 'Rue Pasteur Rabeony, Ankorondrano',
    phone: '+261 34 23 456 78',
    email: 'henri.rasolo@huissier.mg',
    specialties: ['Constats', 'Significations', 'Exécutions'],
    languages: ['Français', 'Malgache'],
    experience: '13 ans',
    available: true,
    photo: '⚖️',
  },
  {
    id: '13',
    name: 'Maître Rakotondrabe Alice',
    type: 'Huissier',
    province: 'Antananarivo',
    city: 'Antananarivo',
    address: 'Avenue Grandidier, Isoraka',
    phone: '+261 33 34 567 89',
    email: 'alice.rakotondrabe@huissier.mg',
    specialties: ['Recouvrements', 'Saisies', 'Assignations'],
    languages: ['Français', 'Malgache'],
    experience: '10 ans',
    available: true,
    photo: '⚖️',
  },
  {
    id: '14',
    name: 'Maître Randrianasolo Bruno',
    type: 'Huissier',
    province: 'Mahajanga',
    city: 'Mahajanga',
    address: 'Rue Richelieu, Tsararano',
    phone: '+261 32 45 678 90',
    specialties: ['Constats d\'huissier', 'Commandements de payer'],
    languages: ['Français', 'Malgache'],
    experience: '12 ans',
    available: true,
    photo: '⚖️',
  },
  {
    id: '15',
    name: 'Maître Rabemananjara Nadia',
    type: 'Huissier',
    province: 'Toliara',
    city: 'Toliara',
    address: 'Avenue de Madagascar',
    phone: '+261 34 56 789 01',
    email: 'nadia.rabema@huissier-tulear.mg',
    specialties: ['Procédures civiles', 'Constats', 'Significations'],
    languages: ['Français', 'Malgache'],
    experience: '8 ans',
    available: true,
    photo: '⚖️',
  },
];

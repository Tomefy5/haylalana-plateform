import {
    Users,
    BookOpen,
    Sparkles,
    Baby,
    GraduationCap,
    Briefcase,
    Rocket,
    Heart,
    Scale,
    Target,
    Globe
} from 'lucide-react';

export const HERO_STATS = [
    { icon: Users, label: "Utilisateurs", value: "1000+" },
    { icon: BookOpen, label: "Articles", value: "50+" },
    { icon: Sparkles, label: "Gratuit", value: "100%" },
] as const;

export const AGE_CATEGORIES = [
    {
        id: 'enfants',
        title: 'Enfants',
        description: 'Contenus adaptés pour les 6-12 ans',
        icon: Baby,
        href: '/contents/children',
    },
    {
        id: 'jeunes',
        title: 'Jeunes',
        description: 'Contenus pour les 13-17 ans',
        icon: GraduationCap,
        href: '/contents/youth',
    },
    {
        id: 'adultes',
        title: 'Adultes',
        description: 'Contenus pour les 18 ans et plus',
        icon: Briefcase,
        href: '/contents/adults',
    },
    {
        id: 'startup',
        title: 'Startup',
        description: 'Ressources pour entrepreneurs et entreprises',
        icon: Rocket,
        href: '/contents/startup',
    },
] as const;

export const COMPANY_VALUES = [
    {
        id: 'accessibilite',
        title: 'Accessibilité',
        description: 'Rendre le droit accessible à tous les Malgaches, sans barrière de langage ou de coût.',
        icon: Heart,
    },
    {
        id: 'education',
        title: 'Éducation',
        description: 'Former et sensibiliser chaque citoyen sur ses droits fondamentaux dès le plus jeune âge.',
        icon: BookOpen,
    },
    {
        id: 'justice',
        title: 'Justice',
        description: 'Promouvoir l\'équité et aider chacun à faire valoir ses droits légitimes.',
        icon: Scale,
    },
    {
        id: 'inclusion',
        title: 'Inclusion',
        description: 'Garantir que personne ne soit laissé pour compte dans l\'accès à l\'information juridique.',
        icon: Users,
    },
] as const;

export const COMPANY_OBJECTIVES = [
    {
        id: 'reach',
        title: 'Toucher 100 000 personnes',
        description: 'en 2 ans',
        icon: Users,
        stat: '100K+',
    },
    {
        id: 'content',
        title: 'Créer 500 contenus',
        description: 'articles, vidéos et guides',
        icon: BookOpen,
        stat: '500+',
    },
    {
        id: 'impact',
        title: 'Former 50 écoles',
        description: 'partenaires éducatifs',
        icon: Target,
        stat: '50+',
    },
    {
        id: 'growth',
        title: 'Expansion nationale',
        description: 'dans toutes les régions',
        icon: Globe,
        stat: '22',
    },
] as const;

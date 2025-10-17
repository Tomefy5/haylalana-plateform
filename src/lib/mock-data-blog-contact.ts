// src/lib/mock-data.ts (ajouter à la fin du fichier existant)

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedDate: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  featured: boolean;
};

// Données simulées pour les articles de blog
export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'nouveau-code-du-travail-2025',
    title: 'Les changements majeurs du Code du Travail en 2025',
    excerpt: 'Découvrez les principales modifications apportées au Code du Travail malgache et leur impact sur les droits des travailleurs.',
    content: `# Les changements majeurs du Code du Travail en 2025

Le Code du Travail malgache a connu plusieurs amendements importants en 2025. Ces modifications visent à renforcer la protection des travailleurs et à adapter la législation aux réalités économiques actuelles.

## 1. Augmentation du salaire minimum

Le SMIG a été revalorisé de 15% pour tenir compte de l'inflation. Cette mesure concerne tous les secteurs d'activité.

## 2. Durée de travail

La durée légale hebdomadaire reste fixée à 40 heures, mais de nouvelles dispositions encadrent mieux les heures supplémentaires et leur rémunération.

## 3. Protection contre le harcèlement

Les sanctions contre le harcèlement au travail (moral et sexuel) ont été renforcées. Les employeurs ont maintenant l'obligation de mettre en place des procédures de signalement.

## 4. Télétravail

Un nouveau chapitre a été ajouté pour encadrer le télétravail, reconnaissant officiellement ce mode d'organisation du travail.

## Que faire si vos droits ne sont pas respectés ?

N'hésitez pas à consulter un avocat spécialisé en droit du travail. Vous pouvez également contacter l'Inspection du Travail de votre région.`,
    category: 'Actualités juridiques',
    author: 'Me Rasoamalala Marie',
    publishedDate: '10 Oct 2025',
    readTime: '5 min',
    coverImage: '📜',
    tags: ['Travail', 'Législation', 'SMIG', 'Harcèlement'],
    featured: true,
  },
  {
    id: '2',
    slug: 'protection-donnees-personnelles-madagascar',
    title: 'Protection des données personnelles : ce que vous devez savoir',
    excerpt: 'Comment protéger vos données personnelles sur internet ? Un guide pratique pour comprendre vos droits à l\'ère numérique.',
    content: `# Protection des données personnelles à Madagascar

À l'ère numérique, la protection de vos données personnelles est cruciale. Voici ce que vous devez savoir sur vos droits.

## Qu'est-ce qu'une donnée personnelle ?

Une donnée personnelle est toute information se rapportant à une personne physique identifiée ou identifiable : nom, numéro de téléphone, adresse email, photo, etc.

## Vos droits

- **Droit d'accès** : Vous pouvez demander à une entreprise quelles données elle détient sur vous
- **Droit de rectification** : Vous pouvez corriger des données inexactes
- **Droit à l'effacement** : Vous pouvez demander la suppression de vos données
- **Droit d'opposition** : Vous pouvez refuser l'utilisation de vos données à des fins commerciales

## Comment protéger vos données ?

1. Utilisez des mots de passe forts et uniques
2. Activez l'authentification à deux facteurs
3. Lisez les politiques de confidentialité
4. Limitez les informations partagées sur les réseaux sociaux
5. Méfiez-vous des emails suspects (phishing)`,
    category: 'Numérique',
    author: 'Équipe Haylalàna',
    publishedDate: '05 Oct 2025',
    readTime: '4 min',
    coverImage: '🔒',
    tags: ['Données', 'Vie privée', 'Internet', 'RGPD'],
    featured: true,
  },
  {
    id: '3',
    slug: 'droits-locataires-madagascar',
    title: 'Droits des locataires : ce que votre propriétaire ne peut pas faire',
    excerpt: 'Loyers abusifs, expulsion illégale, travaux non effectués... Connaissez vos droits en tant que locataire.',
    content: `# Droits des locataires à Madagascar

En tant que locataire, vous avez des droits que votre propriétaire doit respecter. Voici les situations illégales les plus courantes.

## Ce que le propriétaire ne peut PAS faire

### 1. Augmenter le loyer sans préavis

Le propriétaire doit respecter un préavis de 3 mois avant toute augmentation de loyer et celle-ci doit être justifiée.

### 2. Entrer dans le logement sans votre accord

Le propriétaire ne peut pas entrer dans votre logement sans votre autorisation, sauf urgence (fuite d'eau, incendie).

### 3. Vous expulser sans décision de justice

Même en cas de loyers impayés, seul un juge peut décider d'une expulsion. Le propriétaire ne peut pas vous mettre dehors lui-même.

### 4. Garder la caution sans justification

Le dépôt de garantie doit être restitué dans un délai de 2 mois après votre départ, déduction faite des éventuels dégâts constatés.

## Que faire en cas de litige ?

1. Envoyez une lettre recommandée au propriétaire
2. Contactez un médiateur ou un conciliateur de justice
3. Si nécessaire, saisissez le tribunal compétent`,
    category: 'Logement',
    author: 'Me Rakoto Jean',
    publishedDate: '28 Sep 2025',
    readTime: '6 min',
    coverImage: '🏠',
    tags: ['Location', 'Bail', 'Propriétaire', 'Expulsion'],
    featured: false,
  },
  {
    id: '4',
    slug: 'divorce-garde-enfants',
    title: 'Divorce et garde des enfants : comment ça se passe ?',
    excerpt: 'Les procédures de divorce et les critères de décision pour la garde des enfants expliqués simplement.',
    content: `# Divorce et garde des enfants à Madagascar

Le divorce est toujours une épreuve difficile, surtout quand des enfants sont concernés. Voici ce que vous devez savoir.

## Les types de divorce

1. **Divorce par consentement mutuel** : Les deux époux sont d'accord
2. **Divorce pour faute** : L'un des époux a commis une faute grave
3. **Divorce pour rupture de la vie commune** : Séparation de plus de 3 ans

## La garde des enfants

Le juge décide de la garde en fonction de **l'intérêt supérieur de l'enfant**.

### Critères pris en compte

- Âge de l'enfant
- Liens affectifs avec chaque parent
- Stabilité de l'environnement proposé
- Capacité de chaque parent à subvenir aux besoins de l'enfant
- Volonté de l'enfant (s'il est assez âgé)

### Types de garde

- **Garde exclusive** : L'enfant vit avec un seul parent
- **Garde partagée** : L'enfant alterne entre les deux domiciles
- **Droit de visite et d'hébergement** : Pour le parent qui n'a pas la garde

## La pension alimentaire

Le parent qui n'a pas la garde principale doit verser une pension alimentaire pour contribuer à l'entretien et l'éducation de l'enfant.`,
    category: 'Famille',
    author: 'Me Rasoamalala Marie',
    publishedDate: '20 Sep 2025',
    readTime: '7 min',
    coverImage: '👨‍👩‍👧',
    tags: ['Divorce', 'Famille', 'Garde', 'Enfants'],
    featured: false,
  },
  {
    id: '5',
    slug: 'harcèlement-scolaire-recours',
    title: 'Harcèlement scolaire : quels recours pour les parents ?',
    excerpt: 'Votre enfant est victime de harcèlement à l\'école ? Découvrez les démarches à suivre et les responsabilités de l\'établissement.',
    content: `# Harcèlement scolaire : quels recours ?

Le harcèlement scolaire est un fléau qui touche de nombreux enfants. En tant que parent, vous avez le droit et le devoir d'agir.

## Reconnaître les signes

- Changement brutal de comportement
- Refus d'aller à l'école
- Baisse des résultats scolaires
- Troubles du sommeil ou de l'appétit
- Vêtements ou affaires abîmés

## Les étapes à suivre

### 1. Dialogue avec l'enfant

Créez un climat de confiance pour que votre enfant se confie sans crainte de représailles.

### 2. Signalement à l'école

Prenez rendez-vous avec le directeur ou le conseiller d'éducation. L'école a l'obligation légale de protéger les élèves.

### 3. Main courante ou plainte

Si l'école ne réagit pas ou si le harcèlement continue, vous pouvez :
- Déposer une main courante au commissariat
- Porter plainte pour violence, menaces ou diffamation

### 4. Recours civils

Vous pouvez demander réparation du préjudice subi par votre enfant devant le tribunal.

## Responsabilité de l'établissement

L'école peut être tenue responsable si elle n'a pas pris les mesures nécessaires pour protéger l'élève.`,
    category: 'Éducation',
    author: 'Équipe Haylalàna',
    publishedDate: '15 Sep 2025',
    readTime: '5 min',
    coverImage: '🛡️',
    tags: ['Harcèlement', 'École', 'Enfants', 'Protection'],
    featured: false,
  },
  {
    id: '6',
    slug: 'contrat-cdi-cdd-differences',
    title: 'CDI vs CDD : quelles différences et quels droits ?',
    excerpt: 'Comprendre les avantages et inconvénients de chaque type de contrat de travail pour faire le bon choix.',
    content: `# CDI vs CDD : tout comprendre

Le choix entre un CDI et un CDD a des implications importantes sur vos droits et votre stabilité professionnelle.

## Le CDI (Contrat à Durée Indéterminée)

### Avantages
- Stabilité de l'emploi
- Protection maximale contre le licenciement
- Accès facilité au crédit bancaire
- Meilleure évolution de carrière

### Inconvénients
- Période d'essai plus longue possible
- Moins de flexibilité pour changer d'employeur

## Le CDD (Contrat à Durée Déterminée)

### Avantages
- Prime de précarité à la fin (10% du salaire brut total)
- Période d'essai plus courte
- Possibilité de refuser le renouvellement

### Inconvénients
- Instabilité
- Difficulté d'accès au crédit
- Renouvellement limité (2 fois maximum)

## Vos droits sont les mêmes

Que vous soyez en CDI ou CDD, vous avez les mêmes droits :
- Salaire minimum (SMIG)
- Congés payés
- Protection sociale
- Heures supplémentaires payées
- Conditions de travail décentes

## Attention aux abus

Un CDD ne peut pas être utilisé pour remplacer un poste permanent. Si votre employeur abuse des CDD, vous pouvez demander une requalification en CDI.`,
    category: 'Travail',
    author: 'Me Andriamanantsoa Paul',
    publishedDate: '08 Sep 2025',
    readTime: '4 min',
    coverImage: '📋',
    tags: ['CDI', 'CDD', 'Contrat', 'Travail'],
    featured: false,
  },
];

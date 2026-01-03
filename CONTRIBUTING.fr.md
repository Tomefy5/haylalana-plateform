# Contribuer à Haylalàna

Merci de votre intérêt pour contribuer à Haylalàna ! Ce document fournit les directives pour contribuer à ce projet.

## ⚠️ Avis Important

**Ceci est un projet propriétaire.** Les contributions sont actuellement limitées aux membres autorisés de l'équipe uniquement.

## Pour les Membres de l'Équipe

### Démarrage

1. Cloner le repository
2. Installer les dépendances : `npm install`
3. Créer une nouvelle branche : `git checkout -b feature/nom-de-votre-feature`
4. Effectuer vos modifications
5. Exécuter les tests et le linting : `npm run lint`
6. Commiter vos changements selon nos conventions
7. Pusher et créer une Pull Request

### Convention de Nommage des Branches

- `feature/` - Nouvelles fonctionnalités
- `fix/` - Corrections de bugs
- `docs/` - Mises à jour de documentation
- `refactor/` - Refactoring de code
- `style/` - Changements de style

### Format des Messages de Commit

Nous suivons [Conventional Commits](https://www.conventionalcommits.org/fr/) :

```
type(scope): description

[corps optionnel]

[pied de page optionnel]
```

**Types :**
- `feat` - Nouvelle fonctionnalité
- `fix` - Correction de bug
- `docs` - Documentation
- `style` - Formatage, style
- `refactor` - Refactoring de code
- `test` - Ajout de tests
- `chore` - Maintenance

**Exemples :**
```
feat(dashboard): ajouter section passeport juridique
fix(auth): résoudre problème de redirection login
docs: mettre à jour le README avec nouvelles fonctionnalités
```

### Style de Code

- Utiliser TypeScript
- Suivre les règles ESLint
- Utiliser des noms de variables significatifs
- Ajouter des commentaires pour la logique complexe
- Garder les composants petits et focalisés

### Processus de Pull Request

1. S'assurer que votre branche est à jour avec `develop`
2. Remplir complètement le template de PR
3. Demander une review d'au moins un membre de l'équipe
4. Adresser tous les retours
5. Squash and merge une fois approuvé

## Questions ?

Contactez l'équipe à **dev@haylalana.mg**

---

🇬🇧 [English Version](CONTRIBUTING.md)

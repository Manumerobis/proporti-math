# Cahier des Charges - Application Web : "ProportiMath"
## Enseignement de la Proportionnalité en 6e (Cycle 3)

---

## 1. CONTEXTE ET OBJECTIFS GÉNÉRAUX

### 1.1 Contexte pédagogique
L'application ProportiMath s'inscrit dans le cadre de l'enseignement de la proportionnalité en classe de 6e, conformément aux programmes du cycle 3. La proportionnalité est une notion centrale qui permet d'organiser de nombreux apprentissages mathématiques et dont la maîtrise est essentielle pour la vie courante et professionnelle.

### 1.2 Public cible
- **Élèves de 6e** (11-12 ans) du cycle 3
- **Enseignants de mathématiques** du collège
- **Parents** pour accompagnement et suivi

### 1.3 Objectifs pédagogiques officiels
Conformément aux programmes Eduscol, l'application vise à permettre aux élèves de :
- Reconnaître une situation relevant de la proportionnalité
- Résoudre des problèmes de proportionnalité en utilisant différentes procédures
- Maîtriser les propriétés de linéarité (additive et multiplicative)
- Utiliser le passage par l'unité et le coefficient de proportionnalité
- Appliquer la proportionnalité dans les trois domaines : "Nombres et calculs", "Grandeurs et mesures", "Espace et géométrie"

---

## 2. ANALYSE DIDACTIQUE ET PÉDAGOGIQUE

### 2.1 Progression pédagogique
L'apprentissage suit une progression cohérente basée sur les recherches didactiques :

**Niveau 1 - Reconnaissance et Intuition**
- Situations concrètes de proportionnalité vs non-proportionnalité
- Manipulation d'objets et visualisation
- Développement du sens de la proportionnalité

**Niveau 2 - Propriétés de Linéarité**
- Propriété additive : "Si j'ajoute une quantité, j'ajoute la même quantité proportionnelle"
- Propriété multiplicative : "Si je multiplie par un nombre, je multiplie par le même nombre"
- Exercices interactifs avec feedback immédiat

**Niveau 3 - Passage par l'Unité**
- Calcul de la valeur unitaire
- Résolution de problèmes par retour à l'unité
- Applications pratiques et concrètes

**Niveau 4 - Coefficient de Proportionnalité**
- Introduction du coefficient
- Tableaux de proportionnalité
- Résolution experte des problèmes

### 2.2 Situations contextualisées
- **Recettes de cuisine** (proportions d'ingrédients)
- **Achats et prix** (situations commerciales)
- **Échelles et plans** (géométrie et mesures)
- **Vitesse constante** (temps et distance)
- **Conversions d'unités** (mesures)

---

## 3. ARCHITECTURE DE L'APPLICATION

### 3.1 Structure générale
```
ProportiMath/
├── Accueil & Profil Élève
├── Module 1: Découverte et Reconnaissance
├── Module 2: Propriétés de Linéarité
├── Module 3: Passage par l'Unité
├── Module 4: Coefficient de Proportionnalité
├── Module 5: Applications et Synthèse
├── Espace Exerciseur
├── Tableau de Bord Enseignant
└── Ressources Pédagogiques
```

### 3.2 Interface utilisateur
**Design responsive** adapté aux tablettes et ordinateurs scolaires
**Navigation intuitive** avec menu principal et breadcrumb
**Interface ludique** utilisant des codes couleurs et animations
**Accessibilité** respectant les standards WCAG 2.1

---

## 4. SCÉNARIO DIDACTIQUE DÉTAILLÉ

### 4.1 MODULE 1 : Découverte et Reconnaissance (3-4 séances)

**Objectifs spécifiques :**
- Distinguer situations proportionnelles et non-proportionnelles
- Développer l'intuition de la proportionnalité

**Activités interactives :**

**1. Jeu "Vrai ou Faux Proportionnel"**
- Présentation de situations concrètes (graphiques, tableaux, descriptions)
- L'élève doit identifier si la situation est proportionnelle
- Feedback immédiat avec explication
- Système de points et badges de progression

**2. Manipulation Virtuelle "Le Stand de Marché"**
- Simulation d'achat de fruits avec prix variables
- L'élève teste différentes quantités et observe les prix
- Comparaison avec des situations non-proportionnelles (frais de port fixes)
- Graphiques interactifs en temps réel

**3. Atelier "Recettes de Cuisine"**
- Modification des proportions d'une recette
- Visualisation des quantités d'ingrédients
- Expérimentation libre avec validation automatique

**Exerciseur intégré :**
- QCM progressifs avec images et contextes variés
- Exercices de tri et classification
- Mini-jeux de reconnaissance temporisés

### 4.2 MODULE 2 : Propriétés de Linéarité (4-5 séances)

**Objectifs spécifiques :**
- Maîtriser la propriété additive de la proportionnalité
- Maîtriser la propriété multiplicative de la proportionnalité
- Appliquer ces propriétés en situation

**Activités interactives :**

**1. Laboratoire Virtuel "Propriétés Magiques"**
- Interface de manipulation avec curseurs et boutons
- Visualisation en temps réel des transformations
- Animations expliquant le "pourquoi" mathématique

**2. Jeu "Constructeur de Tableaux"**
- Construction progressive de tableaux de proportionnalité
- Aide contextuelle et indices visuels
- Validation étape par étape

**3. Défis "Calcul Mental Proportionnel"**
- Exercices chronomètrés avec difficultés croissantes
- Stratégies de calcul mises en évidence
- Classements et récompenses

**Exerciseur intégré :**
- Exercices à trous avec aide progressive
- Problèmes contextualisés avec étapes guidées
- Auto-évaluation avec correction détaillée

### 4.3 MODULE 3 : Passage par l'Unité (3-4 séances)

**Objectifs spécifiques :**
- Comprendre et utiliser la méthode du passage par l'unité
- Résoudre des problèmes en autonomie
- Choisir la méthode la plus adaptée

**Activités interactives :**

**1. Simulateur "L'Usine à Calculs"**
- Représentation visuelle du processus de calcul
- Étapes décomposées avec animations
- Comparaison de différentes méthodes

**2. Escape Game "Mission Proportionnalité"**
- Résolution d'énigmes par passage à l'unité
- Progression narrative motivante
- Collaboration possible entre élèves

**Exerciseur intégré :**
- Problèmes guidés avec étapes explicites
- Calculatrice intégrée avec historique
- Banque de problèmes contextualisés

### 4.4 MODULE 4 : Coefficient de Proportionnalité (4-5 séances)

**Objectifs spécifiques :**
- Identifier et calculer le coefficient de proportionnalité
- Utiliser le coefficient pour résoudre des problèmes
- Faire le lien avec les notions de fonction linéaire (initiation)

**Activités interactives :**

**1. Explorateur "À la Recherche du Coefficient"**
- Interface de détection du coefficient dans des tableaux
- Visualisation graphique de la droite passant par l'origine
- Connexion tableau-graphique-formule

**2. Atelier "Créateur de Situations"**
- L'élève crée ses propres problèmes de proportionnalité
- Partage avec les camarades
- Validation par l'outil

**Exerciseur intégré :**
- Exercices de calcul de coefficient
- Problèmes complexes avec plusieurs étapes
- Situations interdisciplinaires (sciences, géographie)

### 4.5 MODULE 5 : Applications et Synthèse (3-4 séances)

**Objectifs spécifiques :**
- Synthétiser toutes les méthodes apprises
- Appliquer dans des contextes variés
- Développer l'autonomie et l'esprit critique

**Activités interactives :**

**1. Projet "Mon Entreprise Virtuelle"**
- Simulation économique avec calculs proportionnels
- Gestion de stocks, prix, bénéfices
- Prise de décision basée sur les mathématiques

**2. Défi Final "Maître de la Proportionnalité"**
- Évaluation gamifiée de toutes les compétences
- Adaptation du niveau en temps réel
- Certification de réussite

---

## 5. ÉLÉMENTS DE LUDIFICATION

### 5.1 Système de progression
**Niveaux et Expérience :**
- 20 niveaux progressifs avec seuils clairs
- Points d'expérience (XP) gagnés selon la performance
- Barre de progression visuelle

**Badges et Récompenses :**
- "Détective Proportionnel" : reconnaissance de situations
- "Calculateur Express" : rapidité en calcul mental
- "Stratège Mathématique" : utilisation de méthodes variées
- "Persévérant" : efforts soutenus
- "Collaborateur" : aide aux camarades

### 5.2 Mécaniques de jeu
**Défis Quotidiens :** Exercices courts renouvelés chaque jour
**Quêtes Hebdomadaires :** Objectifs à plus long terme
**Mode Coopératif :** Résolution de problèmes en équipe
**Tournois :** Compétitions amicales entre classes
**Avatar Personnalisable :** Évolution selon les réussites

### 5.3 Feedback et motivation
**Feedback Immédiat :** Validation/correction instantanée
**Encouragements Positifs :** Messages motivants personnalisés
**Analyse d'Erreurs :** Explications constructives
**Suggestions Adaptées :** Recommandations personnalisées

---

## 6. EXERCISEURS INTÉGRÉS

### 6.1 Types d'exercices

**Exercices de Reconnaissance :**
- QCM avec contextes variés
- Tri et classification d'images
- Analyse de graphiques et tableaux

**Exercices de Calcul :**
- Complétion de tableaux
- Résolution de problèmes guidés
- Calcul mental chronométré

**Exercices de Modélisation :**
- Création de problèmes
- Représentations multiples (tableau, graphique, formule)
- Applications concrètes

### 6.2 Adaptation et différenciation
**Parcours Personnalisés :** Adaptation selon le niveau de l'élève
**Aide Progressive :** Indices disponibles à la demande
**Temps Flexible :** Adaptation du rythme individuel
**Remédiations Ciblées :** Exercices spécifiques aux difficultés

### 6.3 Évaluation et suivi
**Évaluation Formative Continue :** Suivi des progrès en temps réel
**Auto-évaluation :** Outils de réflexion pour l'élève
**Bilans Périodiques :** Synthèses des acquis
**Portfolio Numérique :** Trace des apprentissages

---

## 7. TABLEAU DE BORD ENSEIGNANT

### 7.1 Suivi individuel
- Progression détaillée par élève
- Identification des difficultés spécifiques
- Temps passé sur chaque module
- Stratégies de résolution utilisées

### 7.2 Vue d'ensemble classe
- Statistiques globales de réussite
- Répartition des niveaux
- Modules les plus difficiles
- Comparaisons entre classes

### 7.3 Outils pédagogiques
- Banque d'exercices personnalisables
- Création d'évaluations
- Ressources téléchargeables
- Guide d'utilisation pédagogique

---

## 8. SPÉCIFICATIONS TECHNIQUES

### 8.1 Technologies recommandées
**Frontend :** HTML5, CSS3, JavaScript (React ou Vue.js)
**Backend :** Node.js ou Python (Django/Flask)
**Base de données :** PostgreSQL ou MongoDB
**Hosting :** Solution cloud scalable (AWS, Google Cloud)

### 8.2 Compatibilité et performance
**Navigateurs :** Chrome, Firefox, Safari, Edge (versions récentes)
**Appareils :** Desktop, tablettes (iOS/Android)
**Connexion :** Fonctionnement optimal avec connexion faible
**Responsive Design :** Adaptation automatique aux écrans

### 8.3 Sécurité et confidentialité
**Conformité RGPD :** Protection des données élèves
**Authentification :** Système sécurisé multi-niveaux
**Sauvegarde :** Données protégées et sauvegardées
**Accès :** Contrôle des permissions par profil

---

## 9. CONTENUS PÉDAGOGIQUES DÉTAILLÉS

### 9.1 Exemples concrets par module

**Module 1 - Situations de base :**
- Achat de cahiers : 3 cahiers = 9€, 6 cahiers = ?
- Âge vs taille : proportionnel ou non ?
- Recette : 4 personnes → 8 personnes
- Distance vs temps à vitesse constante

**Module 2 - Propriétés :**
- "Si 5 pommes coûtent 3€, combien coûtent 10 pommes ?"
- Tableaux à compléter avec propriétés
- Erreurs fréquentes à éviter (addition constante)

**Module 3 - Passage par l'unité :**
- "12 billes pèsent 60g, quelle est la masse de 51 billes ?"
- Calcul du prix unitaire
- Conversions d'unités

**Module 4 - Coefficient :**
- Reconnaissance du coefficient dans des tableaux
- Applications aux échelles et plans
- Introduction aux pourcentages simples

### 9.2 Banque de problèmes contextualisés
- **Cuisine :** Recettes pour différents nombres de convives
- **Commerce :** Prix selon les quantités
- **Sport :** Performances et temps
- **Sciences :** Concentrations et mélanges
- **Géographie :** Échelles de cartes
- **Art :** Proportions et géométrie

---

## 10. ÉVALUATION ET CERTIFICATION

### 10.1 Évaluation formative
- Quiz courts après chaque leçon
- Auto-évaluation avec grilles de critères
- Peer-assessment (évaluation par les pairs)
- Portfolio de réalisations

### 10.2 Évaluation sommative
- Tests de fin de module
- Projet final intégrateur
- Évaluation des compétences transversales
- Certification de niveau atteint

### 10.3 Remédiation et approfondissement
- Parcours de remédiation automatiques
- Exercices d'approfondissement pour les élèves avancés
- Ressources complémentaires
- Projets d'investigation

---

## 11. PLANNING DE DÉVELOPPEMENT

### 11.1 Phase 1 - Conception (2 mois)
- Finalisation du cahier des charges
- Maquettes et prototypes
- Architecture technique
- Tests utilisabilité

### 11.2 Phase 2 - Développement (6 mois)
- Développement des modules 1-2
- Tests alpha internes
- Développement des modules 3-4
- Intégration exerciseurs

### 11.3 Phase 3 - Test et déploiement (3 mois)
- Tests bêta avec enseignants
- Corrections et ajustements
- Formation des utilisateurs
- Déploiement progressif

### 11.4 Phase 4 - Maintenance et évolution (continue)
- Support utilisateurs
- Mises à jour de contenu
- Nouvelles fonctionnalités
- Analyse des usages

---

## 12. BUDGET ESTIMATIF

### 12.1 Développement initial
- Conception et design : 15 000€
- Développement technique : 60 000€
- Contenus pédagogiques : 20 000€
- Tests et déploiement : 10 000€
- **Total Phase 1 :** 105 000€

### 12.2 Coûts annuels
- Hébergement et maintenance : 8 000€
- Support utilisateurs : 12 000€
- Évolutions et mises à jour : 15 000€
- **Total annuel :** 35 000€

---

## 13. INDICATEURS DE RÉUSSITE

### 13.1 Indicateurs pédagogiques
- Taux de réussite aux évaluations (objectif : +20%)
- Temps d'engagement sur l'application (objectif : 80% completion)
- Satisfaction des élèves (objectif : 4/5)
- Adoption par les enseignants (objectif : 90%)

### 13.2 Indicateurs techniques
- Temps de chargement < 3 secondes
- Disponibilité > 99%
- Compatibilité multi-navigateurs
- Absence de bugs critiques

---

## CONCLUSION

Ce cahier des charges présente une vision complète et ambitieuse pour l'application ProportiMath. L'approche pédagogique s'appuie sur les recherches en didactique des mathématiques et les programmes officiels, tout en intégrant les codes de la ludification pour maintenir l'engagement des élèves.

L'application propose un parcours progressif et adaptatif qui respecte les rythmes d'apprentissage individuels, tout en offrant aux enseignants des outils de suivi et d'accompagnement performants.

La réussite de ce projet nécessitera une collaboration étroite entre experts pédagogiques, développeurs et enseignants utilisateurs, dans une démarche d'amélioration continue basée sur les retours d'usage.
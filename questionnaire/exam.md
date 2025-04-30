# Questionnaire 

### Objectif des tests unitaires
Quel est l'objectif principal des tests unitaires ?

    Réponse : B

   - A) Tester l'intégration entre plusieurs composants
   - B) Vérifier le comportement d'une unité de code isolée
   - C) Valider l'expérience utilisateur
   - D) Tester les performances du système

### Utilisation de Gherkin
Gherkin est principalement utilisé pour :

    Réponse : B

   - A) Écrire des tests unitaires
   - B) Décrire le comportement attendu dans un format compréhensible par tous
   - C) Documenter le code source
   - D) Analyser les performances des tests

### Principe d'isolation
Expliquez en quoi consiste le principe d'isolation dans les tests unitaires et pourquoi il est important.

    Réponse : Le principe d'isolation signifie que chaque test unitaire ne doit tester qu'un seul composant ou une seule fonction sans dépendre des autres parties de l'application

### Origine du BDD
Le BDD est une extension du :

    Réponse : B

   - A) Waterfall
   - B) Test Driven Development
   - C) Extreme Programming
   - D) Scrum

### Fonction des tests d'intégration
Les tests d'intégration vérifient principalement :

    Réponse : B

   - A) Le fonctionnement isolé de chaque composant
   - B) L'interaction entre différents composants ou modules
   - C) L'expérience utilisateur globale
   - D) La vitesse d'exécution du code

### Structure Gherkin
Expliquez la structure d'un scénario Gherkin et donnez un exemple concret.
    
    Réponse : La structure d'un scénario Gherkin est composé de mots-clés : Feature, Scenario, Given, When et Then.
    
    exemple : 
        Feature: Authentification  
            Scenario: Connexion réussie  
                Given l'utilisateur est sur la page de connexion  
                When il saisit ses identifiants valides  
                Then il est redirigé vers le tableau de bord

### Mocks en tests unitaires
Dans le contexte des tests unitaires, que sont les "mocks" ?

    Réponse : B

   - A) Des erreurs volontairement introduites pour vérifier la robustesse du code
   - B) Des objets qui simulent le comportement de dépendances réelles
   - C) Des tests qui échouent intentionnellement
   - D) Des interfaces utilisateur simulées

### Objectif des tests end-to-end
Les tests end-to-end visent à :

    Réponse : B

   - A) Vérifier le fonctionnement d'un composant isolé
   - B) Tester l'application de bout en bout du point de vue de l'utilisateur
   - C) Mesurer uniquement les performances de l'application
   - D) Remplacer tous les autres types de tests

### Cycle TDD
Expliquez en détail le cycle Red-Green-Refactor du TDD et ce qui se passe à chaque étape.

    Réponse : 
        Red : écrire un test qui échoue
        Green : écrire le minimum de code pour faire passer le test
        Refactor : améliorer le code sans casser le test

### Caractéristiques d'un bon test unitaire
Quelle est la caractéristique idéale d'un bon test unitaire ?

    Réponse : B

    - A) Il doit être complexe pour couvrir tous les cas
    - B) Il doit être rapide à exécuter, isolé et répétable
    - C) Il doit tester plusieurs fonctionnalités à la fois
    - D) Il doit nécessiter une configuration manuelle avant chaque exécution

### Mots-clés de Gherkin
Quels sont les mots-clés principaux de Gherkin ?

    Réponse : C

    - A) Test, Code, Validate
    - B) Setup, Execute, Verify, Teardown
    - C) Feature, Scenario, Given, When, Then
    - D) Describe, It, Expect, Assert

### Tests unitaires vs tests d'intégration
Quelles sont les principales différences entre les tests unitaires et les tests d'intégration ?

    Réponse : 
        Les tests unitaires sont des tests qui testent une unité de code isolée
        Les tests d'intégration sont des tests qui testent l'interaction entre différents composants ou modules

### Nom du cycle TDD    
Le cycle TDD classique est connu sous le nom de :

    Réponse : B

    - A) Plan-Do-Check-Act
    - B) Red-Green-Refactor
    - C) Build-Measure-Learn
    - D) Test-Code-Deploy

### Focus des tests fonctionnels
Les tests fonctionnels se concentrent sur :

    Réponse : C

    - A) Le code source interne
    - B) Les interactions entre composants
    - C) Le comportement du système par rapport aux spécifications
    - D) La performance du système sous charge

### BDD et communication d'équipe
Comment le BDD peut-il améliorer la communication entre les équipes techniques et les équipes métier ?

    Réponse : Le BDD permet de définir des comportements attendus sous forme de scénarios clairs et compréhensibles par toutes les équipes, réduisant les malentendus.

### Avantage principal du TDD
Quel est l'avantage principal du TDD ?

    Réponse : C

    - A) Il réduit le temps de développement global
    - B) Il garantit l'absence totale de bugs
    - C) Il favorise un design modulaire et des interfaces claires
    - D) Il élimine le besoin de documentation

### Avantages et défis des tests end-to-end
Quels sont les avantages et les défis spécifiques liés aux tests end-to-end par rapport aux autres types de tests ?

    Réponse :
        Avantages : 
            - Testent l'application de bout en bout
            - Simulent le comportement réel des utilisateurs
            - Couvrent une grande partie de la fonctionnalité
        Défis : 
            - Lent et coûteux à exécuter
            - Peu répétables
            - Fragilité face aux changements

### Format des scénarios BDD
Quel est le format typique d'un scénario BDD ?

    Réponse : B

    - A) Si-Alors
    - B) Étant donné-Quand-Alors
    - C) Qui-Quoi-Où-Quand
    - D) Pour-Pendant-Après

### Avantages et limites des tests unitaires
Décrivez les avantages et les limites des tests unitaires dans un projet de développement logiciel.

    Réponse : 
        Avantages : 
            - Rapides et faciles à écrire
            - Isolent les composants
        Limites : 
            - Ne couvrent pas tous les cas
            - Ne simulent pas le comportement réel

### Fonctionnalité de réutilisation dans Gherkin
Quelle est la fonctionnalité de Gherkin qui permet de réutiliser des étapes communes à plusieurs scénarios ?

    Réponse : B

    - A) Hooks
    - B) Background
    - C) Scenario Outline
    - D) Tags

### Responsabilité des tests fonctionnels
Qui est généralement responsable de l'écriture et de l'exécution des tests fonctionnels ?

    Réponse : C

    - A) Les développeurs uniquement
    - B) Les testeurs QA uniquement
    - C) Les développeurs et les testeurs QA
    - D) Les utilisateurs finaux

### Moment d'écriture du code en TDD
Dans le TDD, à quel moment écrit-on le code de production ?

    Réponse : C

    - A) Avant d'écrire les tests
    - B) Après avoir écrit les tests mais avant de les exécuter
    - C) Après avoir exécuté les tests et constaté leur échec
    - D) Après que tous les tests aient réussi

### Outils pour tests end-to-end
Quel outil est couramment utilisé pour les tests end-to-end d'applications web ?

    Réponse : C

    - A) JUnit
    - B) Mockito
    - C) Playwright
    - D) NUnit

### Différences entre BDD et TDD
En quoi le BDD diffère-t-il du TDD en termes d'approche et d'objectifs ?

    Réponse : 
        TDD : axé sur le code, écrit les tests avant le code.
        BDD : axé sur le comportement, rédigé avec un langage accessible à tous.

### Défis des tests d'intégration
Quels défis sont fréquemment rencontrés lors de la mise en place de tests d'intégration ?

    Réponse : D

    - A) La difficulté à isoler les composants
    - B) La lenteur d'exécution des tests
    - C) La difficulté à simuler certaines dépendances
    - D) Toutes les réponses ci-dessus

### Caractéristiques d'un bon test end-to-end
Quelle est la caractéristique d'un bon test end-to-end ?

    Réponse : B

    - A) Il doit tester toutes les fonctionnalités en une seule fois
    - B) Il doit simuler avec précision le comportement réel des utilisateurs
    - C) Il doit être exécuté uniquement en production
    - D) Il doit être modifié fréquemment

### Défis de l'adoption du TDD
Quels sont les défis couramment rencontrés lors de l'adoption du TDD dans une équipe, et comment pourriez-vous les surmonter ?

    Réponse : 
        Manque de formation, changement de culture, temps initial plus long. 
        Solutions : formation, pair programming, commencer par de petits projets.

### Frameworks de tests unitaires
Lequel de ces frameworks n'est PAS utilisé pour les tests unitaires ?

    Réponse : C

    - A) JUnit
    - B) NUnit
    - C) Selenium
    - D) Vitest

### Rôles dans le processus BDD
Quels rôles sont généralement impliqués dans le processus BDD ?

    Réponse : D

    - A) Uniquement les développeurs
    - B) Développeurs et testeurs
    - C) Développeurs, testeurs et product owners
    - D) Développeurs, testeurs, product owners et parties prenantes métier

### Maintenance des tests end-to-end
Comment géreriez-vous la maintenance des tests end-to-end pour une application qui évolue rapidement ?

    Réponse : 
        Utiliser des sélecteurs robustes, automatiser via CI/CD, garder les tests à jour avec les user stories, écrire des tests stables et ciblés.

### Inconvénients des tests fonctionnels
Quel est le principal inconvénient des tests fonctionnels ?

    Réponse : B

    - A) Ils sont trop simples pour détecter des bugs complexes
    - B) Ils sont généralement lents et coûteux à exécuter
    - C) Ils ne peuvent pas être automatisés
    - D) Ils nécessitent peu de connaissances du domaine

### Intégration de Gherkin en agile
Comment intégreriez-vous Gherkin dans un processus de développement agile ? Quels seraient les avantages ?

    Réponse : 
        Écrire les scénarios Gherkin lors des réunions de planification avec le PO. Avantages : meilleure compréhension des exigences, détection précoce des incohérences.

### Principes du TDD
Lequel des principes suivants n'est PAS associé au TDD ?

    Réponse : D

    - A) Écrire le test minimum qui échoue
    - B) Écrire le code minimum qui fait passer le test
    - C) Refactoriser le code après chaque test réussi
    - D) Écrire tous les tests à la fin du développement

### Différences entre tests fonctionnels et autres tests
En quoi les tests fonctionnels diffèrent-ils des tests unitaires et d'intégration en termes d'approche et d'objectifs ?

    Réponse : 
        Tests fonctionnels : testent le comportement du système par rapport aux spécifications.
        Tests unitaires : testent les composants isolés.
        Tests d'intégration : testent l'interaction entre différents composants.

### Approche combinant TDD, BDD et Gherkin
Quelle approche combine naturellement TDD, BDD et Gherkin ?

    Réponse : B

    - A) Extreme Programming
    - B) Specification By Example
    - C) Scrum
    - D) Kanban

### Organisation des tests fonctionnels
Décrivez comment vous organiseriez les tests fonctionnels pour une application web de e-commerce.

    Réponse : 
        Prioriser les fonctionnalités critiques, définir les cas métier en Gherkin, automatiser via CI/CD, structurer les tests par modules/fonctionnalités.

### Pyramide de tests
Quelle est la pyramide de tests classique, du bas vers le haut ?

    Réponse : B

    - A) Tests E2E, Tests fonctionnels, Tests d'intégration, Tests unitaires
    - B) Tests unitaires, Tests d'intégration, Tests fonctionnels, Tests E2E
    - C) Tests fonctionnels, Tests unitaires, Tests d'intégration, Tests E2E
    - D) Tests unitaires, Tests fonctionnels, Tests d'intégration, Tests E2E

### Stratégie de test optimale
Comment détermineriez-vous la stratégie de test optimale pour un projet, en considérant les différents types de tests abordés dans ce questionnaire ?

    Réponse : 
        Analyser les risques, coûts et bénéfices. Appliquer la pyramide de tests. Automatiser les tests critiques. Favoriser des tests rapides (unitaires), équilibrer avec des tests plus globaux (intégration, e2e) selon les besoins.

### Quelle est l'erreur récurente qui peut être faite lors de test end 2 end ? (Je l'ai répété pas mal de fois)

    Réponse : 
        Tenter de tout tester en end-to-end, ce qui rend les tests lents, instables et difficiles à maintenir.

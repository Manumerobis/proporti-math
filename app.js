// ProportiMath - Application d'apprentissage de la proportionnalité
class ProportiMathApp {
    constructor() {
        this.currentPage = 'homepage';
        this.userProgress = {
            xp: 0,
            level: 1,
            completedModules: [],
            moduleProgress: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
            badges: [],
            exercisesCompleted: 0,
            startTime: Date.now()
        };
        
        this.currentActivity = null;
        this.gameScore = 0;
        this.currentSituationIndex = 0;
        this.currentExerciseIndex = 0;
        this.exerciseScore = 0;
        this.currentExerciseType = 'recognition';
        
        this.situations = [
            {
                text: "Un paquet de 6 yaourts coûte 3€. Deux paquets coûtent 6€. Trois paquets coûtent 9€.",
                isProportional: true,
                explanation: "Correct ! Le prix double quand on double la quantité, c'est bien proportionnel."
            },
            {
                text: "Pour faire un gâteau, il faut 30 minutes de cuisson + 10 minutes de préparation par personne.",
                isProportional: false,
                explanation: "Non ! Les 30 minutes sont fixes, seule la préparation varie avec le nombre de personnes."
            },
            {
                text: "1 kg de pommes coûte 2€, 2 kg coûtent 4€, 3 kg coûtent 6€.",
                isProportional: true,
                explanation: "Parfait ! Le prix augmente de manière constante avec la quantité."
            },
            {
                text: "L'âge d'un enfant et sa taille : à 5 ans il mesure 110cm, à 10 ans 140cm, à 15 ans 170cm.",
                isProportional: false,
                explanation: "Non ! La croissance n'est pas constante et proportionnelle à l'âge."
            },
            {
                text: "En roulant à vitesse constante : 1h → 60km, 2h → 120km, 3h → 180km.",
                isProportional: true,
                explanation: "Excellent ! À vitesse constante, distance et temps sont proportionnels."
            },
            {
                text: "Le prix d'entrée au cinéma : 8€ par personne, quel que soit l'âge.",
                isProportional: true,
                explanation: "Correct ! Le prix total est proportionnel au nombre de personnes."
            },
            {
                text: "Louer un vélo : 5€ de caution + 2€ par heure.",
                isProportional: false,
                explanation: "Non ! La caution fixe de 5€ empêche la proportionnalité."
            },
            {
                text: "Photocopies : 1 copie = 0,10€, 10 copies = 1€, 100 copies = 10€.",
                isProportional: true,
                explanation: "Parfait ! Le prix est directement proportionnel au nombre de copies."
            },
            {
                text: "Aire d'un carré selon son côté : côté 2cm → 4cm², côté 4cm → 16cm².",
                isProportional: false,
                explanation: "Non ! L'aire varie avec le carré du côté, pas proportionnellement."
            },
            {
                text: "Recette de crêpes : pour 4 personnes, 400g de farine. Pour 8 personnes, 800g.",
                isProportional: true,
                explanation: "Excellent ! Les quantités d'ingrédients sont proportionnelles au nombre de convives."
            }
        ];

        this.exercises = {
            recognition: [
                {
                    question: "Cette situation est-elle proportionnelle ?<br><br><strong>Un livre coûte 12€, deux livres coûtent 24€, trois livres coûtent 36€.</strong>",
                    options: ["Oui, proportionnelle", "Non, non proportionnelle"],
                    correct: 0,
                    explanation: "Correct ! Le prix est proportionnel au nombre de livres."
                },
                {
                    question: "Cette situation est-elle proportionnelle ?<br><br><strong>Abonnement téléphone : 20€/mois + 0,05€ par SMS</strong>",
                    options: ["Oui, proportionnelle", "Non, non proportionnelle"],
                    correct: 1,
                    explanation: "Exact ! L'abonnement fixe empêche la proportionnalité."
                },
                {
                    question: "Cette situation est-elle proportionnelle ?<br><br><strong>Distance parcourue à vélo à vitesse constante selon le temps</strong>",
                    options: ["Oui, proportionnelle", "Non, non proportionnelle"],
                    correct: 0,
                    explanation: "Parfait ! À vitesse constante, distance et temps sont proportionnels."
                },
                {
                    question: "Cette situation est-elle proportionnelle ?<br><br><strong>Le périmètre d'un carré selon la longueur de son côté</strong>",
                    options: ["Oui, proportionnelle", "Non, non proportionnelle"],
                    correct: 0,
                    explanation: "Correct ! Le périmètre = 4 × côté, c'est proportionnel."
                },
                {
                    question: "Cette situation est-elle proportionnelle ?<br><br><strong>L'aire d'un carré selon la longueur de son côté</strong>",
                    options: ["Oui, proportionnelle", "Non, non proportionnelle"],
                    correct: 1,
                    explanation: "Exact ! L'aire = côté², ce n'est pas proportionnel."
                }
            ],
            tableaux: [
                {
                    question: "Complète ce tableau de proportionnalité :<br><br>Nombre de croissants : 3, 6, ?, 15<br>Prix (€) : 2, 4, 6, ?",
                    options: ["9 croissants et 10€", "12 croissants et 12€", "9 croissants et 8€", "10 croissants et 10€"],
                    correct: 0,
                    explanation: "Correct ! Le coefficient est 2/3, donc 9 croissants pour 6€ et 10€ pour 15 croissants."
                },
                {
                    question: "Dans ce tableau, quelle est la valeur manquante ?<br><br>Temps (h) : 2, 4, 6<br>Distance (km) : 120, 240, ?",
                    options: ["300 km", "360 km", "400 km", "320 km"],
                    correct: 1,
                    explanation: "Parfait ! La vitesse est de 60 km/h, donc en 6h : 6 × 60 = 360 km."
                },
                {
                    question: "Quel est le coefficient de proportionnalité ?<br><br>Quantité : 4, 8, 12<br>Prix : 6€, 12€, 18€",
                    options: ["1,5", "2", "0,5", "3"],
                    correct: 0,
                    explanation: "Exact ! 6 ÷ 4 = 1,5€ par unité."
                },
                {
                    question: "Ce tableau est-il proportionnel ?<br><br>Nombre : 2, 4, 6<br>Résultat : 8, 16, 25",
                    options: ["Oui", "Non"],
                    correct: 1,
                    explanation: "Correct ! 8÷2=4, 16÷4=4, mais 25÷6≠4, ce n'est pas proportionnel."
                },
                {
                    question: "Trouve la valeur manquante :<br><br>Ingrédient pour 6 personnes : 300g<br>Ingrédient pour 9 personnes : ?",
                    options: ["400g", "450g", "500g", "350g"],
                    correct: 1,
                    explanation: "Parfait ! (300 × 9) ÷ 6 = 450g"
                }
            ],
            calculs: [
                {
                    question: "5 kg de pommes coûtent 12€. Combien coûtent 8 kg ?",
                    options: ["18,40€", "19,20€", "20€", "17,60€"],
                    correct: 1,
                    explanation: "Correct ! Prix unitaire : 12÷5 = 2,40€/kg. Donc 8 × 2,40 = 19,20€"
                },
                {
                    question: "Une voiture consomme 6L pour parcourir 100km. Quelle consommation pour 350km ?",
                    options: ["18L", "21L", "24L", "15L"],
                    correct: 1,
                    explanation: "Parfait ! (6 × 350) ÷ 100 = 21L"
                },
                {
                    question: "Sur une carte à l'échelle 1/25000, 4cm représentent quelle distance réelle ?",
                    options: ["1 km", "2,5 km", "1,5 km", "2 km"],
                    correct: 0,
                    explanation: "Exact ! 4cm × 25000 = 100000cm = 1km"
                },
                {
                    question: "12 ouvriers construisent un mur en 8 jours. Combien de jours pour 16 ouvriers ?",
                    options: ["6 jours", "10 jours", "5 jours", "7 jours"],
                    correct: 0,
                    explanation: "Correct ! C'est une proportionnalité inverse : (12 × 8) ÷ 16 = 6 jours"
                },
                {
                    question: "Un robinet remplit un bassin en 3h avec un débit de 50L/min. En combien de temps avec 75L/min ?",
                    options: ["2h", "4h30", "1h30", "2h30"],
                    correct: 0,
                    explanation: "Parfait ! Proportionnalité inverse : (50 × 3) ÷ 75 = 2h"
                }
            ]
        };

        this.badges = [
            { id: 'detective', name: 'Détective Proportionnel', description: 'Excellente reconnaissance des situations', icon: '🕵️', condition: 'gameComplete' },
            { id: 'calculator', name: 'Calculateur Express', description: 'Rapidité en calcul mental', icon: '⚡', condition: 'exerciseStreak' },
            { id: 'strategist', name: 'Stratège Mathématique', description: 'Utilisation de méthodes variées', icon: '🧠', condition: 'moduleComplete' },
            { id: 'perseverant', name: 'Persévérant', description: 'Efforts soutenus dans l\'apprentissage', icon: '💪', condition: 'xpMilestone' },
            { id: 'collaborator', name: 'Collaborateur', description: 'Aide apportée aux camarades', icon: '🤝', condition: 'special' },
            { id: 'master', name: 'Maître Proportionnel', description: 'Certification finale obtenue', icon: '👑', condition: 'allModules' }
        ];

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateUI();
        this.showNotification('Bienvenue dans ProportiMath ! 🎉', 'success');
    }

    setInitialFocus(container) {
        const first = container.querySelector(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (first) first.focus();
    }

    handleOptionKeydown(e) {
        const options = Array.from(document.querySelectorAll('.option-btn'));
        const index = options.indexOf(document.activeElement);
        if (e.key === 'ArrowRight') {
            const next = options[(index + 1) % options.length];
            next?.focus();
            e.preventDefault();
        } else if (e.key === 'ArrowLeft') {
            const prev = options[(index - 1 + options.length) % options.length];
            prev?.focus();
            e.preventDefault();
        } else if (e.key === 'Enter' && index >= 0) {
            options[index].click();
        }
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.back-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.target.getAttribute('data-target');
                this.navigateTo(target);
            });
        });

        // Modules
        document.querySelectorAll('.module-card').forEach(card => {
            const moduleId = parseInt(card.getAttribute('data-module'));
            card.addEventListener('click', () => {
                if (moduleId === 1 || this.userProgress.completedModules.includes(moduleId - 1)) {
                    this.navigateTo(`module${moduleId}`);
                }
            });
        });

        // Boutons de navigation rapide
        document.getElementById('dashboardBtn')?.addEventListener('click', () => this.navigateTo('dashboard'));
        document.getElementById('exerciserBtn')?.addEventListener('click', () => this.navigateTo('exerciser'));

        // Module 1 - Jeu Vrai/Faux
        document.querySelectorAll('.game-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const answer = e.target.getAttribute('data-answer') === 'true';
                this.checkGameAnswer(answer);
            });
        });

        // Module 1 - Simulateur de marché
        document.getElementById('calculatePrice')?.addEventListener('click', () => this.calculatePrice());

        // Module 1 - Adaptateur de recettes
        document.getElementById('adaptRecipe')?.addEventListener('click', () => this.adaptRecipe());

        // Module 2
        document.getElementById('checkM2Add')?.addEventListener('click', () => this.checkM2Add());
        document.getElementById('checkM2Mult')?.addEventListener('click', () => this.checkM2Mult());
        document.querySelectorAll('.m2-q-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.checkM2Question(e.target.getAttribute('data-answer') === 'true'));
        });

        // Module 3
        document.getElementById('checkM3Unit')?.addEventListener('click', () => this.checkM3Unit());
        document.getElementById('checkM3Price')?.addEventListener('click', () => this.checkM3Price());
        document.querySelectorAll('.m3-q-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.checkM3Question(e.target.getAttribute('data-answer') === 'true'));
        });

        // Module 4
        document.getElementById('checkM4Coef')?.addEventListener('click', () => this.checkM4Coef());
        document.getElementById('checkM4Apply')?.addEventListener('click', () => this.checkM4Apply());
        document.querySelectorAll('.m4-q-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.checkM4Question(e.target.getAttribute('data-answer') === 'true'));
        });

        // Module 5
        document.getElementById('checkM5First')?.addEventListener('click', () => this.checkM5First());
        document.getElementById('checkM5Second')?.addEventListener('click', () => this.checkM5Second());
        document.getElementById('checkM5Third')?.addEventListener('click', () => this.checkM5Third());

        // Activités suivantes
        document.querySelectorAll('.next-activity').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const nextActivity = e.target.getAttribute('data-next');
                this.showActivity(nextActivity);
            });
        });

        // Compléter module
        document.querySelectorAll('.complete-module').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const moduleId = parseInt(e.target.getAttribute('data-module'));
                this.completeModule(moduleId);
            });
        });

        // Exerciseur
        this.setupExerciserListeners();
    }

    setupExerciserListeners() {
        // Types d'exercices
        document.querySelectorAll('.exercise-type-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.exercise-type-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentExerciseType = e.target.getAttribute('data-type');
                this.startExercise();
            });
        });

        // Options d'exercices
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.checkExerciseAnswer(parseInt(e.target.getAttribute('data-answer')));
            });
        });

        // Contrôles d'exercices
        document.getElementById('nextExercise')?.addEventListener('click', () => this.nextExercise());
        document.getElementById('finishExercises')?.addEventListener('click', () => this.finishExercises());
        document.getElementById('restartExercises')?.addEventListener('click', () => this.startExercise());
    }

    navigateTo(pageId) {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        const page = document.getElementById(pageId);
        page?.classList.add('active');
        this.currentPage = pageId;

        if (pageId === 'module1') {
            this.showActivity('activity1-1');
            this.initializeGame();
        } else if (pageId === 'module2') {
            this.showActivity('activity2-1');
        } else if (pageId === 'module3') {
            this.showActivity('activity3-1');
        } else if (pageId === 'module4') {
            this.showActivity('activity4-1');
        } else if (pageId === 'module5') {
            this.showActivity('activity5-1');
        } else if (pageId === 'exerciser') {
            this.startExercise();
        } else if (pageId === 'dashboard') {
            this.updateDashboard();
        }

        if (page) {
            this.setInitialFocus(page);
        }
    }

    showActivity(activityId) {
        document.querySelectorAll('.activity-container').forEach(container => {
            container.classList.remove('active');
        });
        const container = document.getElementById(activityId);
        container?.classList.add('active');

        // Mettre à jour les points de progression
        const activityNumber = parseInt(activityId.split('-')[1]);
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.remove('active', 'completed');
            if (index < activityNumber - 1) {
                dot.classList.add('completed');
            } else if (index === activityNumber - 1) {
                dot.classList.add('active');
            }
        });

        if (container) {
            this.setInitialFocus(container);
        }
    }

    initializeGame() {
        this.currentSituationIndex = 0;
        this.gameScore = 0;
        this.updateGameUI();
    }

    updateGameUI() {
        const situation = this.situations[this.currentSituationIndex];
        document.getElementById('currentSituation').textContent = situation.text;
        document.getElementById('gameScore').textContent = this.gameScore;
        document.getElementById('feedback').className = 'feedback-zone';
        document.getElementById('feedback').textContent = '';
        
        // Réactiver les boutons
        document.querySelectorAll('.game-btn').forEach(btn => {
            btn.disabled = false;
            btn.style.opacity = '1';
        });

        const container = document.getElementById('activity1-1');
        if (container) this.setInitialFocus(container);
    }

    checkGameAnswer(userAnswer) {
        const situation = this.situations[this.currentSituationIndex];
        const isCorrect = userAnswer === situation.isProportional;
        const feedback = document.getElementById('feedback');

        // Désactiver les boutons
        document.querySelectorAll('.game-btn').forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = '0.6';
        });

        if (isCorrect) {
            this.gameScore++;
            feedback.className = 'feedback-zone correct';
            feedback.innerHTML = `✅ ${situation.explanation}`;
            this.addXP(10);
        } else {
            feedback.className = 'feedback-zone incorrect';
            feedback.innerHTML = `❌ ${situation.explanation}`;
        }

        this.currentSituationIndex++;
        
        if (this.currentSituationIndex < this.situations.length) {
            setTimeout(() => {
                this.updateGameUI();
            }, 3000);
        } else {
            // Jeu terminé
            setTimeout(() => {
                this.endGame();
            }, 3000);
        }
    }

    endGame() {
        const feedback = document.getElementById('feedback');
        const score = this.gameScore;
        const total = this.situations.length;
        const percentage = Math.round((score / total) * 100);

        if (percentage >= 70) {
            feedback.className = 'feedback-zone correct';
            feedback.innerHTML = `🎉 Excellent ! Tu as obtenu ${score}/${total} (${percentage}%) !<br>Tu maîtrises bien la reconnaissance des situations proportionnelles !`;
            this.checkBadge('detective');
            this.addXP(50);
        } else {
            feedback.className = 'feedback-zone';
            feedback.innerHTML = `💪 Tu as obtenu ${score}/${total} (${percentage}%).<br>Continue à t'entraîner pour mieux reconnaître la proportionnalité !`;
            this.addXP(20);
        }

        document.querySelector('.next-activity').style.display = 'block';
        this.updateModuleProgress(1, 33);
    }

    calculatePrice() {
        const quantity = parseFloat(document.getElementById('quantity').value);
        const pricePerKg = 2;
        const result = document.getElementById('priceResult');

        if (quantity && quantity > 0) {
            const totalPrice = quantity * pricePerKg;
            result.innerHTML = `
                <div style="background: var(--color-secondary); padding: 16px; border-radius: 8px; margin-top: 16px;">
                    <strong>${quantity} kg × ${pricePerKg}€/kg = ${totalPrice}€</strong><br>
                    <small>C'est un exemple de proportionnalité : le prix est proportionnel à la quantité !</small>
                </div>
            `;
            this.addXP(5);
            this.updateModuleProgress(1, 66);
        } else {
            result.innerHTML = '<p style="color: var(--color-incorrect);">Veuillez entrer une quantité valide !</p>';
        }
    }

    adaptRecipe() {
        const guestCount = parseInt(document.getElementById('guestCount').value);
        const baseGuests = 4;
        const ratio = guestCount / baseGuests;
        
        const adaptedRecipe = document.getElementById('adaptedRecipe');
        
        adaptedRecipe.innerHTML = `
            <h4>Recette adaptée pour ${guestCount} personnes :</h4>
            <ul>
                <li>${Math.round(400 * ratio)}g de farine</li>
                <li>${guestCount} œufs</li>
                <li>${Math.round(40 * ratio)}cl de lait</li>
                <li>${Math.round(40 * ratio)}g de beurre</li>
            </ul>
            <div style="background: var(--color-primary); color: white; padding: 12px; border-radius: 8px; margin-top: 16px;">
                <strong>Coefficient de proportionnalité : ${ratio}</strong><br>
                <small>Toutes les quantités sont multipliées par ${ratio} !</small>
            </div>
        `;
        
        this.addXP(15);
        this.updateModuleProgress(1, 100);
    }

    // Utilitaire générique pour vérifier une réponse numérique
    checkNumericAnswer(inputId, feedbackId, expected, nextBtn, moduleId, progress, xp) {
        const value = parseFloat(document.getElementById(inputId).value);
        const feedback = document.getElementById(feedbackId);

        if (!isNaN(value) && Math.abs(value - expected) < 0.01) {
            feedback.className = 'feedback-zone correct';
            feedback.textContent = 'Correct !';
            if (nextBtn) document.getElementById(nextBtn).style.display = 'block';
            this.addXP(xp);
            this.updateModuleProgress(moduleId, progress);
        } else {
            feedback.className = 'feedback-zone incorrect';
            feedback.textContent = 'Essaie encore.';
        }
    }

    checkBinaryAnswer(answer, expected, feedbackId, completeBtn, moduleId, progress, xp) {
        const feedback = document.getElementById(feedbackId);
        if (answer === expected) {
            feedback.className = 'feedback-zone correct';
            feedback.textContent = 'Bravo !';
            if (completeBtn) document.getElementById(completeBtn).style.display = 'block';
            this.addXP(xp);
            this.updateModuleProgress(moduleId, progress);
        } else {
            feedback.className = 'feedback-zone incorrect';
            feedback.textContent = 'Réponse incorrecte.';
        }
    }

    // Module 2
    checkM2Add() {
        this.checkNumericAnswer('m2AddInput', 'm2AddFeedback', 16, 'next2-1', 2, 33, 10);
    }

    checkM2Mult() {
        this.checkNumericAnswer('m2MultInput', 'm2MultFeedback', 40, 'next2-2', 2, 66, 10);
    }

    checkM2Question(answer) {
        this.checkBinaryAnswer(answer, true, 'm2QFeedback', 'm2Complete', 2, 100, 15);
    }

    // Module 3
    checkM3Unit() {
        this.checkNumericAnswer('m3UnitInput', 'm3UnitFeedback', 4, 'next3-1', 3, 33, 10);
    }

    checkM3Price() {
        this.checkNumericAnswer('m3PriceInput', 'm3PriceFeedback', 28, 'next3-2', 3, 66, 10);
    }

    checkM3Question(answer) {
        this.checkBinaryAnswer(answer, true, 'm3QFeedback', 'm3Complete', 3, 100, 15);
    }

    // Module 4
    checkM4Coef() {
        this.checkNumericAnswer('m4CoefInput', 'm4CoefFeedback', 3, 'next4-1', 4, 33, 10);
    }

    checkM4Apply() {
        this.checkNumericAnswer('m4ApplyInput', 'm4ApplyFeedback', 27, 'next4-2', 4, 66, 10);
    }

    checkM4Question(answer) {
        this.checkBinaryAnswer(answer, true, 'm4QFeedback', 'm4Complete', 4, 100, 15);
    }

    // Module 5
    checkM5First() {
        this.checkNumericAnswer('m5FirstInput', 'm5FirstFeedback', 20, 'next5-1', 5, 33, 10);
    }

    checkM5Second() {
        this.checkNumericAnswer('m5SecondInput', 'm5SecondFeedback', 15, 'next5-2', 5, 66, 10);
    }

    checkM5Third() {
        this.checkNumericAnswer('m5ThirdInput', 'm5ThirdFeedback', 240, 'm5Complete', 5, 100, 15);
    }

    completeModule(moduleId) {
        if (!this.userProgress.completedModules.includes(moduleId)) {
            this.userProgress.completedModules.push(moduleId);
            this.addXP(100);
            this.showNotification(`Module ${moduleId} terminé ! 🏆 +100 XP`, 'success');
            this.checkBadge('strategist');
            this.createConfetti();
            
            // Débloquer le module suivant
            if (moduleId < 5) {
                this.showNotification(`Module ${moduleId + 1} débloqué ! ✨`, 'achievement');
            }
        }
        
        this.navigateTo('homepage');
        this.updateUI();
    }

    startExercise() {
        this.currentExerciseIndex = 0;
        this.exerciseScore = 0;
        document.getElementById('exerciseResults').style.display = 'none';
        document.querySelector('.exercise-area').style.display = 'block';
        this.showCurrentExercise();
    }

    showCurrentExercise() {
        const exercises = this.exercises[this.currentExerciseType];
        const exercise = exercises[this.currentExerciseIndex];
        
        document.querySelector('.exercise-content h4').textContent = `Question ${this.currentExerciseIndex + 1}/${exercises.length}`;
        document.getElementById('exerciseQuestion').innerHTML = exercise.question;
        
        const optionsContainer = document.querySelector('.exercise-options');
        optionsContainer.innerHTML = '';
        
        exercise.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'btn btn--outline option-btn';
            button.textContent = option;
            button.setAttribute('data-answer', index);
            button.addEventListener('click', () => this.checkExerciseAnswer(index));
            optionsContainer.appendChild(button);
        });

        this.setInitialFocus(optionsContainer);
        optionsContainer.removeEventListener('keydown', this.optionKeyHandler);
        this.optionKeyHandler = (e) => this.handleOptionKeydown(e);
        optionsContainer.addEventListener('keydown', this.optionKeyHandler);
        
        document.getElementById('exerciseFeedback').innerHTML = '';
        document.getElementById('nextExercise').style.display = 'none';
        document.getElementById('finishExercises').style.display = 'none';
    }

    checkExerciseAnswer(answerIndex) {
        const exercises = this.exercises[this.currentExerciseType];
        const exercise = exercises[this.currentExerciseIndex];
        const isCorrect = answerIndex === exercise.correct;
        
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach((btn, index) => {
            btn.disabled = true;
            if (index === exercise.correct) {
                btn.classList.add('correct');
            } else if (index === answerIndex && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        const feedback = document.getElementById('exerciseFeedback');
        if (isCorrect) {
            this.exerciseScore++;
            feedback.className = 'exercise-feedback correct';
            feedback.innerHTML = `✅ ${exercise.explanation}`;
            this.addXP(10);
        } else {
            feedback.className = 'exercise-feedback incorrect';
            feedback.innerHTML = `❌ ${exercise.explanation}`;
        }
        
        this.currentExerciseIndex++;
        if (this.currentExerciseIndex < exercises.length) {
            document.getElementById('nextExercise').style.display = 'block';
        } else {
            document.getElementById('finishExercises').style.display = 'block';
        }
    }

    nextExercise() {
        this.showCurrentExercise();
    }

    finishExercises() {
        const total = this.exercises[this.currentExerciseType].length;
        const percentage = Math.round((this.exerciseScore / total) * 100);
        
        document.querySelector('.exercise-area').style.display = 'none';
        document.getElementById('exerciseResults').style.display = 'block';
        
        document.getElementById('finalScore').textContent = `${this.exerciseScore}/${total}`;
        document.getElementById('finalPercent').textContent = `${percentage}%`;
        
        this.userProgress.exercisesCompleted += this.exerciseScore;
        
        if (percentage >= 80) {
            this.checkBadge('calculator');
            this.addXP(50);
        } else {
            this.addXP(20);
        }
    }

    updateModuleProgress(moduleId, progress) {
        this.userProgress.moduleProgress[moduleId] = progress;
        document.querySelector(`[data-progress="${moduleId}"]`).style.width = `${progress}%`;
        
        if (progress === 100) {
            setTimeout(() => {
                document.querySelector(`[data-module="${moduleId}"] button`).textContent = 'Terminé ✓';
                document.querySelector(`[data-module="${moduleId}"] button`).classList.remove('btn--primary');
                document.querySelector(`[data-module="${moduleId}"] button`).classList.add('btn--secondary');
            }, 500);
        }
    }

    addXP(amount) {
        this.userProgress.xp += amount;
        const newLevel = Math.floor(this.userProgress.xp / 100) + 1;
        
        if (newLevel > this.userProgress.level) {
            this.userProgress.level = newLevel;
            this.showNotification(`Niveau ${newLevel} atteint ! ⭐`, 'achievement');
            this.checkBadge('perseverant');
            this.updateAvatar();
        }
        
        this.updateUI();
    }

    updateAvatar() {
        const avatars = ['👦', '👧', '🧒', '👨‍🎓', '👩‍🎓', '🧑‍🎓'];
        const avatarIndex = Math.min(this.userProgress.level - 1, avatars.length - 1);
        document.getElementById('userAvatar').textContent = avatars[avatarIndex];
    }

    checkBadge(condition) {
        const badge = this.badges.find(b => b.condition === condition);
        if (badge && !this.userProgress.badges.includes(badge.id)) {
            this.userProgress.badges.push(badge.id);
            this.showNotification(`Badge obtenu : ${badge.icon} ${badge.name}`, 'achievement');
            this.createConfetti();
        }
    }

    updateUI() {
        document.getElementById('userXP').textContent = this.userProgress.xp;
        document.getElementById('userLevel').textContent = this.userProgress.level;
        
        // Progression globale
        const totalProgress = Object.values(this.userProgress.moduleProgress).reduce((a, b) => a + b, 0) / 5;
        document.getElementById('globalProgress').style.width = `${totalProgress}%`;
        document.getElementById('progressPercent').textContent = Math.round(totalProgress);
        
        // État des modules
        document.querySelectorAll('.module-card').forEach(card => {
            const moduleId = parseInt(card.getAttribute('data-module'));
            const button = card.querySelector('button');
            
            if (moduleId === 1) {
                button.disabled = false;
                button.classList.remove('btn--secondary');
                button.classList.add('btn--primary');
                button.textContent = this.userProgress.completedModules.includes(1) ? 'Terminé ✓' : 'Commencer';
            } else if (this.userProgress.completedModules.includes(moduleId - 1)) {
                button.disabled = false;
                button.textContent = this.userProgress.completedModules.includes(moduleId) ? 'Terminé ✓' : 'Commencer';
                button.classList.remove('btn--secondary');
                button.classList.add('btn--primary');
            }
        });
    }

    updateDashboard() {
        // Badges
        const badgesContainer = document.getElementById('badgesContainer');
        badgesContainer.innerHTML = '';
        
        this.badges.forEach(badge => {
            const badgeElement = document.createElement('div');
            badgeElement.className = `badge-item ${this.userProgress.badges.includes(badge.id) ? 'earned' : 'locked'}`;
            badgeElement.innerHTML = `
                <span class="badge-icon">${badge.icon}</span>
                <span class="badge-name">${badge.name}</span>
            `;
            badgesContainer.appendChild(badgeElement);
        });
        
        // Statistiques
        document.getElementById('completedModules').textContent = `${this.userProgress.completedModules.length}/5`;
        document.getElementById('completedExercises').textContent = this.userProgress.exercisesCompleted;
        
        const learningTime = Math.round((Date.now() - this.userProgress.startTime) / 60000);
        document.getElementById('learningTime').textContent = `${learningTime} min`;
        
        // Progression par module
        Object.keys(this.userProgress.moduleProgress).forEach(moduleId => {
            const progress = this.userProgress.moduleProgress[moduleId];
            const progressBar = document.getElementById(`module${moduleId}Progress`);
            if (progressBar) {
                progressBar.style.width = `${progress}%`;
            }
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `<strong>${message}</strong>`;
        
        document.getElementById('notifications').appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    createConfetti() {
        const canvas = document.getElementById('confetti-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const confetti = [];
        const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'];
        
        for (let i = 0; i < 100; i++) {
            confetti.push({
                x: Math.random() * canvas.width,
                y: -10,
                vx: (Math.random() - 0.5) * 4,
                vy: Math.random() * 3 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 8 + 4,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10
            });
        }
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            confetti.forEach((particle, index) => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.rotation += particle.rotationSpeed;
                
                ctx.save();
                ctx.translate(particle.x, particle.y);
                ctx.rotate(particle.rotation * Math.PI / 180);
                ctx.fillStyle = particle.color;
                ctx.fillRect(-particle.size/2, -particle.size/2, particle.size, particle.size);
                ctx.restore();
                
                if (particle.y > canvas.height) {
                    confetti.splice(index, 1);
                }
            });
            
            if (confetti.length > 0) {
                requestAnimationFrame(animate);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }
        
        animate();
    }
}

// Initialiser l'application
document.addEventListener('DOMContentLoaded', () => {
    new ProportiMathApp();
});
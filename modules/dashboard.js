export function updateDashboard(app) {
    // Badges
    const badgesContainer = document.getElementById('badgesContainer');
    badgesContainer.innerHTML = '';

    app.badges.forEach(badge => {
        const badgeElement = document.createElement('div');
        badgeElement.className = `badge-item ${app.userProgress.badges.includes(badge.id) ? 'earned' : 'locked'}`;
        badgeElement.innerHTML = `
            <span class="badge-icon">${badge.icon}</span>
            <span class="badge-name">${badge.name}</span>
        `;
        badgesContainer.appendChild(badgeElement);
    });

    // Statistiques
    document.getElementById('completedModules').textContent = `${app.userProgress.completedModules.length}/5`;
    document.getElementById('completedExercises').textContent = app.userProgress.exercisesCompleted;

    const learningTime = Math.round((Date.now() - app.userProgress.startTime) / 60000);
    document.getElementById('learningTime').textContent = `${learningTime} min`;

    // Progression par module
    Object.keys(app.userProgress.moduleProgress).forEach(moduleId => {
        const progress = app.userProgress.moduleProgress[moduleId];
        const progressBar = document.getElementById(`module${moduleId}Progress`);
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const progressBar = document.querySelector('.progress-bar');
    const progressPercentage = document.querySelector('.progress-percentage');

    // Restaurer l'état des cases à cocher à partir du localStorage
    checkboxes.forEach(function (checkbox) {
        const key = checkbox.getAttribute('data-key');
        const savedState = localStorage.getItem(key);

        if (savedState === 'checked') {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    });

    function updateProgress() {
        const total = checkboxes.length;
        let checked = 0;

        checkboxes.forEach(function (checkbox) {
            const key = checkbox.getAttribute('data-key');
            if (checkbox.checked) {
                checked++;
                // Sauvegarder l'état 'checked' dans le localStorage
                localStorage.setItem(key, 'checked');
            } else {
                // Supprimer l'état du localStorage si la case est décochée
                localStorage.removeItem(key);
            }
        });

        const percentage = Math.round((checked / total) * 100);
        progressBar.style.width = percentage + '%';
        progressPercentage.textContent = percentage + '%';
    }

    // Ajouter un écouteur d'événement à chaque case à cocher
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', updateProgress);
    });

    // Mettre à jour la progression au chargement de la page
    updateProgress();
});

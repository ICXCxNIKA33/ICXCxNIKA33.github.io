document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.transcript-toggle');

    toggles.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const targetId = btn.getAttribute('aria-controls');
            const target = document.getElementById(targetId);
            if (!target) return;

            const isHidden = target.hasAttribute('hidden');

            if (isHidden) {
                target.removeAttribute('hidden');
                btn.setAttribute('aria-expanded', 'true');
                btn.textContent = 'Hide Transcript';
            } else {
                target.setAttribute('hidden', '');
                btn.setAttribute('aria-expanded', 'false');
                btn.textContent = 'Show Transcript';
            }
        });         
    });
});
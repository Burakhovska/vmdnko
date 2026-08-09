(() => {
    const isEditable = element => element instanceof Element && Boolean(element.closest('input, textarea, select, [contenteditable="true"]'));
    const termsUrl = new URL('../terms-and-conditions/', document.currentScript.src).href;
    const termsModal = document.createElement('div');

    termsModal.className = 'protection-terms-modal';
    termsModal.setAttribute('role', 'dialog');
    termsModal.setAttribute('aria-modal', 'true');
    termsModal.setAttribute('aria-labelledby', 'protection-terms-title');
    termsModal.innerHTML = `
        <div class="protection-terms-content">
            <button class="protection-terms-close" type="button" aria-label="Закрити">&times;</button>
            <h2 id="protection-terms-title">Умови використання</h2>
            <p>Копіювання, збереження та розповсюдження матеріалів сайту без дозволу VMDNKO заборонено.</p>
            <a class="btn btn-primary" href="${termsUrl}">Переглянути умови</a>
        </div>
    `;
    document.body.appendChild(termsModal);

    const closeTermsModal = () => {
        termsModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    const showTermsModal = () => {
        termsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        termsModal.querySelector('.protection-terms-close').focus();
    };

    termsModal.querySelector('.protection-terms-close').addEventListener('click', closeTermsModal);
    termsModal.addEventListener('click', event => {
        if (event.target === termsModal) closeTermsModal();
    });

    document.addEventListener('contextmenu', event => {
        if (!isEditable(event.target)) event.preventDefault();
    });

    document.addEventListener('selectstart', event => {
        if (!isEditable(event.target)) event.preventDefault();
    });

    document.addEventListener('copy', event => {
        if (!isEditable(event.target)) event.preventDefault();
    });

    document.addEventListener('cut', event => {
        if (!isEditable(event.target)) event.preventDefault();
    });

    document.addEventListener('dragstart', event => {
        if (event.target instanceof HTMLImageElement || !isEditable(event.target)) event.preventDefault();
    });

    const isPrintScreen = event => event.key === 'PrintScreen' || event.code === 'PrintScreen' || event.keyCode === 44;
    const isSnippingShortcut = event => event.metaKey && event.shiftKey && event.key.toLowerCase() === 's';

    const handleScreenshotAttempt = event => {
        if (!isPrintScreen(event) && !isSnippingShortcut(event)) return;
        event.preventDefault();
        showTermsModal();
    };

    window.addEventListener('keydown', event => {
        const key = event.key.toLowerCase();
        const modifier = event.ctrlKey || event.metaKey;
        const blockedCopy = modifier && key === 'c' && !isEditable(event.target);
        const blockedDocumentShortcut = modifier && ['u', 's', 'p'].includes(key);
        const blockedDeveloperTools = event.key === 'F12' || (modifier && event.shiftKey && ['i', 'j', 'c'].includes(key));

        if (blockedCopy || blockedDocumentShortcut || blockedDeveloperTools) event.preventDefault();
        if (event.key === 'Escape' && termsModal.classList.contains('active')) closeTermsModal();
        handleScreenshotAttempt(event);
    }, true);

    window.addEventListener('keyup', handleScreenshotAttempt, true);
})();

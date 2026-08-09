(() => {
    const isEditable = element => element instanceof Element && Boolean(element.closest('input, textarea, select, [contenteditable="true"]'));

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

    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase();
        const modifier = event.ctrlKey || event.metaKey;
        const blockedCopy = modifier && key === 'c' && !isEditable(event.target);
        const blockedDocumentShortcut = modifier && ['u', 's', 'p'].includes(key);
        const blockedDeveloperTools = event.key === 'F12' || (modifier && event.shiftKey && ['i', 'j', 'c'].includes(key));

        if (blockedCopy || blockedDocumentShortcut || blockedDeveloperTools || event.key === 'PrintScreen') {
            event.preventDefault();
        }
    });
})();

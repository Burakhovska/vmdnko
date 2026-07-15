document.addEventListener('DOMContentLoaded', function() {
    // Modal elements
    const modal = document.getElementById('calculation-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalCloseSuccess = document.getElementById('modal-close-success');
    const openButtons = document.querySelectorAll('.open-calculation-modal');
    const floatingCta = document.getElementById('floating-cta');
    const form = document.getElementById('calculation-form');
    const modalSuccess = document.getElementById('modal-success');

    // Open modal
    function openModal() {
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Close modal
    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            // Reset form and success state
            if (form) {
                form.reset();
                form.style.display = 'block';
            }
            if (modalSuccess) {
                modalSuccess.style.display = 'none';
            }
        }
    }

    // Add click event to all open buttons
    openButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    // Add click event to floating CTA
    if (floatingCta) {
        floatingCta.addEventListener('click', openModal);
    }

    // Close modal on overlay click
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close modal on close button click
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close modal on success button click
    if (modalCloseSuccess) {
        modalCloseSuccess.addEventListener('click', closeModal);
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Prevent modal from closing when clicking inside content
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const type = formData.get('type');
            const size = formData.get('size');
            const comment = formData.get('comment');

            // Basic validation
            if (!name || !phone) {
                alert('Будь ласка, заповніть обов\'язкові поля (Ім\'я та Телефон)');
                return;
            }

            // Disable submit button
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.textContent : 'Надіслати';
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Відправка...';
            }

            // Send data to Formspree
            fetch('https://formspree.io/f/xkoeproa', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    // Success
                    if (form) {
                        form.style.display = 'none';
                    }
                    if (modalSuccess) {
                        modalSuccess.style.display = 'block';
                    }
                } else {
                    // Error
                    response.json().then(data => {
                        console.error('Formspree error:', data);
                    });
                    alert('Помилка відправки. Спробуйте ще раз.');
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalText;
                    }
                }
            }).catch(error => {
                console.error('Fetch error:', error);
                alert('Помилка з\'єднання. Спробуйте ще раз.');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }
            });
        });
    }
});

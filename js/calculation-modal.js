document.addEventListener('DOMContentLoaded', function() {
    // Modal elements
    const modal = document.getElementById('calculation-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalCloseSuccess = document.getElementById('modal-close-success');
    const openButtons = document.querySelectorAll('.open-calculation-modal');
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

            // Send data to server
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'send.php', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // Success
                        if (form) {
                            form.style.display = 'none';
                        }
                        if (modalSuccess) {
                            modalSuccess.style.display = 'block';
                        }
                    } else {
                        // Error
                        alert('Помилка відправки. Спробуйте пізніше.');
                    }
                }
            };

            xhr.onerror = function() {
                alert('Помилка з\'єднання. Спробуйте пізніше.');
            };

            // Send form data
            const params = new URLSearchParams(formData).toString();
            xhr.send(params);
        });
    }
});

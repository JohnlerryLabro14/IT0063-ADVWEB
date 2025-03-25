function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex'; // Show the modal
}

function hideAllModals() {
    const modals = document.querySelectorAll('.restaurant-modal');
    modals.forEach(modal => {
        modal.style.display = 'none'; // Hide all modals
    });
}

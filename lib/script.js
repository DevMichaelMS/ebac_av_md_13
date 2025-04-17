function showToast() {
    const toastElement = document.getElementById('toastInbox');
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
}

document.addEventListener('DOMContentLoaded', function () {
    const boasVindas = new bootstrap.Modal(document.getElementById('boasVindas'));
    boasVindas.show();
});

document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    event.preventDefault();

    this.reset();

    const modalElement = new bootstrap.Modal(document.getElementById('newsletterModal'));
    modalElement.show();

    setTimeout(() => {
        modalElement.hide();
    }, 4000);
});
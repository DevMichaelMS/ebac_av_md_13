function showToast() {
    const toastElement = document.getElementById('toastInbox');
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
}

document.addEventListener('DOMContentLoaded', function () {
    const boasVindas = new bootstrap.Modal(document.getElementById('boasVindas'));
    boasVindas.show();
});
interface Window {
    modal: {
        on(channel: string, f: (evt: Event, data: any) => any): void
    }
}

function closeModals() {
    document.querySelector('.Modals').classList.remove('visible');
    document.querySelectorAll('.Modal').forEach(modal => {
        modal.classList.remove('visible');
    });
}

window.modal.on('open', (e, modalName) => {
    closeModals();
    document.querySelector('.Modals').classList.add('visible');
    document.querySelector(`#modal-${modalName}`).classList.add('visible');
});
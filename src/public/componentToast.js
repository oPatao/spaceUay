function showToast(message, duration = 3000) {
    // Cria o elemento do toast
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '30px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = '#333';
    toast.style.color = '#fff';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '8px';
    toast.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    toast.style.zIndex = 9999;
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';

    document.body.appendChild(toast);

    // Mostra o toast
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 10);

    // Remove o toast após o tempo definido
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => document.body.removeChild(toast), 300);
    }, duration);
}

export default showToast;
// Exemplo de uso:
// showToast('Mensagem enviada com sucesso!');
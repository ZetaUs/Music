const btn = document.querySelector('.config-btn');
btn.addEventListener('click', () => {
    const targetPath = '/ALQUIMIA × MONARCA';
    const safeUrl = encodeURI(targetPath);
    window.location.href = safeUrl;
});
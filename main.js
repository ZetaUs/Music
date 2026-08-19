// 原有按钮
const btn = document.querySelector('.config-btn');
btn.addEventListener('click', () => {
    const targetPath = 'ALQUIMIA × MONARCA/index.html';
    const safeUrl = encodeURI(targetPath);
    window.location.href = safeUrl;
});

// 新增 Internal Scars 按钮逻辑
const btnInternal = document.querySelectorAll('.config-btn')[1];
btnInternal.addEventListener('click', () => {
    const targetPath = './Internal Scars/index.html';
    const safeUrl = encodeURI(targetPath);
    window.location.href = safeUrl;
});
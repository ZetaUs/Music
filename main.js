const btn = document.querySelector('.config-btn');
btn.addEventListener('click', () => {
    // 同标签页跳转至 ALQUIMIA × MONARCA 页面
    window.location.href = "alquimia-monarca.html";
    // 如需新标签打开用下面这行，注释上面即可
    // window.open("alquimia-monarca.html", "_blank");
})
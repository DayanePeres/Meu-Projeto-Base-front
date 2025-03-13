// Alternar Tema Claro/Escuro
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
});

// Alternar Menu Mobile
document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("hidden");
});

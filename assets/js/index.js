function abrirMenu() {
    let menuMobile = document.querySelector('.cabecalho-menumobile');
    if (menuMobile.classList.contains('aberta')) {
        menuMobile.classList.remove('aberta');
    } else {
        menuMobile.classList.add('aberta')
    }
}
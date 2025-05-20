// === MODAL DE ENDEREÇO ===
function abrirModal() {
    const modal = document.querySelector('.modal');
    const mascara = document.querySelector('.mascara-modal');
    
    modal.style.left = '50%';
    mascara.style.visibility = 'visible';
}

function esconderModal() {
    const modal = document.querySelector('.modal');
    const mascara = document.querySelector('.mascara-modal');
    
    modal.style.left = '-30%';
    mascara.style.visibility = 'hidden';
}


  const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.menu-links');

menuToggle.addEventListener('click', () => {
  menuLinks.classList.toggle('show');
});



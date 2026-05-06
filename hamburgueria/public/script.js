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

async function enviarParaOBanco(evento) {
    evento.preventDefault(); // Não deixa a página recarregar

    const dados = {
        nome_cliente: document.getElementById('nome').value,
        pao: document.getElementById('pao').value,
        carne: document.getElementById('carne').value,
        opcionais: ["Bacon", "Cheddar"] // Exemplo de como pegar os checkboxes
    };

    const resposta = await fetch('/api/pedidos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    });

    if(resposta.ok) {
        alert("Pedido enviado com sucesso!");
    }
}

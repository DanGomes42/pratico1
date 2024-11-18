const form = document.getElementById('formCadastro');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value; 

    const telefone = document.getElementById('telefone').value; 

    fetch('cliente.php', {
        method: 'POST',
        body: `nome=${nome}&email=${email}&telefone=${telefone}`
    })
    .then(response => response.json())
    .then(data => {
        mensagem.textContent = data.mensagem;
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
        mensagem.textContent = 'Ocorreu um erro ao cadastrar o cliente.';
    })
  
    .then(data => {
        mensagem.textContent = data.mensagem;
        if (data.sucesso) {
            window.location.href = 'chamado.php?cliente_id=' + data.cliente_id;};
    });
});


function authenticateUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Autenticação realizada com sucesso!');
        // Redirecionar para a página desejada após autenticação.
        window.location.href = "https://www.operadora.com";
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
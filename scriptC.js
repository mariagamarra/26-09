// Verifica se o usuário está autenticado
if (!sessionStorage.getItem("usuarioLogado")) {
    // Redireciona para a tela de login se o usuário não estiver autenticado
    window.location.href = "login.html";
}

const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const letraSorteada = document.getElementById("letraSorteada");
const sortearLetraButton = document.getElementById("sortearLetra");

sortearLetraButton.addEventListener("click", () => {
    const letraAleatoria = letras[Math.floor(Math.random() * letras.length)];
    letraSorteada.textContent = letraAleatoria;
});

// Pega os valores das regras da sessão do usuário
const nomeRegra = sessionStorage.getItem("nomeRegra");
const cepRegra = sessionStorage.getItem("cepRegra");
const sograRegra = sessionStorage.getItem("sograRegra");
const frutaRegra = sessionStorage.getItem("frutaRegra");
const carroRegra = sessionStorage.getItem("carroRegra");

// Insere os valores nas tags HTML correspondentes
document.getElementById("nomeRegra").textContent = nomeRegra;
document.getElementById("cepRegra").textContent = cepRegra;
document.getElementById("sograRegra").textContent = sograRegra;
document.getElementById("frutaRegra").textContent = frutaRegra;
document.getElementById("carroRegra").textContent = carroRegra;

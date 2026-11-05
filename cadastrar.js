const urlBackend = "http://localhost:3000"
const inputTitulo = document.getElementById("titulo")
const inputArtista = document.getElementById("artista")
const inputGenero = document.getElementById("genero")
const inputAno = document.getElementById("ano")
const inputDuracao = document.getElementById("duracao")
const botaoCadastrar = document.getElementById("botaoCadastrar")
botaoCadastrar.addEventListener("click", cadastrarMusica)

async function cadastrarMusica() {
    if(inputTitulo.value === "" || inputArtista.value === "" || inputGenero.value === "" || inputAno.value === "" || inputDuracao.value === "") {
        alert("Preencha todos os campos!")
        return
    }
} 
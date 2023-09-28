
const lista = document.querySelector("#lista");
const botao = document.querySelector("#inserir");

botao.addEventListener("click", () => {
    alert("Botão clicado");
});

const inserirNumeroAleatorio = () => {
    for(let i = 0; i<= 10; i++){

        const Numero = Math.round(Math.random * 50);
        const item = document.createElement('li');
        item.textContent = numero;

        lista.appendChild(item);
    }
}
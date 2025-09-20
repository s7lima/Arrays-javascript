let filmes = ["Nemo", "A casa montro", "Up altas aventuras", "Pulp Fiction" ];

console.log(filmes);

//Quero adicionar um item no final do array
filmes.push("Matrix")
filmes[1] = "Invocação do Mal"
console.log(filmes);

//quero remover o ultimo item do array
filmes.pop();

//quero adicionar primeiro item do array
filmes.unshift("Club da luta");
console.log(filmes);

// Quero saber o tamanho do array
console.log("Tamanho do array: " + filmes.length);

// Quero saber a posição de um item no array
console.log("Posição do filme: " + filmes.indexOf("Nemo"));

// Quero remover um item específico do array
let indice = filmes.indexOf("Pulp Fiction");
if (indice !== -1) {
    filmes.splice(indice, 1); // Remove o item na posição encontrada
}
console.log(filmes); // Exibe o array atualizado

const API_URL = "http://api.guardiaodigital.com/dados-corrompidos";

async function buscarChave() {
    try {
        const resposta = await fetch(API_URL);
        const dados = await resposta.json();
        // O desafio: a chave está dentro deste objeto.
        // Você precisa extrair o valor de 'codigo_acesso' do array de 'recursos'.
        // O Guardião lhe dará um objeto com uma 'versao_corrompida'.
        // A chave é o 'codigo_acesso' da versão 3.1.4, se 'status' for 'ativo'.
        // Você precisa usar um loop para encontrar e retornar a chave.
    } catch (erro) {
        console.error("Falha na busca dos dados:", erro);
        return null;
    }
}
const API_URL = "http://api.guardiaodigital.com/dados-corrompidos";

async function buscarChave() {
    try {
        const resposta = await fetch(API_URL);
        const dados = await resposta.json();
        const recursos = dados.recursos_disponiveis; // Assumindo o nome da propriedade

        for (const recurso of recursos) {
            if (recurso.versao_corrompida === "3.1.4" && recurso.status === "ativo") {
                return recurso.codigo_acesso;
            }
        }
        return "Chave não encontrada.";
    } catch (erro) {
        console.error("Falha na busca dos dados:", erro);
        return null;
    }
}

async function desativarGuardiao() {
    const chave = await buscarChave();
    if (chave) {
        console.log("Chave de acesso encontrada:", chave);
        // Elias insere a chave para desativar o Guardião.
        alert(`O Guardião foi desativado com a chave: ${chave}`);
    } else {
        alert("Não foi possível encontrar a chave. O Guardião permanece ativo.");
    }
}

// Elias executa a função final
desativarGuardiao();
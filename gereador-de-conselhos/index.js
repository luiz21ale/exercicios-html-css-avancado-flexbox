const btnConselho = document.getElementById('btn-conselho').addEventListener('click', () => {
    gerarConselho()
})

const idConselho = document.getElementById('conselho')
const conselhoDescricao = document.getElementById('conselho-descricao')


async function criarConselhosAleatorios() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function pegandoIdDoConselho(){
    const conselho = await criarConselhosAleatorios()
    
    const id =  conselho.slip.id
    idConselho.innerText = `#${id}`
}

async function pegandoConselho() {
    const conselho = await criarConselhosAleatorios()
    const conselhoAleatorio = conselho.slip.advice
    conselhoDescricao.innerText = `"${conselhoAleatorio}"`
}

async function gerarConselho() {
    try{
        const conselhosCriados = await criarConselhosAleatorios();
        const idPegado = await pegandoIdDoConselho(conselhosCriados);
        const conselhoPegado = await pegandoConselho(idPegado);
    }catch(err){
        console.log(err)
    }
}

gerarConselho()
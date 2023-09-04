//class definition
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
                break;
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso:
const mago = new Heroi("Merlin", 35, "mago");
const guerreiro = new Heroi("Arthur", 28, "guerreiro");
const monge = new Heroi("Li", 40, "monge");
const ninja = new Heroi("Hanzo", 32, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();

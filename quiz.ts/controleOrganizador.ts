class ributo {
    constructor(public nome: string, public vida: number,public armadura: number, public resistencia: number, public habilidade:string) {}

    public sofrerDano(dano: number): void {
        this.vida -= dano;
        console.log(`${this.nome} sofreu ${dano} de dano. Vida restante: ${this.vida}`);
    }
}


function calcularDano(armadura:number,resistencia:number):number{
    return 
}





class Organizador {
    constructor(public tributos: ributo[]) {}

    public punirTributo(tributo: ributo, dano: number): void {
        tributo.sofrerDano(dano);
    }
}

const katni = new ributo("Katniss", 100,70,90,"arco e flecha");
const peeta = new ributo("Peeta", 90,100,50,"espada");
const organizador = new Organizador([katni, peeta]);

organizador.punirTributo(katni, 20);
katni.vida
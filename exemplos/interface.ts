interface Animal{
nome:string
emitirSom():void
}
interface voador{voar():void}

interface aquatico{nadar():void}

class cachorro implements Animal{
   nome:string
   constructor(nomeConst:string){
    this.nome = nomeConst
   }
   emitirSom():void{console.log(`${this.nome} faz: au au`)}
}
let meuCachorro = new cachorro("jabuti")
meuCachorro.emitirSom()


class pato implements Animal,voador,aquatico{
    nome:string

    constructor(nomeConst:string){
        this.nome = nomeConst
    }
    emitirSom(): void {
        console.log(`${this.nome} faz quack quack`)
    }
    voar(): void {
        console.log(`${this.nome} esta voando`)
    }
    nadar(): void {
        console.log(`${this.nome} esta nadando`)
    }
}
let meuPato  = new pato("pata")
meuPato.emitirSom()
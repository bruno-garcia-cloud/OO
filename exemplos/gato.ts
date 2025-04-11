import { Animal } from "./Animal2";


class gato extends Animal{
    fazerBarulho(): void {
        console.log(`${this.nome} faz: miau miau`)
    }
}
let meuGato = new gato("undefined")
meuGato.fazerBarulho()
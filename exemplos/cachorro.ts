import { Animal } from "./Animal2"

class cachorro extends Animal{
    fazerBarulho(): void {
        console.log(`${this.nome}faz: au au`)
    }
}
let mydog = new cachorro("kadu")
mydog.fazerBarulho()
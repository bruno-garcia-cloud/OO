export abstract class Animal{
    nome:string;

    constructor(nome:string){
        this.nome
    }
    abstract fazerBarulho():void;
}
class cachorro extends Animal{
    fazerBarulho(): void {
        console.log(`${this.nome}faz: au au`)
    }


}    

let mydog = new cachorro("kadu")
mydog.fazerBarulho()
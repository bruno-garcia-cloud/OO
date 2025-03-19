import { animal } from "./animal";

export class ave extends animal{

    constructor(nome:string,especie:string,fome:number,sede:number){
        super(especie,nome,sede,fome);
    }

    getNome():void{this.nome = nome}

}

function fazerAcao(quaisquerAve:animal){
    quaisquerAve.mover()
};
function fazerSom(quaisquerAve:animal){
    quaisquerAve.emitirSom()
}
function buscarRecursos(quaisquerAve:animal,recurso:string){
    quaisquerAve.buscarRecurso(recurso)
}

let Aves = new animal("secretario","ave",30,10)
fazerSom(Aves,)
buscarRecursos(Aves,"Pote")
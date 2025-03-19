export class animal {
    protected nome:string;
    protected especie:string;
    protected fome:number;
    protected sede:number;

   public constructor(nomeAnimal:string,especie:string,fome:number,sede:number){
        this.nome = nomeAnimal
        this.especie = especie
        this.fome = fome
        this.sede = sede
    }

public getNome():string{return this.nome}
    
    public buscarRecurso(nomeDoRecurso:string):void{
        console.log("Buscou "+nomeDoRecurso)
    }

    public emitirSom():void{
        console.log(this.getNome(), "Emitiu o som")
    }
    public mover():void{
        console.log("Se moveu")
    }

    public morrerDeFome():void{
        if (this.fome <= 0){
            console.log(`${this.fome} MORREU`)
        }
        else {console.log(`Ele ainda tem ${this.fome}% de fome`)}
        
        }
    }

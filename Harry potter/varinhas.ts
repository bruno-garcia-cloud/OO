export class varinha{
private madeira:string
private nucleo:string
private tamanho:number

setMadeira(madeira:string):void{this.madeira=madeira}
setNucleo(nucleo:string):void{this.nucleo = nucleo};
setTamanho(tamanho:number):void{this.tamanho = tamanho};

getMadeira():string{return this.madeira};
getNucleo():string {return this.nucleo};
getTamanho():number{return this.tamanho};


exibirDetalhes():void{console.log(`Varinha de madeira de ${this.getMadeira}, nucleo de ${this.getNucleo} e tamanho ${this.getTamanho}.`)}


}


const minhaVarinha = new varinha()


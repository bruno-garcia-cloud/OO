class tributo {
    public segredo: string;

    constructor(public nome: string, segredo: string) {
        this.segredo = segredo;
    }

    public revelarSegredo(): string {
        return this.segredo;
    }
}

const katnis = new tributo("Katniss", "Sou boa com arco e flecha.");

console.log(katnis.revelarSegredo());

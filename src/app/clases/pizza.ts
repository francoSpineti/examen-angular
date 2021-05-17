export class Pizza {

    id !: number;
    nombre !: string;
    ingredientes !: Array<string>;
    precio !: number;
    peso !: number;

    toJson() : any{
        const json ={
            id : this.id,
            nombre : this.nombre,
            ingredientes : this.ingredientes,
            precio : this.precio,
            peso : this.peso
        };
        return json;
    }
}

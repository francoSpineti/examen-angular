import { Pais } from "./pais";
import { Pizza } from "./pizza";

export class Repartidor {
    dni !: number;
    nombre !: string;
    edad !: number;
    capacidadTransporte !: number;
    paisDeOrigen !: Pais;
    unidadPropia !: boolean;

    toJson() : any{
        const json ={
            dni : this.dni,
            nombre : this.nombre,
            edad : this.edad,
            capacidadTransporte : this.capacidadTransporte, //ver con el array de pizza
            paisDeOrigen : this.paisDeOrigen,
            unidadPropia : this.unidadPropia
        };
        return json;
    }

    setPais(pais : any){
        this.paisDeOrigen = pais;
    }

}

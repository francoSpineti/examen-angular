export class Usuario {

    email !: string;
    password !: string;
    perfil !: string;

    toJson() : any{
        const json ={
            email : this.email,
            perfil : this.perfil
        };
        return json;
    }

    setPerfil(value : string){
        this.perfil = value;
    }
}

export class Pais {
    name !: string;
    flag !: string;

    toJson() : any{
        const json ={
            name : this.name,
            flag : this.flag,
        };
        return json;
    }
}


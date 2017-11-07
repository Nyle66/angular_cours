export class Card{
    
    public id: number;
    public title: string;
    public name: string;
    public adress: string;
    public content: string;

    constructor(id: number, title: string, name: string, adress: string, content: string){
        this.id = id;
        this.title = title;
        this.name = name;
        this.adress = adress;
        this.content = content;
    }

    getId(){
        return this.id;
    }
    getTitle(){
        return this.title;
    }
    getName(){
        return this.name;
    }
    getAdress(){
        return this.adress;
    }
    getContent(){
        return this.content;
    }
}
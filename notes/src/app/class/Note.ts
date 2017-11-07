export class Note{

    static lastId: number = 0;

    public id: number;
    public title: string;
    public content: string;

    constructor(id:number, title:string, content:string){

        if(id==0){
            id = Note.lastId + 1;
        }

        this.id = id;
        Note.lastId = id;

        console.log(Note.lastId);

        this.title = title;
        this.content = content;
    }
    getId(){
        return this.id;
    }
    getTitle(){
        return this.title;
    }
    getContent(){
        return this.content;
    }

}
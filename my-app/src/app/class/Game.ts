export class Game{
    private name: string;
    private editor: string;

    constructor(name:string, editor:string){
        this.name = name;
        this.editor = editor;
    }

    getName(){
        return this.name;
    }
    getEditor(){
        return this.editor;
    }
}
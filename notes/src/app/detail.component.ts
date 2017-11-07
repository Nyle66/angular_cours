import { Component } from "@angular/core";
import { Note } from "./class/Note";
import { ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { NotesService } from "../services/notes.service";

@Component({
    selector: 'app-detail',
    template: `
    <div *ngIf="note">
    <h4>{{ note.title | uppercase }} </h4>
    <p><i>{{ note.content | lowercase }} </i></p></div>`,
    providers: [NotesService]
})

export class DetailComponent{
    public note: Note;

    constructor(private route: ActivatedRoute, private service: NotesService){
       const id: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);
       this.getNote(id);
    }

    getNote(id: number){
        this.service.getAllNotes().then((data)=>{
            for(const dnote of data.json()){
                if(dnote.id === id){
                    this.note = new Note(dnote.id, dnote.title, dnote.content);
                }
            }
        });
    }
}
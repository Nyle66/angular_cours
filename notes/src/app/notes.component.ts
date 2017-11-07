import { Component } from '@angular/core';
import { Note } from './class/Note';
import { NotesService } from '../services/notes.service';
import { Color } from './class/Color';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NotesService] // On défini la liste  des services a injecter dans le constructeur
})

export class NotesComponent {
  title = 'app';
  public tab: Note[] = [];
  public post: Note = new Note(0, '', '');
  public display: boolean = false;

  public search: string = "";
  
  public color: Color =  new Color();

  public selected_note: Note;

  constructor(private notesservice: NotesService){
    this.getNotes();
  }
  public getNotes(){
    this.notesservice.getAllNotes().then((data) => {
      
      for(const dnote of data.json()){
        const note: Note = new Note(dnote.id, dnote.title, dnote.content);
        this.tab.push(note);
      }
    })
  }

  public addNote(){
    let note: Note = new Note (0, this.post.getTitle(), this.post.getContent());
    this.tab.push(note);
    //this.filter();
  }

  public displayNote(){
    if(this.display == false){
      this.display = true;
    }
  else{
      this.display = false;

    }
  }

  public remove(i: number){
    this.tab.splice(i,1);
  }

}

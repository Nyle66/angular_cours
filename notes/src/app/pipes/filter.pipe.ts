import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../class/Note';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform{

    transform(notes: Note[], search: string) {

        if(search == ''){
            return notes;
            
        }
        const displayednotes: Note[] = [];
        for(const note of notes){
          if(note.title.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
           note.content.toLowerCase().indexOf(search.toLowerCase()) > -1){
              displayednotes.push(note);
          }
        }
        return displayednotes;

    }

}
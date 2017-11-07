import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './class/Note';
import { Color } from './class/Color';

@Component({
    selector: 'app-note',
    template: `
    <span id="croix" (click)="parentRemove()">X</span>
    <h4 appHighlight [highlightcolor]="color">{{ note.title | uppercase }} </h4>
    <p><i>{{ note.content | lowercase }} </i></p>
    <p> {{ index | nieme: 'manga' }} </p>
    <p> {{ note | resume }} </p>
    <a routerLink="/note/{{note.id}}"> Voir détail </a>`,
    
})

export class NoteComponent{

    @Input()
    public color;

    // la valeur des Input est définie dans le parent!
    // (donc entrée de la valeur exterieur, on utilise @Input() )
    @Input() // Je demande a cette variable d'etre une entrée dans le selector
    public note: Note;

    @Input()
    public index: number;

    // l'event est lancé sur le selecteur lui même pour etre utilisé au niveau du parent
    // on fait donc ressortir une valeur au niveau du template parent, on utilise @Output() )
    @Output()
    public event: EventEmitter<number> = new EventEmitter<number>();

    parentRemove(){
        this.event.emit(this.index);
    }

}
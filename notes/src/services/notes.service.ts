import { Note } from '../app/class/Note';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable() // ce service pourra s'injecter dans un constructeur
export class NotesService{

    private url: string = 'http://localhost:8888/angular/angular_api/fakeapi.php';

    constructor(private http: Http){

    }

    getAllNotes(): Promise<any>{
        
        return this.http.get(this.url)
            .toPromise();
        
    }

}
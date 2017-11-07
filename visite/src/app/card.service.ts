
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable() // ce service pourra s'injecter dans un constructeur
export class CardService{

    private url: string = 'http://localhost:8888/angular/angular_api/fakeapi2.php';

    constructor(private http: Http){

    }

    getAllCard(): Promise<any>{
        
        return this.http.get(this.url)
            .toPromise();
        
    }

}
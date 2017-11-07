import { Component } from '@angular/core';
import { Game } from './class/game';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css']
})
export class AppComponent {
    public titre: string = 'Mon App';
    public username: string = 'Jeremy';
    public mot_secret: string = 'Pikachu';

    public button: string = "Voir le mot secret";
    public autorisation: boolean = false;

    

    constructor(){
        setTimeout(()=> {
          this.titre = 'Mon app qui change de nom';
          
        }, 3000)
    }

    toggleAuthorisation(){
    
      if(this.autorisation == false){
          this.autorisation = true;
          this.button = "Cacher le mot secret";
      }
      else{
          this.autorisation = false;
          this.button ="Voir le mot secret";
      }
    }
}

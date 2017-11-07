import { Component } from "@angular/core";
import { Game } from "./class/game";

@Component({
    selector: 'app-games',
    templateUrl: 'game.component.html',
    styleUrls:['game.component.css']
    
    
})

export class GamesComponent{
    public mygames: Game[] = [
        new Game('Monopoly', 'Hasbro'),
        new Game('Cluedo', 'Hasbro'),
        new Game('Poker', 'Cartemania'),
    ];
    public selected_game: Game;
    public form_game: Game = new Game('',''); // le jeu que l'on va créer

    constructor(){
        setTimeout(()=>{
            this.mygames.push(new Game('test', 'test-Editor'))
        }, 3000);
    }

    public selectGame(game: Game){
        this.selected_game = game;
    }

    public addGame(){
        let game: Game = new Game (this.form_game.getName(), this.form_game.getEditor());
        this.mygames.push(game);
    }
}
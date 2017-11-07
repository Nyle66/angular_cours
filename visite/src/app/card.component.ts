import { Component } from "@angular/core";
import { CardService } from "./card.service";
import { Card } from "./Card";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-card',
    template: `
        <h4>Test</h4>
    `,
    providers: [CardService]
})
export class CardComponent{

    public tab: Card[] = [];

    constructor(private cardservice: CardService){
        this.getCard();
      }
      public getCard(){
        this.cardservice.getAllCard().then((data) => {
          
          for(const dcard of data.json()){
            const card: Card = new Card(dcard.id, dcard.title, dcard.name, dcard.adress, dcard.content);
            this.tab.push(card);
          }
        })
      }
}
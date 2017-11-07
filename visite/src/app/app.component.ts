import { Component, Input } from '@angular/core';
import { Card } from './Card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @Input()
  public card: Card;
}

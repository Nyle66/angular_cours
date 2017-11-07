import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
    <nav>
        <a routerLink="/home" > Home </a>
        <a routerLink="/notes" > Notes </a>
    </nav>
    <br>
    <router-outlet></router-outlet>
    `,
    styles: [
        `nav {font-size: 1.5em;}`,
        `nav a {padding-right: 50px;}`
    ]
  })
  
  export class AppComponent {

  }
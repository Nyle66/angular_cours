import {Routes} from '@angular/router';
import { CardComponent } from './card.component';

export const appRoutes: Routes = [
    {
        path: "card/:id",
        component: CardComponent
    }
]
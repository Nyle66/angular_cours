import {Routes} from '@angular/router';
import { NotesComponent } from './notes.component';
import { HomeComponent } from './home.component';
import { DetailComponent } from './detail.component';

export const appRoutes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "notes",
        component: NotesComponent
    },
    {
        path: "note/:id",
        component: DetailComponent
    }
]
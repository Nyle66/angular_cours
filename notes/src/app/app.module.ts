import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; // Pour les requetes ajax avec angular

import { NotesComponent } from './notes.component';
import { NoteComponent } from './note.component';
import { NiemePipe } from './pipes/nieme.pipe';
import { ResumePipe } from './pipes/resume.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { BackgroundDirective } from './directives/background.directive';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent,
    HomeComponent,
    NiemePipe,
    ResumePipe,
    FilterPipe,
    HighlightDirective,
    BackgroundDirective,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

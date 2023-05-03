import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayNotesService } from './display-notes.service';
import { NoteComponent } from './Components/note/note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayNoteHeadingsComponent } from './Components/display-note-headings/display-note-headings.component';
import {MatDialogActions, MatDialogModule} from '@angular/material/dialog';
import { DialogBoxComponent } from './Components/dialog-box/dialog-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    DisplayNoteHeadingsComponent,
    DialogBoxComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    DisplayNotesService
  ],
  entryComponents:[DialogBoxComponent],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

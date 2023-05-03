
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DisplayNotesService } from 'src/app/display-notes.service';
import { Note } from 'src/app/Note';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';


@Component({
  selector: 'display-note-headings',
  templateUrl: './display-note-headings.component.html',
  styleUrls: ['./display-note-headings.component.css']
})
export class DisplayNoteHeadingsComponent {
  notes: Note[] = [];
  constructor(private service:DisplayNotesService, private dialog:MatDialog){
    this.notes=service.getNotes();
  }
  openDialog(note:Note){
      this.dialog.closeAll()
        this.dialog.open(DialogBoxComponent, {
          autoFocus:true,
          width:"500px",
          height:"auto",
          data:note,
          panelClass: 'bg-color'
        
        })
    }
    remove(note:Note){
      console.log(note.id)
      this.service.removeNote(note)
    }

}

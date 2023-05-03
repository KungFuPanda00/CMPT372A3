import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/Note';
import { DisplayNotesService } from '../../display-notes.service';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  notes: Note[] = [];
  constructor(private service:DisplayNotesService){
    this.notes=service.getNotes();
  }
  addNotes(text:Note){
    this.service.addNotes(text);
  }
  form=new FormGroup({
    subText:new FormControl('',Validators.required)
  })

  onSubmit(){
   
    const extractedValue = this.form.value?.subText;
    var firstLine:string = extractedValue?.split('\n')[0] as string;
    var sub = extractedValue?.slice(firstLine.length+1) as string;
    firstLine=firstLine.toUpperCase();
    var noteObj = new Note(firstLine,sub);
    this.addNotes(noteObj);
    this.form.reset()
    
  } 

}

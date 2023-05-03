import { DisplayNotesService } from 'src/app/display-notes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from './../../Note';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
  buttonDisable:boolean=false
  date?:String
  constructor(private dialogRef:MatDialogRef<DialogBoxComponent>, @Inject(MAT_DIALOG_DATA) private data:Note, private service:DisplayNotesService ) {
    this.date=this.data.timeStamp
  }

  form = new FormGroup({
    header: new FormControl(this.data.header,[Validators.required]),
    sub:new FormControl(this.data?.subtext)
  }
  )
  textChange(){
    if(this.buttonDisable==false)
    this.buttonDisable=true
  } 
  submit(){
    this.service.updateNote(new Note(this.form.get('header')?.value!,this.form.get('sub')?.value!,this.data.id,new Date().toString()))
    this.dialogRef.close()
  }

}

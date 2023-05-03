import { Note } from './Note';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisplayNotesService {
constructor(private http: HttpClient) { }

// notes:Note[]=JSON.parse(localStorage?.getItem('notes')!!)||[];
notes:Note[]=[]

//Add custom id in the database and Notes
getNotes():any{
  this.http.get(`http://localhost:3000/getNotes`).subscribe((data:any)=>{
    if(this.notes.length>0){
      for(var i=0;i<this.notes.length;i++)
      this.notes.pop()
    }
    for (var i = 0; i < data.length; i++) {
      if((!(this.notes.find(note=>note.id===data[i]?.id)))){
      this.notes.push(new Note(data[i].header,data[i].subtext,data[i].id))
      }
    }

  }
  )
  console.log(this.notes)
  
  return this.notes;
}
addNotes(text:Note){
  return this.http.post(`http://localhost:3000/insert`, text).subscribe((data:any)=>{
    this.notes.push(new Note(data?.header,data?.subtext,data?.id))
  })
}
removeNote(note:Note){
  var index:number=-1;
  for(var i=0;i<this.notes.length;i++){
    if(this.notes[i].id===note.id){
      index=i;
      break
    }
  }
  if(index!=-1){
  this.notes.splice(index,1)
  this.http.delete(`http://localhost:3000/delete/${note.id}/`).subscribe()
  }
  else
  console.log("Not Found")
}
updateNote(note:Note){
  for(var i=0;i<this.notes.length;i++){
    if(this.notes[i].id==note.id){
      this.notes[i].header=note.header
      this.notes[i].subtext=note.subtext
      this.notes[i].timeStamp=note.timeStamp
    }
  }
  return this.http.post(`http://localhost:3000/update`, note).subscribe()
}
}

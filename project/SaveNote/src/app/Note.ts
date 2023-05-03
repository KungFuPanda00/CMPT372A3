import { Time } from "@angular/common"
import { Timestamp } from "rxjs"
import { v4 as uuidv4 } from 'uuid';


export class Note{
    id:string=""
    header?:string=""
    subtext?:string=""
    timeStamp?:String
    constructor(header:string,subtext?:string, id?:string,timeStamp?:String){
        this.header=header
        this.subtext=subtext
        if(id==null)
        this.id = uuidv4();
        else
        this.id=id
        if(timeStamp==null)
        this.timeStamp=new Date().toString()
        else
        this.timeStamp=timeStamp

    }
}
const express = require("express");
const { default: mongoose } = require("mongoose");
const Notes = require("./notes");
const cors = require('cors');
const path = require('path')
const bodyParser = require('body-parser');
const { db } = require("./notes");

const app = express()

const dbUrl = "mongodb+srv://CMPT372:Assignment3@cluster0.bby83.mongodb.net/test"
mongoose.connect(dbUrl)
.then(()=>
console.log("Database Connected")
)
.catch(err=>{
    console.log(err)
})
const builtProjectDir = path.join(__dirname, '../SaveNote/dist/SaveNote/');
const corsOptions = {
  origin: 'http://localhost:4200', // Allow only this origin to access the API
  methods: ['GET', 'POST', 'DELETE', 'PUT'], // Allow only these HTTP methods
  allowedHeaders: ['Content-Type'] // Allow only these headers
};
app.use(cors(corsOptions));
app.use(express.static(builtProjectDir))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) )
app.use(express.static(process.cwd()+"/dist/save-note/"));
app.get('/getNotes',async(req,res)=>{
const allNotes = await Notes.find({});
res.send(allNotes)
})
app.get('/', (req,res) => {
  res.sendFile(__dirname+"/dist/save-note/index.html")
});
app.post('/insert',(req,res)=>{
    const note = new Notes(
      {
     header:req.body?.header,
     subtext:req.body?.subtext,
     timeStamp:req.body?.timeStamp,
     id:req.body?.id
      }
    )
    note.save().then((result)=>{
      res.send(result)
    }).catch(err=>{
      console.log(err)
    })
})
app.post('/update', async(req,res)=>{
  await  Notes.updateOne({id:req.body?.id},req.body)
})
app.delete('/delete/:id/',async (req,res)=>{
  let del = req.params.id
  await Notes.findOneAndDelete({id:del})
})

app.listen(3000,()=>console.log("Server is running"));
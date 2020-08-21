import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function setNote(note){
    return <Note
    key = {note.id}
    title = {note.title}
    content = {note.content}
    />
}


function App(){
return <div>
    <Header/>
    {notes.map(setNote)}
    <Footer/>
</div>
}

export default App;
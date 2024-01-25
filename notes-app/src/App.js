import React, { useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
// import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {
     
    const [notes, setNotes] = React.useState(function() {
        return JSON.parse(localStorage.getItem('notes'))|| []
    })
 
    
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )

    useEffect(()=>{
        localStorage.setItem('notes', JSON.stringify(notes))
    },[notes])
    
    function createNewNote() {
        console.log('fired new notes');
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }

        setNotes(prevNotes => {
            setCurrentNoteId(newNote.id)
            localStorage.setItem('notes', JSON.stringify([newNote, ...prevNotes]))
           return [newNote, ...prevNotes]
        })
   
    }
    
    
    function updateNote(text) {
        setNotes(function(oldNotes) { 
           return oldNotes.map(oldNote => {
            return oldNote.id === currentNoteId
                ? { ...oldNote, body: text }
                : oldNote
        })
    }) 
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    function deleteNote(id) {
       setNotes((oldNotes)=>{
        const newNotes = oldNotes.filter(function(ele,index){
            if(id!==ele.id) return true
            else {
                if(notes[index+1]) setCurrentNoteId(notes[index+1].id)
                else if(notes[index-1])setCurrentNoteId(notes[index-1].id)
                else setCurrentNoteId("")
             
                return false
            }
        });

        return newNotes
       })
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
                
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}

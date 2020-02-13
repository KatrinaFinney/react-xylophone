import React, { useState } from 'react';
import notes from './assets/notes.js';
import './App.scss';

const NoteButton = (props) => {
  
  return (
    <button
    className='note-button'
    style={{ height:(200 - (15 * props.index)) + 'px'}}
     onClick={ () => {
      props.setPlayedNotes([...props.playedNotes, props.note.name]);
      new Audio(props.note.file).play();
      }}>
      {props.note.name}
    </button>
  )
}

function App() {
  const [playedNotes, setPlayedNotes] = useState([]);

  const replayNotes = () => {
    playedNotes.map((note, index) => {
      window.setTimeout(() => new Audio(note.file).play(), 500 * index);
    })
  }
  return (
    <div className="page">
      <h1>
      react xylophone</h1>
      <div className="xylophone">
      
        {notes.map((note, index) => <NoteButton
        index={index}
        playedNotes={playedNotes}
        setPlayedNotes={setPlayedNotes} 
        key={note.name} note={note} />)}
        
      </div>
      {JSON.stringify(playedNotes)}
      <button onClick={() => setPlayedNotes([])}>Clear</button>
        <button onClick={() => replayNotes()}>Replay</button> 
    </div>
  );
}

export default App;

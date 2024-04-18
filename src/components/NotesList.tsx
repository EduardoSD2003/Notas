import React from "react";
import Notes from "./Notes"
import Note from "../models/note.model";

interface NotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>,
}

const NotesList: React.FunctionComponent<NotesListProps> = ({ notes, setNotes }) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter(notes => notes.id !==id))
  }
  const renderNotes = (): JSX.Element[] => {
    return notes.map(note => {
      return <Notes key={ note.id } note={ note } handleDelete={handleDelete}/>
    })
  };

  return (
    <>
      <h2 className="mt-3">Notas</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;

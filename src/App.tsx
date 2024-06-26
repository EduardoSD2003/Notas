import { useState } from "react";
import "./App.css";
import Note from "./models/note.model";
import Header from "./components/Header";
import { Col, Container, Row } from "react-bootstrap";
import NotesList from "./components/NotesList";
import CreateNote from "./components/CreateNote";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Titulo",
      text: "Descrição da nota",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNote notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

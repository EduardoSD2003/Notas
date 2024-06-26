import React, { useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import Note from "../models/note.model";

interface ICreateNote {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNote: React.FC<ICreateNote> = ({notes, setNotes}) => {
  const [error, setError] = useState<string>("");
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("todos os campos são obrigatórios");
    }

    setError("")
    setNotes([...notes, {
        id: (new Date()).toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: (new Date()).toString()
    }]);

    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";

  }

  return (
    <>
      <h2> Criar Notas</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite um titulo para a nota"
            ref={titleRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            placeholder="Digite sua nota"
            as="textarea"
            rows={3}
            ref={textRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Cor da nota</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            title="Escolha sua cor"
            ref={colorRef}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Enviar
        </Button>
      </Form>
    </>
  );
};

export default CreateNote;

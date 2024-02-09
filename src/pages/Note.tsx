import React from "react";
import { useParams } from "react-router-dom";

type NoteParams = {
  noteId: string;
}

export function Note(): React.JSX.Element {
  const params = useParams<NoteParams>();
  return <div>Note Page: {params.noteId}</div>;
}

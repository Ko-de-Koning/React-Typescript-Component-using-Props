import React from 'react';
import { useState } from "react";
import './App.css';
import NewComponent from './NewComponent';
import List from "./components/List";

interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Johan Cruijff",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Johan_Cruijff_%281965%29.jpg",
      age: 36,
      note: "Dat is logisch"
    }
  ]);

  const age = 42;
  return (
    <div className="App">
      <h1>Invitations</h1>
      <List people={people} />
      <NewComponent name="Bill" age={age} isOlderThanForty={age > 40} />
    </div>
  );
} 

export default App
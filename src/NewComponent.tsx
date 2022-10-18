import React from 'react'
import { FC } from "react";

interface Props {
  name: string;
  age: number; 
  isOlderThanForty: boolean;
}

const NewComponent: FC<Props> = ({ name, age, isOlderThanForty }) => {
  console.log(isOlderThanForty);
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  )
}

export default NewComponent
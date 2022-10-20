import { FC } from "react";
import React from 'react'

interface IProps {
    people: {
      name: string
      age: number
      url: string
      note?: string
    }[]
  }

const List: FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
                <li className="List">
                <div className="List-header">
                    <img alt="profiel-foto" className="List-img" src={person.url} />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
            )
        })

    }

    

    return (
        <ul>
            {renderList()}
        </ul>
    )
}


export default List
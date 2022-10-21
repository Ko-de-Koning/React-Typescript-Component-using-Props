import React, { useState } from 'react'
import { IState as Props } from "../App";
import { FC } from "react";

 interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
 }

const AddToList: FC<IProps>  = ({ people, setPeople}) => {
    
    const [invoer, setInvoer] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInvoer({
            ...invoer,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if(
            !invoer.name ||
            !invoer.age ||
            !invoer.img
        ) {
            return
        }

        setPeople([
            ...people,
            {
              name: invoer.name,  
              age: parseInt(invoer.age),
              url: invoer.img,
              note: invoer.note
            }
        ]);

        setInvoer({
            name: "",
            age: "",
            note: "",
            img: ""
        })
    }

    return (
        <div className='AddToList'>
            <input
                type="text"
                placeholder="Name"
                className="AddToList-input" 
                value={invoer.name}
                onChange={(handleChange)}       
                name="name"
            />
            <input
                type="text"
                placeholder="Age"
                className="AddToList-input"
                value={invoer.age} 
                onChange={handleChange}       
                name="age"
            />
            <input
                type="text"
                placeholder="Image Url"
                className="AddToList-input" 
                value={invoer.img} 
                onChange={handleChange}       
                name="img"

            />
            <textarea
                placeholder="Notes"
                className="AddToList-input"
                value={invoer.note}  
                name="note"
                onChange={handleChange}       
            />
            <button
                className="AddToList-btn"
                onClick={handleClick}
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList
import React, { useState } from 'react'

const AddToList = () => {
    
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
                className='AddToList-btn'
                onClick={handleClick}
            />
        </div>
    )
}

export default AddToList
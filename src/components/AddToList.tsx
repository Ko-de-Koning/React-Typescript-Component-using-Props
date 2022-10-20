import React, { useState } from 'react'

const AddToList = () => {
    
    const [invoer, setInvoer] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    return (
        <div className='AddToList'>
            <input
                type="text"
                placeholder="Name"
                className="AddToList-input" 
                value={invoer.name}       
            />
            <input
                type="text"
                placeholder="Age"
                className="AddToList-input"
                value={invoer.age}       
            />
            <input
                type="text"
                placeholder="Image Url"
                className="AddToList-input" 
                value={invoer.img}       
            />
            <textarea
                placeholder="Notes"
                className="AddToList-input"
                value={invoer.note}        
            />
        </div>
    )
}

export default AddToList
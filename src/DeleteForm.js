import React, {useState} from 'react';
import {addBook, deleteBook} from "./firebase";

const DeleteForm = () => {
    const [id, setId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        deleteBook(id)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={id}
                onChange={(e) => {setId(e.target.value)}}
                placeholder={"Id"}
            />
            <button onClick={handleSubmit}>Delete</button>
        </form>
    );
};

export default DeleteForm;
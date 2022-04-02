import React, {useState} from 'react';
import {addBook} from "./firebase";

const AddForm = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
                placeholder={"Title"}
            />
            <input
                value={author}
                onChange={(e) => {setAuthor(e.target.value)}}
                placeholder={"Author"}
            />
            <button onClick={handleSubmit}>Add</button>
        </form>
    );
};

export default AddForm;
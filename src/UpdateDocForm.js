import React, {useState} from 'react';
import {deleteBook, updateBook} from "./firebase";

const UpdateDocForm = () => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBook(id, title, author)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={id}
                onChange={(e) => {setId(e.target.value)}}
                placeholder={"Id"}
            />
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
            <button onClick={handleSubmit}>Update</button>
        </form>
    );
};

export default UpdateDocForm;
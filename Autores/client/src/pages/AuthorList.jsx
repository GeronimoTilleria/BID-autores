import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton';

const AuthorList = () => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const getAuthors = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/authors`);
            setAuthors(res.data);
        };
        getAuthors();
    }, []);

    const authorDelete = (idAuthor) => {
        setAuthors(authors.filter(author => author._id !== idAuthor));
    }

    return (
        <section>
            <div>
                <Link to={'/add'}>Add an author</Link>
                <p>We have quotes by:</p>
            </div>

            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions avalaible</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, index) => 
                            <tr key={index}>
                                <td>{author.name}</td>
                                <td className='d-flex justify-content-around'>
                                    <Link className='btn btn-warning btn-css' to={`/edit/${author._id}`}>Edit</Link>
                                    <DeleteButton 
                                        authorID={author._id}
                                        successCallback={authorDelete}
                                    />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>


        </section>
    )
}

export default AuthorList

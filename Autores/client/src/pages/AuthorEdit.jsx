import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import AuthorForm from '../components/AuthorForm';

const AuthorEdit = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const [author, setAuthor] = useState({
        name: ''
    });

    useEffect(() => {
        const getAuthor = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/authors/${id}`);
                setAuthor(res.data);
            } catch (error) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/add');
                    } else {
                        navigate('/');
                    }
                })
            }

        };
        getAuthor();
    }, [id]);

    const editAuthor = async (values, actions) => {

        try{
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/authors/${id}`, values);
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'BRILLIANT!!!',
                    text: `${res.data.nombre} updated successfully!`,
                });
                navigate('/');
            }
        }catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong!!!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }

    return (
        <div>
            <div>
                <Link to={'/'}>Home</Link>
                <p>Edit this author:</p>
            </div>
            <AuthorForm
                initialValues={author}
                onSubmit={editAuthor}
            />
        </div>
    )
}

export default AuthorEdit

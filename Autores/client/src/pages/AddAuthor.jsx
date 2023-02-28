import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import AuthorForm from '../components/AuthorForm'



const AddAuthor = () => {
    const navigate = useNavigate();

    const initialValues = {
        name: ''
    }

    const addAutor = async (values, actions) => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/authors`, values)
            console.log(res);
            if (res.status === 200) {
                Swal.fire(
                    'AGREGADO!',
                    `${values.name} se ha agregado correctamente!`,
                    'success'
                )
            }
            actions.resetForm();
            navigate('/');
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Error: ${error?.response?.data?.message || error.message}`
            })
        }
    };

    return (
        <div>
            <div>
                <Link to={'/'}>Home</Link>
                <p>Add new author:</p>
            </div>
            <AuthorForm
                initialValues={initialValues}
                onSubmit={addAutor}
            />
        </div>
    )
}

export default AddAuthor

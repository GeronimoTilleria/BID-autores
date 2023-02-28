import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const DeleteButton = ({ authorID, successCallback }) => {

    const authorDelete = async (authorID) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/authors/${authorID}`);
            successCallback(authorID);
        }
        catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Ops que mal!!!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }

    const confirmDelete = (authorID) => {
        Swal.fire({
            title: 'Estas seguro de eliminar?',
            text: "No podrás arrepentirte!!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'SI, eliminalo ahora!'
        }).then((result) => {
            if (result.isConfirmed) {
                authorDelete(authorID)
            }
        })
    }

    return (
        <div>
            <button className='btn btn-danger btn-css' onClick={() => confirmDelete(authorID)}>
                Delete
            </button>
        </div>
    )
}

export default DeleteButton

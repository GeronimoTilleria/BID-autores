import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AuthorForm = ({ initialValues, onSubmit }) => {
    const navigate = useNavigate();

    const handleCancel = () => {
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
              navigate('/');
            }
          })
    }

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required('Required'),
            })}
            onSubmit={onSubmit}
        >
            <Form className='border border-dark-subtle p-4'>
                <div className='d-flex align-items-center gap-4 mb-4'>
                    <label htmlFor="name">Name: </label>
                    <Field className='form-control input-css' name="name" type="text" />
                    <ErrorMessage name="name" />
                </div>
                <div className='d-flex gap-4'>
                    <button className='btn btn-primary btn-css' type='button' onClick={handleCancel}>Cancel</button>
                    <button className='btn btn-primary btn-css' type='submit'>Submit</button>
                </div>
            </Form>
        </Formik>

    )
}

export default AuthorForm

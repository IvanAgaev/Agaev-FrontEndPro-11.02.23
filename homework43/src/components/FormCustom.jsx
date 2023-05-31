import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from 'yup';




function FormCustom({ setData, data, ...props }) {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current);
    }

    const initialValues = {
        name: '',
        username: '',
        email: '',
    };

    const onSubmit = (values, form) => {
       
        setData([...data, {
            name: values.name,
            username: values.username,
            email: values.email,
            id: Date.now(),
        }]);
        form.resetForm();

        return true

       
        

    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email format").required("Required"),
        username: Yup.string().required("Required"),
    });

   

    


    return (
        <>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form className={isActive ? 'hide' : ''}>
                <div className="form-control">
                    <Field type="text" name="name" id="name" placeholder="Enter name" />
                    <ErrorMessage name='name' />
                </div>
                <div className="form-control">
                    <Field type="text" name="username" id="username" placeholder="Enter username" />
                    <ErrorMessage name='username' />
                </div>
                <div className="form-control">
                    <Field type="email" name="email" id="email" placeholder="Enter email" />
                    <ErrorMessage name='email' />
                </div>

                <button className='btn' type='submit'>Оновити данні</button>
               
           
            
            </Form>
           
        </Formik>
            <button onClick={handleClick} type='button'>{isActive ? 'Показати форму' : 'Сховати форму'}</button>
        </>
    );
}

export default FormCustom;
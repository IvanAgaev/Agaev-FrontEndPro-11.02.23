import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
    name: "",
    email: "",
    phone: "",
   
};

const onSubmit = values => {
    console.log('Form Data', values);
};

const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    phone: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(12, "Must be 12 characters")
        .max(12, "Must be 12 characters")
        .required('A phone number is required'),
})


function YoutubeForm(props) {

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name" />
                    <ErrorMessage name="name" />
                </div>
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <Field type="text" name="email" id="email" />
                    <ErrorMessage name="email" component={TextError}  />
                </div>
                <div className="form-control">
                    <label htmlFor="channel">Phone number</label>
                    <Field type="text" name="phone" id="phone" />
                    <ErrorMessage name="phone" component={TextError} />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}

export default YoutubeForm;
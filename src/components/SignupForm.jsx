import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const initialValues = { email: "", password: "", confirmPassword: "" };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = (values) => {
    console.log("Signup data:", values);
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label>Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label>Confirm Password</label>
            <Field name="confirmPassword" type="password" />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignupForm;

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import api from '../apis';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .required('Must enter a name'),
  email: Yup.string()
    .email('Must be a valid email address')
    .required('Must enter an email'),
  password: Yup.string()
    .min(6, 'Must be 6 characters or more')
    .required('Required'),
});

function Register({ setTab }) {
  const [registerError, setRegisterError] = React.useState(null);
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        try {
          //await axios.post('http://localhost:5000/movies/add', newMovie,config)
          await axios({
            method: 'post',
            url: 'http://localhost:5000/user/register',
            data: values,
          }).then((res) => {
            console.log('after submit, response is', res);
          });

          resetForm();
          setSubmitting(false);
          // after registering, switch to the Login Tab
          setTab({ tabIndex: 1 });
        } catch (err) {
          console.log(err.response.data);
          console.log('err is', err);
          setRegisterError(err.response.data);
        }
      }}
    >
      {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <label>{registerError}</label>
          <div className="input-row">
            <label htmlFor="firstName">Username</label>
            <input id="username" name="username" type="text" onChange={handleChange} onBlur={handleBlur} value={values.username} />
            {touched.username && errors.username ? <div>{errors.username}</div> : null}
          </div>
          <br />
          <div className="input-row">
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
            {touched.email && errors.email ? <div>{errors.email}</div> : null}
          </div>
          <br />
          <div className="input-row">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
            {touched.password && errors.password ? <div>{errors.password}</div> : null}
          </div>
          <br />
          <div className="input-row">
            <button class="btn" type="submit" disabled={isSubmitting}>
              <h3>Submit</h3>
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}
export default Register;

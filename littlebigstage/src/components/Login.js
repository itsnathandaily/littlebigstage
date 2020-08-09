import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { userLoggedIn } from '../actions';
import { useDispatch } from 'react-redux';


const validationSchema = Yup.object().shape({
  username: Yup.string().required('Must enter a name'),
  // .min(5, 'Must be 5 characters or more')
  //   email: Yup.string()
  //     .email('Must be a valid email address')
  //     .required('Must enter an email'),
  password: Yup.string().required('Required'),
  // .min(6, 'Must be 6 characters or more')
});

const Login = (props) => {
  // let history = useHistory();
  console.log('props is', props.history);
  const dispatch4 = useDispatch();
  const [loginError, setLoginError] = React.useState(null);

  //stores loggedin user in state
  const handleUserLoggedIn = (usernameAndToken) => {
    dispatch4(userLoggedIn(usernameAndToken));
    setLoginError(null);

    //TO DO trigger close modal ?
    // history.push('/');
    //console.log('dispatch after dispatch is', dispatch);
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        axios({
          method: 'post',
          url: 'http://localhost:5000/user/login',
          data: values,
        })
          .then((res) => {
            console.log('res is ', res);
            console.log('after submit, response is', res.config.data);
            handleUserLoggedIn({
              username: values.username,
              token: res.data,
            });
          })
          .catch((err) => {
            console.log('err is ', err);
            console.log(err.response.data);
            setLoginError(err.response.data);
          });
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label>{loginError}</label>
          </div>
          <div className="input-row">
            <label htmlFor="firstName">Username</label>
            <input id="username" name="username" type="text" onChange={handleChange} onBlur={handleBlur} value={values.username} />
            {touched.username && errors.username ? <div>{errors.username}</div> : null}
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
};

export default Login;

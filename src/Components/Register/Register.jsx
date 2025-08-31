import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import myImage from '../../images/329621463d95b7d36ed51b35815de162.png';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Register() {
  const [userType, setUserType] = useState('Parent');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    username: Yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    age: Yup.number()
      .nullable()
      .test('is-required-for-child', 'Age is required for children', function (value) {
        return userType === 'Child' ? !!value : true;
      }),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const payload = {
        ...values,
        role: userType,
        age: userType === 'Child' ? values.age : undefined,
        avatarURL: 'https://example.com/default-avatar.png',
      };

      const { data } = await axios.post('http://localhost:5000/api/auth/register', payload);

      if (data.message === 'User registered successfully') {
        Swal.fire({
          icon: 'success',
          title: 'Registered Successfully',
          showConfirmButton: false,
          timer: 1500,
        });

        resetForm();
        navigate('/login');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.error || 'Register Failed',
      });
    }

    setSubmitting(false);
  };

  return (
    <div className="continer overflow-hidden">
      <div className="row">
        <div className="col-md-5 d-flex align-items-center justify-content-center bg-white">
          <img src={myImage} alt="" />
        </div>

        <div className="col-md-7">
          <div className="min-vh-100 bg-white d-flex flex-column align-items-center justify-content-center p-2">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="mb-4 text-center">
                    <h2 className="h4">Welcome to EduPlay</h2>
                  </div>

                  <div className="d-flex gap-2 mb-4 rounded-pill bg-primary p-2">
                    <Link to="/login" className="btn flex-grow-1 text-white rounded-pill">
                      Login
                    </Link>
                    <button className="btn flex-grow-1 text-white bg-primary-subtle rounded-pill">
                      Register
                    </button>
                  </div>

                  <div className="btn-group w-100 mb-4 border border-dark rounded-pill overflow-hidden">
                    {['Parent', 'Child', 'Organizer'].map((type) => (
                      <button
                        key={type}
                        className={`btn ${userType === type ? 'btn-primary' : 'btn-white'}`}
                        onClick={() => setUserType(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  <Formik
                    initialValues={{ email: '', username: '', password: '', age: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email Address
                          </label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your Email Address"
                            className="form-control rounded-pill"
                          />
                          <ErrorMessage name="email" component="div" className="text-danger small mt-1" />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="username" className="form-label">
                            User Name
                          </label>
                          <Field
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            className="form-control rounded-pill"
                          />
                          <ErrorMessage name="username" component="div" className="text-danger small mt-1" />
                        </div>

                        {userType === 'Child' && (
                          <div className="mb-3">
                            <label htmlFor="age" className="form-label">
                              Age
                            </label>
                            <Field
                              type="number"
                              id="age"
                              name="age"
                              placeholder="Enter your age"
                              className="form-control rounded-pill"
                            />
                            <ErrorMessage name="age" component="div" className="text-danger small mt-1" />
                          </div>
                        )}

                        <div className="mb-4">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <div className="position-relative">
                            <Field
                              type={showPassword ? 'text' : 'password'}
                              id="password"
                              name="password"
                              placeholder="Enter your Password"
                              className="form-control rounded-pill"
                            />
                            <button
                              type="button"
                              className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-muted"
                              style={{ padding: '0.375rem 0.75rem' }}
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                          <ErrorMessage name="password" component="div" className="text-danger small mt-1" />
                        </div>

                        <button type="submit" disabled={isSubmitting} className="btn btn-primary w-100 rounded-3">
                          Register
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Register;

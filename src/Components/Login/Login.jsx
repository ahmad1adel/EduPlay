import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2';
import myImage from '../../images/941a02767c34e76e4401880f4d2aac30.png';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData); 

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);

        const userRes = await axios.get("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${response.data.token}`,
          },
        });

        localStorage.setItem('user', JSON.stringify(userRes.data));

        Swal.fire({
          icon: 'success',
          title: 'Login Successfully',
          showConfirmButton: false,
          timer: 1500,
        });

        navigate('/');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.response?.data?.error || 'UserName or Password is Wrong',
      });
    }
  };

  return (
    <div className="continer overflow-hidden">
      <div className="row">
        <div className="col-md-5 d-flex align-items-center justify-content-center bg-white">
          <img className="w-75" src={myImage} alt="" />
        </div>
        <div className="col-md-7">
          <div className="min-vh-100 bg-white d-flex flex-column align-items-center justify-content-center p-2">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <h4 className="text-center mb-4">Welcome to EduPlay</h4>

                  <div className="d-flex gap-2 mb-4 rounded-pill bg-primary p-2">
                    <button className="btn flex-grow-1 text-white bg-primary-subtle rounded-pill">Login</button>
                    <Link to="/register" className="btn flex-grow-1 text-white rounded-pill">Register</Link>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">User name</label>
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        id="username"
                        name="username"
                        placeholder="Enter your Username"
                        value={formData.username}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <div className="position-relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="form-control rounded-pill"
                          id="password"
                          name="password"
                          placeholder="Enter your Password"
                          value={formData.password}
                          onChange={handleInputChange}
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
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="rememberMe"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                          Remember me
                        </label>
                      </div>
                      <a href="#" className="text-decoration-none">
                        Forgot Password?
                      </a>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 rounded-pill py-2">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Login;
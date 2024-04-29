import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginFetch } from "../axios_fetch/fetch";
import { Link } from "react-router-dom";
import './login.css'

const Login = () => {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const response = await loginFetch(formData);
  //   console.log(response);
  //   if (response.data && response.data.token) {
  //     localStorage.setItem("auth", JSON.stringify(response.data.token));
  //     setTimeout(() => {
  //       navigate("/");
  //     }, 1500);
  //   }
  // };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginFetch(formData);
      if (response.data && response.data.token) {
        localStorage.setItem("auth", JSON.stringify(response.data.token));
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Email o password errati');
      } else {
        console.error("Error:", error);
      }
    }
  };
  

  return (
    <div className="container-login row justify-content-center pt-5 w-100">
      <div className="card-login col-md-6 d-flex align-items-center flex-wrap flex-column">
        <div>
        <h4>Effettua l'accesso</h4>
        </div>
        <div className="container-credentials text-center">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <input
                type="email"
                onChange={onChangeInput}
                name="email"
                placeholder="Inserisci la tua email..."
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                onChange={onChangeInput}
                name="password"
                placeholder="Inserisci la tua password..."
              />
            </div>
            <div className="text-center">
              <button type="submit">Accedi</button>
            </div>
          </form>
          <div className="text-center">
             Non sei registrato? 
             <Link as={Link} to={'/registration'}>Registrati ora</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;
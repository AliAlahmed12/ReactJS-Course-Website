import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css';
import logo from '../img/logo.svg'
import avatar from '../img/avatar.jpg'
import { useSelector } from 'react-redux';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const MainLayout = ({children}) =>{


    const count = useSelector(state => state.counter);

    return(
        <>

        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary" id="background2">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand mt-2 mt-lg-0">
                        <img src={logo} height="80" alt="Logo" id="logo"/>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link"><strong className='arabicFont text-white'>الرئيسية</strong></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/courses" className="nav-link"><strong className='arabicFont text-white'>الكورسات</strong></Link>
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex align-items-center">
                        <a className="text-reset me-3" href="#">
                            <i className="bi bi-cart4 text-white"></i>
                            <span className="badge rounded-pill badge-notification bg-danger">{count}</span>
                        </a>

                        <div className="settings ms-1">
                            <i className="bi bi-gear text-white"></i>
                        </div>

                        <div className="avatar ms-2">
                            <img src={avatar} className="rounded-circle ms-3" height="25" alt=""/>
                        </div>
                    </div>
                </div>
            </nav>
        </header>


        <main>
            {children}
        </main>

        <footer className="text-center bg-body-tertiary mt-5" id="background2">
          <div className="container pt-4 d-flex justify-content-center">
            <section className="mb-4 d-flex justify-content-around w-75">

                <i class="bi bi-facebook text-white"></i>

                <i class="bi bi-github text-white"></i>
             
                <i class="bi bi-instagram text-white"></i>
            
                <i class="bi bi-linkedin text-white"></i>
            
                <i class="bi bi-google text-white"></i>

                <i class="bi bi-youtube text-white"></i>
           
            </section>
          </div>

          <div className="text-center p-3 text-white ">
            <a className="text-body text-white d-flex justify-content-center " href="">
              <p className='text-white'>© 2020 Copyright:</p>
              <p className='text-white ms-2'>Ali Habib Alahmed</p>
            </a>
          </div>
        </footer>

        </>
        

    )
}


export default MainLayout;
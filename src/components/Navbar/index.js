import React from "react";
import img from "../../img/LP Logo 2-cut.jpg";

export default function index() {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <div className='container-fluid'>
        <img
          style={{ wide: "55px", height: "55px", margin: "7px" }}
          alt='img'
          src={img}
        ></img>
        <a className='navbar-brand' href='/'>
          Legal Perícias
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
          aria-controls='navbarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul className='navbar-nav me-auto mb-2 mb-md-0'>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='/about'>
                Quem Somos
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/contact'>
                Contatos
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='!#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Nossos Serviços
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a
                    className='dropdown-item flex-column align-items-start'
                    href='/service1'
                  >
                    Perícia de Insalubridade e Periculosidade
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/service2'>
                    Assistência técnica para sua perícia
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/service3'>
                    Assistente Técnico trabalhistas
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/service4'>
                    Laudos periciais
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from "react";

import "./styles.css";

import img_06 from "../../img/06.jpg";
import img_04 from "../../img/04.jpg";

export default function index() {
  return (
    <div className='container-fluid p-0 mb-1 wow fadeIn'>
      <div
        id='header-carousel'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img className='w-100' aria-hidden src={img_04} alt='Image' />
            <div className='carousel-caption'>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-12 col-lg-10'>
                    <h5 className='text-light text-uppercase mb-3 animated slideInDown'>
                      Bem-vindo à Central de Perícias
                    </h5>
                    <h1 className='display-2 mb-3 animated slideInDown'>
                      Assessoria especializada em Perícias Trabalhistas e
                      Ambientais
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <img className='w-100' aria-hidden src={img_06} alt='Image' />
            <div className='carousel-caption'>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-12 col-lg-10'>
                    <h5 className='text-light text-uppercase mb-3 animated slideInDown'>
                      Bem-vindo à Central de Perícias
                    </h5>
                    <h1 className='display-2 mb-3 animated slideInDown'>
                      Professional Tiling & Painting Services
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#header-carousel'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#header-carousel'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
}

import React from "react";

export default function index({ full_name, details, img, doc }) {
  return (
    <div className='col-lg-4'>
      <div className='row g-4 align-items-center'>
        <div className='col-sm-6'>
          <img className='img-fluid' src={img} alt='' />
        </div>
        <div className='col-sm-6'>
          <h3 className='mb-0'>{full_name}</h3>
          <p>{details}</p>
          <p>{doc}</p>
        </div>
      </div>
    </div>
  );
}

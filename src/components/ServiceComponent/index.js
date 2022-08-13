import React from "react";
import { Animated } from "react-animated-css";
import "./style.css";

export default function index({ title, text, img }) {
  return (
    <div>
      {/* <!-- Page Header Start --> */}
      <div className='container-fluid page-header py-5 mb-5 '>
        <div className='container text-center py-5'>
          <h1 className='display-4 text-white animated slideInDown mb-4'>
            Serviços
          </h1>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Appointment Start --> */}
      <div className='container-xxl py-5'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-6 col-md-6'>
              <Animated
                animationInDelay={600}
                animationIn='bounceInLeft'
                animationOut='fadeInUp'
                isVisible={true}
              >
                <div className='border-start border-5 border-primary ps-4 mb-5'>
                  <h6 className='text-body text-uppercase mb-2'>Serviço</h6>
                  <h1 className='display-6 mb-0'>{title}</h1>
                </div>
              </Animated>
              <p className='mb-0'>{text}</p>
            </div>

            <div className='col-lg-6 col-md-6 '>
              <Animated
                animationInDelay={600}
                animationIn='bounceInRight'
                animationOut='fadeInUp'
                isVisible={true}
              >
                <img
                  className='rounded-circle w-100'
                  src={img}
                  alt='Img-service'
                />
              </Animated>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Appointment End --> */}
    </div>
  );
}

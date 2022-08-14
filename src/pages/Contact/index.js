import React from "react";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { Animated } from "react-animated-css";

export default function index() {
  return (
    <div className='container-xxl py-5 mw-100'>
      <div className='container'>
        <div className='row g-5'>
          <div className='col-lg-7'>
            <div className='position-relative h-100 h-100'>
              <iframe
                title='map'
                className='position-relative w-100 h-100'
                src='https://maps.google.com/maps?q=Manoel%20Pedro%20J%C3%BAnior,%20413%20Mau%C3%A1/SP&t=&z=13&ie=UTF8&iwloc=&output=embed'
                frameBorder='0'
                style={{ minheight: "500px", border: 0 }}
                allowFullScreen=''
                aria-hidden='false'
                tabIndex='0'
              ></iframe>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='h-100'>
              <Animated
                animationInDelay={200}
                animationIn='bounceInUp'
                animationOut='fadeInUp'
                isVisible={true}
              >
                <div className='border-start border-5 border-primary ps-4 mb-5'>
                  <h6 className='text-body text-uppercase mb-2'>Contatos</h6>
                  <h1 className='display-6 mb-0'>
                    Dúvidas ou sugestões? Entre em contato por email ou por
                    telefone
                  </h1>
                </div>
              </Animated>

              <Animated
                animationInDelay={400}
                animationIn='bounceInUp'
                animationOut='fadeInUp'
                isVisible={true}
              >
                <p>
                  <MdLocationOn />
                  Manoel Pedro Júnior, 413 Mauá/SP
                </p>

                <p>
                  <BsTelephoneFill /> + (11) 97673-6789
                </p>

                <p>
                  <MdEmail /> xbrsustentabilidade@gmail.com
                </p>
              </Animated>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

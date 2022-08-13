import React from "react";
import FormsComponent from "../FormComponent";
import ReactCountryFlag from "react-country-flag";
import {
  BsFacebook,
  BsTwitter,
  BsGoogle,
  BsInstagram,
  BsTelephoneFill,
} from "react-icons/bs";
import { MdLocationOn, MdEmail } from "react-icons/md";

export default function App() {
  return (
    <div className='m-0 mw-100'>
      <footer
        className='text-center text-lg-start text-white'
        style={{ backgroundColor: "#212529" }}
      >
        <div className='container p-4 pb-0'>
          <section className=''>
            <div className='row'>
              <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                <h6 className='text-uppercase mb-4 font-weight-bold'>
                  PERÍCIA
                </h6>
                <p>
                  O objetivo da CENTRAL DE PERÍCIAS é promover, de forma ágil,
                  com qualidade técnica e focado na defesa do cliente,
                  assistências técnicas periciais para acompanhar a realização
                  de perícias judiciais, oferecendo as melhores estratégias para
                  cada situação e caso.
                </p>
                <div className='d-flex align-items-stretch'>
                  <ReactCountryFlag
                    countryCode='BR'
                    svg
                    style={{
                      width: "3em",
                      height: "3em",
                      marginRight: "6px",
                    }}
                    title='BR'
                  />
                  <p
                    style={{
                      color: "green",
                    }}
                  >
                    Atendemos todo o BRASIL
                  </p>
                </div>

                <span className='flag-icon flag-icon-gr flag-icon-squared'></span>
              </div>

              <hr className='w-100 clearfix d-md-none' />

              <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                <h6 className='text-uppercase mb-4 font-weight-bold'>
                  SOLICITE UM ORÇAMENTO
                </h6>
                <div className='mb-4'>
                  <FormsComponent />
                </div>
              </div>

              <hr className='w-100 clearfix d-md-none' />

              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
                <h6 className='text-uppercase mb-4 font-weight-bold'>
                  Contato
                </h6>
                <p>
                  <MdLocationOn /> Manoel Pedro Júnior, 413 Mauá/SP
                </p>
                <p>
                  <MdEmail />
                  xbrsustentabilidade@gmail.com
                </p>
                <p>
                  <BsTelephoneFill /> + (11) 97673-6789
                </p>
              </div>
            </div>
          </section>

          <section className='p-3 pt-0'>
            <div className='row d-flex align-items-center'>
              <div className='col-md-7 col-lg-8 text-center text-md-start'>
                <div className='p-3'>© 2022 Copyright:</div>
              </div>

              <div className='col-md-5 col-lg-4 ml-lg-0 text-center text-md-end'>
                <a
                  href='/'
                  className='btn btn-outline-light btn-floating m-1'
                  role='button'
                >
                  <BsFacebook />
                </a>
                <a
                  href='/'
                  className='btn btn-outline-light btn-floating m-1'
                  role='button'
                >
                  <BsTwitter />
                </a>
                <a
                  href='/'
                  className='btn btn-outline-light btn-floating m-1'
                  role='button'
                >
                  <BsGoogle />
                </a>
                <a
                  href='/'
                  className='btn btn-outline-light btn-floating m-1'
                  role='button'
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

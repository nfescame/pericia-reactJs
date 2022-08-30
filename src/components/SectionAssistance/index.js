import React from "react";
import "./styles.css";
export default function index() {
  return (
    <div className='coitainer-img mb-1'>
      <div className='container-color'>
        <p className='h1'>ASSISTÊNCIA TÉCNICA PARA SUA PERÍCIA</p>
        <p className='h5'>
          Cabe ao Assistente Técnico acompanhar meticulosamente as ações e
          procedimentos do perito, questionando-o quando for o caso e, ao final,
          elaborando um parecer técnico paralelo a ser anexado aos autos. Veja mais detalhes sobre nossos trabalhos clicando aqui:
        </p>
        <div className='container-button d-flex justify-content-center'>
          <a className='btn ' href='/service2' role='button'>
            Saiba Mais
          </a>
        </div>
      </div>
    </div>
  );
}

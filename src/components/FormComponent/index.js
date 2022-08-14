import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./styles.css";

export default function FormsComponent() {
  const [msgSend, setMsgSend] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState(null);
  const [msgText, setMsgText] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4r296gi",
        "template_49uo73b",
        form.current,
        "wzheNrgXhwPzh_tGw"
      )
      .then(
        (result) => {
          setMsgSend(true);
          setMsgSuccess(true);
          setMsgText("Sua mensagem foi enviada com sucesso!");
        },
        (error) => {
          setMsgSend(true);
          setMsgSuccess(false);
          console.log(error.text);
          setMsgText(
            "Houve Um erro no envio da mensagem, por favor tente mais tarde!"
          );
        }
      );
    e.target.reset();
  };
  return (
    <div>
      {msgSend ? (
        <div className='container d-flex justify-content-center fixed-top'>
          {msgSuccess ? (
            <div className='container-alert alert alert-success' role='alert'>
              <h4 className='alert-heading'>Alerta!</h4>
              <p>{msgText}</p>
              <button
                type='button'
                onClick={() => {
                  setMsgSend(false);
                }}
                className='btn btn-success'
              >
                Fechar
              </button>
            </div>
          ) : (
            <div className='container-alert alert alert-danger' role='alert'>
              <h4 className='alert-heading'>Alerta!</h4>
              <p>{msgText}</p>
              <button
                type='button'
                onClick={() => {
                  setMsgSend(false);
                }}
                className='btn btn-danger'
              >
                Fechar
              </button>
            </div>
          )}
        </div>
      ) : (
        ""
      )}

      <form ref={form} onSubmit={sendEmail}>
        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Nome
          </label>
          <input
            name='nome'
            type='nome'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Seu Nome'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Email
          </label>
          <input
            name='email'
            type='email'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Seu email'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleFormControlTextarea1' className='form-label'>
            Mensagem
          </label>
          <textarea
            name='message'
            className='form-control'
            id='exampleFormControlTextarea1'
            rows='3'
          ></textarea>
        </div>
        <input type='submit' value='Enviar' />
      </form>
    </div>
  );
}

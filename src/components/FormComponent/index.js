import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function FormsComponent() {
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
          alert(result.text, "msg sucessfull");
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
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

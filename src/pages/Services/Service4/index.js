import React from "react";
import ServiceComponent from "../../../components/ServiceComponent";
import img_4 from "../../../img/servicesImg/service-4.jpg";

export default function index() {
  return (
    <div>
      <ServiceComponent
        img={img_4}
        title='Laudos periciais e impugnação'
        text='Cabe ao Engenheiro ou Médico contratado, após tomar conhecimento dos
        autos do processo, expor de forma clara e objetiva seu entendimento
        sobre as questões suscitadas, esclarecendo os pontos controvertidos e
        apontando eventuais decisões judiciais a respeito do tema, ou seja,
        apresentar subsídios para a parte e seu advogado traçarem a estratégia
        da defesa.'
      />
    </div>
  );
}

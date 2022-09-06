import React from "react";
import ServiceComponent from "../../../components/ServiceComponent";
import img_1 from "../../../img/servicesImg/service-1.jpg";

export default function index() {
  return (
    <ServiceComponent
      img={img_1}
      title='Perícia de Insalubridade e Periculosidade'
      text=' Normalmente a perícia é determinada pelo Juiz para que, através de um
        perito, especialista no assunto, se investigue fatos a respeito de
        insalubridade, de
        periculosidade, de doenças ocupacionais ou até mesmo
        contábil, quando os cálculos do processo forem complexos e exigirem um
        conhecimento além do normal de matemática. Nós da Legal Perícias
        somos uma empresa especializada em prestação de serviços de Assistência
        Técnica em Perícias Trabalhistas Técnicas e Médicas em todo o território
        nacional. Nossa equipe tem larga experiência em atuação
        em Perícias Trabalhistas (Periculosidade, Insalubridade e Médica) e é
        formada por especialistas nas áreas pertinentes (medicina e engenharia) e temas relativos à saúde e segurança do trabalho.'
    />
  );
}

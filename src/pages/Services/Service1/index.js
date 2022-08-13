import React from "react";
import ServiceComponent from "../../../components/ServiceComponent";
import img_1 from "../../../img/servicesImg/service-1.jpg";

export default function index() {
  return (
    <div>
      <ServiceComponent
        img={img_1}
        title='Perícia de Insalubridade e Periculosidade'
        text=' Normalmente a perícia é determinada pelo Juiz para que através de um
        perito, especialista no assunto, se investigue fatos a respeito de
        insalubridade [contato com agentes nocivos a saúde], ou de
        periculosidade [contato com inflamáveis e explosivos, resíduo nuclear],
        ou de doenças ocupacionais [àquelas causadas pelo trabalho] ou até mesmo
        contábil, quando os cálculos do processo forem complexos e exigirem um
        conhecimento além do normal de matemática. Nós da Central de Perícias
        somos uma empresa especializada em prestação de serviços de Assistência
        Técnica em Perícias Trabalhistas Técnicas e Médicas em todo o território
        nacional. Nossa equipe multidisciplinar com larga experiência em atuação
        em Perícias Trabalhistas (Periculosidade, Insalubridade e Médica) é
        formada por especialistas de diversas áreas (médicos, engenheiros e
        advogados), que atuam em suas áreas específicas de modo a prestar
        assistência técnica pericial nos temas relativos à saúde e segurança no
        âmbito trabalhista.'
      />
    </div>
  );
}

import React from "react";
import ServiceComponent from "../../../components/ServiceComponent";
import img_2 from "../../../img/servicesImg/service-2.jpg";

export default function index() {
  return (
    <div>
      <ServiceComponent
        img={img_2}
        title="Assistência técnica para sua perícia"
        text="O Parecer Técnico a ser elaborado pelo Assistente Técnico tem como
        objetivo fornecer ao Juiz novos elementos, fatos, análises e conclusões
        que podem contrapor o Laudo Pericial elaborado pelo perito nomeado, em
        especial nas questões controvertidas e de interesse da parte que o
        contratou. Cabe ao Assistente Técnico acompanhar meticulosamente as
        ações e procedimentos do perito, questionando-o quando for o caso e, ao
        final, elaborando um parecer técnico paralelo a ser anexado aos autos. Também auxilia a parte e seu advogado a elaborar os
        quesitos a serem respondidos pelo Perito nomeado, bem como apresentar à
        parte e/ou a seu advogado elementos que possam ser utilizados em seu
        favor no decorrer da ação, aumentando as chances de êxito.
        Após tomar conhecimento dos autos
        do processo, expor de forma clara e objetiva seu entendimento sobre as
        questões suscitadas, o assistente técnico esclarece pontos controversos e aponta
        eventuais decisões judiciais a respeito do tema, apresentando
        subsídios para a parte e seu advogado traçarem a estratégia da defesa."
      />
    </div>
  );
}

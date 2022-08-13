import React from "react";
import ServiceComponent from "../../../components/ServiceComponent";
import img_6 from "../../../img/servicesImg/service-6.jpg";

export default function index() {
  return (
    <div>
      <ServiceComponent
        img={img_6}
        title='PCMSO – PROGRAMA DE CONTROLE MÉDICO E SAÚDE OCUPACIONAL'
        text='Elaboramos PCMSO cuja é uma obrigatoriedade legal para o empregador.
        Também melhora a qualidade, produtividade e condições de trabalho do
        colaborador e previne possíveis ações judiciais decorrentes de acidentes
        ou doenças do trabalho, economizando com processos jurídicos cíveis,
        trabalhistas ou previdenciários. A Central de Perícias trabalha com as
        seguintes etapas na elaboração de um PCMSO: definição da estrutura da
        empresa e elaboração das especificações dos riscos e respectivos exames
        complementares necessários para a empresa, formatação do planejamento
        anual dos exames clínicos e todos os procedimentos são notificados,
        gerando relatórios periódicos e anuais de importância comprobatória dos
        benefícios à empresa e aos trabalhadores.'
      />
    </div>
  );
}

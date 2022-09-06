import React from "react";
import "./styles.css";
import ServiceComponent from "../../../components/ServiceComponent";
import img_5 from "../../../img/servicesImg/service-5.jpg";
import imgPPRA from "../../../img/Segurança do trabalho 2.png";

export default function index() {
  return (
    <div>
      <ServiceComponent
        img={img_5}
        title="PGR - Programa de Gerenciamento de Riscos"
        text="A Legal Perícias elabora o Programa de Gerenciamento de Riscos - 
        PGR conforme as Normas Regulamentadoras, mediante a visita técnica de um dos nossos 
        especialistas em segurança do trabalho nas dependências do cliente. 
        Nesse documento constará o os riscos a que os colaboradores estão expostos,
        medidas de segurança propostas e cronograma de atividades. Elaboramos um
        planejamento anual com o estabelecimento de metas priorizadas e
        cronograma, uma forma de registro para organizar a manutenção e
        divulgação dos dados, gerando, assim, uma periodicidade e forma de
        avaliação do desenvolvimento do programa. Aplicamos também avaliações
        quantitativas de ruído, trabalhando com estratégia e metodologia de
        ação, para que o cliente possa ter o acompanhamento periódico do
        programa na empresa."
      />

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 col-md-6 ">
              <img className="rounded w-100" src={imgPPRA} alt="Img-service" />
            </div>
            <div className="col-lg-7 col-md-6 ">
              <div className="border-start border-5 border-primary ps-4 mb-5">
                <h6 className="text-body text-uppercase mb-2">Lista</h6>
                <h1 className="display-6 mb-0">
                  Etapas de Planejamento e Implantação do PGR
                </h1>
              </div>

              <ul className="list-group list-group-flush item_li">
                <li className="list-group-item ">
                  {" "}
                  Antecipação e reconhecimento dos riscos ambientais - físicos,
                  químicos e biológicos.
                </li>
                <li className="list-group-item">
                  Planejamento das medidas de controle dos riscos.
                </li>
                <li className="list-group-item">
                  Elaboração de ações preventivas.
                </li>
                <li className="list-group-item">
                  Monitoramento qualitativo e quantitativo do ambiente.
                </li>
                <li className="list-group-item">
                  Registro e divulgação dos dados
                </li>
                <li className="list-group-item">
                  Cronograma de execução das prioridades.
                </li>
                <li className="list-group-item">
                  Desenvolvimento do documento base.
                </li>
                <li className="list-group-item">
                  Atualização das documentações.
                </li>
                <li className="list-group-item">
                  Emissão de relatórios anuais.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

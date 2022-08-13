import React from "react";
import SectionAbout from "../../components/SectionAbout";
import CardPerson from "../../components/CardPerson";
import { Animated } from "react-animated-css";
import team_1 from "../../img/team-1.jpg";
import team_2 from "../../img/team-2.jpg";

export default function index() {
  return (
    <div>
      <SectionAbout />
      <div className='container-xxl py-5'>
        <div className='container'>
          <Animated
            animationInDelay={600}
            animationIn='bounceInUp'
            animationOut='fadeInUp'
            isVisible={true}
          >
            <div className='row g-5'>
              <CardPerson
                img={team_1}
                full_name='Guilherme B. Rosa'
                details='Eng. Ambiental e Seg. do Trabalho'
                doc='CREA - 5062795844'
              />
              <CardPerson
                img={team_2}
                full_name='Adelucio Sorci Marques'
                details='Eng. Mecânico, Controle e
              Automação e Seg. do Trabalho'
                doc='CREA - 5063063815'
              />
              <CardPerson
                img={team_1}
                full_name='Luís Carlos de Oliveira'
                details='Eng. Químico e Seg. do Trabalho'
                doc='CREA - 5069058825'
              />
            </div>
          </Animated>
        </div>
      </div>
    </div>
  );
}

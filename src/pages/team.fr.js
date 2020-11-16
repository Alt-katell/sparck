import React from 'react';
import styled from 'styled-components';

import SEO from "../components/seo";

import Container from '../components/UI/Container';
import TeamMemberCard from '../components/TeamMemberCard';

const StyledWhiteBackground = styled.div`
  background: ${props => props.theme.colors.white};
  min-width: 1000px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: -2;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    min-width: 600px;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: none;
  }
`

const TeamPage = () => {
  return (
    <>
      <SEO title="Équipe" />
      <Container>
        <TeamMemberCard
          id="vicky"
          reverse={false}
          photo="/images/sparck-vicky.jpg"
          name="Vicky André"
          role1="Développeuse Front-End"
          role2="Designer Web"
          description1="Vicky est une designer multidisciplinaire passionnée."
          description2="Du Design Textile à la conception Web, elle croit que chaque élément graphique se doit d’être utile et réfléchi. Elle imagine des sites Web pour créer des univers uniques et mettre en valeur chaque produit, avec une approche minimaliste et moderne."
          description3="Enseignante et entrepreneure, Vicky a le sens du détail et est avide de défis créatifs et mémorables."
          portfolio="http://noir-de-mars.com/" />

        <TeamMemberCard
          id="katell"
          reverse={true}
          photo="/images/sparck-katell.png"
          name="Katell Goaër"
          role1="Développeuse Front-End"
          role2="Stratège Marque"
          description1="Katell est une développeuse web orientée projet."
          description2="Tout ce qu’elle fait est motivé par l’empathie. Elle est capable de se mettre à la place de n’importe qui. Pouvoir observer un projet du point de vue d’un designer, d’un techy, de vous ou mieux, de votre client, lui donne une perspective globale de la stratégie."
          description3="Katell a travaillé pendant plus de 5 ans dans le Marketing, à construire des produits, marques et packagings, avant de pivoter vers le web."
          portfolio="https://www.katellgoaer.com/" />

        <TeamMemberCard
          id="clemence"
          reverse={false}
          photo="/images/sparck-clemence.png"
          name="Clemence Paiement"
          role1="Développeuse Full-Stack"
          role2="Designer UX"
          description1="Clemence est une développeuse et une designer UI/UX orientée produit."
          description2="Elle est passionnée par la construction d’applications web et de connexions émotionnelles digitales avec leurs utilisateurs. En tant qu’entrepreneure et développeuse, elle comprend la stratégie et les fonctionnalités d’un produit au niveau budget, délais et besoins marketing."
          description3="Clemence a travaillé dans le merchandising de la mode avant de se tourner vers le design et développement web."
          portfolio="https://icportfolio.ca/" />

        <TeamMemberCard
          id="laurence"
          reverse={true}
          photo="/images/sparck-laurence.png"
          name="Laurence Bérubé-Côté"
          role1="Développeuse Front-End"
          role2="Marketing Digital"
          description1="Laurence est une développeuse web captivée par le marketing digital."
          description2="Elle se passionne pour la conception et le design de site web. À travers ceux-ci, elle cherche à procurer une expérience inégalée aux utilisateurs. Ayant un intérêt marqué pour le marketing digital, elle s’intéresse aux stratégies web qui augmenterait le trafic et le taux de conversion de votre site."
          description3="Laurence a travaillé plusieurs années en marketing, à élaborer des plans de publicités et des campagnes. Elle s’est ensuite orientée vers le développement web afin de pouvoir offrir des solutions intégrées à ses futurs clients."
          portfolio="" />
        <StyledWhiteBackground />
      </Container>
    </>
  );
}

export default TeamPage;


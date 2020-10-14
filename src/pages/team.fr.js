import React from 'react';
import styled from 'styled-components';

import SEO from "../components/seo";

import Container from '../components/UI/Container';
import TeamMemberCard from '../components/TeamMemberCard';

const StyledWhiteBackground = styled.div`
  background: ${props => props.theme.colors.white};
  min-width: 850px;
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
          portfolio="http://www.katellgoaer.com/" />

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
          id="nour"
          reverse={true}
          photo="/images/sparck-nour.png"
          name="Nour Souid"
          role1="Développeuse Full-Stack"
          role2="Stratège Affaires"
          description1="Nour est une développeuse audacieuse."
          description2="Sa mission est de donner vie à des visions. Ce qui la motive est de partir d’une idée et d’aller jusqu’au prototypage du produit. Elle sait comprendre votre stratégie et vos valeurs pour créer un produit minimum viable capable de croître."
          description3="Ayant grandi dans un esprit start-up et commencé à coder en autodidacte à l’âge de 16 ans, Nour a une bonne compréhension des produits digitaux."
          portfolio="" />
        <StyledWhiteBackground />
      </Container>
    </>
  );
}

export default TeamPage;


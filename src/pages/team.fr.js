import React from 'react';
import styled from 'styled-components';

import TeamMemberCard from '../components/TeamMemberCard';

const StyledWhiteBackground = styled.div`
  background: ${props => props.theme.colors.white};
  min-width: 850px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: -2;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: none;
  }
`

const TeamPage = () => {
  return (
    <div>
    <StyledWhiteBackground />
      <TeamMemberCard
        reverse={false}
        photo="/images/Photo-Vicky.jpg"
        name="Vicky André"
        role1="Développeuse Front-End"
        role2="Designer Web"
        description1="Vicky est une designer multidisciplinaire passionnée."
        description2="Du Design Textile à la conception Web, elle croit que chaque élément graphique se doit d’être utile et réfléchi. Elle imagine des sites Web pour créer des univers uniques et mettre en valeur chaque produit, avec une approche minimaliste et moderne."
        description3="Enseignante et chef d'entreprise, Vicky a le sens du détail et est avide de défis créatifs et mémorables."
        portfolio="http://noir-de-mars.com/" />

      <TeamMemberCard
        reverse={true}
        photo="/images/Photo-Katell.png"
        name="Katell Goaër"
        role1="Développeuse Front-End"
        role2="Stratège Marque"
        description1="Katell est une développeuse web orientée projet."
        description2="Tout ce qu’elle fait est motivé par l’empathie. Elle est capable de se mettre à la place de n’importe qui. Pouvoir observer un projet du point de vue d’un designer, d’un techy, de vous ou mieux, de votre client, lui donne une perspective globale de la stratégie."
        description3="Katell a travaillé pendant plus de 5 ans dans le Marketing, à construire des produits, marques et packagings, avant de pivoter vers le web."
        portfolio="https://alt-katell.github.io/" />

      <TeamMemberCard
        reverse={false}
        photo="/images/Photo-Vicky.jpg"
        name="Clémence Paiement"
        role1="Développeuse Full-Stack"
        role2="Designer UX"
        description1="Lorem ipsum dolor sit amet"
        description2="bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet"
        description3="bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet"
        portfolio="www.google.com" />

      <TeamMemberCard
        reverse={true}
        photo="/images/Photo-Katell.png"
        name="Nour Souid"
        role1="Développeuse Full-Stack"
        role2="Stratège Affaires"
        description1="Lorem ipsum dolor sit amet"
        description2="bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet"
        description3="bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet"
        portfolio="www.google.com" />
    </div>
  );
}

export default TeamPage;


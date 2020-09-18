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
  z-index: -1;
`

const TeamPage = () => {
  return (
    <div>
    <StyledWhiteBackground />
      <TeamMemberCard
        reverse={false}
        photo="/images/Photo-Vicky.png"
        name="Clémence Paiement"
        role1="Full-Stack Developer"
        role2="UX Designer"
        description1="Lorem ipsum dolor sit amet"
        description2="bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet"
        description3="bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet"
        portfolio="www.google.com" />

      <TeamMemberCard
        reverse={true}
        photo="/images/Photo-Katell.png"
        name="Nour Souid"
        role1="Full-Stack Developer"
        role2="Business Strategist"
        description1="Lorem ipsum dolor sit amet"
        description2="bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet"
        description3="bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet"
        portfolio="www.google.com" />

      <TeamMemberCard
        reverse={false}
        photo="/images/Photo-Katell.png"
        name="Katell Goaër"
        role1="Front-End Developer"
        role2="Brand Builder"
        description1="Katell is a project oriented web developer."
        description2="Everything she does is driven by empathy. She can stand in anyone’s shoes. Being able to look at a project from the point of view of a designer, a techy, you or better, your client, gives her a global perspective of a strategy."
        description3="Katell worked in Marketing, building products, brands and packaging, for more than 5 years before pivoting to web development."
        portfolio="www.google.com" />

      <TeamMemberCard
        reverse={true}
        photo="/images/Photo-Vicky.png"
        name="Vicky André"
        role1="Front-End Developer"
        role2="Web Designer"
        description1="Lorem ipsum dolor sit amet"
        description2="bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet"
        description3="bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet"
        portfolio="www.google.com" />
    </div>
  );
}

export default TeamPage;

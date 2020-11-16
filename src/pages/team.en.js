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
      <SEO title="Team" />
      <Container>
        <TeamMemberCard
          id="vicky"
          reverse={false}
          photo="/images/sparck-vicky.jpg"
          name="Vicky André"
          role1="Front-End Developer"
          role2="Web Designer"
          description1="Vicky is a passionate multidisciplinary designer. "
          description2="From Textile Design to Web Design, she strongly believes that every thing must have a purpose. She imagines websites to create unique experiences and make every product stand out, with a minimalistic and modern approach."
          description3="A teacher and an entrepreneur, Vicky is detail-oriented and avid of new and creative challenges."
          portfolio="http://noir-de-mars.com/" />

          <TeamMemberCard
            id="katell"
            reverse={true}
            photo="/images/sparck-katell.png"
            name="Katell Goaër"
            role1="Front-End Developer"
            role2="Brand Builder"
            description1="Katell is a project oriented web developer."
            description2="Everything she does is driven by empathy. She can stand in anyone’s shoes. Being able to look at a project from the point of view of a designer, a techy, you or better, your client, gives her a global perspective of a strategy."
            description3="Katell worked in Marketing, building products, brands and packaging, for more than 5 years before pivoting to web development."
            portfolio="https://www.katellgoaer.com/" />

        <TeamMemberCard
          id="clemence"
          reverse={false}
          photo="/images/sparck-clemence.png"
          name="Clemence Paiement"
          role1="Full-Stack Developer"
          role2="UX Designer"
          description1="Clemence is a product-oriented developer and UI/UX designer."
          description2="She is passionate about building meaningful web apps and an emotional digital connection with their users. As an entrepreneur and a developer, she understands the strategy and features behind any product from budget, timelines and marketing needs."
          description3="Clemence worked in Fashion Merchandising before switching to web design and development."
          portfolio="https://icportfolio.ca/" />

        <TeamMemberCard
          id="laurence"
          reverse={true}
          photo="/images/sparck-laurence.png"
          name="Laurence Bérubé-Côté"
          role1="Front-End Developer"
          role2="Digital Marketing"
          description1="Laurence is a web developer captivated by digital marketing."
          description2="She is passionate about conceiving and designing websites. She seeks to provide an unparalleled experience for users. She has a keen interest for digital marketing and is focused on web strategies that would increase traffic and your site's conversion rate."
          description3="Laurence worked for several years in marketing, developing advertising plans and campaigns. She then turned to web development to be able to offer integrated solutions to her future clients."
          portfolio="" />
        <StyledWhiteBackground />
      </Container>
    </>
  );
}

export default TeamPage;

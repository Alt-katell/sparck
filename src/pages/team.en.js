import React from 'react';
import styled from 'styled-components';

import TeamMemberCard from '../components/TeamMemberCard';

const StyledTeamMembers = styled.div`

`

const TeamPage = () => {
  return (
    <StyledTeamMembers>
      <TeamMemberCard
        reverse={false}
        photo="/images/Photo-Vicky.png"
        name="Vicky André"
        role1="Front-End Developer"
        role2="Web Designer"
        description="Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla"
        portfolio="www.google.com" />

      <TeamMemberCard
        reverse={true}
        photo="/images/Photo-Katell.png"
        name="Katell Goaër"
        role1="Front-End Developer"
        role2="Brand Builder"
        description="Co-founder of spärck, Katell is a project oriented web developer.
          Everything she does is driven by empathy. She can stand in anyone’s shoes. Being able to look at a project from the point of view of a designer, a techy, you or better, your client, gives her a global perspective of a strategy.
          Katell worked in Marketing, building products, brands and packaging, for more than 5 years before pivoting to web development."
        portfolio="www.google.com" />
    </StyledTeamMembers>
  );
}

export default TeamPage;

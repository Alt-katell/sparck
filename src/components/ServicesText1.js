import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

const StyledServicesText = styled.div`
  margin: 550px auto 50px auto;
  width: 450px;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    width: 350px;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 270px;
    margin-top: 450px;
  }
`

const StyledSection = styled.div`
  margin-bottom: 45px;
`

const StyledTitle = styled.h3`
  font-family: ${props => props.theme.fonts.baskerville};
  font-weight: normal;
  margin-bottom: 14px;
`

const StyledParagraph = styled.p`
  margin: 0 0 0 15px;
`

const ServicesPhoto = () => {
  const {langKey: currentLang} = usePageContext();

  return (
    <StyledServicesText>
      <StyledSection>
        <StyledTitle>{t.weDream.title[currentLang]}</StyledTitle>
        <StyledParagraph>{t.weDream.contentFirst[currentLang]}</StyledParagraph>
        <StyledParagraph>{t.weDream.contentLast[currentLang]}</StyledParagraph>
      </StyledSection>

      <StyledSection>
        <StyledTitle>{t.weCode.title[currentLang]}</StyledTitle>
        <StyledParagraph>{t.weCode.contentFirst[currentLang]}</StyledParagraph>
        <StyledParagraph>{t.weCode.contentLast[currentLang]}</StyledParagraph>
      </StyledSection>

      <StyledSection>
        <StyledTitle>{t.weSparck.title[currentLang]}</StyledTitle>
        <StyledParagraph>{t.weSparck.contentFirst[currentLang]}</StyledParagraph>
        <StyledParagraph>{t.weSparck.contentLast[currentLang]}</StyledParagraph>
      </StyledSection>
    </StyledServicesText>
  );
}

export default ServicesPhoto;

const t = {
  weDream: {
    title: {
      en: "We dream.",
      fr: "Nous rêvons."
    },
    contentFirst: {
      en: "We love building websites that work. But what we love even more is building websites that best represent you and your brand. With our complementary team of Web and UI/UX designers, we work with you to promote who you are and what you stand for. For you, we imagine digital experiences with a strong sense of design and a specific attention for practicality and effectiveness.",
      fr: "Nous adorons créer des sites Web qui fonctionnent. Mais ce que nous aimons encore plus, c'est la création de sites Web qui vous ressemble, vous et votre marque. Avec notre équipe complémentaire de designers Web et UI / UX, nous travaillons avec vous pour promouvoir qui vous êtes et ce que vous représentez. Pour vous, nous imaginons des expériences digitales avec un sens aigu du design et une attention particulière pour la praticité et l'efficacité."
    },
    contentLast: {
      en: "Spärck is here to make you shine.",
      fr: "Spärck est là pour vous faire briller."
    }
  },
  weCode: {
    title: {
      en: "We code.",
      fr: "Nous codons."
    },
    contentFirst: {
      en: "We build products that cater to your needs. From design to online deployment. With a CMS or from scratch. We build the platform you need to operate your business easily or showcase your many talents.",
      fr: "Nous fabriquons des produits qui répondent à vos besoins. De la conception au déploiement en ligne. Avec un CMS ou de zéro. Nous construisons la plateforme dont vous avez besoin pour gérer facilement votre entreprise ou mettre en valeur vos nombreux talents."
    },
    contentLast: {
      en: "Spärck is here to make everything real.",
      fr: "Spärck est là pour faire de vos envies une réalité."
    }
  },
  weSparck: {
    title: {
      en: "We spärck.",
      fr: "Nous spärck(ons)."
    },
    contentFirst: {
      en: "From your specific ideas or a simple concept, we work with you to find the best solution that suits you. From prototyping to testing and deployment, we offer advice and knowledge to make your product come to life.",
      fr: "A partir de vos idées spécifiques ou d'un simple concept, nous travaillons avec vous pour trouver la solution qui vous convient le mieux. Du prototypage, au test et au déploiement, nous vous accompagnons pour donner vie à votre produit."
    },
    contentLast: {
      en: "Spärck is here to help you grow.",
      fr: "Spärck est là pour vous aider à grandir."
    }
  },
}

import React from 'react';

import SEO from "../components/seo";

import MessageSent from '../components/MessageSent';
import SocialIconsHorizontal from '../components/SocialIconsHorizontal';

const ThankYouPage = () => {
  return (
    <>
      <SEO title="Merci" />
      <MessageSent />
      <SocialIconsHorizontal />
    </>
  )
}

export default ThankYouPage;

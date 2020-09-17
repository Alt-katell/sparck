import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home" />
      <h1>En français</h1>

      <Link to="/">Aller à l'anglais</Link>
    </div>
  )
}

export default IndexPage;

import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home" />
      <h1>In English</h1>

      <Link to="/fr">Go to French</Link>
    </div>
  )
}

export default IndexPage;

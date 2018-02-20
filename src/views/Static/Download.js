import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

export default class Download extends Component {
  render() {
    return (
      <Page>
        <section>
          <h1>Download your portal to the hole</h1>
          <p>Get this app now.</p>
          <h2>No seriously</h2>
          <p>You should download it</p>
        </section>
        <Helmet>
          {/* Drop meta tags in here */}
          <title>Download the apps!</title>
          <meta name="description" content="<description of this page>" />
          <meta property="og:title" content="Download the apps!" />
          <meta property="og:url" content="https://screenhole.net/download" />
          <meta
            property="og:description"
            content="<description of this page>"
          />
          {/* Make the url for this image absolute */}
          <meta property="og:image" content="<url for the image>" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@screenhole" />
          <meta name="twitter:creator" content="@screenhole" />
        </Helmet>
      </Page>
    );
  }
}

const Page = styled.div`
  margin: 0 auto 50px auto;
  padding: 50px;
  @media (max-width: 790px) {
    padding: 0;
  }
  max-width: 1000px;
  section {
    color: #858090;
    line-height: 150%;
    & + section {
      margin-top: 100px;
    }
    h1 + h2 {
      margin-top: 3rem;
    }
    p + h2,
    p + h1 {
      margin-top: 5rem;
    }
    p {
      max-width: 640px;
      margin-top: 1.5rem;
    }
    code {
      display: inline-block;
      clear: both;
      background-color: rgba(255, 255, 255, 0.1);
      padding: 0.15em 0.25em;
    }
    a {
      color: $purple;
    }
  }
  img {
    display: block;
    max-width: 100%;
    border-radius: 5px;
  }
`;

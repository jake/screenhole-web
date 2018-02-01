import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Grab from '../../components/Grab/Grab';

class GrabSingle extends Component {
  constructor(props) {
    super(props);

    const grab_id = this.props.match.params.id;

    this.state = {
      currentGrab: grab_id.substr(1) // removes "~"
    };
  }
  componentWillMount() {
    fetch(`https://api.screenhole.net/grabs/${this.state.currentGrab}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          grab: res.grab
        });
      })
      .catch();
  }
  render() {
    return (
      <article>
        {this.state.grab ? (
          <span>
            <MetaTags
              username={this.state.grab.user.username}
              grab_id={this.state.grab.id}
              grab_image_url={`${
                this.state.grab.image_public_url
              };background(dominant)/1200x630,contain.jpeg`}
              memos_count={this.state.grab.memos.length}
              memos={this.state.grab.memos}
            />
            <Grab
              username={this.state.grab.user.username}
              image={this.state.grab.image_public_url}
              id={this.state.grab.id}
              memos={this.state.grab.memos}
              gravatar={this.state.grab.user.gravatar_hash}
              showMemos={true}
              key={this.state.grab.id}
            />
          </span>
        ) : (
          'Loading...'
        )}
      </article>
    );
  }
}

export default GrabSingle;

class MetaTags extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="fragment" content="!" />
        <title>{this.props.username}’s Grab on SCREENHOLE!</title>
        <meta
          name="description"
          content={`Check out this cool Grab from ${this.props.username}.`}
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta
          property="og:url"
          content={`https://screenhole.net/${this.props.username}/${
            this.props.grab_id
          }`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${this.props.username}’s Grab on SCREENHOLE!`}
        />
        <meta property="og:image" content={this.props.grab_image_url} />
        <meta
          property="og:description"
          content={`Check out this cool Grab from ${this.props.username}.`}
        />
        <meta property="og:site_name" content="Screenhole" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@screenhole" />
        <meta name="twitter:creator" content="@screenhole" />
        <meta
          name="twitter:url"
          content={`https://screenhole.net/${this.props.username}/${
            this.props.grab_id
          }`}
        />
        <meta
          name="twitter:title"
          content={`${this.props.username}’s Grab on SCREENHOLE!`}
        />
        <meta
          name="twitter:description"
          content={`Check out this cool Grab from ${this.props.username}.`}
        />
        {/* <meta name="twitter:image" content={this.props.grab_image_url} />
        <meta name="twitter:label1" value="Voice Memos" />
        <meta name="twitter:data1" value={this.props.memos_count} />
        <meta name="twitter:label2" value="Stickers" />
        <meta name="twitter:data2" value="Sticker count here [wip]" /> */}
        {this.props.memos.map((memo, i) => {
          return (
            <meta
              name={`twitter:label${i + 1}`}
              value={`${memo.user.username} says:`}
              key={memo.id}
            />
          );
        })}
        {this.props.memos.map((memo, i) => {
          return (
            <meta
              name={`twitter:data${i + 1}`}
              value={memo.message}
              key={memo.id}
            />
          );
        })}
      </Helmet>
    );
  }
}
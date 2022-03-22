import React from 'react';
import logo from '../logo.svg';

class Banner extends React.Component {
  render() {
    return (
      React.createElement('header', {className:'App-header'},
        React.createElement('img', {src: logo, className:'App-logo', alt:'logo'}, null),
        React.createElement('h1', {className:'App-title'}, 'ReactND - AJB - Coding Practice'),
      )
    )
  }
}

export default Banner;

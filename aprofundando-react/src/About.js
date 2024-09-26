import React, { Component } from 'react';
const url = 'https://media.tenor.com/587AABroBfwAAAAM/dance-skeleton.gif';

class About extends Component {
  render() {
    return (
      <div>
        <h1>Sobre nós</h1>
        <p>Este é o conteúdo da página About.</p>
        <img src={url} className='App-logo' />
        <img src={url} className='App-logo' />
        <img src={url} className='App-logo' />
        <img src={url} className='App-logo' />
        <img src={url} className='App-logo' />
        <img src={url} className='App-logo' />
       </div>
    );
  }
}

export default About;
import React, { Component } from 'react';
const url = "https://media.tenor.com/587AABroBfwAAAAM/dance-skeleton.gif";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Bem-vindo à Página Inicial!</h1>
        <p>Este é o conteúdo da página Home.</p>
        <img src={url} className='App-logo' />
      </div>
    );
  }
}

export default Home;
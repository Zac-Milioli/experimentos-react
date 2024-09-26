import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import About from './About.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { content: 'Home' }
  }

  handleMenuClick = (page) => {
    this.setState({ content: page })
  }

  renderContent() {
    const { content } = this.state;
    if (content == 'Home') {
      return <Home />
    } else if (content == 'About') {
      return <About />
    }
  }

  renderNavBar() {
    return (
      <div>
        <nav className='navbar'>
          <ul className='navList'>
            <li className='navItem' onClick={() => this.handleMenuClick('Home')}>Home</li>
            <li className='navItem' onClick={() => this.handleMenuClick('About')}>About</li>
          </ul>
        </nav>
      </div>
    )}

  render() {
    return (
      <div className='App'>
        {this.renderNavBar()}
        {this.renderContent()}

        <footer className='footer'>
          <ul className='navFooter'>
            <li><a className='navItem' href='https://www.youtube.com/watch?v=U9sgf27Zeb4'>Contato</a></li>
            <li><a className='navItem' href='https://www.youtube.com/watch?v=U9sgf27Zeb4'>Trabalhe conosco</a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
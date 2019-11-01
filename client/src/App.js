import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './App.css';


import Studio from './components/Studio'
import Soundboard from './components/Soundboard'

class Container extends React.Component {
  render() {
    return (
      <main className="main">
        <div className="container">
          <Studio />

        </div>
      </main>)
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <br />
        <div className="header-div">
          <h1 className="header-title">SoundBoard for enhancing experiences</h1>
          <h3 className="header-desc">Whether you want to prank your neighbours.<br />
            Or create funny sounds with your friends at the party.<br />
            Or maybe you want to enhance the experience of your story-telling.<br />
            Whichever the case, this SoundBoard will likely be all you need.<br />
          </h3>
        </div>
      </header>
    )
  }
}

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div className="App app">
        <Header />
        <Container />
        <Soundboard />

      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.querySelector('#root'));
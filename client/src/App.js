import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './App.css';
import Audiolib from './components/Audios'

// import Header from './components/Header'
// import Container from './components/Container'
// import Audios from './components/Audios';

const audios = [
  // { id: 'Hey Everyone', description: 'The classic badum-tss for punch-lines', src: Audiolib. },
  // { id: `I'm Modi`, description: 'The classic badum-tss for punch-lines', src: Audiolib.Badumtss },
  // { id: 'This is', description: 'The classic badum-tss for punch-lines', src: Audiolib.Badumtss },
  // { id: 'My project', description: 'The classic badum-tss for punch-lines', src: Audiolib.Badumtss },
  { id: 'Hey Buddy 1', description: 'Marcus saying hey buddy in a softer way', src: Audiolib.Heybuddy_soft },
  { id: 'Hey Buddy 2', description: 'Marcus saying hey buddy in a regular way', src: Audiolib.Heybuddy_reg },
  { id: 'Hey Buddy 3', description: 'Marcus is passionate: HEY BUDDY!', src: Audiolib.Heybuddy_strong },
  { id: 'Pack things!', description: 'Marcus asking firmly: Pack your things', src: Audiolib.PackThings },
  { id: 'Hey you! Pack things!', description: 'Hey buddy... pack your things', src: Audiolib.Pack_HeyYou },
  { id: 'Pack and GO!', description: 'Marcus asking firmly: Pack your things', src: Audiolib.Pack_GetOut },
  { id: 'Need Pack/GO!', description: 'Marcus asking firmly: Pack your things', src: Audiolib.NeedPackThings },
  { id: 'Badum tss', description: 'The classic badum-tss for punch-lines', src: Audiolib.Badumtss },
  { id: 'DEE JAY', description: 'Some cool dude, saying: DEE JAY', src: Audiolib.DJ },
  { id: 'Place 2 Be', description: 'IN THE PLACE TO BE!', src: Audiolib.inThePlace },
  { id: 'Radio 1', description: 'Radioo', src: Audiolib.Radio_1 },
  { id: 'Radio 2', description: 'Radioooooooz', src: Audiolib.Radio_2 },
  { id: 'Pew', description: 'Radioooooooz', src: Audiolib.Pew },


  
  
]


class Soundcard extends React.Component {
  componentDidMount() {
    window.focus()
  }

  clickPlay = () => {
    console.log('fired')
    let audioPlayer = this.audio.play()
    if (audioPlayer !== undefined) {
      audioPlayer.then(_ => {
        // Automatic playback started!
        // Show playing UI.
        console.log('inside, u know who')
      })
      .catch(error => {
        // Auto-play was prevented
        // Show paused UI.
        console.log('error?', error)
      });
    }
    this.audio.currentTime = 0
  }
  render() {
    return (
      <div className="soundcard">
        <div className="holder" onClick={ this.clickPlay}>
          <p className="btn-text" id={this.props.id}> {this.props.id}
          <audio className='soundclip' src={this.props.src}  ref={ref=>this.audio = ref}></audio></p>
          {/* ref={ref=>this.audio = ref} */}
        </div>
      </div>
    )
  }
}

class Soundboard extends React.Component {
  render() {
    return (
      <div className="soundboard">
       {audios.map(element => (
         <Soundcard id={element.id} key={element.id} description={element.description} src={element.src}  /> 
       ))}
      </div>
    )
  }
}

class Container extends React.Component {
  render() {
    return (<main className="main">
    <div className="container">
        <div className="studio">
        <h3 className="studio-h3">Record your own sounds and add them to the soundboard</h3>
            <button className="record">[re]Record</button>
            <button className="stop">Stop</button>
            <button className="play">Play</button>
            <button className="save">Save</button>
            <button className="add">add</button>
        </div>
    </div>
</main>

    )
  }
}

class Header extends React.Component {
  render() {
    return (
        <header>
            <div className="header-div">
            <h1>SoundBoard for enhancing experiences</h1>
            <h4>Whether you want to prank your neighbours.
                Or create funny sounds with your friends at the party.
                Or maybe you want to enhance the experience of your story-telling.
                Whichever the case, this SoundBoard will likely be all you need.
            </h4>
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
      <div className="App">
      <Header></Header>
      <Container/>
      <Soundboard/>
      
      </div>
    );
  }
}
//  gsdgsdfds

export default App;
ReactDOM.render(<App />, document.querySelector('#root'));
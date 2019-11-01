import React from 'react'

class Soundcard extends React.Component {
  componentDidMount() {
    window.focus()
  }

  clickPlay = () => {
    this.audio.play()
    this.audio.currentTime = 0
  }
  render() {
    return (
      <div className="soundcard">
        <div className="holder" onClick={this.clickPlay}>
          <p className="btn-text" id={this.props.id}> {this.props.id}
            <audio src={this.props.src} ref={ref => this.audio = ref}></audio>
          </p>
        </div>
        <p className="soundcard-desc">SCRIPT: <br></br>{this.props.description}</p>
      </div>
    )
  }
}

export default Soundcard;
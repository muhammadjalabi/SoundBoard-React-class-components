import { ReactMic } from 'react-mic';
import React from 'react';

class Studio extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            recording: false
        }
    }

    beginVoiceRec = () => {
        this.setState({ recording: true});
      }

    stopVoiceRec = () => {
        this.setState({ recording: false});
    }

    onData(recBlob) {
        console.log('chunk of real time data', recBlob);
    }
    onStop(recBlob) {
        console.log('chunk of real time data', recBlob);
    }
    render() {
        return(
            <div className="studio">
            <h2 className="studio-header">Studio</h2>
            <h3 className="studio-desc">
            Want to add your own voice to the soundboard?<br />
            Press Record — stop it at any time.<br />
            If you do, you'll have to [re]Record <br />
            Press play, after you've stopped recording to listen to it!<br />
            If you're happy, add it to the soundboard below!
            </h3>
            <ReactMic record={this.state.recording} className="sound-wave" onStop={this.onStop} onData={this.onData} strokeColor="#cdf7e8" backgroundColor="#68adab" />
            <br />
            <button onClick={this.beginVoiceRec} className="btn btn-record" type="button">[re]Record</button>
            <button onClick={this.stopVoiceRec} type="button" className="btn btn-stop">STOP</button>
            <button type="button" className="btn btn-play">PLAY</button>
            <button type="button" className="btn btn-add">ADD +</button>
            
            </div>
        )
    }
}

export default Studio;

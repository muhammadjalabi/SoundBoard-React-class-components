import React from 'react'

import Soundcard from './Soundcard'
import Audiolib from './Audios'

const audios = [

  //Marcus
  { id: 'Hey Buddy 1', description: 'Marcus saying hey buddy in a softer way', src: Audiolib.Heybuddy_soft },
  { id: 'Pack things!', description: 'Marcus asking firmly: Pack your things', src: Audiolib.PackThings },
  { id: 'Hey Buddy 2', description: 'Marcus saying hey buddy in a regular way', src: Audiolib.Heybuddy_reg },
  { id: 'Pack and GO now!', description: 'Marcus really thinks you should go', src: Audiolib.Pack_GetOut },
  { id: 'Hey you! Pack!', description: 'Hey buddy... pack your things', src: Audiolib.Pack_HeyYou },
  { id: 'Hey Buddy 3', description: 'Marcus is passionate: HEY BUDDY!', src: Audiolib.Heybuddy_strong },
  { id: 'Need to Pack/GO!', description: 'Marcus: You need to pack and go!', src: Audiolib.NeedPackThings },

  //Random funnies!
  { id: 'Badum tss', description: 'The classic badum-tss for punch-lines', src: Audiolib.Badumtss },
  { id: 'DEE JAY', description: 'Some radio dude, saying: DEE JAY', src: Audiolib.DJ },
  { id: 'Place 2 Be', description: 'Radio dude: IN THE PLACE TO BE!', src: Audiolib.inThePlace },
  { id: 'Radio 1', description: 'Radio dude: Radioo', src: Audiolib.Radio_1 },
  { id: 'Radio 2', description: 'Radio dude: Radioooooooz', src: Audiolib.Radio_2 },
  { id: 'Pew', description: 'Lazer, firing (pew sound, singular)', src: Audiolib.Pew },
  { id: 'My Man!', description: 'Erik: My man! ', src: Audiolib.Erik_MyMan },
  { id: 'Cool', description: 'Emil: Cool!', src: Audiolib.Emil_cool },

  //Greeting
  { id: 'Hello!', description: 'Introduction part 1', src: Audiolib.Hi_1 },
  { id: `I'm Modi`, description: 'Introduction part 2', src: Audiolib.Hi_2_ImModi },
  { id: 'This is', description: 'Introduction part 3', src: Audiolib.Hi_3_AndThisIs },
  { id: 'My Project', description: 'Introduction part 4', src: Audiolib.Hi_4_MyProject },
  { id: 'by Salt!', description: 'Brought to you by </salt>', src: Audiolib.Hi_5_BroughtToYou },

  // // MLK-Speech!
  { id: 'Speech 1', description: 'Royce delivering part 1 of the Speech', src: Audiolib.Royce_1 },
  { id: 'Speech 2', description: 'Mies delivering part 2 of the Speech', src: Audiolib.Mies_2 },
  { id: 'Speech 3', description: 'Leo delivering part 3 of the Speech', src: Audiolib.Leo_3 },
  { id: 'Speech 4', description: 'Milad delivering part 4 of the Speech', src: Audiolib.Milad_4 },
  { id: 'Speech 5', description: 'Denise delivering part 5 of the Speech', src: Audiolib.Denise_5 },
  { id: 'Speech 6', description: 'Zachary delivering part 6 of the Speech', src: Audiolib.Zachary_6 },
  { id: 'Speech 7', description: 'Otkur delivering part 7 of the Speech', src: Audiolib.Otkur_7 },
  { id: 'Speech 8', description: 'Shweta delivering part 8 of the Speech', src: Audiolib.Shweta_8 },
  { id: 'Speech 9', description: 'Fredrik delivering part 9 of the Speech', src: Audiolib.Fredrik_9 },
  { id: 'Speech 10', description: 'Victor delivering part 10 of the Speech', src: Audiolib.Victor_10 },
  { id: 'Speech 11', description: 'Ariadna delivering part 11 of the Speech', src: Audiolib.Ariadna_11 },
  { id: 'Speech 12', description: 'Carl delivering part 12 of the Speech', src: Audiolib.Carl_12 },
  { id: 'Speech 13', description: 'Sasha delivering part 13 of the Speech', src: Audiolib.Sasha_13 },
  { id: 'Speech 14', description: 'Obaid delivering part 14 of the Speech', src: Audiolib.Obaid_14 },
  { id: 'The Speech', description: 'The speech in its entirety', src: Audiolib.theSpeech },
]

class Soundboard extends React.Component {
  render() {
    return (
      <div className="soundboard">
        {audios.map(element => (
          <Soundcard id={element.id} key={element.id} description={element.description} src={element.src} />
        ))}
      </div>
    )
  }
}

export default Soundboard;

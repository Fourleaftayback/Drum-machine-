import React from 'react';

const Board = (props) => {
  return (
    <div className="pad-container">
      {
        props.sound.map((sound) => {
          return <div className={sound.text} key={sound.text}>
          <button className="drum-pad" onClick={props.click}>
            {sound.text}
            <audio className='clip' id={sound.text} src={sound.url} type="audio/mpeg">
            </audio>
          </button>
        </div>
        })
      }
    </div>
  )
}

export default Board;

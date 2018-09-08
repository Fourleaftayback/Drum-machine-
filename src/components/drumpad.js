import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import PropTypes from 'prop-types';
import Board from './board';

const urlToText = (str) => {
  const regEx = /(^https:\/\/s3.amazonaws.com\/freecodecamp\/drums\/|.mp3$)/g;
  return str.replace(regEx , '').replace(/[-_]/g," ");
}

class DrumPad extends Component {
  constructor(props){
    super(props);
    this.play = this.play.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  play(e) {
    if(this.props.boardOn) {
    let audio = new Audio(e.target.lastChild.src);
    let playedText = urlToText(e.target.lastChild.src);
    store.dispatch({type: 'MESSAGE', payload: playedText});
    audio.volume = this.props.vol/100;
    audio.play();
    }
  }

  keyPress(e) {
    const patt = /[QWEASDZXC]/;
    let key = e.key.toUpperCase();
    if(this.props.boardOn && patt.test(key)) {
      let arr = Array.prototype.slice.call(document.querySelectorAll('.drum-pad'));
      let node = arr.filter(val => val.innerText === key);
      let playedText = urlToText(node[0].lastChild.src);
      let audio = new Audio(node[0].lastChild.src);
      audio.volume = this.props.vol/100;
      store.dispatch({type: 'MESSAGE', payload: playedText});
      audio.play();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyPress);
  }

  render() {
    if (this.props.boardTypeB === false) {
    return (
        <Board sound={this.props.soundA} click={this.play}/>
    );
  }
    return (
       <Board sound={this.props.soundB} click={this.play}/>
    );
  }
}

DrumPad.propTypes = {
  soundA: PropTypes.array,
  soundB: PropTypes.array,
  boardTypeB: PropTypes.bool,
  boardOn: PropTypes.bool
};

const mapStateToProps = state => ({
  boardTypeB: state.board.boardTypeB,
  soundA: state.board.soundListA,
  soundB: state.board.soundListB,
  vol: state.board.volume,
  boardOn: state.board.boardOn
})


export default connect(mapStateToProps)(DrumPad);

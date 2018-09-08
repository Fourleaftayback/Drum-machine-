import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { boardOnAc, boardOffAc, boardTypeA, boardTypeB , setVolume } from '../actions/appActions';

class Controls extends Component {
  constructor(props){
    super(props);
    this.setVolume = this.setVolume.bind(this);
    this.onOff = this.onOff.bind(this);
    this.boardTypeChange = this.boardTypeChange.bind(this);
  }

  setVolume(e){
    this.props.setboardvol(e)
  }

  onOff(){
    if(this.props.boardOn === false) {
      this.props.turnBoardOn();
    } else {
      this.props.turnBoardOff();
    }
  }

  boardTypeChange() {
   if(this.props.boardType === false) {
     this.props.boardB();
   } else {
     this.props.boardA();
   }
  }


  render() {
    return (
      <div className="controls">

       <div className="power">
         <h3>Power</h3>
         <label className="switch">
          <input type="checkbox"
           checked={this.props.boardOn}
           onChange={this.onOff}/>
          <span className="slider round"></span>
         </label>
       </div>

       <div className="kit">
         <h3>More</h3>
         <label className="switch">
          <input type="checkbox"
           checked={this.props.boardType}
           onChange={this.boardTypeChange}
           />
          <span className="slider round"></span>
         </label>
       </div>

       <div className="display" id="display">
          <div>
          <p>{this.props.message}</p>
          </div>
       </div>

       <div className="container-bar">
         <p>Volume</p>
        <input className="slider-bar"
        id="my-slider"
        type="range"
        min="1" max="100"
        onChange={this.setVolume}
        />
       </div>

      </div>
    );
  }
}

Controls.propTypes = {
  boardOn: PropTypes.bool,
  boardType: PropTypes.bool,
  message: PropTypes.string,
  volume: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  turnBoardOn: PropTypes.func,
  turnBoardOff: PropTypes.func,
  boardA: PropTypes.func,
  boardB: PropTypes.func,
  setboardvol: PropTypes.func
};

const mapStateToProps = state => ({
  boardOn: state.board.boardOn,
  volume: state.board.volume,
  boardType: state.board.boardTypeB,
  message: state.board.currentMessage
})

const mapsDispatchToProps = {
  turnBoardOn: boardOnAc,
  turnBoardOff: boardOffAc,
  boardA: boardTypeA,
  boardB: boardTypeB,
  setboardvol: setVolume
}

export default connect(mapStateToProps , mapsDispatchToProps )(Controls);

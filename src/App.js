import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Controls from './components/controls';
import DrumPad from './components/drumpad';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <div className="App">
         <h1>Drum Machine</h1>
        <div className="main" id="drum-machine">
         <DrumPad/>
         <Controls/>
        </div>

       </div>
      </Provider>
    );
  }
}

export default App;

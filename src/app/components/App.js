import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../css/App.css';
import PropTypes from 'prop-types'


class App extends Component {

  render() {
    return (
      <div className='App'>
        <button type="button"
            onClick={() => this.props.togglePlay()}  >
              {this.props.playing ? 'Pause' : 'Play'}
        </button>
      </div>
    )
  }
}

App.propTypes = {
  playing: PropTypes.bool.isRequired,
  songName: PropTypes.string,
}

export default App;

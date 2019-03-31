import { connect } from 'react-redux';
import App from '../components/App';
import { playSong, togglePlay } from '../actions';

export const mapStateToProps = state => {
  return {
    songs: [],
    playing: state.playing
  }
}

export const mapDispatchToProps = dispatch => ({
  togglePlay: () => dispatch(togglePlay())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

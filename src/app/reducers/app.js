import { PLAY_SONG, TOGGLE_PLAY } from '../actions/index'

const initialState = {
    song: undefined,
    playing: false
}

function app (state = initialState, action) {
  switch (action.type) {
    case PLAY_SONG:
      return Object.assign({}, state, {
        song: action.songName
      });
    case TOGGLE_PLAY:
      return Object.assign({}, state, {
        playing: !state.playing
      });
    default:
      return state;
  }
};

export default app;

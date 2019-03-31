export const PLAY_SONG = 'PLAY_SONG';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';

export const playSong = song => {
  return {
    type: PLAY_SONG,
    song
  }
};

export const togglePlay = song => {
  return {
    type: TOGGLE_PLAY
  }
};

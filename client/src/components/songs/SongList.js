import Song from './Song';

const SongList = ({ songs, updateSong, deleteSong }) => (
  <>
    { songs.map( c => 
      <Song
        key={c.id}
        {...c}
        updateSong={updateSong}
        deleteSong={deleteSong}
      />
    )}
  </>
)

export default SongList;
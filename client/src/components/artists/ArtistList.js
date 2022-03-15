import Artist from './Artist';

const ArtistList = ({ artists, updateArtist, deleteArtist }) => (
  <>
    { artists.map( t => 
      <Artist 
        key={t.id}
        // id={t.id} title={t.title} body={t.body}
        {...t}
        fav={false}
        updateArtist={updateArtist}
        deleteArtist={deleteArtist}
      />
    )}
  </>
)

export default ArtistList;
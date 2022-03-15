import { useState } from 'react';
import ArtistForm from './ArtistForm';
import { Link } from 'react-router-dom';

const Artist = ({ id, title, body, fav, updateArtist, deleteArtist }) => {
  const [editing, setEdit] = useState(false)

  return(
    <>
      {
        editing ?
          <>
            <ArtistForm
              id={id}
              title={title}
              body={body}
              updateArtist={updateArtist}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>Cancel</button>
          </>
        :
        <>
          <h1>Title: {title}</h1>
          <p>{body}</p>
          <p>Favorite: {fav ? "☆ favorite" : "x not favorite"}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteArtist(id)}>Delete</button>
          <Link to={`/artists/${id}/songs`}>
            <button>
              go to Songs
            </button>
          </Link>
        </>
      }
    </>
  )
}
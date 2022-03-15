import { useState } from 'react';
import SongForm from './SongForm';

const Song = ({ id, author, body, updateSong, deleteSong }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
          <>  
            <SongForm 
              id={id}
              author={author}
              body={body}
              updateSong={updateSong}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>Cancel</button>
          </>
        : 
        <>
          <h1>Author: {author}</h1>
          <p>Message: {body}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteSong(id)}>Delete</button>
        </>
      }
      
    </>
  )
}

export default Song;
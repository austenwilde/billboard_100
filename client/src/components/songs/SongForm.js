import { useState, useEffect } from 'react';

const SongForm = ({ addSong, id, author, body, updateSong, setEdit }) => {
  const [song, setSong] = useState({ author: '', body: '' })

  useEffect( () => {
    if (id) {
      setSong({ author, body })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateSong(id, song)
      setEdit(false)
    } else {
      addSong(song)
    }
    setSong({ author: '', body: '' })
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label>Author:</label>
        <input 
          name='author'
          value={song.author}
          onChange={(e) => setSong({...song, author: e.target.value })}
        />
        <label>Message:</label>
        <textarea
          name='body'
          value={song.body}
          onChange={(e) => setSong({...song, body: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default SongForm;
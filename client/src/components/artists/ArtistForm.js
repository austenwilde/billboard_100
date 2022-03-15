import { useState, useEffect} from 'react';

const ArtistForm = ({ addArtist }) => {
  const [artist, setArtist] = useState({ title: '', body: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addArtist(artist)
    setArtist({ title: '', body: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          name="title" 
          value={artist.title}
          onChange={(e) => setArtist({ ...artist, title: e.target.value })}
          required
          placeholder='title'
        />
        <label>Body:</label>
        <textarea
          name="body"
          value={artist.body}
          onChange={(e) => setArtist({ ...artist, body: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ArtistForm;
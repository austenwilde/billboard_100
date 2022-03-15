import { useState, useEffect } from 'react';
import axios from 'axios';
import ArtistForm from './ArtistForm';
import ArtistList from './ArtistList';
import { useLocation, useParams } from 'react-router-dom';

const Artists = ({}) => {
  const [artists, setArtists] = useState([])
  const location = useLocation();
  const { billboardId, billboardTitle } = location.state 


  useEffect( () => {
    axios.get(`/api/billboards/${billboardId}/artists`)
      .then( res => setArtists(res.data) )
      .catch( err => console.log(err))
  }, [])

  const addArtist = (artist) => {
    axios.post(`/api/billboards/${billboardId}/artists`, { artist })
    .then( res => setArtists([...artists, res.data]) )
    .catch( err => console.log(err))
  }

  const updateArtist = (id, artist) => {
    axios.put(`/api/billboards/${billboardId}/artists/${id}`, { artist })
      .then( res => {
        const newUpdatedArtists = artists.map( t => {
          if (t.id === id) {
            return res.data 
          }
          return t
        })
        setArtists(newUpdatedArtists)
      })
      .catch( err => console.log(err))
  }

  const deleteArtist = (id) => {
    axios.delete(`/api/billboards/${billboardId}/artists/${id}`)
      .then( res => {
        setArtists( artists.filter( t => t.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }


  return (
    <>
      <h3>Artists</h3>
      <ArtistForm addArtist={addArtist} />
      <ArtistList 
        artists={artists}
        />
    </>
  )
}

export default Artists;
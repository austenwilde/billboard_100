import { useState, useEffect } from 'react';
import axios from 'axios';
import BillboardForm from './components/billboards/BillboardForm';

const App = () => {
  const [billboards, setBillboards] = useState([])

  useEffect( () => {
    
    axios.get('/api/billboards')
      .then( res => {
       
        setBillboards(res.data)
      })
      .catch( err => console.log(err) )
  }, [])

  const addBillboard = (billboard) => {
   
    axios.post('/api/billboards', { billboard })
      .then( res => {
       
        setBillboards([...billboards, res.data ])
      })
      .catch( err => console.log(err) )
  }

  const updateBillboard = (id, billboard) => {
    
  }

  const deleteBillboard = (id) => {
    
  }

  return(
    <>
      <h1>Billboard Top 100</h1>
      <BillboardForm addBillboard={addBillboard} />
    </>
  )
}

export default App;


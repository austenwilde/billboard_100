import { useState, useEffect } from 'react';
import axios from 'axios';
import BillboardForm from './BillboardForm';
import BillboardList from './BillboardList';

const Billboards = () => {
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
    
    axios.put(`/api/billboards/${id}`, { billboard })
    
      .then( res => {
        const newUpdatedBillboards = billboards.map( s => {
          if (s.id === id) {
            return res.data
          }
          return s
        })
        setBillboards(newUpdatedBillboards)
      })
      .catch( err => console.log(err) )
  }

  const deleteBillboard = (id) => {
    
    axios.delete(`/api/billboards/${id}`)
      .then(res => {
        
        setBillboards(billboards.filter( s => s.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err) )
  }

  return(
    <>
      <h1>Billboard</h1>
      <BillboardForm addBillboard={addBillboard} />
      <BillboardList 
        billboards={billboards}
        updateBillboard={updateBillboard}
        deleteBillboard={deleteBillboard}
      />
    </>
  )
}

export default Billboards;
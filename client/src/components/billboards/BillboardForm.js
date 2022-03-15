import { useState, useEffect } from 'react';

const BillboardForm = ({ addBillboard, id, title, updateBillboard, setEdit }) => {
  const [billboard, setBillboard] = useState({ title: '' })

  
  useEffect( () => {
    if (id) {
      
      setBillboard({ title })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
     
      updateBillboard(id, billboard)
      setEdit(false)
    } else {
     
      addBillboard(billboard)
    }
   
    setBillboard({ title: '' })
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name='title' 
          value={billboard.title} 
          onChange={ (e) => setBillboard({ ...billboard, title: e.target.value })} 

          placeholder='Title'
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default BillboardForm;
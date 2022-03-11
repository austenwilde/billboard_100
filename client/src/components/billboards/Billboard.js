import { useState } from 'react';
import BillboardForm from './BillboardForm';
import Artists from '../artists/Artists';
import { Link } from 'react-router-dom';

const Billboard = ({ id, title, updateBillboard, deleteBillboard }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h1>{title}</h1>
      {
        editing ?
        <>
          <BillboardForm 
            id={id}
            title={title}
            updateBillboard={updateBillboard}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          <button 
            onClick={() => setEdit(true)}
            style={styles.btn}
          >
            Edit
          </button>
          <button 
            onClick={() => deleteBillboard(id)}
            style={styles.deleteBtn}
          >
            Delete
          </button>
          
          <Link 
            to={`/billboards/${id}/artists`}
            state={{ billboardId: id, billboardTitle: title }}
          >
            Artists
          </Link>
        </>
      }
    </>
  )
}


export default Sub;
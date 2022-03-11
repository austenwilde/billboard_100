import Billboard from './Billboard';

const BillboardList = ({ subs, updateBillboard, deleteBillboard }) => (
  <>
    { billboards.map( s => 
      <Billboard
        key={s.id} 
        {...s} 
        updateBillboard={updateBillboard} 
        deleteBillboard={deleteBillboard}
      />
    )}
  </>
)

export default BillboardList;
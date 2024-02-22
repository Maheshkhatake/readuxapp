import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import purchase_book from './BookAction';

function BookContainer() {
   const noOfBooks= useSelector(state=> state.NumberOfBooks)
   const dispatch=useDispatch();
  return (
    <div>
      <h>no of Books:{noOfBooks}</h>
      <button onClick={()=>(dispatch(purchase_book()))}>Buy Book</button>
    </div>
  )
}

export default BookContainer;

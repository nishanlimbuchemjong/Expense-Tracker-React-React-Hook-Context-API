import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = (props) => {
  const {DeleteTransaction} = useContext(GlobalContext);

  const sign = props.transaction.amount <0?'-':'+'; 
  return (
    <li className={props.transaction.amount < 0 ? 'minus': 'plus'}>
        {props.transaction.text} <span>{sign} ${Math.abs(props.transaction.amount)}</span>
        <button onClick={()=> DeleteTransaction(props.transaction.id)}className='delete-btn'>X</button>
    </li>
  )
}

export default Transaction

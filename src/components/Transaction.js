import React from 'react'

const Transaction = (props) => {
    const sign = props.transaction.amount <0?'-':'+';
  return (
    <li className='minus'>
        {props.transaction.text} <span>{sign} ${Math.abs(props.transaction.amount)}</span>
        <button className='delete-btn'>X</button>
    </li>
  )
}

export default Transaction

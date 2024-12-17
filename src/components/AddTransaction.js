import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const {AddTransaction} = useContext(GlobalContext);
    const onSubmit = e=> {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        AddTransaction(newTransaction);
    }
  return (
    <>
        <h3>Add new Transaction</h3>
        <form onSubmit={onSubmit}>
  <div className="mb-3">
    <label htmlFor="text" className="form-label">Text</label>
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="form-control"
      placeholder="Enter text .."
    />
  </div>
  <div className="mb-3">
    <label htmlFor="amount" className="form-label">
      Amount <br />
      (negative - expense, positive - income)
    </label>
    <input
      type="number"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      className="form-control"
      placeholder="Enter amount .."
    />
  </div>
  <button className="btn btn-primary w-100">Add transaction</button>
</form>
 
    </>
  )
}

export default AddTransaction

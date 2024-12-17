import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { DeleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        transaction.amount < 0 ? 'minus': 'plus'}`}
    >
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => DeleteTransaction(transaction.id)}
      >
        ×
      </button>
    </li>
  );
};

export default Transaction;

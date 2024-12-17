import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="card shadow">
      <div className="card-body">
        <h3 className="card-title text-center mb-4">History</h3>
        <ul className="list-group">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionList;

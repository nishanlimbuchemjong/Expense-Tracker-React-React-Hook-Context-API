import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const sign = total > 0 ? "+" : total < 0 ? "-" : ""; // Determine the sign
  const balanceClass = total > 0 ? "text-success" : total < 0 ? "text-danger" : ""; // Assign color class

  return (
    <>
      <h4 className="text-muted">Your Balance</h4>
      <h1 className={`display-4 ${balanceClass}`}>
        {sign}RS. {Math.abs(total)}/-
      </h1>
    </>
  );
};

export default Balance;

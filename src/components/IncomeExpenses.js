import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="row text-center mb-4">
      <div className="col-md-6">
        <div className="card shadow-sm">
          <div className="card-body">
            <h4>Income</h4>
            <p className="text-success display-6">+ RS. {income}/-</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card shadow-sm">
          <div className="card-body">
            <h4>Expense</h4>
            <p className="text-danger display-6">- RS. {expense}/-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;

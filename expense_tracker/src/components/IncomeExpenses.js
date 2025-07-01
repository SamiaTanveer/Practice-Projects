import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Details() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions?.map((item) => item.amount);
  const income = amounts
    ?.filter((inc) => inc > 0)
    .reduce((tot, next) => (tot += next), 0)
    .toFixed(2);
  const expense = amounts
    ?.filter((inc) => inc < 0)
    .reduce((tot, next) => (tot += next), 0)
    .toFixed(2);
  return (
    <div className="income-container">
      <div className="income">
        <p>income</p>
        <h5>${income}</h5>
      </div>
      <div className="expense">
        <p>Expense</p>
        <h5>${expense}</h5>
      </div>
    </div>
  );
}
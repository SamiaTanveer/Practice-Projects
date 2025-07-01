import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionList() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="history">
      <h4>History</h4>
      <div className="details">
        {transactions.map((transaction) => {
          return (
            <div className="li">
              <span
                className="del-btn"
                onClick={() => deleteTransaction(transaction?.id)}
              >
                x
              </span>
              <div
                className={`single-details ${
                  transaction?.amount > 0 ? "plus" : "minus"
                }`}
                key={transaction?.id}
              >
                <div className="item-name">
                  <p>{transaction?.text}</p>
                </div>
                <p>
                  {transaction?.amount < 0 ? "-" : "+"}$
                  {Math.abs(transaction?.amount)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
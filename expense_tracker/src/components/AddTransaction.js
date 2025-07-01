import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction() {
    const [text, setText] = useState(null)
    const [amount, setAmount] = useState(null)
    const {addTransaction} = useContext(GlobalContext)

    const submitTransaction = (e)=> {
        e.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random()*100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
    }
  return (
    <div className="transaction">
      <h4>Add new transaction</h4>
      <form onSubmit={submitTransaction}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            id="text"
            required
            onChange={(e)=> setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            required
            onChange={(e)=> setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div className="transaction-btn">
          <button type="submit">Add Transaction</button>
        </div>
      </form>
    </div>
  );
}
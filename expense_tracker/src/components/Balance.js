import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


export default function Balance() {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions?.map(item => item.amount)
    const total = amounts?.reduce((tot, next)=> (tot += next),0).toFixed(2)
  return (
    <div className="balance">
      <p>Your balance</p>
      <h3>${total}</h3>
    </div>
  );
}

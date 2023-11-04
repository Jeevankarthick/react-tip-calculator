import "../styles.css";
import Bill from "./Bill";
import Tip from "./Tip";
import Payment from "./Payment";
import ResetButton from "./ResetButton";
import { useState } from "react";

export default function App() {
  const [billAmount, setBillAmount] = useState(null);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const tipAmount = billAmount * ((tip1 + tip2) / 2 / 100);

  function handleReset() {
    setBillAmount(0);
    setTip1(0);
    setTip2(0);
  }

  return (
    <div className="container">
      <h1 className="heading">Tip Calculator</h1>
      <Bill billAmount={billAmount} onSetBillAmount={setBillAmount} />
      <Tip tipAmount={tip1} onSetTip={setTip1}>
        How did you like the service?
      </Tip>
      <Tip tipAmount={tip2} onSetTip={setTip2}>
        How did your friend like the service?
      </Tip>
      {billAmount > 0 && (
        <>
          <Payment billAmount={billAmount} tipAmount={tipAmount} />
          <ResetButton onReset={handleReset} />
        </>
      )}
    </div>
  );
}

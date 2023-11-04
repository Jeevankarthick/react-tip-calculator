export default function Bill({ billAmount, onSetBillAmount }) {
  function handleChange(event) {
    onSetBillAmount(Number(event.target.value));
  }

  return (
    <div className="input-filed">
      <span className="label-text">How much was the bill? </span>
      <input
        type="text"
        placeholder="$ bill amount"
        value={billAmount}
        onChange={handleChange}
      />
    </div>
  );
}

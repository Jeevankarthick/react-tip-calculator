import React from "react";

export default function Tip({ tipAmount, onSetTip, children }) {
  function handleChange(event) {
    onSetTip(Number(event.target.value));
  }

  return (
    <div className="input-filed">
      <span className="label-text">{children}</span>
      <select value={tipAmount} onChange={handleChange}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

export default function Payment({ billAmount, tipAmount }) {
  return (
    <p className="result">
      You pay ${billAmount + tipAmount} (${billAmount} + ${tipAmount} tip)
    </p>
  );
}

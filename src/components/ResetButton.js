export default function ResetButton({ onReset }) {
  return (
    <div className="reset">
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

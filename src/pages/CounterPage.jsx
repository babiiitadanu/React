import UseStateCounter from "../components/UseStateCounter";
import UseReducerCounter from "../components/UseReducerCounter";

function CounterPage() {
  return (
    <div>
      <h2>Counters</h2>

      <UseStateCounter />

      <UseReducerCounter />
    </div>
  );
}

export default CounterPage;
export default function FunctionDestructing() {
  const add = (a: number, b: number) => a + b;
  const sum = add(1, 2);
  const subtract = ({a, b}: {a: number; b: number }) => a - b;
  const difference = subtract({a: 4, b: 2});
  return (
    <div id="wd-function-destructing">
      <h2>Function Destructing</h2>
      <code>const add = (a, b) =&gt; a + b;</code><br />
      <code>const sum = add(1, 2);</code><br />
      <code>const subtract = (obj) =&gt; obj.a - obj.b;</code><br />
      <code>const difference = subtract({`{a: 4, b: 2}`});</code><br/>
      sum = {sum}<br />
      difference = {difference} <hr />
    </div>
  );
}

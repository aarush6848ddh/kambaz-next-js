export default function Destructing() {
  const person = { name: "John", age: 25 }; // An object
  const { name, age } = person; // Object destructuring
  // const name = person.name // Commented out equivalent
  // const age = person.age // Commented out equivalent

  const numbers = ["one", "two", "three"]; // An array
  const [first, second, third] = numbers; // Array destructuring

  return (
    <div id="wd-destructing">
      <h2>Destructing</h2>
      <h3>Object Destructing</h3>
      <code>const {`{ name, age }`} = {`{ name: "John", age: 25 }`}</code><br /><br />
      name = {name}<br />
      age = {age}
      <h3>Array Destructing</h3>
      <code>const [first, second, third] = ["one", "two", "three"]</code><br/><br/>
      first = {first}<br />
      second = {second}<br />
      third = {third}<hr />
    </div>
  );
}

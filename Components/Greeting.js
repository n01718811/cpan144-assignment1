export default function Greeting({ name }) {
    //Conditional rendering
  return <p>{name ? `Hello, ${name}!` : 'Please type your name.'}</p>;
}

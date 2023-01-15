const Greetings = (props) => {
  if (props.lang === 'de') {
    return <p>Hallo {props.children}</p>;
  } else if (props.lang === 'fr') {
    return <p>Bonjour {props.children}</p>;
  }
};

export default Greetings;

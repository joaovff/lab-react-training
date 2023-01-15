const IdCard = (props) => {
  return (
    <div>
      <img src={props.picture} />
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth}</p>
    </div>
  );
};

export default IdCard;

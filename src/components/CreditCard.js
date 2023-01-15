const CreditCard = (props) => {
  return (
    <div
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
    >
      <p>{props.type}</p>
      <p>**** **** **** {props.number.substring(12)}</p>
      <p>{props.expirationMonth}</p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;

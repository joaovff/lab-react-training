import Rating from "./Rating";

const DriverCard = (props) => {
    
    return (
      <div>
        <p>{props.name}</p>
        <Rating>{props.rating}</Rating>
        <img src={props.img} style={{width: "150px"}} />
        <p>{props.car.model}</p>
        <p>{props.car.licensePlate}</p>
      </div>
    );
  };
  
  export default DriverCard;
const BoxColor = (props) => {
  return (
    <div style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}>
      <p>Changing de color</p>
    </div>
  );
};

export default BoxColor;

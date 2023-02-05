import { useState } from 'react';
function Dice(props) {
  const [random, setRandom] = useState(props.empty);
  function insertRandom() {
    if (random === props.empty) {
      const imageRandom =
        props.images[Math.floor(Math.random() * props.images.length)];
      return setRandom(imageRandom);
    } else {
      return setRandom(props.empty);
    }
  }
  return (
    <div>
      <img onClick={insertRandom} src={random} height="100px" />
    </div>
  );
}

export default Dice;

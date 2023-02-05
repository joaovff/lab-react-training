import { useState } from 'react';

function ClickablePicture() {
  const [img, setImg] = useState('/maxence.png');
  function changePicture() {
    if (img === '/maxence.png') {
      setImg('/maxence-glasses.png');
    } else {
      setImg('/maxence.png');
    }
  }
  return (
    <div>
      <img onClick={changePicture} src={img} height="250px" />
    </div>
  );
}

export default ClickablePicture;

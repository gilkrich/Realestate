import React, { useEffect, useState } from 'react';

const HeartButton = ({ heart, item, place, fakevalue ,value}) => {
  const [isLiked, setIsLiked] = useState(item.fav?true:false);
   
  const handleButtonClick = () => {
    setIsLiked(!isLiked)
    heart(item)
  };

  return (
    <button onClick={handleButtonClick} className='heartbtn'>
      {isLiked ? '❤️' : '🤍'}
    </button>
  );
};

export default HeartButton;
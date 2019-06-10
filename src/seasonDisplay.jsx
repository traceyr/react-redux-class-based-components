import './seasonDisplay.css'
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach',
    iconName: 'massive red sun outline icon'
  },
  winter: {
    text: 'Brr, it is chilly',
    iconName: 'massive blue snowflake outline icon'
  }
}

function seasonDeterminator(lat, month) {
  console.log(lat);
  console.log(month);
  if(month > 2 && month < 9){
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = seasonDeterminator(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName}`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconName}`} />
    </div>
  );
};

export default SeasonDisplay;

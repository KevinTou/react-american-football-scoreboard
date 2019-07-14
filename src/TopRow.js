import React from "react";

const TopRow = props => {
  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">{props.home}</h2>

        {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

        <div className="home__score">{props.homeScore}</div>
      </div>
      <div className="timer">00:03</div>
      <div className="away">
        <h2 className="away__name">{props.away}</h2>
        <div className="away__score">{props.awayScore}</div>
      </div>
    </div>
  );
};

export default TopRow;

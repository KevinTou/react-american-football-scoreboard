import React from "react";

const HomeButtons = props => {
  return (
    <div className="homeButtons">
      {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
      <button
        className="homeButtons__touchdown"
        onClick={() => props.setHomeScore(props.homeScore + 7)}
      >
        Home Touchdown
      </button>
      <button
        className="homeButtons__fieldGoal"
        onClick={() => props.setHomeScore(props.homeScore + 3)}
      >
        Home Field Goal
      </button>
    </div>
  );
};

export default HomeButtons;

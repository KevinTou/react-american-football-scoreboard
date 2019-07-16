import React, { useState, useEffect } from "react";

const TopRow = props => {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState("00");

  let timer = 900;

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setMinutes(
        Math.floor(timer / 60) < 10
          ? String(Math.floor(timer / 60)).padStart(2, 0)
          : Math.floor(timer / 60)
      );
      setSeconds(
        Math.floor(timer % 60) < 10
          ? String(Math.floor(timer % 60)).padStart(2, 0)
          : Math.floor(timer % 60)
      );
      timer--;
      if (timer < 0) {
        clearInterval(interval);
      }
    }, 1000);
  }, [timer]);

  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">{props.home}</h2>

        {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

        <div className="home__score">{props.homeScore}</div>
      </div>
      <div className="timer">
        {minutes}:{seconds}
      </div>
      <div className="away">
        <h2 className="away__name">{props.away}</h2>
        <div className="away__score">{props.awayScore}</div>
      </div>
    </div>
  );
};

export default TopRow;

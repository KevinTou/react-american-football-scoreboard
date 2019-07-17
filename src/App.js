//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import Scoreboard from "./Scoreboard";
import TopButtons from "./TopButtons";
import BottomButtons from "./BottomButtons";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(1);

  return (
    <div className="container">
      <Scoreboard
        home="Lions"
        away="Tigers"
        homeScore={homeScore}
        awayScore={awayScore}
        quarter={quarter}
        down={down}
      />
      <TopButtons
        homeScore={homeScore}
        awayScore={awayScore}
        setHomeScore={setHomeScore}
        setAwayScore={setAwayScore}
      />
      <BottomButtons
        quarter={quarter}
        setQuarter={setQuarter}
        down={down}
        setDown={setDown}
      />
    </div>
  );
}

export default App;

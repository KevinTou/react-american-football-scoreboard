import React from "react";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";

const Scoreboard = props => {
  return (
    <section className="scoreboard">
      <TopRow
        home={props.home}
        away={props.away}
        homeScore={props.homeScore}
        awayScore={props.awayScore}
      />
      <BottomRow quarter={props.quarter} down={props.down} />
    </section>
  );
};

export default Scoreboard;

import React from "react";
import HomeButtons from "./HomeButtons";
import AwayButtons from "./AwayButtons";

const TopButtons = props => {
  return (
    <section className="buttons">
      <HomeButtons
        homeScore={props.homeScore}
        setHomeScore={props.setHomeScore}
      />
      <AwayButtons
        awayScore={props.awayScore}
        setAwayScore={props.setAwayScore}
      />
    </section>
  );
};

export default TopButtons;

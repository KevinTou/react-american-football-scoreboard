import React from "react";

const BottomButtons = props => {
  return (
    <section className="buttons">
      <button
        onClick={() => {
          if (props.down < 4) {
            props.setDown(props.down + 1);
          }
        }}
      >
        Down
      </button>
      <button
        onClick={() => {
          if (props.quarter < 4) {
            props.setQuarter(props.quarter + 1);
          }
        }}
      >
        Quarter
      </button>
    </section>
  );
};

export default BottomButtons;

import React from "react";
import './TierChanger.scss'

const TierChanger = props => {
  return (
    <select value="A" className="tier-changer">
      <option value="move" disabled>
        Move to new tier...
      </option>
      <option value="staging">N/A</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="E">E</option>
      <option value="F">F</option>
    </select>
  );
};

export default TierChanger;

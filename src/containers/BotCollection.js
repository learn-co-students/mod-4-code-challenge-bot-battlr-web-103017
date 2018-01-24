import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = props => {
const bots = props.bots.map((bot, i) => <BotCard key={i} bot={bot} handleMyArmy = {props.handleMyArmy}/>)
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots}
        Collection of all bots
      </div>
    </div>
  );
};

export default BotCollection;

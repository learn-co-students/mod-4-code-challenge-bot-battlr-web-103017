import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = props => {
  //your code here
  console.log('bot collection', props);

  let bots = props.bots.map((b, i)=> {
      return (
        <BotCard
          handleClickBot={props.handleClickBot}
          handleAddBot={props.handleAddBot}
          key={i}
          bot={b} />
      )
  })

  // console.log('mapped bots', bots);

  return (
    <div className="ui four column grid">
      <div className="row">
        { bots }
        Collection of all bots
      </div>
    </div>
  );
};

export default BotCollection;
